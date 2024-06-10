const array1 = require('./array1');

test('firstLast6 should return true when given [1,2,6]', () => {
  expect(array1.firstLast6([1,2,6])).toEqual(true);
});

test('firstLast6 should return true when given [6,1,2,3]', () => {
  expect(array1.firstLast6([6,1,2,3])).toEqual(true);
});

test('firstLast6 should return false when given [13,6,1,2,3]', () => {
  expect(array1.firstLast6([13,6,1,2,3])).toEqual(false);
});

test('firstLast6 should return true when given [13,6,1,2,6]', () => {
  expect(array1.firstLast6([13,6,1,2,6])).toEqual(true);
});

test('firstLast6 should return false when given [3,2,1]', () => {
  expect(array1.firstLast6([3,2,1])).toEqual(false);
});

test('firstLast6 should return false when given [3,6,1]', () => {
  expect(array1.firstLast6([3,6,1])).toEqual(false);
});

test('firstLast6 should return true when given [3,6]', () => {
  expect(array1.firstLast6([3,6])).toEqual(true);
});

test('firstLast6 should return true when given [6]', () => {
  expect(array1.firstLast6([6])).toEqual(true);
});

test('firstLast6 should return false when given [3]', () => {
  expect(array1.firstLast6([3])).toEqual(false);
});

test('firstLast6 should return true when given [5,6]', () => {
  expect(array1.firstLast6([5,6])).toEqual(true);
});

test('firstLast6 should return false when given [5,5]', () => {
  expect(array1.firstLast6([5,5])).toEqual(false);
});

test('firstLast6 should return true when given [1,2,3,4,6]', () => {
  expect(array1.firstLast6([1,2,3,4,6])).toEqual(true);
});

test('firstLast6 should return false when given [1,2,3,4]', () => {
  expect(array1.firstLast6([1,2,3,4])).toEqual(false);
});

test('sameFirstLast should return false when given [1,2,3]', () => {
  expect(array1.sameFirstLast([1,2,3])).toEqual(false);
});

test('sameFirstLast should return true when given [1,2,3,1]', () => {
  expect(array1.sameFirstLast([1,2,3,1])).toEqual(true);
});

test('sameFirstLast should return true when given [1,2,1]', () => {
  expect(array1.sameFirstLast([1,2,1])).toEqual(true);
});

test('sameFirstLast should return true when given [7]', () => {
  expect(array1.sameFirstLast([7])).toEqual(true);
});

test('sameFirstLast should return false when given []', () => {
  expect(array1.sameFirstLast([])).toEqual(false);
});

test('sameFirstLast should return true when given [1,2,3,4,5,1]', () => {
  expect(array1.sameFirstLast([1,2,3,4,5,1])).toEqual(true);
});

test('sameFirstLast should return false when given [1,2,3,4,5,13]', () => {
  expect(array1.sameFirstLast([1,2,3,4,5,13])).toEqual(false);
});

test('sameFirstLast should return true when given [13,2,3,4,5,13]', () => {
  expect(array1.sameFirstLast([13,2,3,4,5,13])).toEqual(true);
});

test('sameFirstLast should return true when given [7,7]', () => {
  expect(array1.sameFirstLast([7,7])).toEqual(true);
});

test('makePi should return [3,1,4] when given ()', () => {
  expect(array1.makePi()).toEqual([3,1,4]);
});

test('commonEnd should return true when given ([1,2,3], [7,3])', () => {
  expect(array1.commonEnd([1,2,3], [7,3])).toEqual(true);
});

test('commonEnd should return false when given ([1,2,3], [7,3,2])', () => {
  expect(array1.commonEnd([1,2,3], [7,3,2])).toEqual(false);
});

test('commonEnd should return true when given ([1,2,3], [1,3])', () => {
  expect(array1.commonEnd([1,2,3], [1,3])).toEqual(true);
});

