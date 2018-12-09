/* @flow */
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import type { Dispatch } from 'redux';
import type { ThunkAction } from 'redux-thunk';

import ListComponent from '../components/List';
import {
  operations as transactionOps,
  selectors as transactionSelectors,
} from '../ducks/transaction';

import type { Transaction } from '../ducks/transaction/flow';
import type { StoreState } from '../ducks/store';

type Props = {
  transactions: Transaction[],
  // error: string | null, // TODO:
  getTransactions: () => Promise<void>,
};

class List extends PureComponent<Props> {
  componentDidMount() {
    const { getTransactions } = this.props;
    getTransactions();
  }

  render() {
    const { transactions } = this.props;

    return <ListComponent transactions={transactions} />;
  }
}

const mapStateToProps = (state: StoreState) => ({
  transactions: transactionSelectors.getTransactions(state),
  error: transactionSelectors.getError(state),
});

const mapDispatchToProps = (dispatch: Dispatch<ThunkAction>) => ({
  getTransactions: () => dispatch(transactionOps.list()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(List);
