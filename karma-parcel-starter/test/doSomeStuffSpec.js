import { doSomeStuff } from '../src/doSomeStuff';
import assert from 'assert';

describe("test doSomeStuff function", () => {
  it('should do some stuff is NaN without args', () => {
    assert(isNaN(doSomeStuff()));
  });
  it('should do some stuff is: 42 with arg: 20', () => {
    assert(doSomeStuff(20) === 42);
  });
});
