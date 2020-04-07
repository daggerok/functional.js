import test from 'ava';

const first = xs => xs[0];
const rest = xs =>
  xs.filter((value, index) => index !== 0);
const reverse = xs => {
  if (xs.length === 0) return []; // base case
  return reverse(rest(xs)/* <- recursion */).concat(first(xs)); // action
}

test('should reverse empty array', t => {
  t.deepEqual(reverse([]), []); // but:
  t.not(reverse([]), []);
});

test('should reverse non-empty array', t => {
  t.deepEqual(reverse([1, 2, 3]), [3, 2, 1]); // but:
  t.not(reverse([1, 2, 3]), [3, 2, 1]);
});
