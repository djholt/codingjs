const ap1 = require('../ap1');

test('scoresIncreasing should return true when given [1,3,4]', () => {
  expect(ap1.scoresIncreasing([1,3,4])).toEqual(true);
});

test('scoresIncreasing should return false when given [1,3,2]', () => {
  expect(ap1.scoresIncreasing([1,3,2])).toEqual(false);
});

test('scoresIncreasing should return true when given [1,1,4]', () => {
  expect(ap1.scoresIncreasing([1,1,4])).toEqual(true);
});

test('scoresIncreasing should return true when given [1,1,2,4,4,7]', () => {
  expect(ap1.scoresIncreasing([1,1,2,4,4,7])).toEqual(true);
});

test('scoresIncreasing should return false when given [1,1,2,4,3,7]', () => {
  expect(ap1.scoresIncreasing([1,1,2,4,3,7])).toEqual(false);
});

test('scores100 should return true when given [1,100,100]', () => {
  expect(ap1.scores100([1,100,100])).toEqual(true);
});

test('scores100 should return false when given [1,100,99,100]', () => {
  expect(ap1.scores100([1,100,99,100])).toEqual(false);
});

test('scores100 should return true when given [100,1,100,100]', () => {
  expect(ap1.scores100([100,1,100,100])).toEqual(true);
});

test('scores100 should return false when given [100,1,100,1]', () => {
  expect(ap1.scores100([100,1,100,1])).toEqual(false);
});

test('scores100 should return false when given [1,2,3,4,5]', () => {
  expect(ap1.scores100([1,2,3,4,5])).toEqual(false);
});

test('scores100 should return false when given [1,2,100,4,5]', () => {
  expect(ap1.scores100([1,2,100,4,5])).toEqual(false);
});

test('scoresClump should return true when given [3,4,5]', () => {
  expect(ap1.scoresClump([3,4,5])).toEqual(true);
});

test('scoresClump should return false when given [3,4,6]', () => {
  expect(ap1.scoresClump([3,4,6])).toEqual(false);
});

test('scoresClump should return true when given [1,3,5,5]', () => {
  expect(ap1.scoresClump([1,3,5,5])).toEqual(true);
});

test('scoresClump should return true when given [2,4,5,6]', () => {
  expect(ap1.scoresClump([2,4,5,6])).toEqual(true);
});

test('scoresClump should return false when given [2,4,5,7]', () => {
  expect(ap1.scoresClump([2,4,5,7])).toEqual(false);
});

test('scoresClump should return true when given [2,4,4,7]', () => {
  expect(ap1.scoresClump([2,4,4,7])).toEqual(true);
});

test('scoresClump should return false when given [3,3,6,7,9]', () => {
  expect(ap1.scoresClump([3,3,6,7,9])).toEqual(false);
});

test('scoresClump should return true when given [3,3,7,7,9]', () => {
  expect(ap1.scoresClump([3,3,7,7,9])).toEqual(true);
});

test('scoresClump should return false when given [4,5,8]', () => {
  expect(ap1.scoresClump([4,5,8])).toEqual(false);
});

test('scoresAverage should return 4 when given [2,2,4,4]', () => {
  expect(ap1.scoresAverage([2,2,4,4])).toEqual(4);
});

test('scoresAverage should return 4 when given [4,4,4,2,2,2]', () => {
  expect(ap1.scoresAverage([4,4,4,2,2,2])).toEqual(4);
});

test('scoresAverage should return 4 when given [3,4,5,1,2,3]', () => {
  expect(ap1.scoresAverage([3,4,5,1,2,3])).toEqual(4);
});

test('scoresAverage should return 6 when given [5,6]', () => {
  expect(ap1.scoresAverage([5,6])).toEqual(6);
});

test('scoresAverage should return 5 when given [5,4]', () => {
  expect(ap1.scoresAverage([5,4])).toEqual(5);
});

test('scoresAverage should return 5 when given [5,4,5,6,2,1,2,3]', () => {
  expect(ap1.scoresAverage([5,4,5,6,2,1,2,3])).toEqual(5);
});

test('wordsCount should return 2 when given (["a","bb","b","ccc"], 1)', () => {
  expect(ap1.wordsCount(["a","bb","b","ccc"], 1)).toEqual(2);
});

test('wordsCount should return 1 when given (["a","bb","b","ccc"], 3)', () => {
  expect(ap1.wordsCount(["a","bb","b","ccc"], 3)).toEqual(1);
});

test('wordsCount should return 0 when given (["a","bb","b","ccc"], 4)', () => {
  expect(ap1.wordsCount(["a","bb","b","ccc"], 4)).toEqual(0);
});

test('wordsCount should return 2 when given (["xx","yyy","x","yy","z"], 1)', () => {
  expect(ap1.wordsCount(["xx","yyy","x","yy","z"], 1)).toEqual(2);
});

