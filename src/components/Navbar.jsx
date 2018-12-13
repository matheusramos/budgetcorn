/* @flow */
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { logo } from '../assets/images';

const StyledNav = styled.nav`
  margin-bottom: 0.8rem;

  svg {
    height: 2em;
    width: 2em;
  }

  span {
    margin-left: 0.4em;
    font-size: 1.6em;
    text-transform: uppercase;
    letter-spacing: 0.1em;
  }
`;

export default () => (
  <StyledNav
    className='navbar is-primary is-shadowed'
    role='navigation'
    aria-label='main navigation'
  >
    <div className='navbar-brand'>
      <Link className='navbar-item' to='/'>
        {logo}
        <span>Budgetcorn</span>
      </Link>
    </div>
  </StyledNav>
);
