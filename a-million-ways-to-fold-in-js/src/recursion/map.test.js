import test from 'ava';
import { first, rest } from '../dry.js';

const map = (mapper, list) => {
  const _reduce = (f, acc, xs) => {
    if (xs.length === 0) return acc;
    return _reduce(f, f(acc, first(xs)), rest(xs));
  };
  return _reduce((acc, x) => acc.concat(mapper(x)), [], list);
};

test('should map', t => {
  t.deepEqual(map(x => x * x, [1, 2, 3]), [1, 4, 9]);
});
