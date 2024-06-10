const warmup1 = require('../warmup1');

test('sleepIn should return true when given (true, true)', () => {
  expect(warmup1.sleepIn(true, true)).toEqual(true);
});

test('sleepIn should return false when given (true, false)', () => {
  expect(warmup1.sleepIn(true, false)).toEqual(false);
});

test('sleepIn should return true when given (false, true)', () => {
  expect(warmup1.sleepIn(false, true)).toEqual(true);
});

test('sleepIn should return true when given (false, false)', () => {
  expect(warmup1.sleepIn(false, false)).toEqual(true);
});

test('monkeyTrouble should return true when given (true, true)', () => {
  expect(warmup1.monkeyTrouble(true, true)).toEqual(true);
});

test('monkeyTrouble should return true when given (false, false)', () => {
  expect(warmup1.monkeyTrouble(false, false)).toEqual(true);
});

test('monkeyTrouble should return false when given (true, false)', () => {
  expect(warmup1.monkeyTrouble(true, false)).toEqual(false);
});

test('monkeyTrouble should return false when given (false, true)', () => {
  expect(warmup1.monkeyTrouble(false, true)).toEqual(false);
});

test('sumDouble should return 3 when given (1, 2)', () => {
  expect(warmup1.sumDouble(1, 2)).toEqual(3);
});

test('sumDouble should return 5 when given (3, 2)', () => {
  expect(warmup1.sumDouble(3, 2)).toEqual(5);
});

test('sumDouble should return 8 when given (2, 2)', () => {
  expect(warmup1.sumDouble(2, 2)).toEqual(8);
});

test('sumDouble should return -1 when given (-1, 0)', () => {
  expect(warmup1.sumDouble(-1, 0)).toEqual(-1);
});

test('sumDouble should return 12 when given (3, 3)', () => {
  expect(warmup1.sumDouble(3, 3)).toEqual(12);
});

test('sumDouble should return 0 when given (0, 0)', () => {
  expect(warmup1.sumDouble(0, 0)).toEqual(0);
});

test('sumDouble should return 1 when given (0, 1)', () => {
  expect(warmup1.sumDouble(0, 1)).toEqual(1);
});

test('sumDouble should return 7 when given (3, 4)', () => {
  expect(warmup1.sumDouble(3, 4)).toEqual(7);
});

test('diff21 should return 2 when given 19', () => {
  expect(warmup1.diff21(19)).toEqual(2);
});

test('diff21 should return 11 when given 10', () => {
  expect(warmup1.diff21(10)).toEqual(11);
});

test('diff21 should return 0 when given 21', () => {
  expect(warmup1.diff21(21)).toEqual(0);
});

test('diff21 should return 2 when given 22', () => {
  expect(warmup1.diff21(22)).toEqual(2);
});

test('diff21 should return 8 when given 25', () => {
  expect(warmup1.diff21(25)).toEqual(8);
});

test('diff21 should return 18 when given 30', () => {
  expect(warmup1.diff21(30)).toEqual(18);
});

test('diff21 should return 21 when given 0', () => {
  expect(warmup1.diff21(0)).toEqual(21);
});

test('diff21 should return 20 when given 1', () => {
  expect(warmup1.diff21(1)).toEqual(20);
});

test('diff21 should return 19 when given 2', () => {
  expect(warmup1.diff21(2)).toEqual(19);
});

test('diff21 should return 22 when given -1', () => {
  expect(warmup1.diff21(-1)).toEqual(22);
});

test('diff21 should return 23 when given -2', () => {
  expect(warmup1.diff21(-2)).toEqual(23);
});

test('diff21 should return 58 when given 50', () => {
  expect(warmup1.diff21(50)).toEqual(58);
});

test('parrotTrouble should return true when given (true, 6)', () => {
  expect(warmup1.parrotTrouble(true, 6)).toEqual(true);
});

test('parrotTrouble should return false when given (true, 7)', () => {
  expect(warmup1.parrotTrouble(true, 7)).toEqual(false);
});

test('parrotTrouble should return false when given (false, 6)', () => {
  expect(warmup1.parrotTrouble(false, 6)).toEqual(false);
});

test('parrotTrouble should return true when given (true, 21)', () => {
  expect(warmup1.parrotTrouble(true, 21)).toEqual(true);
});

test('parrotTrouble should return false when given (false, 21)', () => {
  expect(warmup1.parrotTrouble(false, 21)).toEqual(false);
});

test('parrotTrouble should return true when given (true, 23)', () => {
  expect(warmup1.parrotTrouble(true, 23)).toEqual(true);
});

test('parrotTrouble should return false when given (false, 23)', () => {
  expect(warmup1.parrotTrouble(false, 23)).toEqual(false);
});

