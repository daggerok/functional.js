import test from 'ava';
import { sum } from './calc.js';

test('sum function', t => {
  t.is(sum(1,2), 3);
});
