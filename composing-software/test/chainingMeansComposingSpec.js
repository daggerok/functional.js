// import assert from 'assert';
import 'jasmine'; // expect

describe("if you are chaining, you are composing", () => {
  it('test it', () => {
    const g = n => n + 1;
    const f = n => n * 2;
    const doStuffBetter = x => f(g(x));
    const result = doStuffBetter(20);
    console.log(result);
    expect(result).toBeDefined();
  });
});
