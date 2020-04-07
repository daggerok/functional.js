import test from 'ava';
import { first, rest } from '../dry';

const sum = xs => {
  if (xs.length === 0) return 0; // base case
  return first(xs) /* action */+ sum(rest(xs)); // <- recursion
}

test('should sum empty array', t => {
  t.is(sum([]), 0, 'oops, expected: 0');
});

test('should sum non-empty array', t => {
  t.is(sum([1, 2, 3]), 6);
});
