const marbles = require('jest-marbles');
const rxjs = require('rxjs');

test('combineLatest', () => {
  const first = marbles.hot(      '-a--b-------|');
  const second = marbles.hot(     '---------f---|');
  const third = marbles.hot(      '--1---2-3-4----|');
  const expected = marbles.cold(  '---------ab----|', { a: ['b', 'f', '3'], b: ['b', 'f', '4']});

  const result$ = rxjs.combineLatest(first, second, third);
  expect(result$).toBeObservable(expected);
});

test('combineLatest', () => {
  const first = marbles.hot(      '-a--b-------|');
  const second = marbles.hot(     '----f---|');
  const third = marbles.hot(      '--1-4|');
  const expected = marbles.cold(  '----(ab)----|', { a: ['b', 'f', '1'], b: ['b', 'f', '4']});

  const result$ = rxjs.combineLatest(first, second, third);
  expect(result$).toBeObservable(expected);
});