test('commonEnd should return true when given ([1,2,3], [1])', () => {
  expect(array1.commonEnd([1,2,3], [1])).toEqual(true);
});

test('commonEnd should return false when given ([1,2,3], [2])', () => {
  expect(array1.commonEnd([1,2,3], [2])).toEqual(false);
});

test('sum3 should return 6 when given [1,2,3]', () => {
  expect(array1.sum3([1,2,3])).toEqual(6);
});

test('sum3 should return 18 when given [5,11,2]', () => {
  expect(array1.sum3([5,11,2])).toEqual(18);
});

test('sum3 should return 7 when given [7,0,0]', () => {
  expect(array1.sum3([7,0,0])).toEqual(7);
});

test('sum3 should return 4 when given [1,2,1]', () => {
  expect(array1.sum3([1,2,1])).toEqual(4);
});

test('sum3 should return 3 when given [1,1,1]', () => {
  expect(array1.sum3([1,1,1])).toEqual(3);
});

test('sum3 should return 11 when given [2,7,2]', () => {
  expect(array1.sum3([2,7,2])).toEqual(11);
});

test('rotateLeft3 should return [2,3,1] when given [1,2,3]', () => {
  expect(array1.rotateLeft3([1,2,3])).toEqual([2,3,1]);
});

test('rotateLeft3 should return [11,9,5] when given [5,11,9]', () => {
  expect(array1.rotateLeft3([5,11,9])).toEqual([11,9,5]);
});

test('rotateLeft3 should return [0,0,7] when given [7,0,0]', () => {
  expect(array1.rotateLeft3([7,0,0])).toEqual([0,0,7]);
});

test('rotateLeft3 should return [2,1,1] when given [1,2,1]', () => {
  expect(array1.rotateLeft3([1,2,1])).toEqual([2,1,1]);
});

test('rotateLeft3 should return [0,1,0] when given [0,0,1]', () => {
  expect(array1.rotateLeft3([0,0,1])).toEqual([0,1,0]);
});

test('reverse3 should return [3,2,1] when given [3,2,1]', () => {
  expect(array1.reverse3([3,2,1])).toEqual([3,2,1]);
});

test('reverse3 should return [9,11,5] when given [9,11,5]', () => {
  expect(array1.reverse3([9,11,5])).toEqual([9,11,5]);
});

test('reverse3 should return [0,0,7] when given [0,0,7]', () => {
  expect(array1.reverse3([0,0,7])).toEqual([0,0,7]);
});

test('reverse3 should return [2,1,2] when given [2,1,2]', () => {
  expect(array1.reverse3([2,1,2])).toEqual([2,1,2]);
});

test('reverse3 should return [1,2,1] when given [1,2,1]', () => {
  expect(array1.reverse3([1,2,1])).toEqual([1,2,1]);
});

test('reverse3 should return [3,11,2] when given [3,11,2]', () => {
  expect(array1.reverse3([3,11,2])).toEqual([3,11,2]);
});

test('reverse3 should return [5,6,0] when given [5,6,0]', () => {
  expect(array1.reverse3([5,6,0])).toEqual([5,6,0]);
});

test('reverse3 should return [3,2,7] when given [3,2,7]', () => {
  expect(array1.reverse3([3,2,7])).toEqual([3,2,7]);
});

test('maxEnd3 should return [3,3,3] when given [3,3,3]', () => {
  expect(array1.maxEnd3([3,3,3])).toEqual([3,3,3]);
});

test('maxEnd3 should return [11,11,11] when given [11,11,11]', () => {
  expect(array1.maxEnd3([11,11,11])).toEqual([11,11,11]);
});

test('maxEnd3 should return [3,3,3] when given [3,3,3]', () => {
  expect(array1.maxEnd3([3,3,3])).toEqual([3,3,3]);
});

test('maxEnd3 should return [11,11,11] when given [11,11,11]', () => {
  expect(array1.maxEnd3([11,11,11])).toEqual([11,11,11]);
});

