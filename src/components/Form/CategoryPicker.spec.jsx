/* @flow */
import React from 'react';
import { create } from 'react-test-renderer';

import CategoryPicker from './CategoryPicker';
import type { Category } from '../../utils/flow';

const categories: Category[] = [
  { icon: 'shopping-bag', value: 'Shopping' },
  { icon: 'home', value: 'Home' },
];

describe('Category component', () => {
  it('should return correct category when clicking button', () => {
    expect.assertions(categories.length);
    let category = 'Other';
    const onChange = (newCategory: string) => {
      category = newCategory;
    };
    const component = create(
      <CategoryPicker categories={categories} onChange={onChange} value={category} />,
    );
    const rootInstance = component.root;

    // test each button
    categories.forEach(({ value: c }) => {
      const button = rootInstance.findByProps({ id: `category-button-${c}` });
      button.props.onClick();
      expect(category).toBe(c);
    });
  });
});
