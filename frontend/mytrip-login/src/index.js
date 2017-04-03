import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import './index.css';

import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux'; 

import promise from 'redux-promise';
import thunk from 'redux-thunk';

import reducers from './reducers';

//create middleware
const createStoreWithMiddleware = applyMiddleware(thunk, promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <App />
  </Provider>,
  document.getElementById('root')
);
