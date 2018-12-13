/* @flow */
import React from 'react';
import classnames from 'classnames';
import styled from 'styled-components';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';

import { categories } from '../../settings';
import { formatCurrency } from '../../utils/money';
import type { Transaction } from '../../ducks/transaction/flow';

type Props = {
  transaction: Transaction,
};

const FlexDiv = styled.div`
  font-weight: lighter;
  letter-spacing: 0.1em;
  margin-bottom: 0.8em;

  &,
  .description-group {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .category-name {
    text-transform: uppercase;
    font-size: 0.6em;
  }

  .amount {
    font-size: 1.2em;
  }

  .icon {
    margin-right: 1em;
  }
`;

export default (props: Props) => {
  const {
    transaction: { amount, category, description },
  } = props;

  // get icon by searching categories
  // TODO: make category O(1)
  const categoryObj = categories.find(c => c.value === category);
  const iconName = categoryObj.icon || 'question';

  return (
    <FlexDiv>
      <div className='description-group'>
        <span className='icon has-text-secondary'>
          <Icon icon={iconName} />
        </span>
        <div>
          <div className='description'>{description}</div>
          <div className='category-name'>{category}</div>
        </div>
      </div>

      <div className={classnames('amount', amount < 0 && 'has-text-danger')}>
        {formatCurrency(amount)}
      </div>
    </FlexDiv>
  );
};
