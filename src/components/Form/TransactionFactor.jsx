/* @flow */
import React from 'react';
import classnames from 'classnames';
import styled from 'styled-components';

type Props = {
  onChange: number => void,
  factor: 1 | -1,
};

const NoWrapDiv = styled.div`
  flex-wrap: nowrap;
`;

export default (props: Props) => {
  const handleClick = (factor: number) => {
    props.onChange(factor);
  };

  const { factor } = props;

  return (
    <NoWrapDiv className='buttons has-addons'>
      <button
        id='button-debit'
        type='button'
        className={classnames(
          'button',
          'is-medium',
          'is-fullwidth',
          factor === -1 ? 'is-secondary' : 'is-outlined',
        )}
        onClick={() => handleClick(-1)}
      >
        Debit
      </button>
      <button
        id='button-credit'
        type='button'
        className={classnames(
          'button',
          'is-medium',
          'is-fullwidth',
          factor === 1 ? 'is-secondary' : 'is-outlined',
        )}
        onClick={() => handleClick(1)}
      >
        Credit
      </button>
    </NoWrapDiv>
  );
};
