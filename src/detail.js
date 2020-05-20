
import React, { Component } from 'react';
import Axios from 'axios'
import Header from './components/Header.js';
import { Link } from 'react-router-dom';
import './App.css';

class Detail extends Component {
    constructor() {
        super();
        this.state = {
          podcasts: [],
        };
      }

    /*componentDidMount(){
        let id = this.props.match.params.id;
        Axios.get(`https://json-server-heroku-svoqwyfacm.now.sh/podcasts/${id}`).then(res => {
            console.log('result: ', res);
            this.setState({
               podcasts: res.data,
             });
        })
    }*/

    
   getData = async () => {
    let id = this.props.match.params.id;
    const res = await Axios.get (
        `https://json-server-heroku-svoqwyfacm.now.sh/podcasts/${id}`,
    );
    this.setState({
       podcasts: res.data,
    });
  };

  componentDidMount() {
    this.getData();
    }


    render() {
    return (
    <div className="App">
        <ul className="list">
            <Header />
        </ul>
        <ul className ="list">
            <div className="list-item">
        
                <div className="list-item-image-detail">
                    <img alt={this.state.podcasts.title} src={this.state.podcasts.thumbnail} />
                </div>
                <span className="list-item-detail" >
                    {this.state.podcasts.title}
                    <span className="list-item-power">{this.state.podcasts.url}</span>
                    <span className="list-item-power">
                         <h2>Episode </h2>
                         <span className="list-item-power">
                    
                        </span>
                    </span>

                    <Link to={{ pathname: `/`}}> <span className="list-lihat"> Kembali</span></Link>
                </span>
            </div>
        </ul>
    </div>

    );
}   
};
export default Detail;



