const marbles = require('jest-marbles');
const rxjs = require('rxjs');


test('from', () => {

    const source = ['a', 'b', 'c', 'd'];

    const result$ = rxjs.from(source);
    const expected = marbles.cold('(abcd|)');

    expect(result$).toBeObservable(expected);
});