const array3 = require('../array3');

test('maxSpan should return 4 when given [1,2,1,1,3]', () => {
  expect(array3.maxSpan([1,2,1,1,3])).toEqual(4);
});

test('maxSpan should return 6 when given [1,4,2,1,4,1,4]', () => {
  expect(array3.maxSpan([1,4,2,1,4,1,4])).toEqual(6);
});

test('maxSpan should return 6 when given [1,4,2,1,4,4,4]', () => {
  expect(array3.maxSpan([1,4,2,1,4,4,4])).toEqual(6);
});

test('maxSpan should return 3 when given [3,3,3]', () => {
  expect(array3.maxSpan([3,3,3])).toEqual(3);
});

test('maxSpan should return 3 when given [3,9,3]', () => {
  expect(array3.maxSpan([3,9,3])).toEqual(3);
});

test('maxSpan should return 2 when given [3,9,9]', () => {
  expect(array3.maxSpan([3,9,9])).toEqual(2);
});

test('maxSpan should return 1 when given [3,9]', () => {
  expect(array3.maxSpan([3,9])).toEqual(1);
});

test('maxSpan should return 2 when given [3,3]', () => {
  expect(array3.maxSpan([3,3])).toEqual(2);
});

test('maxSpan should return 0 when given []', () => {
  expect(array3.maxSpan([])).toEqual(0);
});

test('maxSpan should return 1 when given [1]', () => {
  expect(array3.maxSpan([1])).toEqual(1);
});

test('fix34 should return [1,3,4,1] when given [1,3,4,1]', () => {
  expect(array3.fix34([1,3,4,1])).toEqual([1,3,4,1]);
});

test('fix34 should return [1,3,4,1,1,3,4] when given [1,3,4,1,1,3,4]', () => {
  expect(array3.fix34([1,3,4,1,1,3,4])).toEqual([1,3,4,1,1,3,4]);
});

test('fix34 should return [3,4,2,2] when given [3,4,2,2]', () => {
  expect(array3.fix34([3,4,2,2])).toEqual([3,4,2,2]);
});

test('fix34 should return [3,4,3,4,2,2] when given [3,4,3,4,2,2]', () => {
  expect(array3.fix34([3,4,3,4,2,2])).toEqual([3,4,3,4,2,2]);
});

test('fix34 should return [2,3,4,3,4,2,2] when given [2,3,4,3,4,2,2]', () => {
  expect(array3.fix34([2,3,4,3,4,2,2])).toEqual([2,3,4,3,4,2,2]);
});

test('fix34 should return [5,3,4,5,5,5,5,5,3,4,3,4] when given [5,3,4,5,5,5,5,5,3,4,3,4]', () => {
  expect(array3.fix34([5,3,4,5,5,5,5,5,3,4,3,4])).toEqual([5,3,4,5,5,5,5,5,3,4,3,4]);
});

test('fix34 should return [3,4,1] when given [3,4,1]', () => {
  expect(array3.fix34([3,4,1])).toEqual([3,4,1]);
});

test('fix34 should return [3,4,1] when given [3,4,1]', () => {
  expect(array3.fix34([3,4,1])).toEqual([3,4,1]);
});

test('fix34 should return [1,1,1] when given [1,1,1]', () => {
  expect(array3.fix34([1,1,1])).toEqual([1,1,1]);
});

test('fix34 should return [1] when given [1]', () => {
  expect(array3.fix34([1])).toEqual([1]);
});

test('fix34 should return [] when given []', () => {
  expect(array3.fix34([])).toEqual([]);
});

test('fix34 should return [7,3,4,7,7] when given [7,3,4,7,7]', () => {
  expect(array3.fix34([7,3,4,7,7])).toEqual([7,3,4,7,7]);
});

test('fix34 should return [3,4,1,3,4,1] when given [3,4,1,3,4,1]', () => {
  expect(array3.fix34([3,4,1,3,4,1])).toEqual([3,4,1,3,4,1]);
});

test('fix34 should return [3,4,1,3,4,1] when given [3,4,1,3,4,1]', () => {
  expect(array3.fix34([3,4,1,3,4,1])).toEqual([3,4,1,3,4,1]);
});

test('fix45 should return [9,4,5,4,5,9] when given [9,4,5,4,5,9]', () => {
  expect(array3.fix45([9,4,5,4,5,9])).toEqual([9,4,5,4,5,9]);
});

