/* @flow */
import React from 'react';
import renderer from 'react-test-renderer';

import CircleButton from './CircleButton';

it('renders correctly', () => {
  const tree = renderer.create(<CircleButton>Test</CircleButton>).toJSON();
  expect(tree).toMatchSnapshot();
});
