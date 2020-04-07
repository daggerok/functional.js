import test from 'ava';
import { first, rest } from '../dry.js';

const sumIncorrectly = xs => {
  // console.info('calling sumIncorrectly for argument', xs);
  if (xs.length === 0) return 0; // base case
  return first(xs)/* action */+ sumIncorrectly(rest(xs)); // <- recursion
}

test('should incorrectly sum empty array', t => {
  t.is(sumIncorrectly([]), 0, 'oops, expected: 0');
});

test('should incorrectly sum non-empty array', t => {
  t.is(sumIncorrectly([1, 2, 3]), 6);
});

/* correct */

const sum = list => {
  // console.info('calling sum for argument', list);
  const _sum = (acc, xs) => {
    // console.info('calling _sum for arguments', acc, xs);
    if (xs.length === 0) return acc;
    return _sum(acc + first(xs), rest(xs));
  };
  return _sum(0, list);
};

test('should sum empty array', t => {
  t.is(sum([]), 0);
});

test('should sum non-empty array', t => {
  t.is(sum([1, 2, 3]), 6);
});