test('wordsCount should return 2 when given (["xx","yyy","x","yy","z"], 2)', () => {
  expect(ap1.wordsCount(["xx","yyy","x","yy","z"], 2)).toEqual(2);
});

test('wordsFront should return ["a"] when given (["a","b","c","d"], 1)', () => {
  expect(ap1.wordsFront(["a","b","c","d"], 1)).toEqual(["a"]);
});

test('wordsFront should return ["a","b"] when given (["a","b","c","d"], 2)', () => {
  expect(ap1.wordsFront(["a","b","c","d"], 2)).toEqual(["a","b"]);
});

test('wordsFront should return ["a","b","c"] when given (["a","b","c","d"], 3)', () => {
  expect(ap1.wordsFront(["a","b","c","d"], 3)).toEqual(["a","b","c"]);
});

test('wordsFront should return ["a","b","c","d"] when given (["a","b","c","d"], 4)', () => {
  expect(ap1.wordsFront(["a","b","c","d"], 4)).toEqual(["a","b","c","d"]);
});

test('wordsFront should return ["Hi"] when given (["Hi","There"], 1)', () => {
  expect(ap1.wordsFront(["Hi","There"], 1)).toEqual(["Hi"]);
});

test('wordsWithoutList should return ["bb","ccc"] when given (["a","bb","b","ccc"], 1)', () => {
  expect(ap1.wordsWithoutList(["a","bb","b","ccc"], 1)).toEqual(["bb","ccc"]);
});

test('wordsWithoutList should return ["a","bb","b"] when given (["a","bb","b","ccc"], 3)', () => {
  expect(ap1.wordsWithoutList(["a","bb","b","ccc"], 3)).toEqual(["a","bb","b"]);
});

test('wordsWithoutList should return ["a","bb","b","ccc"] when given (["a","bb","b","ccc"], 4)', () => {
  expect(ap1.wordsWithoutList(["a","bb","b","ccc"], 4)).toEqual(["a","bb","b","ccc"]);
});

test('wordsWithoutList should return ["xx","yyy","yy"] when given (["xx","yyy","x","yy","z"], 1)', () => {
  expect(ap1.wordsWithoutList(["xx","yyy","x","yy","z"], 1)).toEqual(["xx","yyy","yy"]);
});

test('hasOne should return true when given 10', () => {
  expect(ap1.hasOne(10)).toEqual(true);
});

test('hasOne should return false when given 22', () => {
  expect(ap1.hasOne(22)).toEqual(false);
});

test('hasOne should return false when given 220', () => {
  expect(ap1.hasOne(220)).toEqual(false);
});

test('hasOne should return true when given 212', () => {
  expect(ap1.hasOne(212)).toEqual(true);
});

test('hasOne should return true when given 1', () => {
  expect(ap1.hasOne(1)).toEqual(true);
});

test('hasOne should return false when given 9', () => {
  expect(ap1.hasOne(9)).toEqual(false);
});

test('hasOne should return true when given 211112', () => {
  expect(ap1.hasOne(211112)).toEqual(true);
});

test('hasOne should return true when given 121121', () => {
  expect(ap1.hasOne(121121)).toEqual(true);
});

test('hasOne should return false when given 222222', () => {
  expect(ap1.hasOne(222222)).toEqual(false);
});

test('hasOne should return true when given 56156', () => {
  expect(ap1.hasOne(56156)).toEqual(true);
});

test('hasOne should return false when given 56556', () => {
  expect(ap1.hasOne(56556)).toEqual(false);
});

test('dividesSelf should return true when given 128', () => {
  expect(ap1.dividesSelf(128)).toEqual(true);
});

test('dividesSelf should return true when given 12', () => {
  expect(ap1.dividesSelf(12)).toEqual(true);
});

test('dividesSelf should return false when given 120', () => {
  expect(ap1.dividesSelf(120)).toEqual(false);
});

test('dividesSelf should return true when given 122', () => {
  expect(ap1.dividesSelf(122)).toEqual(true);
});

test('dividesSelf should return false when given 13', () => {
  expect(ap1.dividesSelf(13)).toEqual(false);
});

test('dividesSelf should return false when given 32', () => {
  expect(ap1.dividesSelf(32)).toEqual(false);
});

test('dividesSelf should return true when given 22', () => {
  expect(ap1.dividesSelf(22)).toEqual(true);
});

test('dividesSelf should return false when given 42', () => {
  expect(ap1.dividesSelf(42)).toEqual(false);
});

test('dividesSelf should return true when given 212', () => {
  expect(ap1.dividesSelf(212)).toEqual(true);
});

test('dividesSelf should return false when given 213', () => {
  expect(ap1.dividesSelf(213)).toEqual(false);
});

test('dividesSelf should return true when given 162', () => {
  expect(ap1.dividesSelf(162)).toEqual(true);
});

test('copyEvens should return [2,4] when given ([3,2,4,5,8], 2)', () => {
  expect(ap1.copyEvens([3,2,4,5,8], 2)).toEqual([2,4]);
});

