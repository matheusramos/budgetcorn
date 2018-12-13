/* @flow */
import React from 'react';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';
import type { ContextRouter } from 'react-router-dom';

import CircleButton from '../commons/CircleButton';

type Props = {} & ContextRouter;

const AddButtonDiv = styled.div`
  display: flex;
  flex-direction: row-reverse;
`;

const StyledButton = styled(CircleButton)`
  height: 3em;
  width: 3em;
`;

const ButtonAdd = (props: Props) => {
  const { history } = props;
  return (
    <AddButtonDiv>
      <StyledButton
        type='button'
        className='button is-primary is-shadowed'
        onClick={() => history.push('/add')}
      >
        <Icon icon='plus' size='lg' />
      </StyledButton>
    </AddButtonDiv>
  );
};

export default withRouter(ButtonAdd);
