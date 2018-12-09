/* @flow */
import * as actions from './actions';
import reducer, { initialState } from './reducers';
import * as selectors from './selectors';

import type { Transaction } from './flow';

const validTransaction: Transaction = {
  id: 'unicornId',
  description: 'Horn polish',
  date: new Date('2018-11-01 12:45:10'),
  category: 'beauty',
  value: -145.1,
};

describe('test default behaviour', () => {
  it('should not update on unknown action', () => {
    expect.assertions(1);
    // $FlowIgnoreTest
    expect(reducer(initialState, { type: 'UNKNOWN_ACTION' })).toEqual(initialState);
  });

  it('should return initial state', () => {
    expect.assertions(1);
    // $FlowIgnoreTest
    expect(reducer(undefined, { type: 'UNKNOWN_ACTION' })).toEqual(initialState);
  });
});

describe('Get transaction', () => {
  describe('begin', () => {
    it('should change loading state at begin', () => {
      expect.assertions(1);
      const state = reducer(initialState, actions.getTransactionBegin());
      expect(selectors.isLoading({ transaction: state })).toBeTruthy();
    });
    it('should reset transaction', () => {
      expect.assertions(1);
      let state = reducer(initialState, actions.getTransactionBegin());
      state = reducer(state, actions.getTransactionSuccess(validTransaction));
      state = reducer(state, actions.getTransactionBegin());
      expect(selectors.getCurrentTransaction({ transaction: state })).toBeNull();
    });
    it('should reset error', () => {
      expect.assertions(1);
      const errorMessage = "I'm a pretty bad error";
      let state = reducer(initialState, actions.getTransactionBegin());
      state = reducer(state, actions.getTransactionFailure(errorMessage));
      state = reducer(state, actions.getTransactionBegin());
      expect(selectors.getError({ transaction: state })).toBeNull();
    });
  });
  describe('success', () => {
    it('should set transaction and stop loading', () => {
      expect.assertions(2);
      let state = reducer(initialState, actions.getTransactionBegin());
      state = reducer(state, actions.getTransactionSuccess(validTransaction));
      expect(selectors.getCurrentTransaction({ transaction: state })).toEqual(validTransaction);
      expect(selectors.isLoading({ transaction: state })).toBeFalsy();
    });
  });
  describe('error', () => {
    it('should set error and stop loading', () => {
      expect.assertions(2);
      const errorMessage = "I'm a pretty bad error";
      let state = reducer(initialState, actions.getTransactionBegin());
      state = reducer(state, actions.getTransactionFailure(errorMessage));
      expect(selectors.getError({ transaction: state })).toEqual(errorMessage);
      expect(selectors.isLoading({ transaction: state })).toBeFalsy();
    });
  });
});

describe('Add transaction', () => {
  describe('begin', () => {
    it('should change submitting state', () => {
      expect.assertions(1);
      const state = reducer(initialState, actions.addTransactionBegin());
      expect(selectors.isSubmitting({ transaction: state })).toBeTruthy();
    });
    it('should reset error', () => {
      expect.assertions(1);
      const errorMessage = "I'm a pretty bad error";
      let state = reducer(initialState, actions.addTransactionBegin());
      state = reducer(state, actions.addTransactionFailure(errorMessage));
      state = reducer(state, actions.addTransactionBegin());
      expect(selectors.getError({ transaction: state })).toBeNull();
    });
  });
  describe('success', () => {
    it('should stop loading', () => {
      expect.assertions(1);
      let state = reducer(initialState, actions.addTransactionBegin());
      state = reducer(state, actions.addTransactionSuccess());
      expect(selectors.isSubmitting({ transaction: state })).toBeFalsy();
    });
  });
  describe('error', () => {
    it('should set error and stop loading', () => {
      expect.assertions(2);
      const errorMessage = "I'm a pretty bad error";
      let state = reducer(initialState, actions.addTransactionBegin());
      state = reducer(state, actions.addTransactionFailure(errorMessage));
      expect(selectors.getError({ transaction: state })).toEqual(errorMessage);
      expect(selectors.isSubmitting({ transaction: state })).toBeFalsy();
    });
  });
});

