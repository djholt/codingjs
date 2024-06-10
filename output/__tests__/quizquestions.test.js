const quizquestions = require('./quizquestions');

test('sumDownBy2 should return 16 when given 7', () => {
  expect(quizquestions.sumDownBy2(7)).toEqual(16);
});

test('sumDownBy2 should return 20 when given 8', () => {
  expect(quizquestions.sumDownBy2(8)).toEqual(20);
});

test('sumDownBy2 should return 0 when given 0', () => {
  expect(quizquestions.sumDownBy2(0)).toEqual(0);
});

test('sumDownBy2 should return 1 when given 1', () => {
  expect(quizquestions.sumDownBy2(1)).toEqual(1);
});

test('sumDownBy2 should return 0 when given -1', () => {
  expect(quizquestions.sumDownBy2(-1)).toEqual(0);
});

test('sumDownBy2 should return 30 when given 10', () => {
  expect(quizquestions.sumDownBy2(10)).toEqual(30);
});

test('sumDownBy2 should return 9 when given 5', () => {
  expect(quizquestions.sumDownBy2(5)).toEqual(9);
});

test('sumDownBy2 should return 0 when given -5', () => {
  expect(quizquestions.sumDownBy2(-5)).toEqual(0);
});

test('sumDownBy2 should return 650 when given 50', () => {
  expect(quizquestions.sumDownBy2(50)).toEqual(650);
});

test('sumDownBy2 should return 2 when given 2', () => {
  expect(quizquestions.sumDownBy2(2)).toEqual(2);
});

test('sumDownBy2 should return 4 when given 3', () => {
  expect(quizquestions.sumDownBy2(3)).toEqual(4);
});

test('makes8 should return true when given (5, 8)', () => {
  expect(quizquestions.makes8(5, 8)).toEqual(true);
});

test('makes8 should return true when given (3, 8)', () => {
  expect(quizquestions.makes8(3, 8)).toEqual(true);
});

test('makes8 should return false when given (3, 4)', () => {
  expect(quizquestions.makes8(3, 4)).toEqual(false);
});

test('makes8 should return true when given (4, 4)', () => {
  expect(quizquestions.makes8(4, 4)).toEqual(true);
});

test('makes8 should return false when given (5, 2)', () => {
  expect(quizquestions.makes8(5, 2)).toEqual(false);
});

test('makes8 should return true when given (5, 3)', () => {
  expect(quizquestions.makes8(5, 3)).toEqual(true);
});

test('makes8 should return true when given (8, 7)', () => {
  expect(quizquestions.makes8(8, 7)).toEqual(true);
});

test('makes8 should return true when given (8, 8)', () => {
  expect(quizquestions.makes8(8, 8)).toEqual(true);
});

test('makes8 should return true when given (-16, 24)', () => {
  expect(quizquestions.makes8(-16, 24)).toEqual(true);
});

test('makes8 should return false when given (9, 1)', () => {
  expect(quizquestions.makes8(9, 1)).toEqual(false);
});

test('countOdds should return 2 when given [2,1,2,3,4]', () => {
  expect(quizquestions.countOdds([2,1,2,3,4])).toEqual(2);
});

test('countOdds should return 0 when given [2,2,0]', () => {
  expect(quizquestions.countOdds([2,2,0])).toEqual(0);
});

test('countOdds should return 3 when given [1,3,5]', () => {
  expect(quizquestions.countOdds([1,3,5])).toEqual(3);
});

test('countOdds should return 0 when given []', () => {
  expect(quizquestions.countOdds([])).toEqual(0);
});

test('countOdds should return 3 when given [11,9,0,1]', () => {
  expect(quizquestions.countOdds([11,9,0,1])).toEqual(3);
});

test('countOdds should return 2 when given [2,11,9,0]', () => {
  expect(quizquestions.countOdds([2,11,9,0])).toEqual(2);
});

test('countOdds should return 0 when given [2]', () => {
  expect(quizquestions.countOdds([2])).toEqual(0);
});

test('countOdds should return 1 when given [2,5,12]', () => {
  expect(quizquestions.countOdds([2,5,12])).toEqual(1);
});

test('fib should return 0 when given 0', () => {
  expect(quizquestions.fib(0)).toEqual(0);
});

test('fib should return 1 when given 1', () => {
  expect(quizquestions.fib(1)).toEqual(1);
});

test('fib should return 1 when given 2', () => {
  expect(quizquestions.fib(2)).toEqual(1);
});

test('fib should return 2 when given 3', () => {
  expect(quizquestions.fib(3)).toEqual(2);
});

test('fib should return 3 when given 4', () => {
  expect(quizquestions.fib(4)).toEqual(3);
});

test('fib should return 5 when given 5', () => {
  expect(quizquestions.fib(5)).toEqual(5);
});

test('fib should return 8 when given 6', () => {
  expect(quizquestions.fib(6)).toEqual(8);
});

test('fib should return 13 when given 7', () => {
  expect(quizquestions.fib(7)).toEqual(13);
});