test('fix45 should return [1,4,5,1] when given [1,4,5,1]', () => {
  expect(array3.fix45([1,4,5,1])).toEqual([1,4,5,1]);
});

test('fix45 should return [1,4,5,1,1,4,5] when given [1,4,5,1,1,4,5]', () => {
  expect(array3.fix45([1,4,5,1,1,4,5])).toEqual([1,4,5,1,1,4,5]);
});

test('fix45 should return [4,5,4,5,9,9,4,5,9] when given [4,5,4,5,9,9,4,5,9]', () => {
  expect(array3.fix45([4,5,4,5,9,9,4,5,9])).toEqual([4,5,4,5,9,9,4,5,9]);
});

test('fix45 should return [1,1,4,5,4,5] when given [1,1,4,5,4,5]', () => {
  expect(array3.fix45([1,1,4,5,4,5])).toEqual([1,1,4,5,4,5]);
});

test('fix45 should return [4,5,2,2] when given [4,5,2,2]', () => {
  expect(array3.fix45([4,5,2,2])).toEqual([4,5,2,2]);
});

test('fix45 should return [4,5,4,5,2,2] when given [4,5,4,5,2,2]', () => {
  expect(array3.fix45([4,5,4,5,2,2])).toEqual([4,5,4,5,2,2]);
});

test('fix45 should return [4,5,4,5,2] when given [4,5,4,5,2]', () => {
  expect(array3.fix45([4,5,4,5,2])).toEqual([4,5,4,5,2]);
});

test('fix45 should return [1,1,1] when given [1,1,1]', () => {
  expect(array3.fix45([1,1,1])).toEqual([1,1,1]);
});

test('fix45 should return [4,5] when given [4,5]', () => {
  expect(array3.fix45([4,5])).toEqual([4,5]);
});

test('fix45 should return [1,4,5] when given [1,4,5]', () => {
  expect(array3.fix45([1,4,5])).toEqual([1,4,5]);
});

test('fix45 should return [] when given []', () => {
  expect(array3.fix45([])).toEqual([]);
});

test('fix45 should return [1,4,5,4,5] when given [1,4,5,4,5]', () => {
  expect(array3.fix45([1,4,5,4,5])).toEqual([1,4,5,4,5]);
});

test('fix45 should return [4,5,4,5,1] when given [4,5,4,5,1]', () => {
  expect(array3.fix45([4,5,4,5,1])).toEqual([4,5,4,5,1]);
});

test('fix45 should return [3,4,5] when given [3,4,5]', () => {
  expect(array3.fix45([3,4,5])).toEqual([3,4,5]);
});

test('fix45 should return [4,5,1] when given [4,5,1]', () => {
  expect(array3.fix45([4,5,1])).toEqual([4,5,1]);
});

test('fix45 should return [1,4,5] when given [1,4,5]', () => {
  expect(array3.fix45([1,4,5])).toEqual([1,4,5]);
});

test('fix45 should return [2,4,5,2] when given [2,4,5,2]', () => {
  expect(array3.fix45([2,4,5,2])).toEqual([2,4,5,2]);
});

test('canBalance should return true when given [1,1,1,2,1]', () => {
  expect(array3.canBalance([1,1,1,2,1])).toEqual(true);
});

test('canBalance should return false when given [2,1,1,2,1]', () => {
  expect(array3.canBalance([2,1,1,2,1])).toEqual(false);
});

test('canBalance should return true when given [10,10]', () => {
  expect(array3.canBalance([10,10])).toEqual(true);
});

test('canBalance should return true when given [10,0,1,-1,10]', () => {
  expect(array3.canBalance([10,0,1,-1,10])).toEqual(true);
});

test('canBalance should return true when given [1,1,1,1,4]', () => {
  expect(array3.canBalance([1,1,1,1,4])).toEqual(true);
});

test('canBalance should return false when given [2,1,1,1,4]', () => {
  expect(array3.canBalance([2,1,1,1,4])).toEqual(false);
});

test('canBalance should return false when given [2,3,4,1,2]', () => {
  expect(array3.canBalance([2,3,4,1,2])).toEqual(false);
});

test('canBalance should return true when given [1,2,3,1,0,2,3]', () => {
  expect(array3.canBalance([1,2,3,1,0,2,3])).toEqual(true);
});