describe('Edit transaction', () => {
  describe('begin', () => {
    it('should change submitting state', () => {
      expect.assertions(1);
      const state = reducer(initialState, actions.editTransactionBegin());
      expect(selectors.isSubmitting({ transaction: state })).toBeTruthy();
    });
    it('should reset error', () => {
      expect.assertions(1);
      const errorMessage = "I'm a pretty bad error";
      let state = reducer(initialState, actions.editTransactionBegin());
      state = reducer(state, actions.editTransactionFailure(errorMessage));
      state = reducer(state, actions.editTransactionBegin());
      expect(selectors.getError({ transaction: state })).toBeNull();
    });
  });
  describe('success', () => {
    it('should stop loading', () => {
      expect.assertions(1);
      let state = reducer(initialState, actions.editTransactionBegin());
      state = reducer(state, actions.editTransactionSuccess());
      expect(selectors.isSubmitting({ transaction: state })).toBeFalsy();
    });
  });
  describe('error', () => {
    it('should set error and stop loading', () => {
      expect.assertions(2);
      const errorMessage = "I'm a pretty bad error";
      let state = reducer(initialState, actions.editTransactionBegin());
      state = reducer(state, actions.editTransactionFailure(errorMessage));
      expect(selectors.getError({ transaction: state })).toEqual(errorMessage);
      expect(selectors.isSubmitting({ transaction: state })).toBeFalsy();
    });
  });
});

describe('Delete transaction', () => {
  describe('begin', () => {
    it('should change submitting state', () => {
      expect.assertions(1);
      const state = reducer(initialState, actions.deleteTransactionBegin());
      expect(selectors.isSubmitting({ transaction: state })).toBeTruthy();
    });
    it('should reset error', () => {
      expect.assertions(1);
      const errorMessage = "I'm a pretty bad error";
      let state = reducer(initialState, actions.deleteTransactionBegin());
      state = reducer(state, actions.deleteTransactionFailure(errorMessage));
      state = reducer(state, actions.deleteTransactionBegin());
      expect(selectors.getError({ transaction: state })).toBeNull();
    });
  });
  describe('success', () => {
    it('should stop loading', () => {
      expect.assertions(1);
      let state = reducer(initialState, actions.deleteTransactionBegin());
      state = reducer(state, actions.deleteTransactionSuccess());
      expect(selectors.isSubmitting({ transaction: state })).toBeFalsy();
    });
  });
  describe('error', () => {
    it('should set error and stop loading', () => {
      expect.assertions(2);
      const errorMessage = "I'm a pretty bad error";
      let state = reducer(initialState, actions.deleteTransactionBegin());
      state = reducer(state, actions.deleteTransactionFailure(errorMessage));
      expect(selectors.getError({ transaction: state })).toEqual(errorMessage);
      expect(selectors.isSubmitting({ transaction: state })).toBeFalsy();
    });
  });
});

describe('List transactions', () => {
  describe('begin', () => {
    it('should change loading state at begin', () => {
      expect.assertions(1);
      const state = reducer(initialState, actions.listTransactionsBegin());
      expect(selectors.isLoading({ transaction: state })).toBeTruthy();
    });
    it('should reset lsit', () => {
      expect.assertions(1);
      const transactions = [validTransaction, validTransaction, validTransaction];
      let state = reducer(initialState, actions.listTransactionsBegin());
      state = reducer(state, actions.listTransactionsSuccess(transactions));
      state = reducer(state, actions.listTransactionsBegin());
      expect(selectors.getTransactions({ transaction: state })).toEqual([]);
    });
    it('should reset error', () => {
      expect.assertions(1);
      const errorMessage = "I'm a pretty bad error";
      let state = reducer(initialState, actions.listTransactionsBegin());
      state = reducer(state, actions.listTransactionsFailure(errorMessage));
      state = reducer(state, actions.listTransactionsBegin());
      expect(selectors.getError({ transaction: state })).toBeNull();
    });
  });
  describe('success', () => {
    it('should set transaction and stop loading', () => {
      expect.assertions(2);
      const transactions = [validTransaction, validTransaction, validTransaction];
      let state = reducer(initialState, actions.listTransactionsBegin());
      state = reducer(state, actions.listTransactionsSuccess(transactions));
      expect(selectors.getTransactions({ transaction: state })).toEqual(transactions);
      expect(selectors.isLoading({ transaction: state })).toBeFalsy();
    });
  });
  describe('error', () => {
    it('should set error and stop loading', () => {
      expect.assertions(2);
      const errorMessage = "I'm a pretty bad error";
      let state = reducer(initialState, actions.listTransactionsBegin());
      state = reducer(state, actions.listTransactionsFailure(errorMessage));
      expect(selectors.getError({ transaction: state })).toEqual(errorMessage);
      expect(selectors.isLoading({ transaction: state })).toBeFalsy();
    });
  });
});
