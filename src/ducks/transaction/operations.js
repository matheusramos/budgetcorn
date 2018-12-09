/* @flow */
import type { Dispatch } from 'redux';

import * as api from '../../api/transaction';
import * as actions from './actions';
import type { TransactionAction } from './actions';
import type { Transaction } from './flow';

// TODO: Make more meaningful error messages

export function add(transaction: Transaction) {
  return async (dispatch: Dispatch<TransactionAction>) => {
    dispatch(actions.addTransactionBegin());
    try {
      await api.insert(transaction);
      dispatch(actions.addTransactionSuccess());
    } catch (err) {
      console.error(err); // eslint-disable-line no-console
      const message = 'We had some trouble saving your transaction. Could you try again?'; // TODO: i18n
      dispatch(actions.addTransactionFailure(message));
    }
  };
}

export function remove(transactionId: string) {
  return async (dispatch: Dispatch<TransactionAction>) => {
    dispatch(actions.deleteTransactionBegin());
    try {
      await api.remove(transactionId);
      dispatch(actions.deleteTransactionSuccess());
    } catch (err) {
      console.error(err); // eslint-disable-line no-console
      const message = 'We had some trouble removing your transaction. Could you try again?'; // TODO: i18n
      dispatch(actions.deleteTransactionFailure(message));
    }
  };
}

export function edit(transaction: Transaction) {
  return async (dispatch: Dispatch<TransactionAction>) => {
    dispatch(actions.editTransactionBegin());
    try {
      await api.put(transaction);
      dispatch(actions.editTransactionSuccess());
    } catch (err) {
      console.error(err); // eslint-disable-line no-console
      const message = 'We had some trouble saving your transaction. Could you try again?'; // TODO: i18n
      dispatch(actions.editTransactionFailure(message));
    }
  };
}

export function get(transactionId: string) {
  return async (dispatch: Dispatch<TransactionAction>) => {
    dispatch(actions.getTransactionBegin());
    try {
      const transaction = await api.get(transactionId);
      dispatch(actions.getTransactionSuccess(transaction));
    } catch (err) {
      console.error(err); // eslint-disable-line no-console
      const message = 'We had some trouble fetching your transaction. Could you try again?'; // TODO: i18n
      dispatch(actions.getTransactionFailure(message));
    }
  };
}

export function list() {
  return async (dispatch: Dispatch<TransactionAction>) => {
    dispatch(actions.listTransactionsBegin());
    try {
      const transactions = await api.getAll();
      dispatch(actions.listTransactionsSuccess(transactions));
    } catch (err) {
      console.error(err); // eslint-disable-line no-console
      const message = 'We had some trouble listing the transactions. Could you try again?'; // TODO: i18n
      dispatch(actions.listTransactionsFailure(message));
    }
  };
}
