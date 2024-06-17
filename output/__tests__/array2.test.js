const array2 = require('../array2');

test('findLowestIndex should return 4 when given [99,98,97,96,95]', () => {
  expect(array2.findLowestIndex([99,98,97,96,95])).toEqual(4);
});

test('findLowestIndex should return 2 when given [2,2,0]', () => {
  expect(array2.findLowestIndex([2,2,0])).toEqual(2);
});

test('findLowestIndex should return 0 when given [1,3,5]', () => {
  expect(array2.findLowestIndex([1,3,5])).toEqual(0);
});

test('findLowestIndex should return 0 when given [5]', () => {
  expect(array2.findLowestIndex([5])).toEqual(0);
});

test('findLowestIndex should return 2 when given [11,9,0,1]', () => {
  expect(array2.findLowestIndex([11,9,0,1])).toEqual(2);
});

test('findLowestIndex should return 3 when given [2,11,9,0]', () => {
  expect(array2.findLowestIndex([2,11,9,0])).toEqual(3);
});

test('findLowestIndex should return 0 when given [2]', () => {
  expect(array2.findLowestIndex([2])).toEqual(0);
});

test('findLowestIndex should return 2 when given [2,5,-12]', () => {
  expect(array2.findLowestIndex([2,5,-12])).toEqual(2);
});

test('countEvens should return 3 when given [2,1,2,3,4]', () => {
  expect(array2.countEvens([2,1,2,3,4])).toEqual(3);
});

test('countEvens should return 3 when given [2,2,0]', () => {
  expect(array2.countEvens([2,2,0])).toEqual(3);
});

test('countEvens should return 0 when given [1,3,5]', () => {
  expect(array2.countEvens([1,3,5])).toEqual(0);
});

test('countEvens should return 0 when given []', () => {
  expect(array2.countEvens([])).toEqual(0);
});

test('countEvens should return 1 when given [11,9,0,1]', () => {
  expect(array2.countEvens([11,9,0,1])).toEqual(1);
});

test('countEvens should return 2 when given [2,11,9,0]', () => {
  expect(array2.countEvens([2,11,9,0])).toEqual(2);
});

test('countEvens should return 1 when given [2]', () => {
  expect(array2.countEvens([2])).toEqual(1);
});

test('countEvens should return 2 when given [2,5,12]', () => {
  expect(array2.countEvens([2,5,12])).toEqual(2);
});

test('bigDiff should return 7 when given [10,3,5,6]', () => {
  expect(array2.bigDiff([10,3,5,6])).toEqual(7);
});

test('bigDiff should return 8 when given [7,2,10,9]', () => {
  expect(array2.bigDiff([7,2,10,9])).toEqual(8);
});

test('bigDiff should return 8 when given [2,10,7,2]', () => {
  expect(array2.bigDiff([2,10,7,2])).toEqual(8);
});

test('bigDiff should return 8 when given [2,10]', () => {
  expect(array2.bigDiff([2,10])).toEqual(8);
});

test('bigDiff should return 8 when given [10,2]', () => {
  expect(array2.bigDiff([10,2])).toEqual(8);
});

test('bigDiff should return 10 when given [10,0]', () => {
  expect(array2.bigDiff([10,0])).toEqual(10);
});

test('bigDiff should return 1 when given [2,3]', () => {
  expect(array2.bigDiff([2,3])).toEqual(1);
});

test('bigDiff should return 0 when given [2,2]', () => {
  expect(array2.bigDiff([2,2])).toEqual(0);
});

test('bigDiff should return 0 when given [2]', () => {
  expect(array2.bigDiff([2])).toEqual(0);
});

test('bigDiff should return 8 when given [5,1,6,1,9,9]', () => {
  expect(array2.bigDiff([5,1,6,1,9,9])).toEqual(8);
});

test('bigDiff should return 3 when given [7,6,8,5]', () => {
  expect(array2.bigDiff([7,6,8,5])).toEqual(3);
});

test('bigDiff should return 3 when given [7,7,6,8,5,5,6]', () => {
  expect(array2.bigDiff([7,7,6,8,5,5,6])).toEqual(3);
});

test('centeredAverage should return 3 when given [1,2,3,4,100]', () => {
  expect(array2.centeredAverage([1,2,3,4,100])).toEqual(3);
});

test('centeredAverage should return 5.2 when given [1,1,5,5,10,8,7]', () => {
  expect(array2.centeredAverage([1,1,5,5,10,8,7])).toEqual(5.2);
});

test('centeredAverage should return -3 when given [-10,-4,-2,-4,-2,0]', () => {
  expect(array2.centeredAverage([-10,-4,-2,-4,-2,0])).toEqual(-3);
});

test('centeredAverage should return 4 when given [5,3,4,6,2]', () => {
  expect(array2.centeredAverage([5,3,4,6,2])).toEqual(4);
});

test('centeredAverage should return 4 when given [5,3,4,0,100]', () => {
  expect(array2.centeredAverage([5,3,4,0,100])).toEqual(4);
});

test('centeredAverage should return 4 when given [100,0,5,3,4]', () => {
  expect(array2.centeredAverage([100,0,5,3,4])).toEqual(4);
});

test('centeredAverage should return 4 when given [4,0,100]', () => {
  expect(array2.centeredAverage([4,0,100])).toEqual(4);
});

test('centeredAverage should return 3 when given [0,2,3,4,100]', () => {
  expect(array2.centeredAverage([0,2,3,4,100])).toEqual(3);
});

test('centeredAverage should return 1 when given [1,1,100]', () => {
  expect(array2.centeredAverage([1,1,100])).toEqual(1);
});

test('centeredAverage should return 7 when given [7,7,7]', () => {
  expect(array2.centeredAverage([7,7,7])).toEqual(7);
});

test('centeredAverage should return 7 when given [1,7,8]', () => {
  expect(array2.centeredAverage([1,7,8])).toEqual(7);
});

test('centeredAverage should return 50 when given [1,1,99,99]', () => {
  expect(array2.centeredAverage([1,1,99,99])).toEqual(50);
});

test('centeredAverage should return 50 when given [1000,0,1,99]', () => {
  expect(array2.centeredAverage([1000,0,1,99])).toEqual(50);
});

test('centeredAverage should return 4 when given [4,4,4,4,5]', () => {
  expect(array2.centeredAverage([4,4,4,4,5])).toEqual(4);
});

test('centeredAverage should return 4 when given [4,4,4,1,5]', () => {
  expect(array2.centeredAverage([4,4,4,1,5])).toEqual(4);
});

test('centeredAverage should return 6 when given [6,4,8,12,3]', () => {
  expect(array2.centeredAverage([6,4,8,12,3])).toEqual(6);
});

test('sum13 should return 6 when given [1,2,2,1]', () => {
  expect(array2.sum13([1,2,2,1])).toEqual(6);
});

test('sum13 should return 2 when given [1,1]', () => {
  expect(array2.sum13([1,1])).toEqual(2);
});

test('sum13 should return 6 when given [1,2,2,1,13]', () => {
  expect(array2.sum13([1,2,2,1,13])).toEqual(6);
});

test('sum13 should return 4 when given [1,2,13,2,1,13]', () => {
  expect(array2.sum13([1,2,13,2,1,13])).toEqual(4);
});

test('sum13 should return 3 when given [13,1,2,13,2,1,13]', () => {
  expect(array2.sum13([13,1,2,13,2,1,13])).toEqual(3);
});

test('sum13 should return 0 when given []', () => {
  expect(array2.sum13([])).toEqual(0);
});

test('sum13 should return 0 when given [13]', () => {
  expect(array2.sum13([13])).toEqual(0);
});

test('sum13 should return 0 when given [13,13]', () => {
  expect(array2.sum13([13,13])).toEqual(0);
});

test('sum13 should return 0 when given [13,0,13]', () => {
  expect(array2.sum13([13,0,13])).toEqual(0);
});

test('sum13 should return 0 when given [13,1,13]', () => {
  expect(array2.sum13([13,1,13])).toEqual(0);
});

