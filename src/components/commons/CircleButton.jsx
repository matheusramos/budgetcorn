/* @flow */
import React from 'react';
import styled from 'styled-components';

const RoundButton = styled.button`
  border-radius: 100%;
`;
export default (props: { children: React.Node }) => {
  const { children, ...otherProps } = props;
  return <RoundButton {...otherProps}>{children}</RoundButton>;
};
