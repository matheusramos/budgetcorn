/* @flow */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const rootElement = document.getElementById('root');
/* eslint-disable react/jsx-filename-extension */
if (rootElement) {
  ReactDOM.render(<App />, rootElement);
}
/* eslint-enable react/jsx-filename-extension */