test('sum13 should return 14 when given [5,7,2]', () => {
  expect(array2.sum13([5,7,2])).toEqual(14);
});

test('sum13 should return 5 when given [5,13,2]', () => {
  expect(array2.sum13([5,13,2])).toEqual(5);
});

test('sum13 should return 0 when given [0]', () => {
  expect(array2.sum13([0])).toEqual(0);
});

test('sum13 should return 0 when given [13,0]', () => {
  expect(array2.sum13([13,0])).toEqual(0);
});

test('sum67 should return 5 when given [1,2,2]', () => {
  expect(array2.sum67([1,2,2])).toEqual(5);
});

test('sum67 should return 5 when given [1,2,2,6,99,99,7]', () => {
  expect(array2.sum67([1,2,2,6,99,99,7])).toEqual(5);
});

test('sum67 should return 4 when given [1,1,6,7,2]', () => {
  expect(array2.sum67([1,1,6,7,2])).toEqual(4);
});

test('sum67 should return 2 when given [1,6,2,2,7,1,6,99,99,7]', () => {
  expect(array2.sum67([1,6,2,2,7,1,6,99,99,7])).toEqual(2);
});

test('sum67 should return 2 when given [1,6,2,6,2,7,1,6,99,99,7]', () => {
  expect(array2.sum67([1,6,2,6,2,7,1,6,99,99,7])).toEqual(2);
});

test('sum67 should return 18 when given [2,7,6,2,6,7,2,7]', () => {
  expect(array2.sum67([2,7,6,2,6,7,2,7])).toEqual(18);
});

test('sum67 should return 9 when given [2,7,6,2,6,2,7]', () => {
  expect(array2.sum67([2,7,6,2,6,2,7])).toEqual(9);
});

test('sum67 should return 8 when given [1,6,7,7]', () => {
  expect(array2.sum67([1,6,7,7])).toEqual(8);
});

test('sum67 should return 8 when given [6,7,1,6,7,7]', () => {
  expect(array2.sum67([6,7,1,6,7,7])).toEqual(8);
});

test('sum67 should return 0 when given [6,8,1,6,7]', () => {
  expect(array2.sum67([6,8,1,6,7])).toEqual(0);
});

test('sum67 should return 0 when given []', () => {
  expect(array2.sum67([])).toEqual(0);
});

test('sum67 should return 11 when given [6,7,11]', () => {
  expect(array2.sum67([6,7,11])).toEqual(11);
});

test('sum67 should return 22 when given [11,6,7,11]', () => {
  expect(array2.sum67([11,6,7,11])).toEqual(22);
});

test('sum67 should return 11 when given [2,2,6,7,7]', () => {
  expect(array2.sum67([2,2,6,7,7])).toEqual(11);
});

test('has22 should return true when given [1,2,2]', () => {
  expect(array2.has22([1,2,2])).toEqual(true);
});

test('has22 should return false when given [1,2,1,2]', () => {
  expect(array2.has22([1,2,1,2])).toEqual(false);
});

test('has22 should return false when given [2,1,2]', () => {
  expect(array2.has22([2,1,2])).toEqual(false);
});

test('has22 should return true when given [2,2,1,2]', () => {
  expect(array2.has22([2,2,1,2])).toEqual(true);
});

test('has22 should return false when given [1,3,2]', () => {
  expect(array2.has22([1,3,2])).toEqual(false);
});

test('has22 should return true when given [1,3,2,2]', () => {
  expect(array2.has22([1,3,2,2])).toEqual(true);
});

test('has22 should return true when given [2,3,2,2]', () => {
  expect(array2.has22([2,3,2,2])).toEqual(true);
});

test('has22 should return true when given [4,2,4,2,2,5]', () => {
  expect(array2.has22([4,2,4,2,2,5])).toEqual(true);
});

test('has22 should return false when given [1,2]', () => {
  expect(array2.has22([1,2])).toEqual(false);
});

test('has22 should return true when given [2,2]', () => {
  expect(array2.has22([2,2])).toEqual(true);
});

test('has22 should return false when given [2]', () => {
  expect(array2.has22([2])).toEqual(false);
});

test('has22 should return false when given []', () => {
  expect(array2.has22([])).toEqual(false);
});

test('has22 should return true when given [3,3,2,2]', () => {
  expect(array2.has22([3,3,2,2])).toEqual(true);
});

test('has22 should return false when given [5,2,5,2]', () => {
  expect(array2.has22([5,2,5,2])).toEqual(false);
});

test('lucky13 should return true when given [0,2,4]', () => {
  expect(array2.lucky13([0,2,4])).toEqual(true);
});

test('lucky13 should return false when given [1,2,3]', () => {
  expect(array2.lucky13([1,2,3])).toEqual(false);
});

test('lucky13 should return false when given [1,2,4]', () => {
  expect(array2.lucky13([1,2,4])).toEqual(false);
});

test('lucky13 should return true when given [2,7,2,8]', () => {
  expect(array2.lucky13([2,7,2,8])).toEqual(true);
});

test('lucky13 should return false when given [2,7,1,8]', () => {
  expect(array2.lucky13([2,7,1,8])).toEqual(false);
});

test('lucky13 should return false when given [3,7,2,8]', () => {
  expect(array2.lucky13([3,7,2,8])).toEqual(false);
});

test('lucky13 should return false when given [2,7,2,1]', () => {
  expect(array2.lucky13([2,7,2,1])).toEqual(false);
});

test('lucky13 should return false when given [1,2]', () => {
  expect(array2.lucky13([1,2])).toEqual(false);
});

test('lucky13 should return true when given [2,2]', () => {
  expect(array2.lucky13([2,2])).toEqual(true);
});

test('lucky13 should return true when given [2]', () => {
  expect(array2.lucky13([2])).toEqual(true);
});

test('lucky13 should return false when given [3]', () => {
  expect(array2.lucky13([3])).toEqual(false);
});

test('lucky13 should return true when given []', () => {
  expect(array2.lucky13([])).toEqual(true);
});

test('sum28 should return true when given [2,3,2,2,4,2]', () => {
  expect(array2.sum28([2,3,2,2,4,2])).toEqual(true);
});

test('sum28 should return false when given [2,3,2,2,4,2,2]', () => {
  expect(array2.sum28([2,3,2,2,4,2,2])).toEqual(false);
});

test('sum28 should return false when given [1,2,3,4]', () => {
  expect(array2.sum28([1,2,3,4])).toEqual(false);
});

test('sum28 should return true when given [2,2,2,2]', () => {
  expect(array2.sum28([2,2,2,2])).toEqual(true);
});

test('sum28 should return true when given [1,2,2,2,2,4]', () => {
  expect(array2.sum28([1,2,2,2,2,4])).toEqual(true);
});

test('sum28 should return false when given []', () => {
  expect(array2.sum28([])).toEqual(false);
});

test('sum28 should return false when given [2]', () => {
  expect(array2.sum28([2])).toEqual(false);
});

test('sum28 should return false when given [8]', () => {
  expect(array2.sum28([8])).toEqual(false);
});

test('sum28 should return false when given [2,2,2]', () => {
  expect(array2.sum28([2,2,2])).toEqual(false);
});

test('sum28 should return false when given [2,2,2,2,2]', () => {
  expect(array2.sum28([2,2,2,2,2])).toEqual(false);
});

test('sum28 should return true when given [1,2,2,1,2,2]', () => {
  expect(array2.sum28([1,2,2,1,2,2])).toEqual(true);
});

test('sum28 should return true when given [5,2,2,2,4,2]', () => {
  expect(array2.sum28([5,2,2,2,4,2])).toEqual(true);
});

test('more14 should return true when given [1,4,1]', () => {
  expect(array2.more14([1,4,1])).toEqual(true);
});

test('more14 should return false when given [1,4,1,4]', () => {
  expect(array2.more14([1,4,1,4])).toEqual(false);
});

test('more14 should return true when given [1,1]', () => {
  expect(array2.more14([1,1])).toEqual(true);
});

test('more14 should return true when given [1,6,6]', () => {
  expect(array2.more14([1,6,6])).toEqual(true);
});