test('parrotTrouble should return false when given (true, 20)', () => {
  expect(warmup1.parrotTrouble(true, 20)).toEqual(false);
});

test('parrotTrouble should return false when given (false, 12)', () => {
  expect(warmup1.parrotTrouble(false, 12)).toEqual(false);
});

test('makes10 should return true when given (9, 10)', () => {
  expect(warmup1.makes10(9, 10)).toEqual(true);
});

test('makes10 should return false when given (9, 9)', () => {
  expect(warmup1.makes10(9, 9)).toEqual(false);
});

test('makes10 should return true when given (1, 9)', () => {
  expect(warmup1.makes10(1, 9)).toEqual(true);
});

test('makes10 should return true when given (10, 1)', () => {
  expect(warmup1.makes10(10, 1)).toEqual(true);
});

test('makes10 should return true when given (10, 10)', () => {
  expect(warmup1.makes10(10, 10)).toEqual(true);
});

test('makes10 should return true when given (8, 2)', () => {
  expect(warmup1.makes10(8, 2)).toEqual(true);
});

test('makes10 should return false when given (8, 3)', () => {
  expect(warmup1.makes10(8, 3)).toEqual(false);
});

test('makes10 should return true when given (10, 42)', () => {
  expect(warmup1.makes10(10, 42)).toEqual(true);
});

test('makes10 should return true when given (12, -2)', () => {
  expect(warmup1.makes10(12, -2)).toEqual(true);
});

test('nearHundred should return true when given 93', () => {
  expect(warmup1.nearHundred(93)).toEqual(true);
});

test('nearHundred should return true when given 90', () => {
  expect(warmup1.nearHundred(90)).toEqual(true);
});

test('nearHundred should return false when given 89', () => {
  expect(warmup1.nearHundred(89)).toEqual(false);
});

test('nearHundred should return true when given 110', () => {
  expect(warmup1.nearHundred(110)).toEqual(true);
});

test('nearHundred should return false when given 111', () => {
  expect(warmup1.nearHundred(111)).toEqual(false);
});

test('nearHundred should return false when given 121', () => {
  expect(warmup1.nearHundred(121)).toEqual(false);
});

test('nearHundred should return false when given 0', () => {
  expect(warmup1.nearHundred(0)).toEqual(false);
});

test('nearHundred should return false when given 5', () => {
  expect(warmup1.nearHundred(5)).toEqual(false);
});

test('nearHundred should return true when given 191', () => {
  expect(warmup1.nearHundred(191)).toEqual(true);
});

test('nearHundred should return false when given 189', () => {
  expect(warmup1.nearHundred(189)).toEqual(false);
});

test('posNeg should return true when given (1, -1, false)', () => {
  expect(warmup1.posNeg(1, -1, false)).toEqual(true);
});

test('posNeg should return true when given (-1, 1, false)', () => {
  expect(warmup1.posNeg(-1, 1, false)).toEqual(true);
});

test('posNeg should return true when given (-4, -5, true)', () => {
  expect(warmup1.posNeg(-4, -5, true)).toEqual(true);
});

test('posNeg should return false when given (-4, -5, false)', () => {
  expect(warmup1.posNeg(-4, -5, false)).toEqual(false);
});

test('posNeg should return true when given (-4, 5, false)', () => {
  expect(warmup1.posNeg(-4, 5, false)).toEqual(true);
});

test('posNeg should return false when given (-4, 5, true)', () => {
  expect(warmup1.posNeg(-4, 5, true)).toEqual(false);
});

test('posNeg should return false when given (1, 1, false)', () => {
  expect(warmup1.posNeg(1, 1, false)).toEqual(false);
});

test('posNeg should return false when given (-1, -1, false)', () => {
  expect(warmup1.posNeg(-1, -1, false)).toEqual(false);
});

test('posNeg should return false when given (1, -1, true)', () => {
  expect(warmup1.posNeg(1, -1, true)).toEqual(false);
});

test('posNeg should return false when given (-1, 1, true)', () => {
  expect(warmup1.posNeg(-1, 1, true)).toEqual(false);
});

test('posNeg should return false when given (1, 1, true)', () => {
  expect(warmup1.posNeg(1, 1, true)).toEqual(false);
});

test('posNeg should return true when given (-1, -1, true)', () => {
  expect(warmup1.posNeg(-1, -1, true)).toEqual(true);
});

test('posNeg should return true when given (5, -5, false)', () => {
  expect(warmup1.posNeg(5, -5, false)).toEqual(true);
});

test('posNeg should return true when given (-6, 6, false)', () => {
  expect(warmup1.posNeg(-6, 6, false)).toEqual(true);
});

test('posNeg should return false when given (-5, -6, false)', () => {
  expect(warmup1.posNeg(-5, -6, false)).toEqual(false);
});

