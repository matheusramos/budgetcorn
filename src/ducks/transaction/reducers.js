/* @flow */
import * as types from './types';

import type { TransactionAction } from './actions';
import type { Transaction } from './flow';

export type TransactionState = {
  current: Transaction | null,
  error: string | null,
  list: Transaction[],
  fetching: boolean,
  submitting: boolean,
};

export const initialState: TransactionState = {
  current: null,
  error: null,
  list: [],
  fetching: false,
  submitting: false,
};

export default (state: TransactionState = initialState, action: TransactionAction) => {
  switch (action.type) {
    case types.ADD_ITEM_BEGIN:
      return { ...state, error: null, submitting: true };
    case types.ADD_ITEM_SUCCESS:
      return { ...state, submitting: false };
    case types.ADD_ITEM_FAILURE:
      return { ...state, error: action.error, submitting: false };

    case types.DELETE_ITEM_BEGIN:
      return { ...state, error: null, submitting: true };
    case types.DELETE_ITEM_SUCCESS:
      return { ...state, submitting: false };
    case types.DELETE_ITEM_FAILURE:
      return { ...state, error: action.error, submitting: false };

    case types.EDIT_ITEM_BEGIN:
      return { ...state, error: null, submitting: true };
    case types.EDIT_ITEM_SUCCESS:
      return { ...state, submitting: false };
    case types.EDIT_ITEM_FAILURE:
      return { ...state, error: action.error, submitting: false };

    case types.GET_ITEM_BEGIN:
      return { ...state, current: null, error: null, fetching: true };
    case types.GET_ITEM_SUCCESS:
      return { ...state, current: action.transaction, fetching: false };
    case types.GET_ITEM_FAILURE:
      return { ...state, error: action.error, fetching: false };

    case types.LIST_ITEMS_BEGIN:
      return { ...state, error: null, list: [], fetching: true };
    case types.LIST_ITEMS_SUCCESS:
      return { ...state, list: action.transactions, fetching: false };
    case types.LIST_ITEMS_FAILURE:
      return { ...state, error: action.error, fetching: false };

    default:
      return { ...state };
  }
};
