/* @flow */
import React from 'react';
import classnames from 'classnames';

type Props = {
  onChange: number => void,
  factor: 1 | -1,
};

export default (props: Props) => {
  const handleClick = (factor: number) => {
    props.onChange(factor);
  };

  const { factor } = props;

  return (
    <div>
      <button
        type='button'
        className={classnames(factor === -1 && 'selected')}
        onClick={() => handleClick(-1)}
      >
        Debit
      </button>
      <button
        type='button'
        className={classnames(factor === 1 && 'selected')}
        onClick={() => handleClick(1)}
      >
        Credit
      </button>
    </div>
  );
};