test('more14 should return true when given [1]', () => {
  expect(array2.more14([1])).toEqual(true);
});

test('more14 should return false when given [1,4]', () => {
  expect(array2.more14([1,4])).toEqual(false);
});

test('more14 should return true when given [6,1,1]', () => {
  expect(array2.more14([6,1,1])).toEqual(true);
});

test('more14 should return false when given [1,6,4]', () => {
  expect(array2.more14([1,6,4])).toEqual(false);
});

test('more14 should return true when given [1,1,4,4,1]', () => {
  expect(array2.more14([1,1,4,4,1])).toEqual(true);
});

test('more14 should return true when given [1,1,6,4,4,1]', () => {
  expect(array2.more14([1,1,6,4,4,1])).toEqual(true);
});

test('more14 should return false when given []', () => {
  expect(array2.more14([])).toEqual(false);
});

test('more14 should return false when given [4,1,4,6]', () => {
  expect(array2.more14([4,1,4,6])).toEqual(false);
});

test('more14 should return false when given [4,1,4,6,1]', () => {
  expect(array2.more14([4,1,4,6,1])).toEqual(false);
});

test('more14 should return true when given [1,4,1,4,1,6]', () => {
  expect(array2.more14([1,4,1,4,1,6])).toEqual(true);
});

test('prependSum should return [3,4,4] when given [1,2,4,4]', () => {
  expect(array2.prependSum([1,2,4,4])).toEqual([3,4,4]);
});

test('prependSum should return [6,0] when given [3,3,0]', () => {
  expect(array2.prependSum([3,3,0])).toEqual([6,0]);
});

test('prependSum should return [2,1,1,1] when given [1,1,1,1,1]', () => {
  expect(array2.prependSum([1,1,1,1,1])).toEqual([2,1,1,1]);
});

test('prependSum should return [12] when given [5,7]', () => {
  expect(array2.prependSum([5,7])).toEqual([12]);
});

test('prependSum should return [0,0,0] when given [0,0,0,0]', () => {
  expect(array2.prependSum([0,0,0,0])).toEqual([0,0,0]);
});

test('prependSum should return [25,19,20] when given [12,13,19,20]', () => {
  expect(array2.prependSum([12,13,19,20])).toEqual([25,19,20]);
});

test('prependSum should return [0,-2,2] when given [-2,2,-2,2]', () => {
  expect(array2.prependSum([-2,2,-2,2])).toEqual([0,-2,2]);
});

test('prependSum should return [9,3,2,1,0] when given [5,4,3,2,1,0]', () => {
  expect(array2.prependSum([5,4,3,2,1,0])).toEqual([9,3,2,1,0]);
});

test('fizzArray should return [0,1,2,3] when given 4', () => {
  expect(array2.fizzArray(4)).toEqual([0,1,2,3]);
});

test('fizzArray should return [0] when given 1', () => {
  expect(array2.fizzArray(1)).toEqual([0]);
});

test('fizzArray should return [0,1,2,3,4,5,6,7,8,9] when given 10', () => {
  expect(array2.fizzArray(10)).toEqual([0,1,2,3,4,5,6,7,8,9]);
});

test('fizzArray should return [] when given 0', () => {
  expect(array2.fizzArray(0)).toEqual([]);
});

test('fizzArray should return [0,1] when given 2', () => {
  expect(array2.fizzArray(2)).toEqual([0,1]);
});

test('fizzArray should return [0,1,2,3,4,5,6] when given 7', () => {
  expect(array2.fizzArray(7)).toEqual([0,1,2,3,4,5,6]);
});

test('only14 should return true when given [1,4,1,4]', () => {
  expect(array2.only14([1,4,1,4])).toEqual(true);
});

test('only14 should return false when given [1,4,2,4]', () => {
  expect(array2.only14([1,4,2,4])).toEqual(false);
});

test('only14 should return true when given [1,1]', () => {
  expect(array2.only14([1,1])).toEqual(true);
});

test('only14 should return true when given [4,1]', () => {
  expect(array2.only14([4,1])).toEqual(true);
});

test('only14 should return false when given [2]', () => {
  expect(array2.only14([2])).toEqual(false);
});

test('only14 should return true when given []', () => {
  expect(array2.only14([])).toEqual(true);
});

test('only14 should return false when given [1,4,1,3]', () => {
  expect(array2.only14([1,4,1,3])).toEqual(false);
});

test('only14 should return false when given [3,1,3]', () => {
  expect(array2.only14([3,1,3])).toEqual(false);
});

test('only14 should return true when given [1]', () => {
  expect(array2.only14([1])).toEqual(true);
});

test('only14 should return true when given [4]', () => {
  expect(array2.only14([4])).toEqual(true);
});

test('only14 should return false when given [3,4]', () => {
  expect(array2.only14([3,4])).toEqual(false);
});

test('only14 should return false when given [1,3,4]', () => {
  expect(array2.only14([1,3,4])).toEqual(false);
});

test('only14 should return true when given [1,1,1]', () => {
  expect(array2.only14([1,1,1])).toEqual(true);
});

test('only14 should return false when given [1,1,1,5]', () => {
  expect(array2.only14([1,1,1,5])).toEqual(false);
});

test('only14 should return true when given [4,1,4,1]', () => {
  expect(array2.only14([4,1,4,1])).toEqual(true);
});

test('fizzArray2 should return ["0","1","2","3"] when given 4', () => {
  expect(array2.fizzArray2(4)).toEqual(["0","1","2","3"]);
});

test('fizzArray2 should return ["0","1","2","3","4","5","6","7","8","9"] when given 10', () => {
  expect(array2.fizzArray2(10)).toEqual(["0","1","2","3","4","5","6","7","8","9"]);
});

test('fizzArray2 should return ["0","1"] when given 2', () => {
  expect(array2.fizzArray2(2)).toEqual(["0","1"]);
});

test('fizzArray2 should return ["0"] when given 1', () => {
  expect(array2.fizzArray2(1)).toEqual(["0"]);
});

test('fizzArray2 should return [] when given 0', () => {
  expect(array2.fizzArray2(0)).toEqual([]);
});

test('fizzArray2 should return ["0","1","2","3","4","5","6"] when given 7', () => {
  expect(array2.fizzArray2(7)).toEqual(["0","1","2","3","4","5","6"]);
});

test('fizzArray2 should return ["0","1","2","3","4","5","6","7","8"] when given 9', () => {
  expect(array2.fizzArray2(9)).toEqual(["0","1","2","3","4","5","6","7","8"]);
});

test('fizzArray2 should return ["0","1","2","3","4","5","6","7","8","9","10"] when given 11', () => {
  expect(array2.fizzArray2(11)).toEqual(["0","1","2","3","4","5","6","7","8","9","10"]);
});

test('no14 should return true when given [1,2,3]', () => {
  expect(array2.no14([1,2,3])).toEqual(true);
});

test('no14 should return false when given [1,2,3,4]', () => {
  expect(array2.no14([1,2,3,4])).toEqual(false);
});

test('no14 should return true when given [2,3,4]', () => {
  expect(array2.no14([2,3,4])).toEqual(true);
});

test('no14 should return false when given [1,1,4,4]', () => {
  expect(array2.no14([1,1,4,4])).toEqual(false);
});

test('no14 should return true when given [2,2,4,4]', () => {
  expect(array2.no14([2,2,4,4])).toEqual(true);
});

test('no14 should return false when given [2,3,4,1]', () => {
  expect(array2.no14([2,3,4,1])).toEqual(false);
});

test('no14 should return true when given [2,1,1]', () => {
  expect(array2.no14([2,1,1])).toEqual(true);
});

test('no14 should return false when given [1,4]', () => {
  expect(array2.no14([1,4])).toEqual(false);
});

test('no14 should return true when given [2]', () => {
  expect(array2.no14([2])).toEqual(true);
});

test('no14 should return true when given [2,1]', () => {
  expect(array2.no14([2,1])).toEqual(true);
});

test('no14 should return true when given [1]', () => {
  expect(array2.no14([1])).toEqual(true);
});

