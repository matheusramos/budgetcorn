/* @flow */
import { calcBalanceByDay, groupTransactionsByDay } from './transaction';
import type { Transaction } from '../ducks/transaction/flow';

const validTransactions: Transaction[] = [
  {
    id: 1,
    amount: -10,
    category: 'Other',
    date: new Date('2018-12-01T21:32:26.865Z'),
    description: 'desc',
  },
  {
    id: 10,
    amount: 100,
    category: 'Other',
    date: new Date('2018-12-02T01:32:24.815Z'),
    description: 'desc',
  },
  {
    id: 10,
    amount: -10,
    category: 'Other',
    date: new Date('2018-12-01T01:12:56.123Z'),
    description: 'desc',
  },
];

describe('group transactions by day', () => {
  it('should group transactions by day', () => {
    expect.assertions(1);
    const expected = {
      '2018-12-01': {
        transactions: [
          {
            id: 1,
            amount: -10,
            category: 'Other',
            date: new Date('2018-12-01T21:32:26.865Z'),
            description: 'desc',
          },
          {
            id: 10,
            amount: -10,
            category: 'Other',
            date: new Date('2018-12-01T01:12:56.123Z'),
            description: 'desc',
          },
        ],
      },
      '2018-12-02': {
        transactions: [
          {
            id: 10,
            amount: 100,
            category: 'Other',
            date: new Date('2018-12-02T01:32:24.815Z'),
            description: 'desc',
          },
        ],
      },
    };
    expect(groupTransactionsByDay(validTransactions)).toEqual(expected);
  });
  it('should return an empty object if no transactions', () => {
    expect.assertions(1);
    const transactions = [];
    expect(groupTransactionsByDay(transactions)).toEqual({});
  });
  it('should return an empty object if undefined', () => {
    expect.assertions(1);
    expect(groupTransactionsByDay(undefined)).toEqual({});
  });
});

describe('group transactions by day and get balance', () => {
  it('shoud get balance by day', () => {
    expect.assertions(1);
    const expected = {
      '2018-12-01': {
        balance: -20,
        transactions: [
          {
            id: 1,
            amount: -10,
            category: 'Other',
            date: new Date('2018-12-01T21:32:26.865Z'),
            description: 'desc',
          },
          {
            id: 10,
            amount: -10,
            category: 'Other',
            date: new Date('2018-12-01T01:12:56.123Z'),
            description: 'desc',
          },
        ],
      },
      '2018-12-02': {
        balance: 80,
        transactions: [
          {
            id: 10,
            amount: 100,
            category: 'Other',
            date: new Date('2018-12-02T01:32:24.815Z'),
            description: 'desc',
          },
        ],
      },
    };
    expect(calcBalanceByDay(validTransactions)).toEqual(expected);
  });
  it('should return an empty object if no transactions', () => {
    expect.assertions(1);
    const transactions = [];
    expect(calcBalanceByDay(transactions)).toEqual({});
  });
  it('should return an empty object if undefined', () => {
    expect.assertions(1);
    const transactions = [];
    expect(calcBalanceByDay(transactions)).toEqual({});
  });
});