test('canBalance should return false when given [1,2,3,1,0,1,3]', () => {
  expect(array3.canBalance([1,2,3,1,0,1,3])).toEqual(false);
});

test('canBalance should return false when given [1]', () => {
  expect(array3.canBalance([1])).toEqual(false);
});

test('canBalance should return true when given [1,1,1,2,1]', () => {
  expect(array3.canBalance([1,1,1,2,1])).toEqual(true);
});

test('linearIn should return true when given ([1,2,4,6], [2,4])', () => {
  expect(array3.linearIn([1,2,4,6], [2,4])).toEqual(true);
});

test('linearIn should return false when given ([1,2,4,6], [2,3,4])', () => {
  expect(array3.linearIn([1,2,4,6], [2,3,4])).toEqual(false);
});

test('linearIn should return true when given ([1,2,4,4,6], [2,4])', () => {
  expect(array3.linearIn([1,2,4,4,6], [2,4])).toEqual(true);
});

test('linearIn should return true when given ([2,2,4,4,6,6], [2,4])', () => {
  expect(array3.linearIn([2,2,4,4,6,6], [2,4])).toEqual(true);
});

test('linearIn should return true when given ([2,2,2,2,2], [2,2])', () => {
  expect(array3.linearIn([2,2,2,2,2], [2,2])).toEqual(true);
});

test('linearIn should return false when given ([2,2,2,2,2], [2,4])', () => {
  expect(array3.linearIn([2,2,2,2,2], [2,4])).toEqual(false);
});

test('linearIn should return true when given ([2,2,2,2,4], [2,4])', () => {
  expect(array3.linearIn([2,2,2,2,4], [2,4])).toEqual(true);
});

test('linearIn should return true when given ([1,2,3], [2])', () => {
  expect(array3.linearIn([1,2,3], [2])).toEqual(true);
});

test('linearIn should return false when given ([1,2,3], [-1])', () => {
  expect(array3.linearIn([1,2,3], [-1])).toEqual(false);
});

test('linearIn should return true when given ([1,2,3], [])', () => {
  expect(array3.linearIn([1,2,3], [])).toEqual(true);
});

test('linearIn should return true when given ([-1,0,3,3,3,10,12], [-1,0,3,12])', () => {
  expect(array3.linearIn([-1,0,3,3,3,10,12], [-1,0,3,12])).toEqual(true);
});

test('linearIn should return false when given ([-1,0,3,3,3,10,12], [0,3,12,14])', () => {
  expect(array3.linearIn([-1,0,3,3,3,10,12], [0,3,12,14])).toEqual(false);
});

test('linearIn should return false when given ([-1,0,3,3,3,10,12], [-1,10,11])', () => {
  expect(array3.linearIn([-1,0,3,3,3,10,12], [-1,10,11])).toEqual(false);
});

test('squareUp should return [0,0,1,0,2,1,3,2,1] when given 3', () => {
  expect(array3.squareUp(3)).toEqual([0,0,1,0,2,1,3,2,1]);
});

test('squareUp should return [0,1,2,1] when given 2', () => {
  expect(array3.squareUp(2)).toEqual([0,1,2,1]);
});

test('squareUp should return [0,0,0,1,0,0,2,1,0,3,2,1,4,3,2,1] when given 4', () => {
  expect(array3.squareUp(4)).toEqual([0,0,0,1,0,0,2,1,0,3,2,1,4,3,2,1]);
});

test('squareUp should return [1] when given 1', () => {
  expect(array3.squareUp(1)).toEqual([1]);
});

test('squareUp should return [] when given 0', () => {
  expect(array3.squareUp(0)).toEqual([]);
});

test('seriesUp should return [1,1,2,1,2,3] when given 3', () => {
  expect(array3.seriesUp(3)).toEqual([1,1,2,1,2,3]);
});

test('seriesUp should return [1,1,2,1,2,3,1,2,3,4] when given 4', () => {
  expect(array3.seriesUp(4)).toEqual([1,1,2,1,2,3,1,2,3,4]);
});

test('seriesUp should return [1,1,2] when given 2', () => {
  expect(array3.seriesUp(2)).toEqual([1,1,2]);
});

test('seriesUp should return [1] when given 1', () => {
  expect(array3.seriesUp(1)).toEqual([1]);
});

test('seriesUp should return [] when given 0', () => {
  expect(array3.seriesUp(0)).toEqual([]);
});

