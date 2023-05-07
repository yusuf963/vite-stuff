const sumFunc = require('./sum');

test('adds 1 + 2 to equal 3', () => {
  expect(sumFunc(1, 2)).toBe(3);
  expect(sumFunc(3, 2)).toBe(5);
  expect(sumFunc(3, 2)).not.toBe(6);
});