test('maxEnd3 should return [11,11,11] when given [11,11,11]', () => {
  expect(array1.maxEnd3([11,11,11])).toEqual([11,11,11]);
});

test('maxEnd3 should return [2,2,2] when given [2,2,2]', () => {
  expect(array1.maxEnd3([2,2,2])).toEqual([2,2,2]);
});

test('maxEnd3 should return [2,2,2] when given [2,2,2]', () => {
  expect(array1.maxEnd3([2,2,2])).toEqual([2,2,2]);
});

test('maxEnd3 should return [1,1,1] when given [1,1,1]', () => {
  expect(array1.maxEnd3([1,1,1])).toEqual([1,1,1]);
});

test('sum2 should return 3 when given [1,2,3]', () => {
  expect(array1.sum2([1,2,3])).toEqual(3);
});

test('sum2 should return 2 when given [1,1]', () => {
  expect(array1.sum2([1,1])).toEqual(2);
});

test('sum2 should return 2 when given [1,1,1,1]', () => {
  expect(array1.sum2([1,1,1,1])).toEqual(2);
});

test('sum2 should return 3 when given [1,2]', () => {
  expect(array1.sum2([1,2])).toEqual(3);
});

test('sum2 should return 1 when given [1]', () => {
  expect(array1.sum2([1])).toEqual(1);
});

test('sum2 should return 0 when given []', () => {
  expect(array1.sum2([])).toEqual(0);
});

test('sum2 should return 9 when given [4,5,6]', () => {
  expect(array1.sum2([4,5,6])).toEqual(9);
});

test('sum2 should return 4 when given [4]', () => {
  expect(array1.sum2([4])).toEqual(4);
});

test('middleWay should return [2,5] when given ([1,2,3], [4,5,6])', () => {
  expect(array1.middleWay([1,2,3], [4,5,6])).toEqual([2,5]);
});

test('middleWay should return [7,8] when given ([7,7,7], [3,8,0])', () => {
  expect(array1.middleWay([7,7,7], [3,8,0])).toEqual([7,8]);
});

test('middleWay should return [2,4] when given ([5,2,9], [1,4,5])', () => {
  expect(array1.middleWay([5,2,9], [1,4,5])).toEqual([2,4]);
});

test('middleWay should return [9,8] when given ([1,9,7], [4,8,8])', () => {
  expect(array1.middleWay([1,9,7], [4,8,8])).toEqual([9,8]);
});

test('middleWay should return [2,1] when given ([1,2,3], [3,1,4])', () => {
  expect(array1.middleWay([1,2,3], [3,1,4])).toEqual([2,1]);
});

test('middleWay should return [2,1] when given ([1,2,3], [4,1,1])', () => {
  expect(array1.middleWay([1,2,3], [4,1,1])).toEqual([2,1]);
});

test('makeEnds should return [1,3] when given [1,2,3]', () => {
  expect(array1.makeEnds([1,2,3])).toEqual([1,3]);
});

test('makeEnds should return [1,4] when given [1,2,3,4]', () => {
  expect(array1.makeEnds([1,2,3,4])).toEqual([1,4]);
});

test('makeEnds should return [7,2] when given [7,4,6,2]', () => {
  expect(array1.makeEnds([7,4,6,2])).toEqual([7,2]);
});

test('makeEnds should return [1,3] when given [1,2,2,2,2,2,2,3]', () => {
  expect(array1.makeEnds([1,2,2,2,2,2,2,3])).toEqual([1,3]);
});

test('makeEnds should return [7,4] when given [7,4]', () => {
  expect(array1.makeEnds([7,4])).toEqual([7,4]);
});

test('makeEnds should return [7,7] when given [7]', () => {
  expect(array1.makeEnds([7])).toEqual([7,7]);
});

test('makeEnds should return [5,9] when given [5,2,9]', () => {
  expect(array1.makeEnds([5,2,9])).toEqual([5,9]);
});