test('no14 should return true when given [4]', () => {
  expect(array2.no14([4])).toEqual(true);
});

test('no14 should return true when given []', () => {
  expect(array2.no14([])).toEqual(true);
});

test('no14 should return true when given [1,1,1,1]', () => {
  expect(array2.no14([1,1,1,1])).toEqual(true);
});

test('no14 should return false when given [9,4,4,1]', () => {
  expect(array2.no14([9,4,4,1])).toEqual(false);
});

test('no14 should return false when given [4,2,3,1]', () => {
  expect(array2.no14([4,2,3,1])).toEqual(false);
});

test('no14 should return true when given [4,2,3,5]', () => {
  expect(array2.no14([4,2,3,5])).toEqual(true);
});

test('no14 should return true when given [4,4,2]', () => {
  expect(array2.no14([4,4,2])).toEqual(true);
});

test('no14 should return false when given [1,4,4]', () => {
  expect(array2.no14([1,4,4])).toEqual(false);
});

test('isEverywhere should return true when given ([1,2,1,3], 1)', () => {
  expect(array2.isEverywhere([1,2,1,3], 1)).toEqual(true);
});

test('isEverywhere should return false when given ([1,2,1,3], 2)', () => {
  expect(array2.isEverywhere([1,2,1,3], 2)).toEqual(false);
});

test('isEverywhere should return false when given ([1,2,1,3,4], 1)', () => {
  expect(array2.isEverywhere([1,2,1,3,4], 1)).toEqual(false);
});

test('isEverywhere should return true when given ([2,1,2,1], 1)', () => {
  expect(array2.isEverywhere([2,1,2,1], 1)).toEqual(true);
});

test('isEverywhere should return true when given ([2,1,2,1], 2)', () => {
  expect(array2.isEverywhere([2,1,2,1], 2)).toEqual(true);
});

test('isEverywhere should return false when given ([2,1,2,3,1], 2)', () => {
  expect(array2.isEverywhere([2,1,2,3,1], 2)).toEqual(false);
});

test('isEverywhere should return true when given ([3,1], 3)', () => {
  expect(array2.isEverywhere([3,1], 3)).toEqual(true);
});

test('isEverywhere should return false when given ([3,1], 2)', () => {
  expect(array2.isEverywhere([3,1], 2)).toEqual(false);
});

test('isEverywhere should return true when given ([3], 1)', () => {
  expect(array2.isEverywhere([3], 1)).toEqual(true);
});

test('isEverywhere should return true when given ([], 1)', () => {
  expect(array2.isEverywhere([], 1)).toEqual(true);
});

test('isEverywhere should return true when given ([1,2,1,2,3,2,5], 2)', () => {
  expect(array2.isEverywhere([1,2,1,2,3,2,5], 2)).toEqual(true);
});

test('isEverywhere should return false when given ([1,2,1,1,1,2], 2)', () => {
  expect(array2.isEverywhere([1,2,1,1,1,2], 2)).toEqual(false);
});

test('isEverywhere should return false when given ([2,1,2,1,1,2], 2)', () => {
  expect(array2.isEverywhere([2,1,2,1,1,2], 2)).toEqual(false);
});

test('isEverywhere should return false when given ([2,1,2,2,2,1,1,2], 2)', () => {
  expect(array2.isEverywhere([2,1,2,2,2,1,1,2], 2)).toEqual(false);
});

test('isEverywhere should return true when given ([2,1,2,2,2,1,2,1], 2)', () => {
  expect(array2.isEverywhere([2,1,2,2,2,1,2,1], 2)).toEqual(true);
});

test('isEverywhere should return true when given ([2,1,2,1,2], 2)', () => {
  expect(array2.isEverywhere([2,1,2,1,2], 2)).toEqual(true);
});

test('either24 should return true when given [1,2,2]', () => {
  expect(array2.either24([1,2,2])).toEqual(true);
});

test('either24 should return true when given [4,4,1]', () => {
  expect(array2.either24([4,4,1])).toEqual(true);
});

test('either24 should return false when given [4,4,1,2,2]', () => {
  expect(array2.either24([4,4,1,2,2])).toEqual(false);
});

test('either24 should return false when given [1,2,3,4]', () => {
  expect(array2.either24([1,2,3,4])).toEqual(false);
});

test('either24 should return false when given [3,5,9]', () => {
  expect(array2.either24([3,5,9])).toEqual(false);
});

test('either24 should return true when given [1,2,3,4,4]', () => {
  expect(array2.either24([1,2,3,4,4])).toEqual(true);
});

test('either24 should return true when given [2,2,3,4]', () => {
  expect(array2.either24([2,2,3,4])).toEqual(true);
});

test('either24 should return true when given [1,2,3,2,2,4]', () => {
  expect(array2.either24([1,2,3,2,2,4])).toEqual(true);
});

test('either24 should return false when given [1,2,3,2,2,4,4]', () => {
  expect(array2.either24([1,2,3,2,2,4,4])).toEqual(false);
});

test('either24 should return false when given [1,2]', () => {
  expect(array2.either24([1,2])).toEqual(false);
});

test('either24 should return true when given [2,2]', () => {
  expect(array2.either24([2,2])).toEqual(true);
});

test('either24 should return true when given [4,4]', () => {
  expect(array2.either24([4,4])).toEqual(true);
});

test('either24 should return false when given [2]', () => {
  expect(array2.either24([2])).toEqual(false);
});

test('either24 should return false when given []', () => {
  expect(array2.either24([])).toEqual(false);
});

test('matchUp should return 2 when given ([1,2,3], [2,3,10])', () => {
  expect(array2.matchUp([1,2,3], [2,3,10])).toEqual(2);
});

test('matchUp should return 3 when given ([1,2,3], [2,3,5])', () => {
  expect(array2.matchUp([1,2,3], [2,3,5])).toEqual(3);
});

test('matchUp should return 2 when given ([1,2,3], [2,3,3])', () => {
  expect(array2.matchUp([1,2,3], [2,3,3])).toEqual(2);
});

test('matchUp should return 1 when given ([5,3], [5,5])', () => {
  expect(array2.matchUp([5,3], [5,5])).toEqual(1);
});

test('matchUp should return 2 when given ([5,3], [4,4])', () => {
  expect(array2.matchUp([5,3], [4,4])).toEqual(2);
});

test('matchUp should return 1 when given ([5,3], [3,3])', () => {
  expect(array2.matchUp([5,3], [3,3])).toEqual(1);
});

test('matchUp should return 1 when given ([5,3], [2,2])', () => {
  expect(array2.matchUp([5,3], [2,2])).toEqual(1);
});

test('matchUp should return 1 when given ([5,3], [1,1])', () => {
  expect(array2.matchUp([5,3], [1,1])).toEqual(1);
});

test('matchUp should return 0 when given ([5,3], [0,0])', () => {
  expect(array2.matchUp([5,3], [0,0])).toEqual(0);
});

test('matchUp should return 0 when given ([4], [4])', () => {
  expect(array2.matchUp([4], [4])).toEqual(0);
});

test('matchUp should return 1 when given ([4], [5])', () => {
  expect(array2.matchUp([4], [5])).toEqual(1);
});

test('has77 should return true when given [1,7,7]', () => {
  expect(array2.has77([1,7,7])).toEqual(true);
});

test('has77 should return true when given [1,7,1,7]', () => {
  expect(array2.has77([1,7,1,7])).toEqual(true);
});

test('has77 should return false when given [1,7,1,1,7]', () => {
  expect(array2.has77([1,7,1,1,7])).toEqual(false);
});

test('has77 should return true when given [7,7,1,1,7]', () => {
  expect(array2.has77([7,7,1,1,7])).toEqual(true);
});

test('has77 should return false when given [2,7,2,2,7,2]', () => {
  expect(array2.has77([2,7,2,2,7,2])).toEqual(false);
});

test('has77 should return true when given [2,7,2,2,7,7]', () => {
  expect(array2.has77([2,7,2,2,7,7])).toEqual(true);
});

test('has77 should return true when given [7,2,7,2,2,7]', () => {
  expect(array2.has77([7,2,7,2,2,7])).toEqual(true);
});

