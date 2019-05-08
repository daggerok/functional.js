export const g = n => n + 1;
export const f = n => n * 2;
export const doSomeStuff = x => {
  const afterG = g(x);
  const afterF = f(afterG);
  return afterF;
};