test('makeEnds should return [2,1] when given [2,3,4,1]', () => {
  expect(array1.makeEnds([2,3,4,1])).toEqual([2,1]);
});

test('has23 should return true when given [2,5]', () => {
  expect(array1.has23([2,5])).toEqual(true);
});

test('has23 should return true when given [4,3]', () => {
  expect(array1.has23([4,3])).toEqual(true);
});

test('has23 should return false when given [4,5]', () => {
  expect(array1.has23([4,5])).toEqual(false);
});

test('has23 should return true when given [2,2]', () => {
  expect(array1.has23([2,2])).toEqual(true);
});

test('has23 should return true when given [3,2]', () => {
  expect(array1.has23([3,2])).toEqual(true);
});

test('has23 should return true when given [3,3]', () => {
  expect(array1.has23([3,3])).toEqual(true);
});

test('has23 should return false when given [7,7]', () => {
  expect(array1.has23([7,7])).toEqual(false);
});

test('has23 should return true when given [3,9]', () => {
  expect(array1.has23([3,9])).toEqual(true);
});

test('has23 should return false when given [9,5]', () => {
  expect(array1.has23([9,5])).toEqual(false);
});

test('no23 should return true when given [4,5]', () => {
  expect(array1.no23([4,5])).toEqual(true);
});

test('no23 should return false when given [4,2]', () => {
  expect(array1.no23([4,2])).toEqual(false);
});

test('no23 should return false when given [3,5]', () => {
  expect(array1.no23([3,5])).toEqual(false);
});

test('no23 should return true when given [1,9]', () => {
  expect(array1.no23([1,9])).toEqual(true);
});

test('no23 should return false when given [2,9]', () => {
  expect(array1.no23([2,9])).toEqual(false);
});

test('no23 should return false when given [1,3]', () => {
  expect(array1.no23([1,3])).toEqual(false);
});

test('no23 should return true when given [1,1]', () => {
  expect(array1.no23([1,1])).toEqual(true);
});

test('no23 should return false when given [2,2]', () => {
  expect(array1.no23([2,2])).toEqual(false);
});

test('no23 should return false when given [3,3]', () => {
  expect(array1.no23([3,3])).toEqual(false);
});

test('no23 should return true when given [7,8]', () => {
  expect(array1.no23([7,8])).toEqual(true);
});

test('no23 should return true when given [8,7]', () => {
  expect(array1.no23([8,7])).toEqual(true);
});

test('makeLast should return [0,0,0,0,0,6] when given [4,5,6]', () => {
  expect(array1.makeLast([4,5,6])).toEqual([0,0,0,0,0,6]);
});

test('makeLast should return [0,0,0,2] when given [1,2]', () => {
  expect(array1.makeLast([1,2])).toEqual([0,0,0,2]);
});

test('makeLast should return [0,3] when given [3]', () => {
  expect(array1.makeLast([3])).toEqual([0,3]);
});

test('makeLast should return [0,0] when given [0]', () => {
  expect(array1.makeLast([0])).toEqual([0,0]);
});

test('makeLast should return [0,0,0,0,0,7] when given [7,7,7]', () => {
  expect(array1.makeLast([7,7,7])).toEqual([0,0,0,0,0,7]);
});

test('makeLast should return [0,0,0,0,0,4] when given [3,1,4]', () => {
  expect(array1.makeLast([3,1,4])).toEqual([0,0,0,0,0,4]);
});

test('makeLast should return [0,0,0,0,0,0,0,4] when given [1,2,3,4]', () => {
  expect(array1.makeLast([1,2,3,4])).toEqual([0,0,0,0,0,0,0,4]);
});

test('makeLast should return [0,0,0,0,0,0,0,0] when given [1,2,3,0]', () => {
  expect(array1.makeLast([1,2,3,0])).toEqual([0,0,0,0,0,0,0,0]);
});

test('makeLast should return [0,0,0,4] when given [2,4]', () => {
  expect(array1.makeLast([2,4])).toEqual([0,0,0,4]);
});

