/* @flow */
import React from 'react';

import ButtonAdd from './ButtonAdd';
import Grid from '../commons/Grid';
import TransactionGroup from './TransactionGroup';
import { calcBalanceByDay } from '../../utils/transaction';

import type { Transaction } from '../../ducks/transaction/flow';

type Props = {
  transactions: Transaction[],
};

export default (props: Props) => {
  const { transactions } = props;
  const groupedTransactions = calcBalanceByDay(transactions);
  const dates = Object.keys(groupedTransactions)
    .sort()
    .reverse();

  return (
    <Grid>
      <div className='box'>
        {dates.map(date => (
          <TransactionGroup
            key={date}
            date={new Date(date)}
            transactions={groupedTransactions[date].transactions}
            balance={groupedTransactions[date].balance}
          />
        ))}
        <ButtonAdd />
      </div>
    </Grid>
  );
};
