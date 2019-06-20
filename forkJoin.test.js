const marbles = require('jest-marbles');
const rxjs = require('rxjs');

test('forkJoin', () => {
  const first = marbles.hot(      '-a--b------c-d-e---|');
  const second = marbles.hot(     '--------f---g-h-i---j|');
  const third = marbles.hot(      '--1--2-3-4----|');
  const expected = marbles.cold(  '---------------------(a|)', { a: ['e','j','4']});

  const result$ = rxjs.forkJoin([first, second, third]);
  expect(result$).toBeObservable(expected);
});