test('double23 should return true when given [2,2]', () => {
  expect(array1.double23([2,2])).toEqual(true);
});

test('double23 should return true when given [3,3]', () => {
  expect(array1.double23([3,3])).toEqual(true);
});

test('double23 should return false when given [2,3]', () => {
  expect(array1.double23([2,3])).toEqual(false);
});

test('double23 should return false when given [3,2]', () => {
  expect(array1.double23([3,2])).toEqual(false);
});

test('double23 should return false when given [4,5]', () => {
  expect(array1.double23([4,5])).toEqual(false);
});

test('double23 should return false when given [2]', () => {
  expect(array1.double23([2])).toEqual(false);
});

test('double23 should return false when given [3]', () => {
  expect(array1.double23([3])).toEqual(false);
});

test('double23 should return false when given []', () => {
  expect(array1.double23([])).toEqual(false);
});

test('double23 should return false when given [3,4]', () => {
  expect(array1.double23([3,4])).toEqual(false);
});

test('fix23 should return [1,2,0] when given [1,2,0]', () => {
  expect(array1.fix23([1,2,0])).toEqual([1,2,0]);
});

test('fix23 should return [2,0,5] when given [2,0,5]', () => {
  expect(array1.fix23([2,0,5])).toEqual([2,0,5]);
});

test('fix23 should return [1,2,1] when given [1,2,1]', () => {
  expect(array1.fix23([1,2,1])).toEqual([1,2,1]);
});

test('fix23 should return [3,2,1] when given [3,2,1]', () => {
  expect(array1.fix23([3,2,1])).toEqual([3,2,1]);
});

test('fix23 should return [2,2,0] when given [2,2,0]', () => {
  expect(array1.fix23([2,2,0])).toEqual([2,2,0]);
});

test('fix23 should return [2,0,3] when given [2,0,3]', () => {
  expect(array1.fix23([2,0,3])).toEqual([2,0,3]);
});

test('start1 should return 2 when given ([1,2,3], [1,3])', () => {
  expect(array1.start1([1,2,3], [1,3])).toEqual(2);
});

test('start1 should return 1 when given ([7,2,3], [1])', () => {
  expect(array1.start1([7,2,3], [1])).toEqual(1);
});

test('start1 should return 1 when given ([1,2], [])', () => {
  expect(array1.start1([1,2], [])).toEqual(1);
});

test('start1 should return 1 when given ([], [1,2])', () => {
  expect(array1.start1([], [1,2])).toEqual(1);
});

test('start1 should return 0 when given ([7], [])', () => {
  expect(array1.start1([7], [])).toEqual(0);
});

test('start1 should return 1 when given ([7], [1])', () => {
  expect(array1.start1([7], [1])).toEqual(1);
});

test('start1 should return 2 when given ([1], [1])', () => {
  expect(array1.start1([1], [1])).toEqual(2);
});

test('start1 should return 0 when given ([7], [8])', () => {
  expect(array1.start1([7], [8])).toEqual(0);
});

test('start1 should return 0 when given ([], [])', () => {
  expect(array1.start1([], [])).toEqual(0);
});

test('start1 should return 2 when given ([1,3], [1])', () => {
  expect(array1.start1([1,3], [1])).toEqual(2);
});

test('biggerTwo should return [3,4] when given ([1,2], [3,4])', () => {
  expect(array1.biggerTwo([1,2], [3,4])).toEqual([3,4]);
});

test('biggerTwo should return [3,4] when given ([3,4], [1,2])', () => {
  expect(array1.biggerTwo([3,4], [1,2])).toEqual([3,4]);
});

test('biggerTwo should return [1,2] when given ([1,1], [1,2])', () => {
  expect(array1.biggerTwo([1,1], [1,2])).toEqual([1,2]);
});

test('biggerTwo should return [2,1] when given ([2,1], [1,1])', () => {
  expect(array1.biggerTwo([2,1], [1,1])).toEqual([2,1]);
});