test('posNeg should return false when given (-2, -1, false)', () => {
  expect(warmup1.posNeg(-2, -1, false)).toEqual(false);
});

test('posNeg should return false when given (1, 2, false)', () => {
  expect(warmup1.posNeg(1, 2, false)).toEqual(false);
});

test('posNeg should return false when given (-5, 6, true)', () => {
  expect(warmup1.posNeg(-5, 6, true)).toEqual(false);
});

test('posNeg should return true when given (-5, -5, true)', () => {
  expect(warmup1.posNeg(-5, -5, true)).toEqual(true);
});

test('notString should return "not candy" when given "candy"', () => {
  expect(warmup1.notString("candy")).toEqual("not candy");
});

test('notString should return "not x" when given "x"', () => {
  expect(warmup1.notString("x")).toEqual("not x");
});

test('notString should return "not bad" when given "not bad"', () => {
  expect(warmup1.notString("not bad")).toEqual("not bad");
});

test('notString should return "not bad" when given "bad"', () => {
  expect(warmup1.notString("bad")).toEqual("not bad");
});

test('notString should return "not" when given "not"', () => {
  expect(warmup1.notString("not")).toEqual("not");
});

test('notString should return "not is not" when given "is not"', () => {
  expect(warmup1.notString("is not")).toEqual("not is not");
});

test('notString should return "not no" when given "no"', () => {
  expect(warmup1.notString("no")).toEqual("not no");
});

test('missingChar should return "ktten" when given ("kitten", 1)', () => {
  expect(warmup1.missingChar("kitten", 1)).toEqual("ktten");
});

test('missingChar should return "itten" when given ("kitten", 0)', () => {
  expect(warmup1.missingChar("kitten", 0)).toEqual("itten");
});

test('missingChar should return "kittn" when given ("kitten", 4)', () => {
  expect(warmup1.missingChar("kitten", 4)).toEqual("kittn");
});

test('missingChar should return "i" when given ("Hi", 0)', () => {
  expect(warmup1.missingChar("Hi", 0)).toEqual("i");
});

test('missingChar should return "H" when given ("Hi", 1)', () => {
  expect(warmup1.missingChar("Hi", 1)).toEqual("H");
});

test('missingChar should return "ode" when given ("code", 0)', () => {
  expect(warmup1.missingChar("code", 0)).toEqual("ode");
});

test('missingChar should return "cde" when given ("code", 1)', () => {
  expect(warmup1.missingChar("code", 1)).toEqual("cde");
});

test('missingChar should return "coe" when given ("code", 2)', () => {
  expect(warmup1.missingChar("code", 2)).toEqual("coe");
});

test('missingChar should return "cod" when given ("code", 3)', () => {
  expect(warmup1.missingChar("code", 3)).toEqual("cod");
});

test('missingChar should return "chocolat" when given ("chocolate", 8)', () => {
  expect(warmup1.missingChar("chocolate", 8)).toEqual("chocolat");
});

test('frontBack should return "eodc" when given "code"', () => {
  expect(warmup1.frontBack("code")).toEqual("eodc");
});

test('frontBack should return "a" when given "a"', () => {
  expect(warmup1.frontBack("a")).toEqual("a");
});

test('frontBack should return "ba" when given "ab"', () => {
  expect(warmup1.frontBack("ab")).toEqual("ba");
});

test('frontBack should return "cba" when given "abc"', () => {
  expect(warmup1.frontBack("abc")).toEqual("cba");
});

test('frontBack should return "" when given ""', () => {
  expect(warmup1.frontBack("")).toEqual("");
});

test('frontBack should return "ehocolatC" when given "Chocolate"', () => {
  expect(warmup1.frontBack("Chocolate")).toEqual("ehocolatC");
});

test('frontBack should return "java" when given "aavj"', () => {
  expect(warmup1.frontBack("aavj")).toEqual("java");
});

test('frontBack should return "oellh" when given "hello"', () => {
  expect(warmup1.frontBack("hello")).toEqual("oellh");
});

test('front3 should return "JavJavJav" when given "Java"', () => {
  expect(warmup1.front3("Java")).toEqual("JavJavJav");
});

test('front3 should return "ChoChoCho" when given "Chocolate"', () => {
  expect(warmup1.front3("Chocolate")).toEqual("ChoChoCho");
});

test('front3 should return "abcabcabc" when given "abc"', () => {
  expect(warmup1.front3("abc")).toEqual("abcabcabc");
});

test('front3 should return "abcabcabc" when given "abcXYZ"', () => {
  expect(warmup1.front3("abcXYZ")).toEqual("abcabcabc");
});

test('front3 should return "ababab" when given "ab"', () => {
  expect(warmup1.front3("ab")).toEqual("ababab");
});

