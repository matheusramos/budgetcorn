/* @flow */
import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import type { Dispatch } from 'redux';

import transaction from './transaction';
import type { TransactionState } from './transaction/reducers';
import type { TransactionAction } from './transaction/actions';

export type StoreState = {
  transaction: TransactionState,
};

const reducers = {
  transaction,
};

// intersect all available actions here
export type StoreAction = TransactionAction;

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
