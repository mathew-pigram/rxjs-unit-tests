const marbles = require('jest-marbles');
const rxjs = require('rxjs');


test('iif', () => {

    const first = marbles.cold('---a---|');
    const second = marbles.cold('-b---c|');


    const result$ = rxjs.iif(() => 15 < 10, first, second)
    const expected = marbles.cold('-b---c|');

    expect(result$).toBeObservable(expected);
});