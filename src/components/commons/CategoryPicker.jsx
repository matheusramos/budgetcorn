/* @flow */
import React from 'react';
import classnames from 'classnames';
import type { Category } from '../../utils/flow';

type Props = {
  onChange: string => void,
  value: string,
  categories: Category[],
};

export default (props: Props) => {
  const handleClick = (category: string) => {
    props.onChange(category);
  };

  const { categories, value } = props;

  return (
    <div>
      {categories.map((c: Category) => (
        <button
          type='button'
          className={classnames(value === c.value && 'selected')}
          onClick={() => handleClick(c.value)}
          key={c.value}
        >
          {c.icon}
          {c.value}
        </button>
      ))}
    </div>
  );
};
