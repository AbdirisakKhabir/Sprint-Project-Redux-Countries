import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import {countriesReducer} from './reducers/countriesReducer';

const store = createStore(countriesReducer, applyMiddleware(thunk));

// Add "Provider" and pass the above store
ReactDOM.render(
  <Provider store={store}>
    <App />
    </Provider>,
  document.getElementById('root')
);
