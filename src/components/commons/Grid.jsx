/* @flow */
import React from 'react';

export default (props: { children: React.Node }) => {
  const { children } = props;
  return (
    <div className='columns is-centered'>
      <div className='column is-full-mobile is-full-tablet is-half-desktop is-one-third-widescreen is-one-quarter-fullhd'>
        {children}
      </div>
    </div>
  );
};