test('has77 should return false when given [7,2,6,2,2,7]', () => {
  expect(array2.has77([7,2,6,2,2,7])).toEqual(false);
});

test('has77 should return true when given [7,7,7]', () => {
  expect(array2.has77([7,7,7])).toEqual(true);
});

test('has77 should return true when given [7,1,7]', () => {
  expect(array2.has77([7,1,7])).toEqual(true);
});

test('has77 should return false when given [7,1,1]', () => {
  expect(array2.has77([7,1,1])).toEqual(false);
});

test('has77 should return false when given [1,2]', () => {
  expect(array2.has77([1,2])).toEqual(false);
});

test('has77 should return false when given [1,7]', () => {
  expect(array2.has77([1,7])).toEqual(false);
});

test('has77 should return false when given [7]', () => {
  expect(array2.has77([7])).toEqual(false);
});

test('has12 should return true when given [1,3,2]', () => {
  expect(array2.has12([1,3,2])).toEqual(true);
});

test('has12 should return true when given [3,1,2]', () => {
  expect(array2.has12([3,1,2])).toEqual(true);
});

test('has12 should return true when given [3,1,4,5,2]', () => {
  expect(array2.has12([3,1,4,5,2])).toEqual(true);
});

test('has12 should return false when given [3,1,4,5,6]', () => {
  expect(array2.has12([3,1,4,5,6])).toEqual(false);
});

test('has12 should return true when given [3,1,4,1,6,2]', () => {
  expect(array2.has12([3,1,4,1,6,2])).toEqual(true);
});

test('has12 should return true when given [2,1,4,1,6,2]', () => {
  expect(array2.has12([2,1,4,1,6,2])).toEqual(true);
});

test('has12 should return false when given [2,1,4,1,6]', () => {
  expect(array2.has12([2,1,4,1,6])).toEqual(false);
});

test('has12 should return false when given [1]', () => {
  expect(array2.has12([1])).toEqual(false);
});

test('has12 should return false when given [2,1,3]', () => {
  expect(array2.has12([2,1,3])).toEqual(false);
});

test('has12 should return true when given [2,1,3,2]', () => {
  expect(array2.has12([2,1,3,2])).toEqual(true);
});

test('has12 should return false when given [2]', () => {
  expect(array2.has12([2])).toEqual(false);
});

test('has12 should return false when given [3,2]', () => {
  expect(array2.has12([3,2])).toEqual(false);
});

test('has12 should return true when given [3,1,3,2]', () => {
  expect(array2.has12([3,1,3,2])).toEqual(true);
});

test('has12 should return false when given [3,5,9]', () => {
  expect(array2.has12([3,5,9])).toEqual(false);
});

test('has12 should return false when given [3,5,1]', () => {
  expect(array2.has12([3,5,1])).toEqual(false);
});

test('has12 should return false when given [3,2,1]', () => {
  expect(array2.has12([3,2,1])).toEqual(false);
});

test('has12 should return true when given [1,2]', () => {
  expect(array2.has12([1,2])).toEqual(true);
});

test('modThree should return true when given [2,1,3,5]', () => {
  expect(array2.modThree([2,1,3,5])).toEqual(true);
});

test('modThree should return false when given [2,1,2,5]', () => {
  expect(array2.modThree([2,1,2,5])).toEqual(false);
});

test('modThree should return true when given [2,4,2,5]', () => {
  expect(array2.modThree([2,4,2,5])).toEqual(true);
});

test('modThree should return false when given [1,2,1,2,1]', () => {
  expect(array2.modThree([1,2,1,2,1])).toEqual(false);
});

test('modThree should return true when given [9,9,9]', () => {
  expect(array2.modThree([9,9,9])).toEqual(true);
});

test('modThree should return false when given [1,2,1]', () => {
  expect(array2.modThree([1,2,1])).toEqual(false);
});

test('modThree should return false when given [1,2]', () => {
  expect(array2.modThree([1,2])).toEqual(false);
});

test('modThree should return false when given [1]', () => {
  expect(array2.modThree([1])).toEqual(false);
});

test('modThree should return false when given []', () => {
  expect(array2.modThree([])).toEqual(false);
});

test('modThree should return false when given [9,7,2,9]', () => {
  expect(array2.modThree([9,7,2,9])).toEqual(false);
});

test('modThree should return false when given [9,7,2,9,2,2]', () => {
  expect(array2.modThree([9,7,2,9,2,2])).toEqual(false);
});

test('modThree should return true when given [9,7,2,9,2,2,6]', () => {
  expect(array2.modThree([9,7,2,9,2,2,6])).toEqual(true);
});

test('findTheMedian should return 5.5 when given [4,9,9,2,1,5]', () => {
  expect(array2.findTheMedian([4,9,9,2,1,5])).toEqual(5.5);
});

test('findTheMedian should return 3 when given [1,5,3,1,5]', () => {
  expect(array2.findTheMedian([1,5,3,1,5])).toEqual(3);
});

test('findTheMedian should return 12 when given [10,12,15]', () => {
  expect(array2.findTheMedian([10,12,15])).toEqual(12);
});

test('findTheMedian should return 5 when given [5]', () => {
  expect(array2.findTheMedian([5])).toEqual(5);
});

test('findTheMedian should return 4.5 when given [11,9,0,1]', () => {
  expect(array2.findTheMedian([11,9,0,1])).toEqual(4.5);
});

test('findTheMedian should return 4 when given [-1,11,-2,10,-3,15]', () => {
  expect(array2.findTheMedian([-1,11,-2,10,-3,15])).toEqual(4);
});

test('findTheMedian should return 12.5 when given [2,10,15,13]', () => {
  expect(array2.findTheMedian([2,10,15,13])).toEqual(12.5);
});

test('findTheMedian should return 5 when given [2,5,-12]', () => {
  expect(array2.findTheMedian([2,5,-12])).toEqual(5);
});

test('haveThree should return true when given [3,1,3,1,3]', () => {
  expect(array2.haveThree([3,1,3,1,3])).toEqual(true);
});

test('haveThree should return false when given [3,1,3,3]', () => {
  expect(array2.haveThree([3,1,3,3])).toEqual(false);
});

test('haveThree should return false when given [3,4,3,3,4]', () => {
  expect(array2.haveThree([3,4,3,3,4])).toEqual(false);
});

test('haveThree should return false when given [1,3,1,3,1,2]', () => {
  expect(array2.haveThree([1,3,1,3,1,2])).toEqual(false);
});

test('haveThree should return true when given [1,3,1,3,1,3]', () => {
  expect(array2.haveThree([1,3,1,3,1,3])).toEqual(true);
});

test('haveThree should return false when given [1,3,3,1,3]', () => {
  expect(array2.haveThree([1,3,3,1,3])).toEqual(false);
});

test('haveThree should return false when given [1,3,1,3,1,3,4,3]', () => {
  expect(array2.haveThree([1,3,1,3,1,3,4,3])).toEqual(false);
});

test('haveThree should return true when given [3,4,3,4,3,4,4]', () => {
  expect(array2.haveThree([3,4,3,4,3,4,4])).toEqual(true);
});

test('haveThree should return false when given [3,3,3]', () => {
  expect(array2.haveThree([3,3,3])).toEqual(false);
});

test('haveThree should return false when given [1,3]', () => {
  expect(array2.haveThree([1,3])).toEqual(false);
});

test('haveThree should return false when given [3]', () => {
  expect(array2.haveThree([3])).toEqual(false);
});

test('haveThree should return false when given [1]', () => {
  expect(array2.haveThree([1])).toEqual(false);
});

test('twoTwo should return true when given [4,2,2,3]', () => {
  expect(array2.twoTwo([4,2,2,3])).toEqual(true);
});

test('twoTwo should return true when given [2,2,4]', () => {
  expect(array2.twoTwo([2,2,4])).toEqual(true);
});

test('twoTwo should return false when given [2,2,4,2]', () => {
  expect(array2.twoTwo([2,2,4,2])).toEqual(false);
});

