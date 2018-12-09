/* @flow */
import type { StoreState } from '../store';

export const getCurrentTransaction = (state: StoreState) => state.transaction.current;
export const getError = (state: StoreState) => state.transaction.error;
export const getTransactions = (state: StoreState) => state.transaction.list;
export const isLoading = (state: StoreState) => state.transaction.fetching;
export const isSubmitting = (state: StoreState) => state.transaction.submitting;
