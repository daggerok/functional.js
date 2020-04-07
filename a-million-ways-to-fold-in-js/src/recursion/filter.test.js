import test from 'ava';
import { first, rest } from '../dry.js';

const filter = (predicate, list) => {
  const _reduce = (f, acc, xs) => {
    if (xs.length === 0) return acc;
    return _reduce(f, f(acc, first(xs)), rest(xs));
  };
  return _reduce((acc, x) => predicate(x) ? acc.concat(x) : acc, [], list);
};

test('should filter', t => {
  t.deepEqual(filter(x => x > 1.5, [1, 2, 3]), [2, 3]);
});
