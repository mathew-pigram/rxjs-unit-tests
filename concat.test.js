const marbles = require('jest-marbles');
const rxjs = require('rxjs');

test('concat', () => {
  const first = marbles.cold(      '-a----|');
  const second = marbles.cold(     'j|');
  const expected = marbles.cold(   '-a----j|', { a: 'a', j: 'j'});
  
  const result$ = rxjs.concat(first, second);
  expect(result$).toBeObservable(expected);
});