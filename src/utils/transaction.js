/* @flow */
import { toDateInputString } from './date';
import type { Transaction } from '../ducks/transaction/flow';

function groupTransactionsByDay(
  transactions: Transaction[] = [],
): { [string]: { transactions: Transaction[] } } {
  return transactions.reduce((acc, t) => {
    const key = toDateInputString(t.date);
    if (!acc[key]) {
      acc[key] = { transactions: [] };
    }
    acc[key].transactions.push(t);
    return acc;
  }, {});
}

function calcBalanceByDay(
  transactions: Transaction[] = [],
): { [string]: { transactions: Transaction[], balance: number } } {
  const groupedTransactions = groupTransactionsByDay(transactions);
  const dates = Object.keys(groupedTransactions).sort();

  let balance = 0;
  dates.forEach(date => {
    const group = groupedTransactions[date];
    balance = group.transactions.reduce((acc, t) => acc + t.amount, balance);
    group.balance = balance;
  });

  return groupedTransactions;
}

export { calcBalanceByDay, groupTransactionsByDay };
