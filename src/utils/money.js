/* @flow */

/* TODO: when implementing i18n, should look here */
function formatCurrency(n: number) {
  return Intl.NumberFormat(undefined, { style: 'currency', currency: 'USD' }).format(n);
}

export { formatCurrency }; // eslint-disable-line import/prefer-default-export