test('front3 should return "aaa" when given "a"', () => {
  expect(warmup1.front3("a")).toEqual("aaa");
});

test('front3 should return "" when given ""', () => {
  expect(warmup1.front3("")).toEqual("");
});

test('backAround should return "tcatt" when given "cat"', () => {
  expect(warmup1.backAround("cat")).toEqual("tcatt");
});

test('backAround should return "oHelloo" when given "Hello"', () => {
  expect(warmup1.backAround("Hello")).toEqual("oHelloo");
});

test('backAround should return "aaa" when given "a"', () => {
  expect(warmup1.backAround("a")).toEqual("aaa");
});

test('backAround should return "cabcc" when given "abc"', () => {
  expect(warmup1.backAround("abc")).toEqual("cabcc");
});

test('backAround should return "dreadd" when given "read"', () => {
  expect(warmup1.backAround("read")).toEqual("dreadd");
});

test('backAround should return "obooo" when given "boo"', () => {
  expect(warmup1.backAround("boo")).toEqual("obooo");
});

test('or35 should return true when given 3', () => {
  expect(warmup1.or35(3)).toEqual(true);
});

test('or35 should return true when given 10', () => {
  expect(warmup1.or35(10)).toEqual(true);
});

test('or35 should return false when given 8', () => {
  expect(warmup1.or35(8)).toEqual(false);
});

test('or35 should return true when given 15', () => {
  expect(warmup1.or35(15)).toEqual(true);
});

test('or35 should return true when given 5', () => {
  expect(warmup1.or35(5)).toEqual(true);
});

test('or35 should return false when given 4', () => {
  expect(warmup1.or35(4)).toEqual(false);
});

test('or35 should return true when given 9', () => {
  expect(warmup1.or35(9)).toEqual(true);
});

test('or35 should return false when given 4', () => {
  expect(warmup1.or35(4)).toEqual(false);
});

test('or35 should return false when given 7', () => {
  expect(warmup1.or35(7)).toEqual(false);
});

test('or35 should return true when given 6', () => {
  expect(warmup1.or35(6)).toEqual(true);
});

test('or35 should return false when given 17', () => {
  expect(warmup1.or35(17)).toEqual(false);
});

test('or35 should return true when given 18', () => {
  expect(warmup1.or35(18)).toEqual(true);
});

test('or35 should return false when given 29', () => {
  expect(warmup1.or35(29)).toEqual(false);
});

test('or35 should return true when given 20', () => {
  expect(warmup1.or35(20)).toEqual(true);
});

test('or35 should return true when given 21', () => {
  expect(warmup1.or35(21)).toEqual(true);
});

test('or35 should return false when given 22', () => {
  expect(warmup1.or35(22)).toEqual(false);
});

test('or35 should return true when given 45', () => {
  expect(warmup1.or35(45)).toEqual(true);
});

test('or35 should return true when given 99', () => {
  expect(warmup1.or35(99)).toEqual(true);
});

test('or35 should return true when given 100', () => {
  expect(warmup1.or35(100)).toEqual(true);
});

test('or35 should return false when given 101', () => {
  expect(warmup1.or35(101)).toEqual(false);
});

test('or35 should return false when given 121', () => {
  expect(warmup1.or35(121)).toEqual(false);
});

test('or35 should return false when given 122', () => {
  expect(warmup1.or35(122)).toEqual(false);
});

test('or35 should return true when given 123', () => {
  expect(warmup1.or35(123)).toEqual(true);
});

test('front22 should return "kikittenki" when given "kitten"', () => {
  expect(warmup1.front22("kitten")).toEqual("kikittenki");
});

test('front22 should return "HaHaHa" when given "Ha"', () => {
  expect(warmup1.front22("Ha")).toEqual("HaHaHa");
});

test('front22 should return "ababcab" when given "abc"', () => {
  expect(warmup1.front22("abc")).toEqual("ababcab");
});

test('front22 should return "ababab" when given "ab"', () => {
  expect(warmup1.front22("ab")).toEqual("ababab");
});

test('front22 should return "aaa" when given "a"', () => {
  expect(warmup1.front22("a")).toEqual("aaa");
});

test('front22 should return "" when given ""', () => {
  expect(warmup1.front22("")).toEqual("");
});

test('front22 should return "LoLogicLo" when given "Logic"', () => {
  expect(warmup1.front22("Logic")).toEqual("LoLogicLo");
});

test('startHi should return true when given "hi there"', () => {
  expect(warmup1.startHi("hi there")).toEqual(true);
});

test('startHi should return true when given "hi"', () => {
  expect(warmup1.startHi("hi")).toEqual(true);
});

test('startHi should return false when given "hello hi"', () => {
  expect(warmup1.startHi("hello hi")).toEqual(false);
});

