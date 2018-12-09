/* @flow */
import React, { Fragment } from 'react';

import ButtonAdd from './commons/ButtonAdd';
import type { Transaction } from '../ducks/transaction/flow';

type Props = {
  transactions: Transaction[],
};

export default (props: Props) => {
  const { transactions } = props;
  return (
    <Fragment>
      {transactions.map(t => (
        <div key={t.id}>{JSON.stringify(t, null, 2)}</div>
      ))}
      <ButtonAdd />
    </Fragment>
  );
};
