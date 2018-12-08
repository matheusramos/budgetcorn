/* @flow */
import * as types from './types';
import type { Item } from './flow';

type AddItemBegin = { type: typeof types.ADD_ITEM_BEGIN };
type AddItemSuccess = { type: typeof types.ADD_ITEM_SUCCESS };
type AddItemFailure = { type: typeof types.ADD_ITEM_FAILURE, error: string };
const addItemBegin = (): AddItemBegin => ({
  type: types.ADD_ITEM_BEGIN,
});
const addItemSuccess = (): AddItemSuccess => ({
  type: types.ADD_ITEM_SUCCESS,
});
const addItemFailure = (error: string): AddItemFailure => ({
  type: types.ADD_ITEM_FAILURE,
  error,
});

type DeleteItemBegin = { type: typeof types.DELETE_ITEM_BEGIN };
type DeleteItemSuccess = { type: typeof types.DELETE_ITEM_SUCCESS };
type DeleteItemFailure = { type: typeof types.DELETE_ITEM_FAILURE, error: string };
const deleteItemBegin = (): DeleteItemBegin => ({
  type: types.DELETE_ITEM_BEGIN,
});
const deleteItemSuccess = (): DeleteItemSuccess => ({
  type: types.DELETE_ITEM_SUCCESS,
});
const deleteItemFailure = (error: string): DeleteItemFailure => ({
  type: types.DELETE_ITEM_FAILURE,
  error,
});

type EditItemBegin = { type: typeof types.EDIT_ITEM_BEGIN };
type EditItemSuccess = { type: typeof types.EDIT_ITEM_SUCCESS };
type EditItemFailure = { type: typeof types.EDIT_ITEM_FAILURE, error: string };
const editItemBegin = (): EditItemBegin => ({
  type: types.EDIT_ITEM_BEGIN,
});
const editItemSuccess = (): EditItemSuccess => ({
  type: types.EDIT_ITEM_SUCCESS,
});
const editItemFailure = (error: string): EditItemFailure => ({
  type: types.EDIT_ITEM_FAILURE,
  error,
});

type GetItemBegin = { type: typeof types.GET_ITEM_BEGIN };
type GetItemSuccess = { type: typeof types.GET_ITEM_SUCCESS, item: Item };
type GetItemFailure = { type: typeof types.GET_ITEM_FAILURE, error: string };
const getItemBegin = (): GetItemBegin => ({
  type: types.GET_ITEM_BEGIN,
});
const getItemSuccess = (item: Item): GetItemSuccess => ({
  type: types.GET_ITEM_SUCCESS,
  item,
});
const getItemFailure = (error: string): GetItemFailure => ({
  type: types.GET_ITEM_FAILURE,
  error,
});

type ListItemsBegin = { type: typeof types.LIST_ITEMS_BEGIN };
type ListItemsSuccess = { type: typeof types.LIST_ITEMS_SUCCESS, items: Item[] };
type ListItemsFailure = { type: typeof types.LIST_ITEMS_FAILURE, error: string };
const listItemsBegin = (): ListItemsBegin => ({
  type: types.LIST_ITEMS_BEGIN,
});
const listItemsSuccess = (items: Item[]): ListItemsSuccess => ({
  type: types.LIST_ITEMS_SUCCESS,
  items,
});
const listItemsFailure = (error: string): ListItemsFailure => ({
  type: types.LIST_ITEMS_FAILURE,
  error,
});

export type ItemAction =
  | AddItemBegin
  | AddItemSuccess
  | AddItemFailure
  | DeleteItemBegin
  | DeleteItemSuccess
  | DeleteItemFailure
  | EditItemBegin
  | EditItemSuccess
  | EditItemFailure
  | GetItemBegin
  | GetItemSuccess
  | GetItemFailure
  | ListItemsBegin
  | ListItemsSuccess
  | ListItemsFailure;

export {
  addItemBegin,
  addItemSuccess,
  addItemFailure,
  deleteItemBegin,
  deleteItemSuccess,
  deleteItemFailure,
  editItemBegin,
  editItemSuccess,
  editItemFailure,
  getItemBegin,
  getItemSuccess,
  getItemFailure,
  listItemsBegin,
  listItemsSuccess,
  listItemsFailure,
};