test('twoTwo should return true when given [1,3,4]', () => {
  expect(array2.twoTwo([1,3,4])).toEqual(true);
});

test('twoTwo should return true when given [1,2,2,3,4]', () => {
  expect(array2.twoTwo([1,2,2,3,4])).toEqual(true);
});

test('twoTwo should return false when given [1,2,3,4]', () => {
  expect(array2.twoTwo([1,2,3,4])).toEqual(false);
});

test('twoTwo should return true when given [2,2]', () => {
  expect(array2.twoTwo([2,2])).toEqual(true);
});

test('twoTwo should return true when given [2,2,7]', () => {
  expect(array2.twoTwo([2,2,7])).toEqual(true);
});

test('twoTwo should return false when given [2,2,7,2,1]', () => {
  expect(array2.twoTwo([2,2,7,2,1])).toEqual(false);
});

test('twoTwo should return true when given [4,2,2,2]', () => {
  expect(array2.twoTwo([4,2,2,2])).toEqual(true);
});

test('twoTwo should return true when given [2,2,2]', () => {
  expect(array2.twoTwo([2,2,2])).toEqual(true);
});

test('twoTwo should return false when given [1,2]', () => {
  expect(array2.twoTwo([1,2])).toEqual(false);
});

test('twoTwo should return false when given [2]', () => {
  expect(array2.twoTwo([2])).toEqual(false);
});

test('twoTwo should return true when given [1]', () => {
  expect(array2.twoTwo([1])).toEqual(true);
});

test('twoTwo should return true when given []', () => {
  expect(array2.twoTwo([])).toEqual(true);
});

test('twoTwo should return true when given [5,2,2,3]', () => {
  expect(array2.twoTwo([5,2,2,3])).toEqual(true);
});

test('twoTwo should return false when given [2,2,5,2]', () => {
  expect(array2.twoTwo([2,2,5,2])).toEqual(false);
});

test('sameEnds should return false when given ([5,6,45,99,13,5,6], 1)', () => {
  expect(array2.sameEnds([5,6,45,99,13,5,6], 1)).toEqual(false);
});

test('sameEnds should return true when given ([5,6,45,99,13,5,6], 2)', () => {
  expect(array2.sameEnds([5,6,45,99,13,5,6], 2)).toEqual(true);
});

test('sameEnds should return false when given ([5,6,45,99,13,5,6], 3)', () => {
  expect(array2.sameEnds([5,6,45,99,13,5,6], 3)).toEqual(false);
});

test('sameEnds should return true when given ([1,2,5,2,1], 1)', () => {
  expect(array2.sameEnds([1,2,5,2,1], 1)).toEqual(true);
});

test('sameEnds should return false when given ([1,2,5,2,1], 2)', () => {
  expect(array2.sameEnds([1,2,5,2,1], 2)).toEqual(false);
});

test('sameEnds should return true when given ([1,2,5,2,1], 0)', () => {
  expect(array2.sameEnds([1,2,5,2,1], 0)).toEqual(true);
});

test('sameEnds should return true when given ([1,2,5,2,1], 5)', () => {
  expect(array2.sameEnds([1,2,5,2,1], 5)).toEqual(true);
});

test('sameEnds should return true when given ([1,1,1], 0)', () => {
  expect(array2.sameEnds([1,1,1], 0)).toEqual(true);
});

test('sameEnds should return true when given ([1,1,1], 1)', () => {
  expect(array2.sameEnds([1,1,1], 1)).toEqual(true);
});

test('sameEnds should return true when given ([1,1,1], 2)', () => {
  expect(array2.sameEnds([1,1,1], 2)).toEqual(true);
});

test('sameEnds should return true when given ([1,1,1], 3)', () => {
  expect(array2.sameEnds([1,1,1], 3)).toEqual(true);
});

test('sameEnds should return true when given ([1], 1)', () => {
  expect(array2.sameEnds([1], 1)).toEqual(true);
});

test('sameEnds should return true when given ([], 0)', () => {
  expect(array2.sameEnds([], 0)).toEqual(true);
});

test('sameEnds should return false when given ([4,2,4,5], 1)', () => {
  expect(array2.sameEnds([4,2,4,5], 1)).toEqual(false);
});

test('tripleUp should return true when given [1,4,5,6,2]', () => {
  expect(array2.tripleUp([1,4,5,6,2])).toEqual(true);
});

test('tripleUp should return true when given [1,2,3]', () => {
  expect(array2.tripleUp([1,2,3])).toEqual(true);
});

test('tripleUp should return false when given [1,2,4]', () => {
  expect(array2.tripleUp([1,2,4])).toEqual(false);
});

test('tripleUp should return true when given [1,2,4,5,7,6,5,6,7,6]', () => {
  expect(array2.tripleUp([1,2,4,5,7,6,5,6,7,6])).toEqual(true);
});

test('tripleUp should return false when given [1,2,4,5,7,6,5,7,7,6]', () => {
  expect(array2.tripleUp([1,2,4,5,7,6,5,7,7,6])).toEqual(false);
});

test('tripleUp should return false when given [1,2]', () => {
  expect(array2.tripleUp([1,2])).toEqual(false);
});

test('tripleUp should return false when given [1]', () => {
  expect(array2.tripleUp([1])).toEqual(false);
});

test('tripleUp should return false when given []', () => {
  expect(array2.tripleUp([])).toEqual(false);
});

test('tripleUp should return true when given [10,9,8,-100,-99,-98,100]', () => {
  expect(array2.tripleUp([10,9,8,-100,-99,-98,100])).toEqual(true);
});

test('tripleUp should return false when given [10,9,8,-100,-99,99,100]', () => {
  expect(array2.tripleUp([10,9,8,-100,-99,99,100])).toEqual(false);
});

test('tripleUp should return true when given [-100,-99,-99,100,101,102]', () => {
  expect(array2.tripleUp([-100,-99,-99,100,101,102])).toEqual(true);
});

test('tripleUp should return false when given [2,3,5,6,8,9,2,3]', () => {
  expect(array2.tripleUp([2,3,5,6,8,9,2,3])).toEqual(false);
});

test('fizzArray3 should return [5,6,7,8,9] when given (5, 10)', () => {
  expect(array2.fizzArray3(5, 10)).toEqual([5,6,7,8,9]);
});

test('fizzArray3 should return [11,12,13,14,15,16,17] when given (11, 18)', () => {
  expect(array2.fizzArray3(11, 18)).toEqual([11,12,13,14,15,16,17]);
});

test('fizzArray3 should return [1,2] when given (1, 3)', () => {
  expect(array2.fizzArray3(1, 3)).toEqual([1,2]);
});

test('fizzArray3 should return [1] when given (1, 2)', () => {
  expect(array2.fizzArray3(1, 2)).toEqual([1]);
});

test('fizzArray3 should return [] when given (1, 1)', () => {
  expect(array2.fizzArray3(1, 1)).toEqual([]);
});

test('fizzArray3 should return [1000,1001,1002,1003,1004] when given (1000, 1005)', () => {
  expect(array2.fizzArray3(1000, 1005)).toEqual([1000,1001,1002,1003,1004]);
});

test('shiftLeft should return [2,5,3,6] when given [6,2,5,3]', () => {
  expect(array2.shiftLeft([6,2,5,3])).toEqual([2,5,3,6]);
});

test('shiftLeft should return [2,1] when given [1,2]', () => {
  expect(array2.shiftLeft([1,2])).toEqual([2,1]);
});

test('shiftLeft should return [1] when given [1]', () => {
  expect(array2.shiftLeft([1])).toEqual([1]);
});

test('shiftLeft should return [] when given []', () => {
  expect(array2.shiftLeft([])).toEqual([]);
});

test('shiftLeft should return [1,2,2,4,1] when given [1,1,2,2,4]', () => {
  expect(array2.shiftLeft([1,1,2,2,4])).toEqual([1,2,2,4,1]);
});

test('shiftLeft should return [1,1,1] when given [1,1,1]', () => {
  expect(array2.shiftLeft([1,1,1])).toEqual([1,1,1]);
});

