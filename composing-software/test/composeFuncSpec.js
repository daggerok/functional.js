// import assert from 'assert';
import 'jasmine'; // expect

describe('compose', () => {
  it('test', () => {
    const compose = (f, g) => x => f(g(x));
    const doubleIt = n => n * 2;
    const incrementIt = n => n + 1;
    const transform = compose(doubleIt, incrementIt);
    const result = transform(3);
    console.log(result);
    expect(result).toBe(8);
  });
});