test('biggerTwo should return [2,2] when given ([2,2], [1,3])', () => {
  expect(array1.biggerTwo([2,2], [1,3])).toEqual([2,2]);
});

test('biggerTwo should return [1,3] when given ([1,3], [2,2])', () => {
  expect(array1.biggerTwo([1,3], [2,2])).toEqual([1,3]);
});

test('biggerTwo should return [6,7] when given ([6,7], [3,1])', () => {
  expect(array1.biggerTwo([6,7], [3,1])).toEqual([6,7]);
});

test('makeMiddle should return [2,3] when given [4]', () => {
  expect(array1.makeMiddle([4])).toEqual([2,3]);
});

test('makeMiddle should return [2,3] when given [4,9]', () => {
  expect(array1.makeMiddle([4,9])).toEqual([2,3]);
});

test('makeMiddle should return [1,2] when given []', () => {
  expect(array1.makeMiddle([])).toEqual([1,2]);
});

test('makeMiddle should return [2,4] when given [7]', () => {
  expect(array1.makeMiddle([7])).toEqual([2,4]);
});

test('makeMiddle should return [4,3] when given [9,1]', () => {
  expect(array1.makeMiddle([9,1])).toEqual([4,3]);
});

test('plusTwo should return [1,2,3,4] when given ([1,2], [3,4])', () => {
  expect(array1.plusTwo([1,2], [3,4])).toEqual([1,2,3,4]);
});

test('plusTwo should return [4,4,2,2] when given ([4,4], [2,2])', () => {
  expect(array1.plusTwo([4,4], [2,2])).toEqual([4,4,2,2]);
});

test('plusTwo should return [9,2,3,4] when given ([9,2], [3,4])', () => {
  expect(array1.plusTwo([9,2], [3,4])).toEqual([9,2,3,4]);
});

test('swapEnds should return [4,2,3,1] when given [4,2,3,1]', () => {
  expect(array1.swapEnds([4,2,3,1])).toEqual([4,2,3,1]);
});

test('swapEnds should return [3,2,1] when given [3,2,1]', () => {
  expect(array1.swapEnds([3,2,1])).toEqual([3,2,1]);
});

test('swapEnds should return [5,6,7,9,8] when given [5,6,7,9,8]', () => {
  expect(array1.swapEnds([5,6,7,9,8])).toEqual([5,6,7,9,8]);
});

test('swapEnds should return [9,1,4,1,5,3] when given [9,1,4,1,5,3]', () => {
  expect(array1.swapEnds([9,1,4,1,5,3])).toEqual([9,1,4,1,5,3]);
});

test('swapEnds should return [2,1] when given [2,1]', () => {
  expect(array1.swapEnds([2,1])).toEqual([2,1]);
});

test('swapEnds should return [1] when given [1]', () => {
  expect(array1.swapEnds([1])).toEqual([1]);
});

test('midThree should return [2,3,4] when given [1,2,3,4,5]', () => {
  expect(array1.midThree([1,2,3,4,5])).toEqual([2,3,4]);
});

test('midThree should return [7,5,3] when given [8,6,7,5,3,0,9]', () => {
  expect(array1.midThree([8,6,7,5,3,0,9])).toEqual([7,5,3]);
});

test('midThree should return [1,2,3] when given [1,2,3]', () => {
  expect(array1.midThree([1,2,3])).toEqual([1,2,3]);
});

test('maxTriple should return 3 when given [1,2,3]', () => {
  expect(array1.maxTriple([1,2,3])).toEqual(3);
});

test('maxTriple should return 5 when given [1,5,3]', () => {
  expect(array1.maxTriple([1,5,3])).toEqual(5);
});

test('maxTriple should return 5 when given [5,2,3]', () => {
  expect(array1.maxTriple([5,2,3])).toEqual(5);
});

