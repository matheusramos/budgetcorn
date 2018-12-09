/* @flow */
import React, { Fragment } from 'react';
import type { Transaction } from '../ducks/transaction/flow';

type Props = {
  onSubmit: (transaction: $Shape<Transaction>) => Promise<void>,
};

export default (props: Props) => {
  const handleSubmit = () => {
    const transaction = {
      description: 'Horn polish',
      date: new Date('2018-11-01 12:45:10'),
      category: 'beauty',
      value: -145.1,
    };
    props.onSubmit(transaction);
  };
  return (
    <Fragment>
      <button type='button' onClick={handleSubmit}>
        Add transaction
      </button>
    </Fragment>
  );
};
