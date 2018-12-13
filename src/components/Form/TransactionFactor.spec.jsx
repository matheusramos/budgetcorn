/* @flow */
import React from 'react';
import { create } from 'react-test-renderer';

import TransactionFactor from './TransactionFactor';

describe('Factor component', () => {
  it('should get -1 for debit', () => {
    expect.assertions(1);
    let factor = 1; // credit
    const onChange = (newFactor: number) => {
      factor = newFactor;
    };
    const component = create(<TransactionFactor factor={factor} onChange={onChange} />);
    const rootInstance = component.root;

    const debitButton = rootInstance.findByProps({ id: 'button-debit' });
    debitButton.props.onClick();

    expect(factor).toBe(-1);
  });

  it('should get 1 for credit', () => {
    expect.assertions(1);
    let factor = -1; // debit
    const onChange = (newFactor: number) => {
      factor = newFactor;
    };
    const component = create(<TransactionFactor factor={factor} onChange={onChange} />);
    const rootInstance = component.root;

    const debitButton = rootInstance.findByProps({ id: 'button-credit' });
    debitButton.props.onClick();

    expect(factor).toBe(1);
  });
});