test('copyEvens should return [2,4,8] when given ([3,2,4,5,8], 3)', () => {
  expect(ap1.copyEvens([3,2,4,5,8], 3)).toEqual([2,4,8]);
});

test('copyEvens should return [6,2,4] when given ([6,1,2,4,5,8], 3)', () => {
  expect(ap1.copyEvens([6,1,2,4,5,8], 3)).toEqual([6,2,4]);
});

test('copyEvens should return [6,2,4,8] when given ([6,1,2,4,5,8], 4)', () => {
  expect(ap1.copyEvens([6,1,2,4,5,8], 4)).toEqual([6,2,4,8]);
});

test('copyEvens should return [4] when given ([3,1,4,1,5], 1)', () => {
  expect(ap1.copyEvens([3,1,4,1,5], 1)).toEqual([4]);
});

test('copyEvens should return [2] when given ([2], 1)', () => {
  expect(ap1.copyEvens([2], 1)).toEqual([2]);
});

test('copyEvens should return [6,2] when given ([6,2,4,8], 2)', () => {
  expect(ap1.copyEvens([6,2,4,8], 2)).toEqual([6,2]);
});

test('copyEvens should return [6,2,4] when given ([6,2,4,8], 3)', () => {
  expect(ap1.copyEvens([6,2,4,8], 3)).toEqual([6,2,4]);
});

test('copyEvens should return [6,2,4,8] when given ([6,2,4,8], 4)', () => {
  expect(ap1.copyEvens([6,2,4,8], 4)).toEqual([6,2,4,8]);
});

test('copyEvens should return [8] when given ([1,8,4], 1)', () => {
  expect(ap1.copyEvens([1,8,4], 1)).toEqual([8]);
});

test('copyEvens should return [8,4] when given ([1,8,4], 2)', () => {
  expect(ap1.copyEvens([1,8,4], 2)).toEqual([8,4]);
});

test('copyEvens should return [2,8] when given ([2,8,4], 2)', () => {
  expect(ap1.copyEvens([2,8,4], 2)).toEqual([2,8]);
});

test('copyEndy should return [9,90] when given ([9,11,90,22,6], 2)', () => {
  expect(ap1.copyEndy([9,11,90,22,6], 2)).toEqual([9,90]);
});

test('copyEndy should return [9,90,6] when given ([9,11,90,22,6], 3)', () => {
  expect(ap1.copyEndy([9,11,90,22,6], 3)).toEqual([9,90,6]);
});

test('copyEndy should return [1,1] when given ([12,1,1,13,0,20], 2)', () => {
  expect(ap1.copyEndy([12,1,1,13,0,20], 2)).toEqual([1,1]);
});

test('copyEndy should return [1,1,0] when given ([12,1,1,13,0,20], 3)', () => {
  expect(ap1.copyEndy([12,1,1,13,0,20], 3)).toEqual([1,1,0]);
});

test('copyEndy should return [0] when given ([0], 1)', () => {
  expect(ap1.copyEndy([0], 1)).toEqual([0]);
});

test('copyEndy should return [10,90] when given ([10,11,90], 2)', () => {
  expect(ap1.copyEndy([10,11,90], 2)).toEqual([10,90]);
});

test('copyEndy should return [90,100] when given ([90,22,100], 2)', () => {
  expect(ap1.copyEndy([90,22,100], 2)).toEqual([90,100]);
});

test('copyEndy should return [10] when given ([12,11,10,89,101,4], 1)', () => {
  expect(ap1.copyEndy([12,11,10,89,101,4], 1)).toEqual([10]);
});

test('copyEndy should return [2,2] when given ([13,2,2,0], 2)', () => {
  expect(ap1.copyEndy([13,2,2,0], 2)).toEqual([2,2]);
});

test('copyEndy should return [2,2,0] when given ([13,2,2,0], 3)', () => {
  expect(ap1.copyEndy([13,2,2,0], 3)).toEqual([2,2,0]);
});

test('copyEndy should return [2,2] when given ([13,2,13,2,0,30], 2)', () => {
  expect(ap1.copyEndy([13,2,13,2,0,30], 2)).toEqual([2,2]);
});

test('copyEndy should return [2,2,0] when given ([13,2,13,2,0,30], 3)', () => {
  expect(ap1.copyEndy([13,2,13,2,0,30], 3)).toEqual([2,2,0]);
});

test('matchUp should return 1 when given (["aa","bb","cc"], ["aaa","xx","bb"])', () => {
  expect(ap1.matchUp(["aa","bb","cc"], ["aaa","xx","bb"])).toEqual(1);
});

test('matchUp should return 2 when given (["aa","bb","cc"], ["aaa","b","bb"])', () => {
  expect(ap1.matchUp(["aa","bb","cc"], ["aaa","b","bb"])).toEqual(2);
});

