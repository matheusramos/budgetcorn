/* @flow */
import type { Category } from './utils/flow';

export const DATABASE_NAME: 'budgetcorn' = 'budgetcorn';
export const ITEM_OBJSTORE_NAME: 'transactions' = 'transactions';

export const categories: Category[] = [
  { icon: 'shopping-bag', value: 'Shopping' },
  { icon: 'home', value: 'Home' },
  { icon: 'shopping-basket', value: 'Groceries' },
  { icon: 'shuttle-van', value: 'Transport' },
  { icon: 'ambulance', value: 'Health' },
  { icon: 'glass-cheers', value: 'Fun' },
  { icon: 'plane', value: 'Travel' },
  { icon: 'money-bill-alt', value: 'Paycheck' },
  { icon: 'graduation-cap', value: 'Education' },
  { icon: 'question', value: 'Other' },
];
