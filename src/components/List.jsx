/* @flow */
import React, { Fragment } from 'react';

import ButtonAdd from './commons/ButtonAdd';
import type { Item } from '../ducks/item/flow';

type Props = {
  transactions: Item[],
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