test('matchUp should return 1 when given (["aa","bb","cc"], ["","","ccc"])', () => {
  expect(ap1.matchUp(["aa","bb","cc"], ["","","ccc"])).toEqual(1);
});

test('matchUp should return 1 when given (["","","ccc"], ["aa","bb","cc"])', () => {
  expect(ap1.matchUp(["","","ccc"], ["aa","bb","cc"])).toEqual(1);
});

test('matchUp should return 0 when given (["","",""], ["","bb","cc"])', () => {
  expect(ap1.matchUp(["","",""], ["","bb","cc"])).toEqual(0);
});

test('matchUp should return 0 when given (["aa","bb","cc"], ["","",""])', () => {
  expect(ap1.matchUp(["aa","bb","cc"], ["","",""])).toEqual(0);
});

test('matchUp should return 1 when given (["aa","","ccc"], ["","bb","cc"])', () => {
  expect(ap1.matchUp(["aa","","ccc"], ["","bb","cc"])).toEqual(1);
});

test('matchUp should return 0 when given (["x","y","z"], ["y","z","x"])', () => {
  expect(ap1.matchUp(["x","y","z"], ["y","z","x"])).toEqual(0);
});

test('matchUp should return 1 when given (["","y","z"], ["","y","x"])', () => {
  expect(ap1.matchUp(["","y","z"], ["","y","x"])).toEqual(1);
});

test('matchUp should return 3 when given (["x","y","z"], ["xx","yyy","zzz"])', () => {
  expect(ap1.matchUp(["x","y","z"], ["xx","yyy","zzz"])).toEqual(3);
});

test('matchUp should return 2 when given (["x","y","z"], ["xx","yyy",""])', () => {
  expect(ap1.matchUp(["x","y","z"], ["xx","yyy",""])).toEqual(2);
});

test('matchUp should return 3 when given (["b","x","y","z"], ["a","xx","yyy","zzz"])', () => {
  expect(ap1.matchUp(["b","x","y","z"], ["a","xx","yyy","zzz"])).toEqual(3);
});

test('matchUp should return 1 when given (["aaa","bb","c"], ["aaa","xx","bb"])', () => {
  expect(ap1.matchUp(["aaa","bb","c"], ["aaa","xx","bb"])).toEqual(1);
});

test('scoreUp should return 6 when given (["a","a","b","b"], ["a","c","b","c"])', () => {
  expect(ap1.scoreUp(["a","a","b","b"], ["a","c","b","c"])).toEqual(6);
});

test('scoreUp should return 11 when given (["a","a","b","b"], ["a","a","b","c"])', () => {
  expect(ap1.scoreUp(["a","a","b","b"], ["a","a","b","c"])).toEqual(11);
});

test('scoreUp should return 16 when given (["a","a","b","b"], ["a","a","b","b"])', () => {
  expect(ap1.scoreUp(["a","a","b","b"], ["a","a","b","b"])).toEqual(16);
});

test('scoreUp should return 3 when given (["a","a","b","b"], ["?","c","b","?"])', () => {
  expect(ap1.scoreUp(["a","a","b","b"], ["?","c","b","?"])).toEqual(3);
});

test('scoreUp should return -1 when given (["a","a","b","b"], ["?","c","?","?"])', () => {
  expect(ap1.scoreUp(["a","a","b","b"], ["?","c","?","?"])).toEqual(-1);
});

test('scoreUp should return 7 when given (["a","a","b","b"], ["c","?","b","b"])', () => {
  expect(ap1.scoreUp(["a","a","b","b"], ["c","?","b","b"])).toEqual(7);
});

test('scoreUp should return 3 when given (["a","a","b","b"], ["c","?","b","?"])', () => {
  expect(ap1.scoreUp(["a","a","b","b"], ["c","?","b","?"])).toEqual(3);
});

test('scoreUp should return 2 when given (["a","b","c"], ["a","c","b"])', () => {
  expect(ap1.scoreUp(["a","b","c"], ["a","c","b"])).toEqual(2);
});

test('scoreUp should return 4 when given (["a","a","b","b","c","c"], ["a","c","a","c","a","c"])', () => {
  expect(ap1.scoreUp(["a","a","b","b","c","c"], ["a","c","a","c","a","c"])).toEqual(4);
});

test('scoreUp should return 6 when given (["a","a","b","b","c","c"], ["a","c","?","?","a","c"])', () => {
  expect(ap1.scoreUp(["a","a","b","b","c","c"], ["a","c","?","?","a","c"])).toEqual(6);
});

test('scoreUp should return 11 when given (["a","a","b","b","c","c"], ["a","c","?","?","c","c"])', () => {
  expect(ap1.scoreUp(["a","a","b","b","c","c"], ["a","c","?","?","c","c"])).toEqual(11);
});

test('scoreUp should return 12 when given (["a","b","c"], ["a","b","c"])', () => {
  expect(ap1.scoreUp(["a","b","c"], ["a","b","c"])).toEqual(12);
});