test('startHi should return false when given "he"', () => {
  expect(warmup1.startHi("he")).toEqual(false);
});

test('startHi should return false when given "h"', () => {
  expect(warmup1.startHi("h")).toEqual(false);
});

test('startHi should return false when given ""', () => {
  expect(warmup1.startHi("")).toEqual(false);
});

test('startHi should return false when given "ho hi"', () => {
  expect(warmup1.startHi("ho hi")).toEqual(false);
});

test('startHi should return true when given "hi ho"', () => {
  expect(warmup1.startHi("hi ho")).toEqual(true);
});

test('icyHot should return true when given (120, -1)', () => {
  expect(warmup1.icyHot(120, -1)).toEqual(true);
});

test('icyHot should return true when given (-1, 120)', () => {
  expect(warmup1.icyHot(-1, 120)).toEqual(true);
});

test('icyHot should return false when given (2, 120)', () => {
  expect(warmup1.icyHot(2, 120)).toEqual(false);
});

test('icyHot should return false when given (-1, 100)', () => {
  expect(warmup1.icyHot(-1, 100)).toEqual(false);
});

test('icyHot should return true when given (-2, 120)', () => {
  expect(warmup1.icyHot(-2, 120)).toEqual(true);
});

test('icyHot should return false when given (120, 120)', () => {
  expect(warmup1.icyHot(120, 120)).toEqual(false);
});

test('in1020 should return true when given (12, 99)', () => {
  expect(warmup1.in1020(12, 99)).toEqual(true);
});

test('in1020 should return true when given (21, 12)', () => {
  expect(warmup1.in1020(21, 12)).toEqual(true);
});

test('in1020 should return false when given (8, 99)', () => {
  expect(warmup1.in1020(8, 99)).toEqual(false);
});

test('in1020 should return true when given (99, 10)', () => {
  expect(warmup1.in1020(99, 10)).toEqual(true);
});

test('in1020 should return true when given (20, 20)', () => {
  expect(warmup1.in1020(20, 20)).toEqual(true);
});

test('in1020 should return false when given (21, 21)', () => {
  expect(warmup1.in1020(21, 21)).toEqual(false);
});

test('in1020 should return false when given (9, 9)', () => {
  expect(warmup1.in1020(9, 9)).toEqual(false);
});

test('hasTeen should return true when given (13, 20, 10)', () => {
  expect(warmup1.hasTeen(13, 20, 10)).toEqual(true);
});

test('hasTeen should return true when given (20, 19, 10)', () => {
  expect(warmup1.hasTeen(20, 19, 10)).toEqual(true);
});

test('hasTeen should return true when given (20, 10, 13)', () => {
  expect(warmup1.hasTeen(20, 10, 13)).toEqual(true);
});

test('hasTeen should return false when given (1, 20, 12)', () => {
  expect(warmup1.hasTeen(1, 20, 12)).toEqual(false);
});

test('hasTeen should return true when given (19, 20, 12)', () => {
  expect(warmup1.hasTeen(19, 20, 12)).toEqual(true);
});

test('hasTeen should return true when given (12, 20, 19)', () => {
  expect(warmup1.hasTeen(12, 20, 19)).toEqual(true);
});

test('hasTeen should return false when given (12, 9, 20)', () => {
  expect(warmup1.hasTeen(12, 9, 20)).toEqual(false);
});

test('hasTeen should return true when given (12, 18, 20)', () => {
  expect(warmup1.hasTeen(12, 18, 20)).toEqual(true);
});

test('hasTeen should return true when given (14, 2, 20)', () => {
  expect(warmup1.hasTeen(14, 2, 20)).toEqual(true);
});

test('hasTeen should return false when given (4, 2, 20)', () => {
  expect(warmup1.hasTeen(4, 2, 20)).toEqual(false);
});

test('hasTeen should return false when given (11, 22, 22)', () => {
  expect(warmup1.hasTeen(11, 22, 22)).toEqual(false);
});

test('loneTeen should return true when given (13, 99)', () => {
  expect(warmup1.loneTeen(13, 99)).toEqual(true);
});

test('loneTeen should return true when given (21, 19)', () => {
  expect(warmup1.loneTeen(21, 19)).toEqual(true);
});

test('loneTeen should return false when given (13, 13)', () => {
  expect(warmup1.loneTeen(13, 13)).toEqual(false);
});

test('loneTeen should return true when given (14, 20)', () => {
  expect(warmup1.loneTeen(14, 20)).toEqual(true);
});

test('loneTeen should return true when given (20, 15)', () => {
  expect(warmup1.loneTeen(20, 15)).toEqual(true);
});

test('loneTeen should return false when given (16, 17)', () => {
  expect(warmup1.loneTeen(16, 17)).toEqual(false);
});

