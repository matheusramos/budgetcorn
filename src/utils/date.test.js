/* @flow */
import { toDateInputString } from './date';

describe('test toDateInputString', () => {
  it('should convert date to string', () => {
    const date = new Date('2018-12-09T21:55:09.021Z');
    expect(toDateInputString(date)).toBe('2018-12-09');
  });
  it('should get today date by default', () => {
    const todayStr = new Date().toISOString().slice(0, 10);
    expect(toDateInputString()).toBe(todayStr);
  });
});
