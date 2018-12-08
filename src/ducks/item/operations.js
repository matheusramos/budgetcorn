/* @flow */
import type { Dispatch } from 'redux';

import * as actions from './actions';
import type { ItemAction } from './actions';
import type { Item } from './flow';

export function addItem(item: Item) {
  return (dispatch: Dispatch<ItemAction>) => {
    dispatch(actions.addItemBegin());
    try {
      console.log(`TODO: Add item ${item.id}`);
      dispatch(actions.addItemSuccess());
    } catch (err) {
      dispatch(actions.addItemFailure(err));
    }
  };
}

export function deleteItem(itemId: string) {
  return (dispatch: Dispatch<ItemAction>) => {
    dispatch(actions.deleteItemBegin());
    try {
      console.log(`TODO: Delete item ${itemId}`);
      dispatch(actions.deleteItemSuccess());
    } catch (err) {
      dispatch(actions.deleteItemFailure(err));
    }
  };
}

export function editItem(item: Item) {
  return (dispatch: Dispatch<ItemAction>) => {
    dispatch(actions.editItemBegin());
    try {
      console.log(`TODO: Edit item ${item.id}`);
      dispatch(actions.editItemSuccess());
    } catch (err) {
      dispatch(actions.editItemFailure(err));
    }
  };
}

export function getItem(itemId: string) {
  return (dispatch: Dispatch<ItemAction>) => {
    dispatch(actions.getItemBegin());
    try {
      console.log(`TODO: Get item ${itemId}`);
      dispatch(actions.getItemSuccess());
    } catch (err) {
      dispatch(actions.getItemFailure(err));
    }
  };
}

export function listItems() {
  return (dispatch: Dispatch<ItemAction>) => {
    dispatch(actions.listItemsBegin());
    try {
      const items = []; // TODO: fetch items
      dispatch(actions.listItemsSuccess(items));
    } catch (err) {
      dispatch(actions.listItemsFailure(err));
    }
  };
}
