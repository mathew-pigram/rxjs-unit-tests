const marbles = require('jest-marbles');
const rxjs = require('rxjs');


test('generate', () => {

    
    const result$ = rxjs.generate(0, x => x < 10, x => x + 1);
    const expected = marbles.cold('(abcdefghij|)', { a: 0, b: 1, c: 2, d: 3, e: 4, f: 5, g: 6, h:7, i:8, j: 9});

    expect(result$).toBeObservable(expected);
});