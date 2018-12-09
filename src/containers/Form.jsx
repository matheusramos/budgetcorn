/* @flow */
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import type { Dispatch } from 'redux';
import type { ThunkAction } from 'redux-thunk';
import type { ContextRouter } from 'react-router-dom';

import FormComponent from '../components/Form';
import { operations as transactionOps, selectors as transactionSelectors } from '../ducks/item';

import type { Item } from '../ducks/item/flow';
import type { StoreState } from '../ducks/store';

type Props = {
  currentTransaction: Item,
  // error: string | null, TODO:
  addTransaction: (transaction: Item) => Promise<void>,
  getTransaction: (transactionId: string) => Promise<void>,
} & ContextRouter;

class List extends PureComponent<Props> {
  componentDidMount() {
    const {
      match: {
        params: { transactionId },
      },
      getTransaction,
    } = this.props;

    if (transactionId) {
      getTransaction(transactionId);
    }
  }

  handleSubmit = async (transaction: Item) => {
    const { addTransaction, history } = this.props;
    try {
      await addTransaction(transaction);
      history.push('/');
    } catch (err) {
      // TODO: do something?
    }
  };

  render() {
    const { currentTransaction } = this.props;
    return <FormComponent onSubmit={this.handleSubmit} transaction={currentTransaction} />;
  }
}

const mapStateToProps = (state: StoreState) => ({
  currentTransaction: transactionSelectors.getCurrentItem(state),
  error: transactionSelectors.getError(state),
});

const mapDispatchToProps = (dispatch: Dispatch<ThunkAction>) => ({
  addTransaction: (transaction: Item) => dispatch(transactionOps.add(transaction)),
  getTransaction: (transactionId: string) => dispatch(transactionOps.get(transactionId)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(List);