test('maxMirror should return 3 when given [1,2,3,8,9,3,2,1]', () => {
  expect(array3.maxMirror([1,2,3,8,9,3,2,1])).toEqual(3);
});

test('maxMirror should return 3 when given [1,2,1,4]', () => {
  expect(array3.maxMirror([1,2,1,4])).toEqual(3);
});

test('maxMirror should return 2 when given [7,1,2,9,7,2,1]', () => {
  expect(array3.maxMirror([7,1,2,9,7,2,1])).toEqual(2);
});

test('maxMirror should return 4 when given [21,22,9,8,7,6,23,24,6,7,8,9,25,7,8,9]', () => {
  expect(array3.maxMirror([21,22,9,8,7,6,23,24,6,7,8,9,25,7,8,9])).toEqual(4);
});

test('maxMirror should return 4 when given [1,2,1,20,21,1,2,1,2,23,24,2,1,2,1,25]', () => {
  expect(array3.maxMirror([1,2,1,20,21,1,2,1,2,23,24,2,1,2,1,25])).toEqual(4);
});

test('maxMirror should return 5 when given [1,2,3,2,1]', () => {
  expect(array3.maxMirror([1,2,3,2,1])).toEqual(5);
});

test('maxMirror should return 2 when given [1,2,3,3,8]', () => {
  expect(array3.maxMirror([1,2,3,3,8])).toEqual(2);
});

test('maxMirror should return 2 when given [1,2,7,8,1,7,2]', () => {
  expect(array3.maxMirror([1,2,7,8,1,7,2])).toEqual(2);
});

test('maxMirror should return 3 when given [1,1,1]', () => {
  expect(array3.maxMirror([1,1,1])).toEqual(3);
});

test('maxMirror should return 1 when given [1]', () => {
  expect(array3.maxMirror([1])).toEqual(1);
});

test('maxMirror should return 0 when given []', () => {
  expect(array3.maxMirror([])).toEqual(0);
});

test('maxMirror should return 3 when given [9,1,1,4,2,1,1,1]', () => {
  expect(array3.maxMirror([9,1,1,4,2,1,1,1])).toEqual(3);
});

test('maxMirror should return 7 when given [5,9,9,4,5,4,9,9,2]', () => {
  expect(array3.maxMirror([5,9,9,4,5,4,9,9,2])).toEqual(7);
});

test('maxMirror should return 2 when given [5,9,9,6,5,4,9,9,2]', () => {
  expect(array3.maxMirror([5,9,9,6,5,4,9,9,2])).toEqual(2);
});

test('maxMirror should return 3 when given [5,9,1,6,5,4,1,9,5]', () => {
  expect(array3.maxMirror([5,9,1,6,5,4,1,9,5])).toEqual(3);
});

test('countClumps should return 2 when given [1,2,2,3,4,4]', () => {
  expect(array3.countClumps([1,2,2,3,4,4])).toEqual(2);
});

test('countClumps should return 2 when given [1,1,2,1,1]', () => {
  expect(array3.countClumps([1,1,2,1,1])).toEqual(2);
});

test('countClumps should return 1 when given [1,1,1,1,1]', () => {
  expect(array3.countClumps([1,1,1,1,1])).toEqual(1);
});

test('countClumps should return 0 when given [1,2,3]', () => {
  expect(array3.countClumps([1,2,3])).toEqual(0);
});

test('countClumps should return 4 when given [2,2,1,1,1,2,1,1,2,2]', () => {
  expect(array3.countClumps([2,2,1,1,1,2,1,1,2,2])).toEqual(4);
});

test('countClumps should return 4 when given [0,2,2,1,1,1,2,1,1,2,2]', () => {
  expect(array3.countClumps([0,2,2,1,1,1,2,1,1,2,2])).toEqual(4);
});

test('countClumps should return 5 when given [0,0,2,2,1,1,1,2,1,1,2,2]', () => {
  expect(array3.countClumps([0,0,2,2,1,1,1,2,1,1,2,2])).toEqual(5);
});

test('countClumps should return 5 when given [0,0,0,2,2,1,1,1,2,1,1,2,2]', () => {
  expect(array3.countClumps([0,0,0,2,2,1,1,1,2,1,1,2,2])).toEqual(5);
});

test('countClumps should return 0 when given []', () => {
  expect(array3.countClumps([])).toEqual(0);
});
