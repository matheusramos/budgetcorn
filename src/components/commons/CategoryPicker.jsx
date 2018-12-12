/* @flow */
import React from 'react';
import classnames from 'classnames';
import styled from 'styled-components';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';

import type { Category } from '../../utils/flow';

type Props = {
  onChange: string => void,
  value: string,
  categories: Category[],
};

const FlexDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const CategoryButton = styled.button`
  display: flex;
  flex-direction: column;
  height: 4em;
  width: 6.47em;
  margin: 0.4em;

  .category-icon {
    font-size: 1.61em;
  }
`;

export default (props: Props) => {
  const handleClick = (category: string) => {
    props.onChange(category);
  };

  const { categories, value } = props;

  return (
    <FlexDiv>
      {categories.map((c: Category) => (
        <CategoryButton
          id={`category-button-${c.value}`}
          type='button'
          className={classnames('button', 'is-secondary', value !== c.value && 'is-inverted')}
          onClick={() => handleClick(c.value)}
          key={c.value}
        >
          <Icon className='category-icon' icon={c.icon} />
          {c.value}
        </CategoryButton>
      ))}
    </FlexDiv>
  );
};
