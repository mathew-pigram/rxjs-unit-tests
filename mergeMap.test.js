const rxjs = require('rxjs');
const operators = require('rxjs/operators');
const marbles = require('jest-marbles');


test('mergeMap easy', () => {
  const first = marbles.cold(   '1----2-----3|');
  const second = marbles.cold(  '5-5-5|');
  const expected = marbles.cold('a-a-ab-b-b-c-c-c|', {a: 5, b: 10, c: 15});

  const result$ = first.pipe(
    operators.mergeMap(y => 
      second.pipe(operators.map(z => y * z))
    ), 
    operators.catchError(x => console.log(x)
  ));

  expect(result$).toBeObservable(expected);
});




// test('mergeMap harder', () => {
//   const first = marbles.cold(   '1-23|');
//   const second = marbles.cold(  '5-5-5|');
//   const expected = marbles.cold('a-(ab)|', { a:5, b:10, c:15});

//   const result$ = first.pipe(
//     operators.mergeMap(y => 
//       second.pipe(operators.map(z => y * z))
//     ), 
//     operators.catchError(x => console.log(x)
//   ));

//   expect(result$).toBeObservable(expected);
// });