test('shiftLeft should return [2,3,1] when given [1,2,3]', () => {
  expect(array2.shiftLeft([1,2,3])).toEqual([2,3,1]);
});

test('tenRun should return [2,10,10,10,20,20] when given [2,10,3,4,20,5]', () => {
  expect(array2.tenRun([2,10,3,4,20,5])).toEqual([2,10,10,10,20,20]);
});

test('tenRun should return [10,10,20,20] when given [10,1,20,2]', () => {
  expect(array2.tenRun([10,1,20,2])).toEqual([10,10,20,20]);
});

test('tenRun should return [10,10,10,20] when given [10,1,9,20]', () => {
  expect(array2.tenRun([10,1,9,20])).toEqual([10,10,10,20]);
});

test('tenRun should return [1,2,50,50] when given [1,2,50,1]', () => {
  expect(array2.tenRun([1,2,50,1])).toEqual([1,2,50,50]);
});

test('tenRun should return [1,20,50,50] when given [1,20,50,1]', () => {
  expect(array2.tenRun([1,20,50,1])).toEqual([1,20,50,50]);
});

test('tenRun should return [10,10] when given [10,10]', () => {
  expect(array2.tenRun([10,10])).toEqual([10,10]);
});

test('tenRun should return [10,10] when given [10,2]', () => {
  expect(array2.tenRun([10,2])).toEqual([10,10]);
});

test('tenRun should return [0,0] when given [0,2]', () => {
  expect(array2.tenRun([0,2])).toEqual([0,0]);
});

test('tenRun should return [1,2] when given [1,2]', () => {
  expect(array2.tenRun([1,2])).toEqual([1,2]);
});

test('tenRun should return [1] when given [1]', () => {
  expect(array2.tenRun([1])).toEqual([1]);
});

test('tenRun should return [] when given []', () => {
  expect(array2.tenRun([])).toEqual([]);
});

test('pre4 should return [1,2] when given [1,2,4,1]', () => {
  expect(array2.pre4([1,2,4,1])).toEqual([1,2]);
});

test('pre4 should return [3,1] when given [3,1,4]', () => {
  expect(array2.pre4([3,1,4])).toEqual([3,1]);
});

test('pre4 should return [1] when given [1,4,4]', () => {
  expect(array2.pre4([1,4,4])).toEqual([1]);
});

test('pre4 should return [1] when given [1,4,4,2]', () => {
  expect(array2.pre4([1,4,4,2])).toEqual([1]);
});

test('pre4 should return [1,3] when given [1,3,4,2,4]', () => {
  expect(array2.pre4([1,3,4,2,4])).toEqual([1,3]);
});

test('pre4 should return [] when given [4,4]', () => {
  expect(array2.pre4([4,4])).toEqual([]);
});

test('pre4 should return [3,3] when given [3,3,4]', () => {
  expect(array2.pre4([3,3,4])).toEqual([3,3]);
});

test('pre4 should return [1,2,1] when given [1,2,1,4]', () => {
  expect(array2.pre4([1,2,1,4])).toEqual([1,2,1]);
});

test('pre4 should return [2,1] when given [2,1,4,2]', () => {
  expect(array2.pre4([2,1,4,2])).toEqual([2,1]);
});

test('pre4 should return [2,1,2,1] when given [2,1,2,1,4,2]', () => {
  expect(array2.pre4([2,1,2,1,4,2])).toEqual([2,1,2,1]);
});

test('post4 should return [1,2] when given [2,4,1,2]', () => {
  expect(array2.post4([2,4,1,2])).toEqual([1,2]);
});

test('post4 should return [2] when given [4,1,4,2]', () => {
  expect(array2.post4([4,1,4,2])).toEqual([2]);
});

test('post4 should return [1,2,3] when given [4,4,1,2,3]', () => {
  expect(array2.post4([4,4,1,2,3])).toEqual([1,2,3]);
});

test('post4 should return [2] when given [4,2]', () => {
  expect(array2.post4([4,2])).toEqual([2]);
});

test('post4 should return [3] when given [4,4,3]', () => {
  expect(array2.post4([4,4,3])).toEqual([3]);
});

test('post4 should return [] when given [4,4]', () => {
  expect(array2.post4([4,4])).toEqual([]);
});

test('post4 should return [] when given [4]', () => {
  expect(array2.post4([4])).toEqual([]);
});

test('post4 should return [3,2] when given [2,4,1,4,3,2]', () => {
  expect(array2.post4([2,4,1,4,3,2])).toEqual([3,2]);
});

test('post4 should return [2,2,2] when given [4,1,4,2,2,2]', () => {
  expect(array2.post4([4,1,4,2,2,2])).toEqual([2,2,2]);
});

test('post4 should return [3,2] when given [3,4,3,2]', () => {
  expect(array2.post4([3,4,3,2])).toEqual([3,2]);
});

test('notAlone should return [1,3,3] when given ([1,2,3], 2)', () => {
  expect(array2.notAlone([1,2,3], 2)).toEqual([1,3,3]);
});

test('notAlone should return [1,3,3,5,5,2] when given ([1,2,3,2,5,2], 2)', () => {
  expect(array2.notAlone([1,2,3,2,5,2], 2)).toEqual([1,3,3,5,5,2]);
});

test('notAlone should return [3,4] when given ([3,4], 3)', () => {
  expect(array2.notAlone([3,4], 3)).toEqual([3,4]);
});

test('notAlone should return [3,3] when given ([3,3], 3)', () => {
  expect(array2.notAlone([3,3], 3)).toEqual([3,3]);
});

test('notAlone should return [1,3,3,2] when given ([1,3,1,2], 1)', () => {
  expect(array2.notAlone([1,3,1,2], 1)).toEqual([1,3,3,2]);
});

test('notAlone should return [3] when given ([3], 3)', () => {
  expect(array2.notAlone([3], 3)).toEqual([3]);
});

test('notAlone should return [] when given ([], 3)', () => {
  expect(array2.notAlone([], 3)).toEqual([]);
});

test('notAlone should return [7,7,6] when given ([7,1,6], 1)', () => {
  expect(array2.notAlone([7,1,6], 1)).toEqual([7,7,6]);
});

test('notAlone should return [1,1,1] when given ([1,1,1], 1)', () => {
  expect(array2.notAlone([1,1,1], 1)).toEqual([1,1,1]);
});

test('notAlone should return [1,1,1,2] when given ([1,1,1,2], 1)', () => {
  expect(array2.notAlone([1,1,1,2], 1)).toEqual([1,1,1,2]);
});

test('zeroFront should return [0,0,1,1] when given [1,0,0,1]', () => {
  expect(array2.zeroFront([1,0,0,1])).toEqual([0,0,1,1]);
});

test('zeroFront should return [0,0,1,1,1] when given [0,1,1,0,1]', () => {
  expect(array2.zeroFront([0,1,1,0,1])).toEqual([0,0,1,1,1]);
});

test('zeroFront should return [0,1] when given [1,0]', () => {
  expect(array2.zeroFront([1,0])).toEqual([0,1]);
});

test('zeroFront should return [0,1] when given [0,1]', () => {
  expect(array2.zeroFront([0,1])).toEqual([0,1]);
});

test('zeroFront should return [0,1,1,1] when given [1,1,1,0]', () => {
  expect(array2.zeroFront([1,1,1,0])).toEqual([0,1,1,1]);
});

test('zeroFront should return [2,2,2,2] when given [2,2,2,2]', () => {
  expect(array2.zeroFront([2,2,2,2])).toEqual([2,2,2,2]);
});

test('zeroFront should return [0,0,0,1] when given [0,0,1,0]', () => {
  expect(array2.zeroFront([0,0,1,0])).toEqual([0,0,0,1]);
});

test('zeroFront should return [0,0,0,-1,-1] when given [-1,0,0,-1,0]', () => {
  expect(array2.zeroFront([-1,0,0,-1,0])).toEqual([0,0,0,-1,-1]);
});

test('zeroFront should return [0,0,-3,-3] when given [0,-3,0,-3]', () => {
  expect(array2.zeroFront([0,-3,0,-3])).toEqual([0,0,-3,-3]);
});