test('maxTriple should return 3 when given [1,2,3,1,1]', () => {
  expect(array1.maxTriple([1,2,3,1,1])).toEqual(3);
});

test('maxTriple should return 5 when given [1,7,3,1,5]', () => {
  expect(array1.maxTriple([1,7,3,1,5])).toEqual(5);
});

test('maxTriple should return 5 when given [5,1,3,7,1]', () => {
  expect(array1.maxTriple([5,1,3,7,1])).toEqual(5);
});

test('maxTriple should return 5 when given [5,1,7,3,7,8,1]', () => {
  expect(array1.maxTriple([5,1,7,3,7,8,1])).toEqual(5);
});

test('maxTriple should return 9 when given [5,1,7,9,7,8,1]', () => {
  expect(array1.maxTriple([5,1,7,9,7,8,1])).toEqual(9);
});

test('maxTriple should return 9 when given [5,1,7,3,7,8,9]', () => {
  expect(array1.maxTriple([5,1,7,3,7,8,9])).toEqual(9);
});

test('maxTriple should return 5 when given [2,2,5,1,1]', () => {
  expect(array1.maxTriple([2,2,5,1,1])).toEqual(5);
});

test('frontPiece should return [1,2] when given [1,2,3]', () => {
  expect(array1.frontPiece([1,2,3])).toEqual([1,2]);
});

test('frontPiece should return [1,2] when given [1,2]', () => {
  expect(array1.frontPiece([1,2])).toEqual([1,2]);
});

test('frontPiece should return [1] when given [1]', () => {
  expect(array1.frontPiece([1])).toEqual([1]);
});

test('frontPiece should return [] when given []', () => {
  expect(array1.frontPiece([])).toEqual([]);
});

test('frontPiece should return [6,5] when given [6,5,0]', () => {
  expect(array1.frontPiece([6,5,0])).toEqual([6,5]);
});

test('frontPiece should return [6,5] when given [6,5]', () => {
  expect(array1.frontPiece([6,5])).toEqual([6,5]);
});

test('frontPiece should return [3,1] when given [3,1,4,1,5]', () => {
  expect(array1.frontPiece([3,1,4,1,5])).toEqual([3,1]);
});

test('frontPiece should return [6] when given [6]', () => {
  expect(array1.frontPiece([6])).toEqual([6]);
});

test('unlucky1 should return true when given [1,3,4,5]', () => {
  expect(array1.unlucky1([1,3,4,5])).toEqual(true);
});

test('unlucky1 should return true when given [2,1,3,4,5]', () => {
  expect(array1.unlucky1([2,1,3,4,5])).toEqual(true);
});

test('unlucky1 should return false when given [1,1,1]', () => {
  expect(array1.unlucky1([1,1,1])).toEqual(false);
});

test('unlucky1 should return true when given [1,3,1]', () => {
  expect(array1.unlucky1([1,3,1])).toEqual(true);
});

test('unlucky1 should return true when given [1,1,3]', () => {
  expect(array1.unlucky1([1,1,3])).toEqual(true);
});

test('unlucky1 should return false when given [1,2,3]', () => {
  expect(array1.unlucky1([1,2,3])).toEqual(false);
});

test('unlucky1 should return false when given [3,3,3]', () => {
  expect(array1.unlucky1([3,3,3])).toEqual(false);
});

test('unlucky1 should return true when given [1,3]', () => {
  expect(array1.unlucky1([1,3])).toEqual(true);
});

test('unlucky1 should return false when given [1,4]', () => {
  expect(array1.unlucky1([1,4])).toEqual(false);
});

test('unlucky1 should return false when given [1]', () => {
  expect(array1.unlucky1([1])).toEqual(false);
});

test('unlucky1 should return false when given []', () => {
  expect(array1.unlucky1([])).toEqual(false);
});

test('unlucky1 should return false when given [1,1,1,3,1]', () => {
  expect(array1.unlucky1([1,1,1,3,1])).toEqual(false);
});

