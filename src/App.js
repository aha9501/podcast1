import React, { Component } from 'react';
import axios from 'axios';

import Podcast from './components/Podcast.js';
import Header from './components/Header.js';

import styles from './styles.js';
import './App.css';


const isSearched = searchTerm => ({ title }) =>
  title.toLowerCase().includes(searchTerm.toLowerCase());

class App extends Component {
  constructor() {
    super();
    this.state = {
      searchTerm: '',
      podcasts: [],
    };
  }

   getData = async () => {
     const res = await axios.get (
      'https://json-server-heroku-svoqwyfacm.now.sh/podcasts',
     );
     this.setState({
        podcasts: res.data,
     });
   };

 componentDidMount() {
    this.getData();
  }
  componentDidCatch() {
    console.error('Error nih!');
  }

  handleSearchButton() {
    console.log('Searching...');
  }

  handleSearchInput = event => {
    this.setState({
      searchTerm: event.target.value,
    });
  };

render() {
      return (
      <div className="App">
        <ul className="list">
          <Header />
        <div className='list-item'>
            <div className={styles.box}>
                <form className={styles.form}>
                  <input
                    className={styles.input}
                    type="text"
                    placeholder="Search for podcast"  onChange={this.handleSearchInput}
                  />
                  <button
                    className={styles.searchButton}
                    onClick={this.handleSearchButton}
                    type="button"
                  >
                    Search
                  </button>
                </form>
              </div>
          </div>  
        </ul>
        
        <ul className ="list">
            {this.state.podcasts.length > 0 ? (
              this.state.podcasts
                .filter(isSearched(this.state.searchTerm))
                .map(podcast => <Podcast key={podcast.id} podcast={podcast} />)
            ) : (
                <h3>
                  <span role="img" aria-label="emoji">
                    🚶‍♂️🚶‍♂️🚶‍♂️{' '}
                  </span>
                  Loading...
                </h3>

            )}
          </ul>

      </div>
      );
  }
}

export default App;