test('zeroFront should return [] when given []', () => {
  expect(array2.zeroFront([])).toEqual([]);
});

test('zeroFront should return [0,0,9,9,9,9] when given [9,9,0,9,0,9]', () => {
  expect(array2.zeroFront([9,9,0,9,0,9])).toEqual([0,0,9,9,9,9]);
});

test('withoutTen should return [1,2,0,0] when given [1,10,10,2]', () => {
  expect(array2.withoutTen([1,10,10,2])).toEqual([1,2,0,0]);
});

test('withoutTen should return [2,0,0] when given [10,2,10]', () => {
  expect(array2.withoutTen([10,2,10])).toEqual([2,0,0]);
});

test('withoutTen should return [1,99,0] when given [1,99,10]', () => {
  expect(array2.withoutTen([1,99,10])).toEqual([1,99,0]);
});

test('withoutTen should return [13,14,0,0] when given [10,13,10,14]', () => {
  expect(array2.withoutTen([10,13,10,14])).toEqual([13,14,0,0]);
});

test('withoutTen should return [13,14,0,0,0] when given [10,13,10,14,10]', () => {
  expect(array2.withoutTen([10,13,10,14,10])).toEqual([13,14,0,0,0]);
});

test('withoutTen should return [3,0,0] when given [10,10,3]', () => {
  expect(array2.withoutTen([10,10,3])).toEqual([3,0,0]);
});

test('withoutTen should return [1] when given [1]', () => {
  expect(array2.withoutTen([1])).toEqual([1]);
});

test('withoutTen should return [13,1] when given [13,1]', () => {
  expect(array2.withoutTen([13,1])).toEqual([13,1]);
});

test('withoutTen should return [0] when given [10]', () => {
  expect(array2.withoutTen([10])).toEqual([0]);
});

test('withoutTen should return [] when given []', () => {
  expect(array2.withoutTen([])).toEqual([]);
});

test('zeroMax should return [5,5,3,3] when given [0,5,0,3]', () => {
  expect(array2.zeroMax([0,5,0,3])).toEqual([5,5,3,3]);
});

test('zeroMax should return [3,4,3,3] when given [0,4,0,3]', () => {
  expect(array2.zeroMax([0,4,0,3])).toEqual([3,4,3,3]);
});

test('zeroMax should return [1,1,0] when given [0,1,0]', () => {
  expect(array2.zeroMax([0,1,0])).toEqual([1,1,0]);
});

test('zeroMax should return [5,1,5] when given [0,1,5]', () => {
  expect(array2.zeroMax([0,1,5])).toEqual([5,1,5]);
});

test('zeroMax should return [0,2,0] when given [0,2,0]', () => {
  expect(array2.zeroMax([0,2,0])).toEqual([0,2,0]);
});

test('zeroMax should return [1] when given [1]', () => {
  expect(array2.zeroMax([1])).toEqual([1]);
});

test('zeroMax should return [0] when given [0]', () => {
  expect(array2.zeroMax([0])).toEqual([0]);
});

test('zeroMax should return [] when given []', () => {
  expect(array2.zeroMax([])).toEqual([]);
});

test('zeroMax should return [7,3,4,3,0,2] when given [7,0,4,3,0,2]', () => {
  expect(array2.zeroMax([7,0,4,3,0,2])).toEqual([7,3,4,3,0,2]);
});

test('zeroMax should return [7,3,4,3,1,1] when given [7,0,4,3,0,1]', () => {
  expect(array2.zeroMax([7,0,4,3,0,1])).toEqual([7,3,4,3,1,1]);
});

test('zeroMax should return [7,3,4,3,0,0] when given [7,0,4,3,0,0]', () => {
  expect(array2.zeroMax([7,0,4,3,0,0])).toEqual([7,3,4,3,0,0]);
});

test('zeroMax should return [7,7,1,7,7,7] when given [7,0,1,0,0,7]', () => {
  expect(array2.zeroMax([7,0,1,0,0,7])).toEqual([7,7,1,7,7,7]);
});

test('evenOdd should return [0,0,0,1,1,1,1] when given [1,0,1,0,0,1,1]', () => {
  expect(array2.evenOdd([1,0,1,0,0,1,1])).toEqual([0,0,0,1,1,1,1]);
});

test('evenOdd should return [2,3,3] when given [3,3,2]', () => {
  expect(array2.evenOdd([3,3,2])).toEqual([2,3,3]);
});

test('evenOdd should return [2,2,2] when given [2,2,2]', () => {
  expect(array2.evenOdd([2,2,2])).toEqual([2,2,2]);
});

test('evenOdd should return [2,2,3] when given [3,2,2]', () => {
  expect(array2.evenOdd([3,2,2])).toEqual([2,2,3]);
});

test('evenOdd should return [0,0,1,1,1] when given [1,1,0,1,0]', () => {
  expect(array2.evenOdd([1,1,0,1,0])).toEqual([0,0,1,1,1]);
});

test('evenOdd should return [1] when given [1]', () => {
  expect(array2.evenOdd([1])).toEqual([1]);
});

test('evenOdd should return [2,1] when given [1,2]', () => {
  expect(array2.evenOdd([1,2])).toEqual([2,1]);
});

test('evenOdd should return [2,1] when given [2,1]', () => {
  expect(array2.evenOdd([2,1])).toEqual([2,1]);
});

test('evenOdd should return [] when given []', () => {
  expect(array2.evenOdd([])).toEqual([]);
});

test('fizzBuzz should return ["1","2","Fizz","4","Buzz"] when given (1, 6)', () => {
  expect(array2.fizzBuzz(1, 6)).toEqual(["1","2","Fizz","4","Buzz"]);
});

test('fizzBuzz should return ["1","2","Fizz","4","Buzz","Fizz","7"] when given (1, 8)', () => {
  expect(array2.fizzBuzz(1, 8)).toEqual(["1","2","Fizz","4","Buzz","Fizz","7"]);
});

test('fizzBuzz should return ["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz"] when given (1, 11)', () => {
  expect(array2.fizzBuzz(1, 11)).toEqual(["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz"]);
});

test('fizzBuzz should return ["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"] when given (1, 16)', () => {
  expect(array2.fizzBuzz(1, 16)).toEqual(["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"]);
});

test('fizzBuzz should return ["1","2","Fizz"] when given (1, 4)', () => {
  expect(array2.fizzBuzz(1, 4)).toEqual(["1","2","Fizz"]);
});

test('fizzBuzz should return ["1"] when given (1, 2)', () => {
  expect(array2.fizzBuzz(1, 2)).toEqual(["1"]);
});

test('fizzBuzz should return ["Buzz","Fizz","52","53","Fizz","Buzz"] when given (50, 56)', () => {
  expect(array2.fizzBuzz(50, 56)).toEqual(["Buzz","Fizz","52","53","Fizz","Buzz"]);
});

test('fizzBuzz should return ["FizzBuzz","16"] when given (15, 17)', () => {
  expect(array2.fizzBuzz(15, 17)).toEqual(["FizzBuzz","16"]);
});

test('fizzBuzz should return ["FizzBuzz","31","32","Fizz","34","Buzz"] when given (30, 36)', () => {
  expect(array2.fizzBuzz(30, 36)).toEqual(["FizzBuzz","31","32","Fizz","34","Buzz"]);
});

test('fizzBuzz should return ["Buzz","1001","Fizz","1003","1004","FizzBuzz"] when given (1000, 1006)', () => {
  expect(array2.fizzBuzz(1000, 1006)).toEqual(["Buzz","1001","Fizz","1003","1004","FizzBuzz"]);
});

test('fizzBuzz should return ["Fizz","Buzz","101"] when given (99, 102)', () => {
  expect(array2.fizzBuzz(99, 102)).toEqual(["Fizz","Buzz","101"]);
});

test('fizzBuzz should return ["14","FizzBuzz","16","17","Fizz","19"] when given (14, 20)', () => {
  expect(array2.fizzBuzz(14, 20)).toEqual(["14","FizzBuzz","16","17","Fizz","19"]);
});
