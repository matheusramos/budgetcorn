/* @flow */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import './index.css';
import App from './App';

import store from './ducks/store';

const rootElement = document.getElementById('root');
/* eslint-disable react/jsx-filename-extension */
if (rootElement) {
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    rootElement,
  );
}
/* eslint-enable react/jsx-filename-extension */
