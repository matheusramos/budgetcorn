/* @flow */
import React from 'react';
import renderer from 'react-test-renderer';

import Grid from './Grid';

it('renders correctly', () => {
  const tree = renderer.create(<Grid>Test</Grid>).toJSON();
  expect(tree).toMatchSnapshot();
});
