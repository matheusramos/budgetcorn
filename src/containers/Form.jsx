/* @flow */
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import type { Dispatch } from 'redux';
import type { ThunkAction } from 'redux-thunk';
import type { ContextRouter } from 'react-router-dom';

import FormComponent from '../components/Form';
import {
  operations as transactionOps,
  selectors as transactionSelectors,
} from '../ducks/transaction';

import type { Transaction } from '../ducks/transaction/flow';
import type { StoreState } from '../ducks/store';

type Props = {
  currentTransaction: Transaction,
  // error: string | null, TODO:
  addTransaction: (transaction: Transaction) => Promise<void>,
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

  handleSubmit = async (transaction: Transaction) => {
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
  currentTransaction: transactionSelectors.getCurrentTransaction(state),
  error: transactionSelectors.getError(state),
});

const mapDispatchToProps = (dispatch: Dispatch<ThunkAction>) => ({
  addTransaction: (transaction: Transaction) => dispatch(transactionOps.add(transaction)),
  getTransaction: (transactionId: string) => dispatch(transactionOps.get(transactionId)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(List);
