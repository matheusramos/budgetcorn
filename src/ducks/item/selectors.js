/* @flow */
import type { StoreState } from '../store';

export const getCurrentItem = (state: StoreState) => state.item.current;
export const getError = (state: StoreState) => state.item.error;
export const getItems = (state: StoreState) => state.item.list;
export const isLoading = (state: StoreState) => state.item.fetching;
export const isSubmitting = (state: StoreState) => state.item.submitting;
