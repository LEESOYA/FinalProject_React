import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import GoodsOffer from './GoodsOffer';
import Exhibit from './Exhibit';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    <GoodsOffer/>
    <Exhibit/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
