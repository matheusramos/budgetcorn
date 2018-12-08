/* @flow */
import * as actions from './actions';
import reducer, { initialState } from './reducers';
import * as selectors from './selectors';

import type { Item } from './flow';

const validItem: Item = {
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

describe('Get item', () => {
  describe('begin', () => {
    it('should change loading state at begin', () => {
      expect.assertions(1);
      const state = reducer(initialState, actions.getItemBegin());
      expect(selectors.isLoading({ item: state })).toBeTruthy();
    });
    it('should reset item', () => {
      expect.assertions(1);
      let state = reducer(initialState, actions.getItemBegin());
      state = reducer(state, actions.getItemSuccess(validItem));
      state = reducer(state, actions.getItemBegin());
      expect(selectors.getCurrentItem({ item: state })).toBeNull();
    });
    it('should reset error', () => {
      expect.assertions(1);
      const errorMessage = "I'm a pretty bad error";
      let state = reducer(initialState, actions.getItemBegin());
      state = reducer(state, actions.getItemFailure(errorMessage));
      state = reducer(state, actions.getItemBegin());
      expect(selectors.getError({ item: state })).toBeNull();
    });
  });
  describe('success', () => {
    it('should set item and stop loading', () => {
      expect.assertions(2);
      let state = reducer(initialState, actions.getItemBegin());
      state = reducer(state, actions.getItemSuccess(validItem));
      expect(selectors.getCurrentItem({ item: state })).toEqual(validItem);
      expect(selectors.isLoading({ item: state })).toBeFalsy();
    });
  });
  describe('error', () => {
    it('should set error and stop loading', () => {
      expect.assertions(2);
      const errorMessage = "I'm a pretty bad error";
      let state = reducer(initialState, actions.getItemBegin());
      state = reducer(state, actions.getItemFailure(errorMessage));
      expect(selectors.getError({ item: state })).toEqual(errorMessage);
      expect(selectors.isLoading({ item: state })).toBeFalsy();
    });
  });
});

describe('Add item', () => {
  describe('begin', () => {
    it('should change submitting state', () => {
      expect.assertions(1);
      const state = reducer(initialState, actions.addItemBegin());
      expect(selectors.isSubmitting({ item: state })).toBeTruthy();
    });
    it('should reset error', () => {
      expect.assertions(1);
      const errorMessage = "I'm a pretty bad error";
      let state = reducer(initialState, actions.addItemBegin());
      state = reducer(state, actions.addItemFailure(errorMessage));
      state = reducer(state, actions.addItemBegin());
      expect(selectors.getError({ item: state })).toBeNull();
    });
  });
  describe('success', () => {
    it('should stop loading', () => {
      expect.assertions(1);
      let state = reducer(initialState, actions.addItemBegin());
      state = reducer(state, actions.addItemSuccess());
      expect(selectors.isSubmitting({ item: state })).toBeFalsy();
    });
  });
  describe('error', () => {
    it('should set error and stop loading', () => {
      expect.assertions(2);
      const errorMessage = "I'm a pretty bad error";
      let state = reducer(initialState, actions.addItemBegin());
      state = reducer(state, actions.addItemFailure(errorMessage));
      expect(selectors.getError({ item: state })).toEqual(errorMessage);
      expect(selectors.isSubmitting({ item: state })).toBeFalsy();
    });
  });
});

describe('Edit item', () => {
  describe('begin', () => {
    it('should change submitting state', () => {
      expect.assertions(1);
      const state = reducer(initialState, actions.editItemBegin());
      expect(selectors.isSubmitting({ item: state })).toBeTruthy();
    });
    it('should reset error', () => {
      expect.assertions(1);
      const errorMessage = "I'm a pretty bad error";
      let state = reducer(initialState, actions.editItemBegin());
      state = reducer(state, actions.editItemFailure(errorMessage));
      state = reducer(state, actions.editItemBegin());
      expect(selectors.getError({ item: state })).toBeNull();
    });
  });
  describe('success', () => {
    it('should stop loading', () => {
      expect.assertions(1);
      let state = reducer(initialState, actions.editItemBegin());
      state = reducer(state, actions.editItemSuccess());
      expect(selectors.isSubmitting({ item: state })).toBeFalsy();
    });
  });
  describe('error', () => {
    it('should set error and stop loading', () => {
      expect.assertions(2);
      const errorMessage = "I'm a pretty bad error";
      let state = reducer(initialState, actions.editItemBegin());
      state = reducer(state, actions.editItemFailure(errorMessage));
      expect(selectors.getError({ item: state })).toEqual(errorMessage);
      expect(selectors.isSubmitting({ item: state })).toBeFalsy();
    });
  });
});

describe('Delete item', () => {
  describe('begin', () => {
    it('should change submitting state', () => {
      expect.assertions(1);
      const state = reducer(initialState, actions.deleteItemBegin());
      expect(selectors.isSubmitting({ item: state })).toBeTruthy();
    });
    it('should reset error', () => {
      expect.assertions(1);
      const errorMessage = "I'm a pretty bad error";
      let state = reducer(initialState, actions.deleteItemBegin());
      state = reducer(state, actions.deleteItemFailure(errorMessage));
      state = reducer(state, actions.deleteItemBegin());
      expect(selectors.getError({ item: state })).toBeNull();
    });
  });
  describe('success', () => {
    it('should stop loading', () => {
      expect.assertions(1);
      let state = reducer(initialState, actions.deleteItemBegin());
      state = reducer(state, actions.deleteItemSuccess());
      expect(selectors.isSubmitting({ item: state })).toBeFalsy();
    });
  });
  describe('error', () => {
    it('should set error and stop loading', () => {
      expect.assertions(2);
      const errorMessage = "I'm a pretty bad error";
      let state = reducer(initialState, actions.deleteItemBegin());
      state = reducer(state, actions.deleteItemFailure(errorMessage));
      expect(selectors.getError({ item: state })).toEqual(errorMessage);
      expect(selectors.isSubmitting({ item: state })).toBeFalsy();
    });
  });
});

describe('List items', () => {
  describe('begin', () => {
    it('should change loading state at begin', () => {
      expect.assertions(1);
      const state = reducer(initialState, actions.listItemsBegin());
      expect(selectors.isLoading({ item: state })).toBeTruthy();
    });
    it('should reset lsit', () => {
      expect.assertions(1);
      const items = [validItem, validItem, validItem];
      let state = reducer(initialState, actions.listItemsBegin());
      state = reducer(state, actions.listItemsSuccess(items));
      state = reducer(state, actions.listItemsBegin());
      expect(selectors.getItems({ item: state })).toEqual([]);
    });
    it('should reset error', () => {
      expect.assertions(1);
      const errorMessage = "I'm a pretty bad error";
      let state = reducer(initialState, actions.listItemsBegin());
      state = reducer(state, actions.listItemsFailure(errorMessage));
      state = reducer(state, actions.listItemsBegin());
      expect(selectors.getError({ item: state })).toBeNull();
    });
  });
  describe('success', () => {
    it('should set item and stop loading', () => {
      expect.assertions(2);
      const items = [validItem, validItem, validItem];
      let state = reducer(initialState, actions.listItemsBegin());
      state = reducer(state, actions.listItemsSuccess(items));
      expect(selectors.getItems({ item: state })).toEqual(items);
      expect(selectors.isLoading({ item: state })).toBeFalsy();
    });
  });
  describe('error', () => {
    it('should set error and stop loading', () => {
      expect.assertions(2);
      const errorMessage = "I'm a pretty bad error";
      let state = reducer(initialState, actions.listItemsBegin());
      state = reducer(state, actions.listItemsFailure(errorMessage));
      expect(selectors.getError({ item: state })).toEqual(errorMessage);
      expect(selectors.isLoading({ item: state })).toBeFalsy();
    });
  });
});
