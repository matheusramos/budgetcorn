/* @flow */
import * as types from './types';
import type { Transaction } from './flow';

type AddTransactionBegin = { type: typeof types.ADD_ITEM_BEGIN };
type AddTransactionSuccess = { type: typeof types.ADD_ITEM_SUCCESS };
type AddTransactionFailure = { type: typeof types.ADD_ITEM_FAILURE, error: string };
const addTransactionBegin = (): AddTransactionBegin => ({
  type: types.ADD_ITEM_BEGIN,
});
const addTransactionSuccess = (): AddTransactionSuccess => ({
  type: types.ADD_ITEM_SUCCESS,
});
const addTransactionFailure = (error: string): AddTransactionFailure => ({
  type: types.ADD_ITEM_FAILURE,
  error,
});

type DeleteTransactionBegin = { type: typeof types.DELETE_ITEM_BEGIN };
type DeleteTransactionSuccess = { type: typeof types.DELETE_ITEM_SUCCESS };
type DeleteTransactionFailure = { type: typeof types.DELETE_ITEM_FAILURE, error: string };
const deleteTransactionBegin = (): DeleteTransactionBegin => ({
  type: types.DELETE_ITEM_BEGIN,
});
const deleteTransactionSuccess = (): DeleteTransactionSuccess => ({
  type: types.DELETE_ITEM_SUCCESS,
});
const deleteTransactionFailure = (error: string): DeleteTransactionFailure => ({
  type: types.DELETE_ITEM_FAILURE,
  error,
});

type EditTransactionBegin = { type: typeof types.EDIT_ITEM_BEGIN };
type EditTransactionSuccess = { type: typeof types.EDIT_ITEM_SUCCESS };
type EditTransactionFailure = { type: typeof types.EDIT_ITEM_FAILURE, error: string };
const editTransactionBegin = (): EditTransactionBegin => ({
  type: types.EDIT_ITEM_BEGIN,
});
const editTransactionSuccess = (): EditTransactionSuccess => ({
  type: types.EDIT_ITEM_SUCCESS,
});
const editTransactionFailure = (error: string): EditTransactionFailure => ({
  type: types.EDIT_ITEM_FAILURE,
  error,
});

type GetTransactionBegin = { type: typeof types.GET_ITEM_BEGIN };
type GetTransactionSuccess = { type: typeof types.GET_ITEM_SUCCESS, transaction: Transaction };
type GetTransactionFailure = { type: typeof types.GET_ITEM_FAILURE, error: string };
const getTransactionBegin = (): GetTransactionBegin => ({
  type: types.GET_ITEM_BEGIN,
});
const getTransactionSuccess = (transaction: Transaction): GetTransactionSuccess => ({
  type: types.GET_ITEM_SUCCESS,
  transaction,
});
const getTransactionFailure = (error: string): GetTransactionFailure => ({
  type: types.GET_ITEM_FAILURE,
  error,
});

type ListTransactionsBegin = { type: typeof types.LIST_ITEMS_BEGIN };
type ListTransactionsSuccess = {
  type: typeof types.LIST_ITEMS_SUCCESS,
  transactions: Transaction[],
};
type ListTransactionsFailure = { type: typeof types.LIST_ITEMS_FAILURE, error: string };
const listTransactionsBegin = (): ListTransactionsBegin => ({
  type: types.LIST_ITEMS_BEGIN,
});
const listTransactionsSuccess = (transactions: Transaction[]): ListTransactionsSuccess => ({
  type: types.LIST_ITEMS_SUCCESS,
  transactions,
});
const listTransactionsFailure = (error: string): ListTransactionsFailure => ({
  type: types.LIST_ITEMS_FAILURE,
  error,
});

export type TransactionAction =
  | AddTransactionBegin
  | AddTransactionSuccess
  | AddTransactionFailure
  | DeleteTransactionBegin
  | DeleteTransactionSuccess
  | DeleteTransactionFailure
  | EditTransactionBegin
  | EditTransactionSuccess
  | EditTransactionFailure
  | GetTransactionBegin
  | GetTransactionSuccess
  | GetTransactionFailure
  | ListTransactionsBegin
  | ListTransactionsSuccess
  | ListTransactionsFailure;

export {
  addTransactionBegin,
  addTransactionSuccess,
  addTransactionFailure,
  deleteTransactionBegin,
  deleteTransactionSuccess,
  deleteTransactionFailure,
  editTransactionBegin,
  editTransactionSuccess,
  editTransactionFailure,
  getTransactionBegin,
  getTransactionSuccess,
  getTransactionFailure,
  listTransactionsBegin,
  listTransactionsSuccess,
  listTransactionsFailure,
};
