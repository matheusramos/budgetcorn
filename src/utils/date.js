/* @flow */
function toDateInputString(d: Date = new Date()): string {
  return d.toISOString().slice(0, 10);
}

export { toDateInputString }; // eslint-disable-line import/prefer-default-export