test('unlucky1 should return true when given [1,1,3,1,1]', () => {
  expect(array1.unlucky1([1,1,3,1,1])).toEqual(true);
});

test('unlucky1 should return true when given [1,1,1,1,3]', () => {
  expect(array1.unlucky1([1,1,1,1,3])).toEqual(true);
});

test('unlucky1 should return false when given [1,4,1,5]', () => {
  expect(array1.unlucky1([1,4,1,5])).toEqual(false);
});

test('unlucky1 should return false when given [1,1,2,3]', () => {
  expect(array1.unlucky1([1,1,2,3])).toEqual(false);
});

test('unlucky1 should return false when given [2,3,2,1]', () => {
  expect(array1.unlucky1([2,3,2,1])).toEqual(false);
});

test('unlucky1 should return true when given [2,3,1,3]', () => {
  expect(array1.unlucky1([2,3,1,3])).toEqual(true);
});

test('unlucky1 should return true when given [1,2,3,4,1,3]', () => {
  expect(array1.unlucky1([1,2,3,4,1,3])).toEqual(true);
});

test('make2 should return [4,5] when given ([4,5], [1,2,3])', () => {
  expect(array1.make2([4,5], [1,2,3])).toEqual([4,5]);
});

test('make2 should return [4,1] when given ([4], [1,2,3])', () => {
  expect(array1.make2([4], [1,2,3])).toEqual([4,1]);
});

test('make2 should return [1,2] when given ([], [1,2])', () => {
  expect(array1.make2([], [1,2])).toEqual([1,2]);
});

test('make2 should return [1,2] when given ([1,2], [])', () => {
  expect(array1.make2([1,2], [])).toEqual([1,2]);
});

test('make2 should return [3,1] when given ([3], [1,2,3])', () => {
  expect(array1.make2([3], [1,2,3])).toEqual([3,1]);
});

test('make2 should return [3,1] when given ([3], [1])', () => {
  expect(array1.make2([3], [1])).toEqual([3,1]);
});

test('make2 should return [3,1] when given ([3,1,4], [])', () => {
  expect(array1.make2([3,1,4], [])).toEqual([3,1]);
});

test('make2 should return [1,1] when given ([1], [1])', () => {
  expect(array1.make2([1], [1])).toEqual([1,1]);
});

test('make2 should return [1,2] when given ([1,2,3], [7,8])', () => {
  expect(array1.make2([1,2,3], [7,8])).toEqual([1,2]);
});

test('make2 should return [7,8] when given ([7,8], [1,2,3])', () => {
  expect(array1.make2([7,8], [1,2,3])).toEqual([7,8]);
});

test('make2 should return [7,1] when given ([7], [1,2,3])', () => {
  expect(array1.make2([7], [1,2,3])).toEqual([7,1]);
});

test('make2 should return [5,4] when given ([5,4], [2,3,7])', () => {
  expect(array1.make2([5,4], [2,3,7])).toEqual([5,4]);
});

test('front11 should return [1,7] when given ([1,2,3], [7,9,8])', () => {
  expect(array1.front11([1,2,3], [7,9,8])).toEqual([1,7]);
});

test('front11 should return [1,2] when given ([1], [2])', () => {
  expect(array1.front11([1], [2])).toEqual([1,2]);
});

test('front11 should return [1] when given ([1,7], [])', () => {
  expect(array1.front11([1,7], [])).toEqual([1]);
});

test('front11 should return [2] when given ([], [2,8])', () => {
  expect(array1.front11([], [2,8])).toEqual([2]);
});

test('front11 should return [] when given ([], [])', () => {
  expect(array1.front11([], [])).toEqual([]);
});

test('front11 should return [3,1] when given ([3], [1,4,1,9])', () => {
  expect(array1.front11([3], [1,4,1,9])).toEqual([3,1]);
});

test('front11 should return [1] when given ([1,4,1,9], [])', () => {
  expect(array1.front11([1,4,1,9], [])).toEqual([1]);
});
