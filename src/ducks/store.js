/* @flow */
import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import type { Dispatch } from 'redux';

import item from './item';
import type { ItemState } from './item/reducers';
import type { ItemAction } from './item/actions';

export type StoreState = {
  item: ItemState,
};

const reducers = {
  item,
};

// intersect all available actions here
export type StoreAction = ItemAction;

// disable eslint to use redux dev tools
// eslint-disable-next-line no-underscore-dangle
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const combinedReducers = combineReducers(reducers);
const enhancer = composeEnhancers(applyMiddleware(thunk));

const store = createStore<StoreState, StoreAction, Dispatch<StoreAction>>(
  combinedReducers,
  enhancer,
);

export default store;