test('wordsWithout should return ["b","c"] when given (["a","b","c","a"], "a")', () => {
  expect(ap1.wordsWithout(["a","b","c","a"], "a")).toEqual(["b","c"]);
});

test('wordsWithout should return ["a","c","a"] when given (["a","b","c","a"], "b")', () => {
  expect(ap1.wordsWithout(["a","b","c","a"], "b")).toEqual(["a","c","a"]);
});

test('wordsWithout should return ["a","b","a"] when given (["a","b","c","a"], "c")', () => {
  expect(ap1.wordsWithout(["a","b","c","a"], "c")).toEqual(["a","b","a"]);
});

test('wordsWithout should return ["c","a","a"] when given (["b","c","a","a"], "b")', () => {
  expect(ap1.wordsWithout(["b","c","a","a"], "b")).toEqual(["c","a","a"]);
});

test('wordsWithout should return ["xx","yyy","yy"] when given (["xx","yyy","x","yy","x"], "x")', () => {
  expect(ap1.wordsWithout(["xx","yyy","x","yy","x"], "x")).toEqual(["xx","yyy","yy"]);
});

test('wordsWithout should return ["xx","yyy","x","x"] when given (["xx","yyy","x","yy","x"], "yy")', () => {
  expect(ap1.wordsWithout(["xx","yyy","x","yy","x"], "yy")).toEqual(["xx","yyy","x","x"]);
});

test('wordsWithout should return ["ab","ac"] when given (["aa","ab","ac","aa"], "aa")', () => {
  expect(ap1.wordsWithout(["aa","ab","ac","aa"], "aa")).toEqual(["ab","ac"]);
});

test('scoresSpecial should return 40 when given ([12,10,4], [2,20,30])', () => {
  expect(ap1.scoresSpecial([12,10,4], [2,20,30])).toEqual(40);
});

test('scoresSpecial should return 40 when given ([20,10,4], [2,20,10])', () => {
  expect(ap1.scoresSpecial([20,10,4], [2,20,10])).toEqual(40);
});

test('scoresSpecial should return 20 when given ([12,11,4], [2,20,31])', () => {
  expect(ap1.scoresSpecial([12,11,4], [2,20,31])).toEqual(20);
});

test('scoresSpecial should return 50 when given ([1,20,2,50], [3,4,5])', () => {
  expect(ap1.scoresSpecial([1,20,2,50], [3,4,5])).toEqual(50);
});

test('scoresSpecial should return 50 when given ([3,4,5], [1,50,2,20])', () => {
  expect(ap1.scoresSpecial([3,4,5], [1,50,2,20])).toEqual(50);
});

test('scoresSpecial should return 50 when given ([10,4,20,30], [20])', () => {
  expect(ap1.scoresSpecial([10,4,20,30], [20])).toEqual(50);
});

test('scoresSpecial should return 50 when given ([10,4,20,30], [20])', () => {
  expect(ap1.scoresSpecial([10,4,20,30], [20])).toEqual(50);
});

test('scoresSpecial should return 50 when given ([10,4,20,30], [3,20,99])', () => {
  expect(ap1.scoresSpecial([10,4,20,30], [3,20,99])).toEqual(50);
});

test('scoresSpecial should return 60 when given ([10,4,20,30], [30,20,99])', () => {
  expect(ap1.scoresSpecial([10,4,20,30], [30,20,99])).toEqual(60);
});

test('scoresSpecial should return 0 when given ([], [2])', () => {
  expect(ap1.scoresSpecial([], [2])).toEqual(0);
});

test('scoresSpecial should return 20 when given ([], [20])', () => {
  expect(ap1.scoresSpecial([], [20])).toEqual(20);
});

test('scoresSpecial should return 40 when given ([14,10,4], [4,20,30])', () => {
  expect(ap1.scoresSpecial([14,10,4], [4,20,30])).toEqual(40);
});

test('sumHeights should return 6 when given ([5,3,6,7,2], 2, 4)', () => {
  expect(ap1.sumHeights([5,3,6,7,2], 2, 4)).toEqual(6);
});

test('sumHeights should return 2 when given ([5,3,6,7,2], 0, 1)', () => {
  expect(ap1.sumHeights([5,3,6,7,2], 0, 1)).toEqual(2);
});

test('sumHeights should return 11 when given ([5,3,6,7,2], 0, 4)', () => {
  expect(ap1.sumHeights([5,3,6,7,2], 0, 4)).toEqual(11);
});

test('sumHeights should return 0 when given ([5,3,6,7,2], 1, 1)', () => {
  expect(ap1.sumHeights([5,3,6,7,2], 1, 1)).toEqual(0);
});

test('sumHeights should return 3 when given ([1,2,3,4,5,4,3,2,10], 0, 3)', () => {
  expect(ap1.sumHeights([1,2,3,4,5,4,3,2,10], 0, 3)).toEqual(3);
});

