/* @flow */
import type { Dispatch } from 'redux';

import * as api from '../../api/item';
import * as actions from './actions';
import type { ItemAction } from './actions';
import type { Item } from './flow';

// TODO: Make more meaningful error messages

export function add(item: Item) {
  return async (dispatch: Dispatch<ItemAction>) => {
    dispatch(actions.addItemBegin());
    try {
      await api.insert(item);
      dispatch(actions.addItemSuccess());
    } catch (err) {
      console.error(err); // eslint-disable-line no-console
      const message = 'We had some trouble saving your transaction. Could you try again?'; // TODO: i18n
      dispatch(actions.addItemFailure(message));
    }
  };
}

export function remove(itemId: string) {
  return async (dispatch: Dispatch<ItemAction>) => {
    dispatch(actions.deleteItemBegin());
    try {
      await api.remove(itemId);
      dispatch(actions.deleteItemSuccess());
    } catch (err) {
      console.error(err); // eslint-disable-line no-console
      const message = 'We had some trouble removing your transaction. Could you try again?'; // TODO: i18n
      dispatch(actions.deleteItemFailure(message));
    }
  };
}

export function edit(item: Item) {
  return async (dispatch: Dispatch<ItemAction>) => {
    dispatch(actions.editItemBegin());
    try {
      await api.put(item);
      dispatch(actions.editItemSuccess());
    } catch (err) {
      console.error(err); // eslint-disable-line no-console
      const message = 'We had some trouble saving your transaction. Could you try again?'; // TODO: i18n
      dispatch(actions.editItemFailure(message));
    }
  };
}

export function get(itemId: string) {
  return async (dispatch: Dispatch<ItemAction>) => {
    dispatch(actions.getItemBegin());
    try {
      const item = await api.get(itemId);
      dispatch(actions.getItemSuccess(item));
    } catch (err) {
      console.error(err); // eslint-disable-line no-console
      const message = 'We had some trouble fetching your transaction. Could you try again?'; // TODO: i18n
      dispatch(actions.getItemFailure(message));
    }
  };
}

export function list() {
  return async (dispatch: Dispatch<ItemAction>) => {
    dispatch(actions.listItemsBegin());
    try {
      const items = await api.getAll();
      dispatch(actions.listItemsSuccess(items));
    } catch (err) {
      console.error(err); // eslint-disable-line no-console
      const message = 'We had some trouble listing the transactions. Could you try again?'; // TODO: i18n
      dispatch(actions.listItemsFailure(message));
    }
  };
}
