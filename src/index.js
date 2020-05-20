import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import detail from './detail.js';

import { BrowserRouter, Switch, Route } from 'react-router-dom';



// import registerServiceWorker from './registerServiceWorker';

const RootApp = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/detail/:id" component={detail} />
    </Switch>
  </BrowserRouter>
);

ReactDOM.render(<RootApp />, document.getElementById('root'));
// registerServiceWorker();
