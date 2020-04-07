import test from 'ava';
import { first, rest } from '../dry.js';

const reverseIncorrectly = xs => {
  if (xs.length === 0) return []; // base case
  return reverseIncorrectly(rest(xs)/* <- recursion */).concat(first(xs)); // action
}

test('should incorrectly reverse empty array', t => {
  t.deepEqual(reverseIncorrectly([]), []); // but:
  t.not(reverseIncorrectly([]), []);
});

test('should incorrectly reverse non-empty array', t => {
  t.deepEqual(reverseIncorrectly([1, 2, 3]), [3, 2, 1]); // but:
  t.not(reverseIncorrectly([1, 2, 3]), [3, 2, 1]);
});

/* correct */

const reverse = list => {
  const _reduce = (f, acc, xs) => {
    // console.info('acc:', acc, 'xs:', xs, '!xs:', !xs, 'xs.length:', xs.length, 'xs.length === 0:', xs.length === 0)
    if (xs.length === 0) return acc;
    // console.info('first(xs):', first(xs), 'rest(xs):', rest(xs))
    return _reduce(f, f(acc, first(xs)), rest(xs));
  };
  return _reduce((acc, x) => [x].concat(acc), [], list);
};

test('should reverse empty array', t => {
  t.deepEqual(reverse([]), []); // but:
  t.not(reverse([]), []);
});

test('should reverse non-empty array', t => {
  t.deepEqual(reverse([1, 2, 3]), [3, 2, 1]); // but:
  t.not(reverse([1, 2, 3]), [3, 2, 1]);
});
