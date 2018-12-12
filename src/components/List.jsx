/* @flow */
import React from 'react';

import ButtonAdd from './commons/ButtonAdd';
import Grid from './commons/Grid';

import type { Transaction } from '../ducks/transaction/flow';

type Props = {
  transactions: Transaction[],
};

export default (props: Props) => {
  const { transactions } = props;
  return (
    <Grid>
      <div className='box'>
        {transactions.map(t => (
          <div key={t.id}>{JSON.stringify(t, null, 2)}</div>
        ))}
        <ButtonAdd />
      </div>
    </Grid>
  );
};
