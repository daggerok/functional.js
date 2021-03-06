// import 'jasmine'; // expect
//
// describe("compose",  () => {
//   it('should compose Promises', async (done) => {
//     const trace = label => value => {
//       console.log(`${label}: ${value}`);
//       return value;
//     };
//     const g = n => Promise.resolve(trace('g')(n + 1));
//     const f = n => Promise.resolve(trace('f')(n * 2));
//     const composePromises = (...ps) =>
//       ps.reduce((f, g) => x => g(x).then(f));
//     const composition = composePromises(f, g);
//
//     const res = await composition(20)
//       .then(trace('after composing 20'))
//       .then(value => expect(value).toEqual(42))
//       .catch(err => {
//         expect(trace('in catch block')(err)).toBeFalsy();
//       })
//       .then(done);
//   });
// });
