/* @flow */
import * as types from './types';

import type { ItemAction } from './actions';
import type { Item } from './flow';

export type ItemState = {
  current: Item | null,
  error: string | null,
  list: Item[],
  fetching: boolean,
  submitting: boolean,
};

export const initialState: ItemState = {
  current: null,
  error: null,
  list: [],
  fetching: false,
  submitting: false,
};

export default (state: ItemState = initialState, action: ItemAction) => {
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
      return { ...state, current: action.item, fetching: false };
    case types.GET_ITEM_FAILURE:
      return { ...state, error: action.error, fetching: false };

    case types.LIST_ITEMS_BEGIN:
      return { ...state, error: null, list: [], fetching: true };
    case types.LIST_ITEMS_SUCCESS:
      return { ...state, list: action.items, fetching: false };
    case types.LIST_ITEMS_FAILURE:
      return { ...state, error: action.error, fetching: false };

    default:
      return { ...state };
  }
};
