import { composingFunctions, wait, g, f } from '../src/composingFunctions';
import assert from 'assert';
import 'jasmine'; // expect

describe("test composingFunctions", () => {

  it('should return NaN without args passed into composingFunctions function', () => {
    assert(isNaN(composingFunctions()));
  });

  it('should return 42 with composingFunctions arg: 20', () => {
    assert(composingFunctions(20) === 42);
  });

  it('should wait for Promise 42', async (done) => {
    Promise
      .resolve(
        wait(300)
          .then(() => 20)
          .then(g) // 20 + 1 == 21
          .then(f) // 21 * 2 == 42
      )
      .then(value => {
        console.log(`value: ${value}`);
        assert(value === 42);
      })
      .catch((err) => {
        expect(err).toBeFalsy();
      })
      .then(done);
  });

  it('should async await Promise 21', async (done) => {
    await wait(300)
      .then(() => 20)
      .then(g) // 20 + 1
      .then(value => {
        console.info(`value: ${value}`);
        assert(value === 21);
      })
      .catch((err) => {
        expect(err).toBeFalsy();
      })
      .then(done);
  });
});
