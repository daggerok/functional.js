import 'babel-polyfill';

export const g = n => n + 1;
export const f = n => n * 2;

export const composingFunctions = x => {
  const afterG = g(x);
  const afterF = f(afterG);
  return afterF;
};

export const wait = time => new Promise(
  (resolve, reject) => setTimeout(
    resolve,
    time
  )
);