test('loneTeen should return true when given (16, 9)', () => {
  expect(warmup1.loneTeen(16, 9)).toEqual(true);
});

test('loneTeen should return false when given (16, 18)', () => {
  expect(warmup1.loneTeen(16, 18)).toEqual(false);
});

test('loneTeen should return false when given (13, 19)', () => {
  expect(warmup1.loneTeen(13, 19)).toEqual(false);
});

test('loneTeen should return true when given (13, 20)', () => {
  expect(warmup1.loneTeen(13, 20)).toEqual(true);
});

test('loneTeen should return true when given (6, 18)', () => {
  expect(warmup1.loneTeen(6, 18)).toEqual(true);
});

test('loneTeen should return true when given (99, 13)', () => {
  expect(warmup1.loneTeen(99, 13)).toEqual(true);
});

test('loneTeen should return false when given (99, 99)', () => {
  expect(warmup1.loneTeen(99, 99)).toEqual(false);
});

test('delDel should return "abc" when given "adelbc"', () => {
  expect(warmup1.delDel("adelbc")).toEqual("abc");
});

test('delDel should return "aHello" when given "adelHello"', () => {
  expect(warmup1.delDel("adelHello")).toEqual("aHello");
});

test('delDel should return "abcdel" when given "abcdel"', () => {
  expect(warmup1.delDel("abcdel")).toEqual("abcdel");
});

test('delDel should return "add" when given "add"', () => {
  expect(warmup1.delDel("add")).toEqual("add");
});

test('delDel should return "ad" when given "ad"', () => {
  expect(warmup1.delDel("ad")).toEqual("ad");
});

test('delDel should return "a" when given "a"', () => {
  expect(warmup1.delDel("a")).toEqual("a");
});

test('delDel should return "" when given ""', () => {
  expect(warmup1.delDel("")).toEqual("");
});

test('delDel should return "del" when given "del"', () => {
  expect(warmup1.delDel("del")).toEqual("del");
});

test('delDel should return "a" when given "adel"', () => {
  expect(warmup1.delDel("adel")).toEqual("a");
});

test('delDel should return "aadelbb" when given "aadelbb"', () => {
  expect(warmup1.delDel("aadelbb")).toEqual("aadelbb");
});

test('mixStart should return true when given "mix snacks"', () => {
  expect(warmup1.mixStart("mix snacks")).toEqual(true);
});

test('mixStart should return true when given "pix snacks"', () => {
  expect(warmup1.mixStart("pix snacks")).toEqual(true);
});

test('mixStart should return false when given "piz snacks"', () => {
  expect(warmup1.mixStart("piz snacks")).toEqual(false);
});

test('mixStart should return true when given "nix"', () => {
  expect(warmup1.mixStart("nix")).toEqual(true);
});

test('mixStart should return false when given "ni"', () => {
  expect(warmup1.mixStart("ni")).toEqual(false);
});

test('mixStart should return false when given "n"', () => {
  expect(warmup1.mixStart("n")).toEqual(false);
});

test('startOz should return "oz" when given "ozymandias"', () => {
  expect(warmup1.startOz("ozymandias")).toEqual("oz");
});

test('startOz should return "z" when given "bzoo"', () => {
  expect(warmup1.startOz("bzoo")).toEqual("z");
});

test('startOz should return "o" when given "oxx"', () => {
  expect(warmup1.startOz("oxx")).toEqual("o");
});

test('startOz should return "o" when given "ounce"', () => {
  expect(warmup1.startOz("ounce")).toEqual("o");
});

test('startOz should return "o" when given "o"', () => {
  expect(warmup1.startOz("o")).toEqual("o");
});

test('startOz should return "" when given "abc"', () => {
  expect(warmup1.startOz("abc")).toEqual("");
});

test('startOz should return "" when given ""', () => {
  expect(warmup1.startOz("")).toEqual("");
});

test('startOz should return "" when given "zoo"', () => {
  expect(warmup1.startOz("zoo")).toEqual("");
});

test('startOz should return "z" when given "aztec"', () => {
  expect(warmup1.startOz("aztec")).toEqual("z");
});

test('startOz should return "z" when given "zzzz"', () => {
  expect(warmup1.startOz("zzzz")).toEqual("z");
});

test('startOz should return "oz" when given "oznic"', () => {
  expect(warmup1.startOz("oznic")).toEqual("oz");
});

test('intMax should return 3 when given (1, 2, 3)', () => {
  expect(warmup1.intMax(1, 2, 3)).toEqual(3);
});

test('intMax should return 3 when given (1, 3, 2)', () => {
  expect(warmup1.intMax(1, 3, 2)).toEqual(3);
});

test('intMax should return 3 when given (3, 2, 1)', () => {
  expect(warmup1.intMax(3, 2, 1)).toEqual(3);
});