test('sumHeights should return 11 when given ([1,2,3,4,5,4,3,2,10], 4, 8)', () => {
  expect(ap1.sumHeights([1,2,3,4,5,4,3,2,10], 4, 8)).toEqual(11);
});

test('sumHeights should return 8 when given ([1,2,3,4,5,4,3,2,10], 7, 8)', () => {
  expect(ap1.sumHeights([1,2,3,4,5,4,3,2,10], 7, 8)).toEqual(8);
});

test('sumHeights should return 0 when given ([1,2,3,4,5,4,3,2,10], 8, 8)', () => {
  expect(ap1.sumHeights([1,2,3,4,5,4,3,2,10], 8, 8)).toEqual(0);
});

test('sumHeights should return 0 when given ([1,2,3,4,5,4,3,2,10], 2, 2)', () => {
  expect(ap1.sumHeights([1,2,3,4,5,4,3,2,10], 2, 2)).toEqual(0);
});

test('sumHeights should return 3 when given ([1,2,3,4,5,4,3,2,10], 3, 6)', () => {
  expect(ap1.sumHeights([1,2,3,4,5,4,3,2,10], 3, 6)).toEqual(3);
});

test('sumHeights should return 1 when given ([10,8,7,7,7,6,7], 1, 4)', () => {
  expect(ap1.sumHeights([10,8,7,7,7,6,7], 1, 4)).toEqual(1);
});

test('sumHeights should return 2 when given ([10,8,7,7,7,6,7], 1, 5)', () => {
  expect(ap1.sumHeights([10,8,7,7,7,6,7], 1, 5)).toEqual(2);
});

test('sumHeights2 should return 7 when given ([5,3,6,7,2], 2, 4)', () => {
  expect(ap1.sumHeights2([5,3,6,7,2], 2, 4)).toEqual(7);
});

test('sumHeights2 should return 2 when given ([5,3,6,7,2], 0, 1)', () => {
  expect(ap1.sumHeights2([5,3,6,7,2], 0, 1)).toEqual(2);
});

test('sumHeights2 should return 15 when given ([5,3,6,7,2], 0, 4)', () => {
  expect(ap1.sumHeights2([5,3,6,7,2], 0, 4)).toEqual(15);
});

test('sumHeights2 should return 0 when given ([5,3,6,7,2], 1, 1)', () => {
  expect(ap1.sumHeights2([5,3,6,7,2], 1, 1)).toEqual(0);
});

test('sumHeights2 should return 6 when given ([1,2,3,4,5,4,3,2,10], 0, 3)', () => {
  expect(ap1.sumHeights2([1,2,3,4,5,4,3,2,10], 0, 3)).toEqual(6);
});

test('sumHeights2 should return 19 when given ([1,2,3,4,5,4,3,2,10], 4, 8)', () => {
  expect(ap1.sumHeights2([1,2,3,4,5,4,3,2,10], 4, 8)).toEqual(19);
});

test('sumHeights2 should return 16 when given ([1,2,3,4,5,4,3,2,10], 7, 8)', () => {
  expect(ap1.sumHeights2([1,2,3,4,5,4,3,2,10], 7, 8)).toEqual(16);
});

test('sumHeights2 should return 0 when given ([1,2,3,4,5,4,3,2,10], 8, 8)', () => {
  expect(ap1.sumHeights2([1,2,3,4,5,4,3,2,10], 8, 8)).toEqual(0);
});

test('sumHeights2 should return 0 when given ([1,2,3,4,5,4,3,2,10], 2, 2)', () => {
  expect(ap1.sumHeights2([1,2,3,4,5,4,3,2,10], 2, 2)).toEqual(0);
});

test('sumHeights2 should return 4 when given ([1,2,3,4,5,4,3,2,10], 3, 6)', () => {
  expect(ap1.sumHeights2([1,2,3,4,5,4,3,2,10], 3, 6)).toEqual(4);
});

test('sumHeights2 should return 1 when given ([10,8,7,7,7,6,7], 1, 4)', () => {
  expect(ap1.sumHeights2([10,8,7,7,7,6,7], 1, 4)).toEqual(1);
});

test('sumHeights2 should return 2 when given ([10,8,7,7,7,6,7], 1, 5)', () => {
  expect(ap1.sumHeights2([10,8,7,7,7,6,7], 1, 5)).toEqual(2);
});

test('bigHeights should return 1 when given ([5,3,6,7,2], 2, 4)', () => {
  expect(ap1.bigHeights([5,3,6,7,2], 2, 4)).toEqual(1);
});

test('bigHeights should return 0 when given ([5,3,6,7,2], 0, 1)', () => {
  expect(ap1.bigHeights([5,3,6,7,2], 0, 1)).toEqual(0);
});

test('bigHeights should return 1 when given ([5,3,6,7,2], 0, 4)', () => {
  expect(ap1.bigHeights([5,3,6,7,2], 0, 4)).toEqual(1);
});

