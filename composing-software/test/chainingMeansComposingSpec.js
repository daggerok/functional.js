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

  it('should trace', () => {
    const trace = label => value => {
      console.log(`${label}: ${value}`);
      return value;
    };
    const g = n => n + 1;
    const f = n => n * 2;
    const doAction = value => {
      const beforeG = trace('before g')(value);
      const afterG = trace('after g')(g(beforeG));
      return trace('after f')(f(afterG));
    };
    expect(doAction(20)).toBe(42);
  });
});
