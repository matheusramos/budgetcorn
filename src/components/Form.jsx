/* @flow */
import React, { Fragment } from 'react';
import type { Item } from '../ducks/item/flow';

type Props = {
  onSubmit: (item: $Shape<Item>) => Promise<void>,
};

export default (props: Props) => {
  const handleSubmit = () => {
    const item = {
      description: 'Horn polish',
      date: new Date('2018-11-01 12:45:10'),
      category: 'beauty',
      value: -145.1,
    };
    props.onSubmit(item);
  };
  return (
    <Fragment>
      <button type='button' onClick={handleSubmit}>
        Add transaction
      </button>
    </Fragment>
  );
};