test('intMax should return 9 when given (9, 3, 3)', () => {
  expect(warmup1.intMax(9, 3, 3)).toEqual(9);
});

test('intMax should return 9 when given (3, 9, 3)', () => {
  expect(warmup1.intMax(3, 9, 3)).toEqual(9);
});

test('intMax should return 9 when given (3, 3, 9)', () => {
  expect(warmup1.intMax(3, 3, 9)).toEqual(9);
});

test('intMax should return 8 when given (8, 2, 3)', () => {
  expect(warmup1.intMax(8, 2, 3)).toEqual(8);
});

test('intMax should return -1 when given (-3, -1, -2)', () => {
  expect(warmup1.intMax(-3, -1, -2)).toEqual(-1);
});

test('intMax should return 6 when given (6, 2, 5)', () => {
  expect(warmup1.intMax(6, 2, 5)).toEqual(6);
});

test('intMax should return 6 when given (5, 6, 2)', () => {
  expect(warmup1.intMax(5, 6, 2)).toEqual(6);
});

test('intMax should return 6 when given (5, 2, 6)', () => {
  expect(warmup1.intMax(5, 2, 6)).toEqual(6);
});

test('close10 should return 8 when given (8, 13)', () => {
  expect(warmup1.close10(8, 13)).toEqual(8);
});

test('close10 should return 8 when given (13, 8)', () => {
  expect(warmup1.close10(13, 8)).toEqual(8);
});

test('close10 should return 0 when given (13, 7)', () => {
  expect(warmup1.close10(13, 7)).toEqual(0);
});

test('close10 should return 0 when given (7, 13)', () => {
  expect(warmup1.close10(7, 13)).toEqual(0);
});

test('close10 should return 9 when given (9, 13)', () => {
  expect(warmup1.close10(9, 13)).toEqual(9);
});

test('close10 should return 8 when given (13, 8)', () => {
  expect(warmup1.close10(13, 8)).toEqual(8);
});

test('close10 should return 10 when given (10, 12)', () => {
  expect(warmup1.close10(10, 12)).toEqual(10);
});

test('close10 should return 10 when given (11, 10)', () => {
  expect(warmup1.close10(11, 10)).toEqual(10);
});

test('close10 should return 5 when given (5, 21)', () => {
  expect(warmup1.close10(5, 21)).toEqual(5);
});

test('close10 should return 0 when given (0, 20)', () => {
  expect(warmup1.close10(0, 20)).toEqual(0);
});

test('close10 should return 0 when given (0, 20)', () => {
  expect(warmup1.close10(0, 20)).toEqual(0);
});

test('close10 should return 0 when given (10, 10)', () => {
  expect(warmup1.close10(10, 10)).toEqual(0);
});

test('in3050 should return true when given (30, 31)', () => {
  expect(warmup1.in3050(30, 31)).toEqual(true);
});

test('in3050 should return false when given (30, 41)', () => {
  expect(warmup1.in3050(30, 41)).toEqual(false);
});

test('in3050 should return true when given (40, 50)', () => {
  expect(warmup1.in3050(40, 50)).toEqual(true);
});

test('in3050 should return false when given (40, 51)', () => {
  expect(warmup1.in3050(40, 51)).toEqual(false);
});

test('in3050 should return false when given (39, 50)', () => {
  expect(warmup1.in3050(39, 50)).toEqual(false);
});

test('in3050 should return false when given (50, 39)', () => {
  expect(warmup1.in3050(50, 39)).toEqual(false);
});

test('in3050 should return true when given (40, 39)', () => {
  expect(warmup1.in3050(40, 39)).toEqual(true);
});

test('in3050 should return true when given (49, 48)', () => {
  expect(warmup1.in3050(49, 48)).toEqual(true);
});

test('in3050 should return true when given (50, 40)', () => {
  expect(warmup1.in3050(50, 40)).toEqual(true);
});

test('in3050 should return false when given (50, 51)', () => {
  expect(warmup1.in3050(50, 51)).toEqual(false);
});

test('in3050 should return true when given (35, 36)', () => {
  expect(warmup1.in3050(35, 36)).toEqual(true);
});

test('in3050 should return false when given (35, 45)', () => {
  expect(warmup1.in3050(35, 45)).toEqual(false);
});

test('max1020 should return 19 when given (11, 19)', () => {
  expect(warmup1.max1020(11, 19)).toEqual(19);
});

test('max1020 should return 19 when given (19, 11)', () => {
  expect(warmup1.max1020(19, 11)).toEqual(19);
});

test('max1020 should return 11 when given (11, 9)', () => {
  expect(warmup1.max1020(11, 9)).toEqual(11);
});

test('max1020 should return 0 when given (9, 21)', () => {
  expect(warmup1.max1020(9, 21)).toEqual(0);
});