test('bigHeights should return 0 when given ([5,3,6,7,3], 0, 4)', () => {
  expect(ap1.bigHeights([5,3,6,7,3], 0, 4)).toEqual(0);
});

test('bigHeights should return 0 when given ([5,3,6,7,2], 1, 1)', () => {
  expect(ap1.bigHeights([5,3,6,7,2], 1, 1)).toEqual(0);
});

test('bigHeights should return 1 when given ([5,13,6,7,2], 1, 2)', () => {
  expect(ap1.bigHeights([5,13,6,7,2], 1, 2)).toEqual(1);
});

test('bigHeights should return 2 when given ([5,13,6,7,2], 0, 2)', () => {
  expect(ap1.bigHeights([5,13,6,7,2], 0, 2)).toEqual(2);
});

test('bigHeights should return 2 when given ([5,13,6,7,2], 1, 4)', () => {
  expect(ap1.bigHeights([5,13,6,7,2], 1, 4)).toEqual(2);
});

test('bigHeights should return 3 when given ([5,13,6,7,2], 0, 4)', () => {
  expect(ap1.bigHeights([5,13,6,7,2], 0, 4)).toEqual(3);
});

test('bigHeights should return 2 when given ([5,13,6,7,2], 0, 3)', () => {
  expect(ap1.bigHeights([5,13,6,7,2], 0, 3)).toEqual(2);
});

test('bigHeights should return 0 when given ([1,2,3,4,5,4,3,2,10], 0, 3)', () => {
  expect(ap1.bigHeights([1,2,3,4,5,4,3,2,10], 0, 3)).toEqual(0);
});

test('bigHeights should return 1 when given ([1,2,3,4,5,4,3,2,10], 4, 8)', () => {
  expect(ap1.bigHeights([1,2,3,4,5,4,3,2,10], 4, 8)).toEqual(1);
});

test('bigHeights should return 1 when given ([1,2,3,14,5,4,3,2,10], 0, 3)', () => {
  expect(ap1.bigHeights([1,2,3,14,5,4,3,2,10], 0, 3)).toEqual(1);
});

test('bigHeights should return 1 when given ([1,2,3,14,5,4,3,2,10], 7, 8)', () => {
  expect(ap1.bigHeights([1,2,3,14,5,4,3,2,10], 7, 8)).toEqual(1);
});

test('bigHeights should return 2 when given ([1,2,3,14,5,4,3,2,10], 3, 8)', () => {
  expect(ap1.bigHeights([1,2,3,14,5,4,3,2,10], 3, 8)).toEqual(2);
});

test('bigHeights should return 3 when given ([1,2,3,14,5,4,3,2,10], 2, 8)', () => {
  expect(ap1.bigHeights([1,2,3,14,5,4,3,2,10], 2, 8)).toEqual(3);
});

test('userCompare should return -1 when given ("bb", 1, "zz", 2)', () => {
  expect(ap1.userCompare("bb", 1, "zz", 2)).toEqual(-1);
});

test('userCompare should return 1 when given ("bb", 1, "aa", 2)', () => {
  expect(ap1.userCompare("bb", 1, "aa", 2)).toEqual(1);
});

test('userCompare should return 0 when given ("bb", 1, "bb", 1)', () => {
  expect(ap1.userCompare("bb", 1, "bb", 1)).toEqual(0);
});

test('userCompare should return 1 when given ("bb", 5, "bb", 1)', () => {
  expect(ap1.userCompare("bb", 5, "bb", 1)).toEqual(1);
});

test('userCompare should return -1 when given ("bb", 5, "bb", 10)', () => {
  expect(ap1.userCompare("bb", 5, "bb", 10)).toEqual(-1);
});

test('userCompare should return -1 when given ("adam", 1, "bob", 2)', () => {
  expect(ap1.userCompare("adam", 1, "bob", 2)).toEqual(-1);
});

test('userCompare should return -1 when given ("bob", 1, "bob", 2)', () => {
  expect(ap1.userCompare("bob", 1, "bob", 2)).toEqual(-1);
});

test('userCompare should return 1 when given ("bzb", 1, "bob", 2)', () => {
  expect(ap1.userCompare("bzb", 1, "bob", 2)).toEqual(1);
});

test('mergeTwo should return ["a","b","c"] when given (["a","c","z"], ["b","f","z"], 3)', () => {
  expect(ap1.mergeTwo(["a","c","z"], ["b","f","z"], 3)).toEqual(["a","b","c"]);
});

test('mergeTwo should return ["a","c","f"] when given (["a","c","z"], ["c","f","z"], 3)', () => {
  expect(ap1.mergeTwo(["a","c","z"], ["c","f","z"], 3)).toEqual(["a","c","f"]);
});

test('mergeTwo should return ["c","f","g"] when given (["f","g","z"], ["c","f","g"], 3)', () => {
  expect(ap1.mergeTwo(["f","g","z"], ["c","f","g"], 3)).toEqual(["c","f","g"]);
});

