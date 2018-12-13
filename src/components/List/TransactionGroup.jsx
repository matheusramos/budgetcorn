/* @flow */
import React, { PureComponent } from 'react';
import classnames from 'classnames';
import styled from 'styled-components';
import TransactionThumbnail from './TransactionThumbnail';

import { formatCurrency } from '../../utils/money';
import type { Transaction } from '../../ducks/transaction/flow';

type Props = {
  balance: number,
  date: Date,
  transactions: Transaction[],
};

const FlexDiv = styled.div`
  margin-bottom: 2rem;

  .day-separator {
    align-items: center;
    display: flex;
    justify-content: space-between;

    hr {
      flex-grow: 1;
      margin: 0 1em;
    }
  }
`;

export default class DateGroup extends PureComponent<Props> {
  render() {
    const { balance, date, transactions } = this.props;

    return (
      <FlexDiv>
        <div className='day-separator is-size-7 has-text-grey-light'>
          <span>{new Intl.DateTimeFormat().format(date)}</span>
          <hr />
          <span className={classnames('amount', balance < 0 && 'has-text-danger')}>
            {formatCurrency(balance)}
          </span>
        </div>
        {transactions.map(t => (
          <TransactionThumbnail key={t.id} transaction={t} />
        ))}
      </FlexDiv>
    );
  }
}