test('max1020 should return 10 when given (10, 21)', () => {
  expect(warmup1.max1020(10, 21)).toEqual(10);
});

test('max1020 should return 10 when given (21, 10)', () => {
  expect(warmup1.max1020(21, 10)).toEqual(10);
});

test('max1020 should return 11 when given (9, 11)', () => {
  expect(warmup1.max1020(9, 11)).toEqual(11);
});

test('max1020 should return 10 when given (23, 10)', () => {
  expect(warmup1.max1020(23, 10)).toEqual(10);
});

test('max1020 should return 20 when given (20, 10)', () => {
  expect(warmup1.max1020(20, 10)).toEqual(20);
});

test('max1020 should return 20 when given (7, 20)', () => {
  expect(warmup1.max1020(7, 20)).toEqual(20);
});

test('max1020 should return 17 when given (17, 16)', () => {
  expect(warmup1.max1020(17, 16)).toEqual(17);
});

test('stringE should return true when given "Hello"', () => {
  expect(warmup1.stringE("Hello")).toEqual(true);
});

test('stringE should return true when given "Heelle"', () => {
  expect(warmup1.stringE("Heelle")).toEqual(true);
});

test('stringE should return false when given "Heelele"', () => {
  expect(warmup1.stringE("Heelele")).toEqual(false);
});

test('stringE should return false when given "HII"', () => {
  expect(warmup1.stringE("HII")).toEqual(false);
});

test('stringE should return true when given "e"', () => {
  expect(warmup1.stringE("e")).toEqual(true);
});

test('stringE should return false when given ""', () => {
  expect(warmup1.stringE("")).toEqual(false);
});

test('lastDigit should return true when given (7, 17)', () => {
  expect(warmup1.lastDigit(7, 17)).toEqual(true);
});

test('lastDigit should return false when given (6, 17)', () => {
  expect(warmup1.lastDigit(6, 17)).toEqual(false);
});

test('lastDigit should return true when given (3, 113)', () => {
  expect(warmup1.lastDigit(3, 113)).toEqual(true);
});

test('lastDigit should return false when given (114, 113)', () => {
  expect(warmup1.lastDigit(114, 113)).toEqual(false);
});

test('lastDigit should return true when given (114, 4)', () => {
  expect(warmup1.lastDigit(114, 4)).toEqual(true);
});

test('lastDigit should return true when given (10, 0)', () => {
  expect(warmup1.lastDigit(10, 0)).toEqual(true);
});

test('lastDigit should return false when given (11, 0)', () => {
  expect(warmup1.lastDigit(11, 0)).toEqual(false);
});

test('endUp should return "HeLLO" when given "Hello"', () => {
  expect(warmup1.endUp("Hello")).toEqual("HeLLO");
});

test('endUp should return "hi thERE" when given "hi there"', () => {
  expect(warmup1.endUp("hi there")).toEqual("hi thERE");
});

test('endUp should return "HI" when given "hi"', () => {
  expect(warmup1.endUp("hi")).toEqual("HI");
});

test('endUp should return "woo HOO" when given "woo hoo"', () => {
  expect(warmup1.endUp("woo hoo")).toEqual("woo HOO");
});

test('endUp should return "xyZ12" when given "xyz12"', () => {
  expect(warmup1.endUp("xyz12")).toEqual("xyZ12");
});

test('endUp should return "X" when given "x"', () => {
  expect(warmup1.endUp("x")).toEqual("X");
});

test('endUp should return "" when given ""', () => {
  expect(warmup1.endUp("")).toEqual("");
});

test('everyNth should return "Mrce" when given ("Miracle", 2)', () => {
  expect(warmup1.everyNth("Miracle", 2)).toEqual("Mrce");
});

test('everyNth should return "aceg" when given ("abcdefg", 2)', () => {
  expect(warmup1.everyNth("abcdefg", 2)).toEqual("aceg");
});

test('everyNth should return "adg" when given ("abcdefg", 3)', () => {
  expect(warmup1.everyNth("abcdefg", 3)).toEqual("adg");
});

test('everyNth should return "Cca" when given ("Chocolate", 3)', () => {
  expect(warmup1.everyNth("Chocolate", 3)).toEqual("Cca");
});

test('everyNth should return "Ccas" when given ("Chocolates", 3)', () => {
  expect(warmup1.everyNth("Chocolates", 3)).toEqual("Ccas");
});

test('everyNth should return "Coe" when given ("Chocolates", 4)', () => {
  expect(warmup1.everyNth("Chocolates", 4)).toEqual("Coe");
});

test('everyNth should return "C" when given ("Chocolates", 100)', () => {
  expect(warmup1.everyNth("Chocolates", 100)).toEqual("C");
});
