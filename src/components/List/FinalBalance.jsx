/* @flow */
import React from 'react';
import classnames from 'classnames';
import styled from 'styled-components';

import { formatCurrency } from '../../utils/money';

type Props = {
  value: number,
};

const StyledDiv = styled.div`
  text-align: right;
  font-weight: lighter;
  font-size: 1.4em;
  margin-bottom: 0.8em;

  & > *:not(:last-child) {
    margin-right: 0.8em;
  }

  .balance {
    font-size: 1.6em;
    font-weight: bold;
  }
`;

export default (props: Props) => {
  const { value } = props;
  return (
    <StyledDiv>
      <span>Current balance: </span>
      <span className={classnames('balance', value < 0 && 'has-text-danger')}>
        {formatCurrency(value)}
      </span>
    </StyledDiv>
  );
};