test('mergeTwo should return ["a","c","z"] when given (["a","c","z"], ["a","c","z"], 3)', () => {
  expect(ap1.mergeTwo(["a","c","z"], ["a","c","z"], 3)).toEqual(["a","c","z"]);
});

test('mergeTwo should return ["a","b","c"] when given (["a","b","c","z"], ["a","c","z"], 3)', () => {
  expect(ap1.mergeTwo(["a","b","c","z"], ["a","c","z"], 3)).toEqual(["a","b","c"]);
});

test('mergeTwo should return ["a","b","c"] when given (["a","c","z"], ["a","b","c","z"], 3)', () => {
  expect(ap1.mergeTwo(["a","c","z"], ["a","b","c","z"], 3)).toEqual(["a","b","c"]);
});

test('mergeTwo should return ["a","c"] when given (["a","c","z"], ["a","c","z"], 2)', () => {
  expect(ap1.mergeTwo(["a","c","z"], ["a","c","z"], 2)).toEqual(["a","c"]);
});

test('mergeTwo should return ["a","c","y"] when given (["a","c","z"], ["a","c","y","z"], 3)', () => {
  expect(ap1.mergeTwo(["a","c","z"], ["a","c","y","z"], 3)).toEqual(["a","c","y"]);
});

test('mergeTwo should return ["a","b","x"] when given (["x","y","z"], ["a","b","z"], 3)', () => {
  expect(ap1.mergeTwo(["x","y","z"], ["a","b","z"], 3)).toEqual(["a","b","x"]);
});

test('commonTwo should return 2 when given (["a","c","x"], ["b","c","d","x"])', () => {
  expect(ap1.commonTwo(["a","c","x"], ["b","c","d","x"])).toEqual(2);
});

test('commonTwo should return 3 when given (["a","c","x"], ["a","b","c","x","z"])', () => {
  expect(ap1.commonTwo(["a","c","x"], ["a","b","c","x","z"])).toEqual(3);
});

test('commonTwo should return 3 when given (["a","b","c"], ["a","b","c"])', () => {
  expect(ap1.commonTwo(["a","b","c"], ["a","b","c"])).toEqual(3);
});

test('commonTwo should return 3 when given (["a","a","b","b","c"], ["a","b","c"])', () => {
  expect(ap1.commonTwo(["a","a","b","b","c"], ["a","b","c"])).toEqual(3);
});

test('commonTwo should return 3 when given (["a","a","b","b","c"], ["a","b","b","b","c"])', () => {
  expect(ap1.commonTwo(["a","a","b","b","c"], ["a","b","b","b","c"])).toEqual(3);
});

test('commonTwo should return 3 when given (["a","a","b","b","c"], ["a","b","b","c","c"])', () => {
  expect(ap1.commonTwo(["a","a","b","b","c"], ["a","b","b","c","c"])).toEqual(3);
});

test('commonTwo should return 2 when given (["b","b","b","b","c"], ["a","b","b","b","c"])', () => {
  expect(ap1.commonTwo(["b","b","b","b","c"], ["a","b","b","b","c"])).toEqual(2);
});

test('commonTwo should return 4 when given (["a","b","c","c","d"], ["a","b","b","c","d","d"])', () => {
  expect(ap1.commonTwo(["a","b","c","c","d"], ["a","b","b","c","d","d"])).toEqual(4);
});

test('commonTwo should return 1 when given (["a","a","b","b","c"], ["b","b","b"])', () => {
  expect(ap1.commonTwo(["a","a","b","b","c"], ["b","b","b"])).toEqual(1);
});

test('commonTwo should return 1 when given (["a","a","b","b","c"], ["c","c"])', () => {
  expect(ap1.commonTwo(["a","a","b","b","c"], ["c","c"])).toEqual(1);
});

test('commonTwo should return 1 when given (["a","a","b","b","c"], ["b","b","b","x"])', () => {
  expect(ap1.commonTwo(["a","a","b","b","c"], ["b","b","b","x"])).toEqual(1);
});

test('commonTwo should return 1 when given (["a","a","b","b","c"], ["b","b"])', () => {
  expect(ap1.commonTwo(["a","a","b","b","c"], ["b","b"])).toEqual(1);
});

test('commonTwo should return 1 when given (["a"], ["a","b"])', () => {
  expect(ap1.commonTwo(["a"], ["a","b"])).toEqual(1);
});

test('commonTwo should return 0 when given (["a"], ["b"])', () => {
  expect(ap1.commonTwo(["a"], ["b"])).toEqual(0);
});

test('commonTwo should return 0 when given (["a","a"], ["b","b"])', () => {
  expect(ap1.commonTwo(["a","a"], ["b","b"])).toEqual(0);
});

test('commonTwo should return 2 when given (["a","b"], ["a","b"])', () => {
  expect(ap1.commonTwo(["a","b"], ["a","b"])).toEqual(2);
});
