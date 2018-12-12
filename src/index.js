/* @flow */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { library as fontawesomeLibrary } from '@fortawesome/fontawesome-svg-core';
import {
  faShoppingBag,
  faHome,
  faShoppingBasket,
  faShuttleVan,
  faAmbulance,
  faGlassCheers,
  faPlane,
  faMoneyBillAlt,
  faGraduationCap,
  faQuestion,
} from '@fortawesome/free-solid-svg-icons';

import './index.sass';
import App from './App';

import store from './ducks/store';

// setup font-awesome
fontawesomeLibrary.add(
  faShoppingBag,
  faHome,
  faShoppingBasket,
  faShuttleVan,
  faAmbulance,
  faGlassCheers,
  faPlane,
  faMoneyBillAlt,
  faGraduationCap,
  faQuestion,
);

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
