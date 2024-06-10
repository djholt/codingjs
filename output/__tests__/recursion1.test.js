const recursion1 = require('../recursion1');

test('factorial should return 1 when given 1', () => {
  expect(recursion1.factorial(1)).toEqual(1);
});

test('factorial should return 2 when given 2', () => {
  expect(recursion1.factorial(2)).toEqual(2);
});

test('factorial should return 6 when given 3', () => {
  expect(recursion1.factorial(3)).toEqual(6);
});

test('factorial should return 24 when given 4', () => {
  expect(recursion1.factorial(4)).toEqual(24);
});

test('factorial should return 120 when given 5', () => {
  expect(recursion1.factorial(5)).toEqual(120);
});

test('factorial should return 720 when given 6', () => {
  expect(recursion1.factorial(6)).toEqual(720);
});

test('factorial should return 5040 when given 7', () => {
  expect(recursion1.factorial(7)).toEqual(5040);
});

test('factorial should return 40320 when given 8', () => {
  expect(recursion1.factorial(8)).toEqual(40320);
});

test('factorial should return 479001600 when given 12', () => {
  expect(recursion1.factorial(12)).toEqual(479001600);
});

test('bunnyEars should return 0 when given 0', () => {
  expect(recursion1.bunnyEars(0)).toEqual(0);
});

test('bunnyEars should return 2 when given 1', () => {
  expect(recursion1.bunnyEars(1)).toEqual(2);
});

test('bunnyEars should return 4 when given 2', () => {
  expect(recursion1.bunnyEars(2)).toEqual(4);
});

test('bunnyEars should return 6 when given 3', () => {
  expect(recursion1.bunnyEars(3)).toEqual(6);
});

test('bunnyEars should return 8 when given 4', () => {
  expect(recursion1.bunnyEars(4)).toEqual(8);
});

test('bunnyEars should return 10 when given 5', () => {
  expect(recursion1.bunnyEars(5)).toEqual(10);
});

test('bunnyEars should return 24 when given 12', () => {
  expect(recursion1.bunnyEars(12)).toEqual(24);
});

test('bunnyEars should return 100 when given 50', () => {
  expect(recursion1.bunnyEars(50)).toEqual(100);
});

test('bunnyEars should return 468 when given 234', () => {
  expect(recursion1.bunnyEars(234)).toEqual(468);
});

test('fibonacci should return 0 when given 0', () => {
  expect(recursion1.fibonacci(0)).toEqual(0);
});

test('fibonacci should return 1 when given 1', () => {
  expect(recursion1.fibonacci(1)).toEqual(1);
});

test('fibonacci should return 1 when given 2', () => {
  expect(recursion1.fibonacci(2)).toEqual(1);
});

test('fibonacci should return 2 when given 3', () => {
  expect(recursion1.fibonacci(3)).toEqual(2);
});

test('fibonacci should return 3 when given 4', () => {
  expect(recursion1.fibonacci(4)).toEqual(3);
});

test('fibonacci should return 5 when given 5', () => {
  expect(recursion1.fibonacci(5)).toEqual(5);
});

test('fibonacci should return 8 when given 6', () => {
  expect(recursion1.fibonacci(6)).toEqual(8);
});

test('fibonacci should return 13 when given 7', () => {
  expect(recursion1.fibonacci(7)).toEqual(13);
});

test('bunnyEars2 should return 0 when given 0', () => {
  expect(recursion1.bunnyEars2(0)).toEqual(0);
});

test('bunnyEars2 should return 2 when given 1', () => {
  expect(recursion1.bunnyEars2(1)).toEqual(2);
});

test('bunnyEars2 should return 5 when given 2', () => {
  expect(recursion1.bunnyEars2(2)).toEqual(5);
});

test('bunnyEars2 should return 7 when given 3', () => {
  expect(recursion1.bunnyEars2(3)).toEqual(7);
});

test('bunnyEars2 should return 10 when given 4', () => {
  expect(recursion1.bunnyEars2(4)).toEqual(10);
});

test('bunnyEars2 should return 12 when given 5', () => {
  expect(recursion1.bunnyEars2(5)).toEqual(12);
});

test('bunnyEars2 should return 15 when given 6', () => {
  expect(recursion1.bunnyEars2(6)).toEqual(15);
});

test('bunnyEars2 should return 25 when given 10', () => {
  expect(recursion1.bunnyEars2(10)).toEqual(25);
});

test('triangle should return 0 when given 0', () => {
  expect(recursion1.triangle(0)).toEqual(0);
});

test('triangle should return 1 when given 1', () => {
  expect(recursion1.triangle(1)).toEqual(1);
});

test('triangle should return 3 when given 2', () => {
  expect(recursion1.triangle(2)).toEqual(3);
});

test('triangle should return 6 when given 3', () => {
  expect(recursion1.triangle(3)).toEqual(6);
});

test('triangle should return 10 when given 4', () => {
  expect(recursion1.triangle(4)).toEqual(10);
});

test('triangle should return 15 when given 5', () => {
  expect(recursion1.triangle(5)).toEqual(15);
});

test('triangle should return 21 when given 6', () => {
  expect(recursion1.triangle(6)).toEqual(21);
});

test('triangle should return 28 when given 7', () => {
  expect(recursion1.triangle(7)).toEqual(28);
});

test('sumDigits1 should return 9 when given 126', () => {
  expect(recursion1.sumDigits1(126)).toEqual(9);
});

test('sumDigits1 should return 13 when given 49', () => {
  expect(recursion1.sumDigits1(49)).toEqual(13);
});

test('sumDigits1 should return 3 when given 12', () => {
  expect(recursion1.sumDigits1(12)).toEqual(3);
});

test('sumDigits1 should return 1 when given 10', () => {
  expect(recursion1.sumDigits1(10)).toEqual(1);
});

test('sumDigits1 should return 1 when given 1', () => {
  expect(recursion1.sumDigits1(1)).toEqual(1);
});

test('sumDigits1 should return 0 when given 0', () => {
  expect(recursion1.sumDigits1(0)).toEqual(0);
});

test('sumDigits1 should return 10 when given 730', () => {
  expect(recursion1.sumDigits1(730)).toEqual(10);
});

test('sumDigits1 should return 4 when given 1111', () => {
  expect(recursion1.sumDigits1(1111)).toEqual(4);
});

test('sumDigits1 should return 5 when given 11111', () => {
  expect(recursion1.sumDigits1(11111)).toEqual(5);
});

test('sumDigits1 should return 3 when given 10110', () => {
  expect(recursion1.sumDigits1(10110)).toEqual(3);
});

test('sumDigits1 should return 10 when given 235', () => {
  expect(recursion1.sumDigits1(235)).toEqual(10);
});

test('count7 should return 2 when given 717', () => {
  expect(recursion1.count7(717)).toEqual(2);
});

test('count7 should return 1 when given 7', () => {
  expect(recursion1.count7(7)).toEqual(1);
});

test('count7 should return 0 when given 123', () => {
  expect(recursion1.count7(123)).toEqual(0);
});

test('count7 should return 2 when given 77', () => {
  expect(recursion1.count7(77)).toEqual(2);
});

test('count7 should return 1 when given 7123', () => {
  expect(recursion1.count7(7123)).toEqual(1);
});

test('count7 should return 3 when given 771237', () => {
  expect(recursion1.count7(771237)).toEqual(3);
});

test('count7 should return 4 when given 771737', () => {
  expect(recursion1.count7(771737)).toEqual(4);
});

test('count7 should return 2 when given 47571', () => {
  expect(recursion1.count7(47571)).toEqual(2);
});

test('count7 should return 6 when given 777777', () => {
  expect(recursion1.count7(777777)).toEqual(6);
});

test('count7 should return 4 when given 70701277', () => {
  expect(recursion1.count7(70701277)).toEqual(4);
});

test('count7 should return 5 when given 777576197', () => {
  expect(recursion1.count7(777576197)).toEqual(5);
});

test('count7 should return 0 when given 99999', () => {
  expect(recursion1.count7(99999)).toEqual(0);
});

test('count7 should return 1 when given 99799', () => {
  expect(recursion1.count7(99799)).toEqual(1);
});

test('count8 should return 1 when given 8', () => {
  expect(recursion1.count8(8)).toEqual(1);
});

test('count8 should return 2 when given 818', () => {
  expect(recursion1.count8(818)).toEqual(2);
});

test('count8 should return 4 when given 8818', () => {
  expect(recursion1.count8(8818)).toEqual(4);
});

test('count8 should return 4 when given 8088', () => {
  expect(recursion1.count8(8088)).toEqual(4);
});

test('count8 should return 0 when given 123', () => {
  expect(recursion1.count8(123)).toEqual(0);
});

test('count8 should return 2 when given 81238', () => {
  expect(recursion1.count8(81238)).toEqual(2);
});

test('count8 should return 6 when given 88788', () => {
  expect(recursion1.count8(88788)).toEqual(6);
});

test('count8 should return 1 when given 8234', () => {
  expect(recursion1.count8(8234)).toEqual(1);
});

test('count8 should return 1 when given 2348', () => {
  expect(recursion1.count8(2348)).toEqual(1);
});

test('count8 should return 3 when given 23884', () => {
  expect(recursion1.count8(23884)).toEqual(3);
});

test('count8 should return 0 when given 0', () => {
  expect(recursion1.count8(0)).toEqual(0);
});

test('count8 should return 5 when given 1818188', () => {
  expect(recursion1.count8(1818188)).toEqual(5);
});

test('count8 should return 5 when given 8818181', () => {
  expect(recursion1.count8(8818181)).toEqual(5);
});

test('count8 should return 1 when given 1080', () => {
  expect(recursion1.count8(1080)).toEqual(1);
});

test('count8 should return 3 when given 188', () => {
  expect(recursion1.count8(188)).toEqual(3);
});

test('count8 should return 9 when given 88888', () => {
  expect(recursion1.count8(88888)).toEqual(9);
});

test('count8 should return 2 when given 9898', () => {
  expect(recursion1.count8(9898)).toEqual(2);
});

test('count8 should return 1 when given 78', () => {
  expect(recursion1.count8(78)).toEqual(1);
});

test('powerN should return 3 when given (3, 1)', () => {
  expect(recursion1.powerN(3, 1)).toEqual(3);
});

test('powerN should return 9 when given (3, 2)', () => {
  expect(recursion1.powerN(3, 2)).toEqual(9);
});

test('powerN should return 27 when given (3, 3)', () => {
  expect(recursion1.powerN(3, 3)).toEqual(27);
});

test('powerN should return 2 when given (2, 1)', () => {
  expect(recursion1.powerN(2, 1)).toEqual(2);
});

test('powerN should return 4 when given (2, 2)', () => {
  expect(recursion1.powerN(2, 2)).toEqual(4);
});

test('powerN should return 8 when given (2, 3)', () => {
  expect(recursion1.powerN(2, 3)).toEqual(8);
});

test('powerN should return 16 when given (2, 4)', () => {
  expect(recursion1.powerN(2, 4)).toEqual(16);
});

test('powerN should return 32 when given (2, 5)', () => {
  expect(recursion1.powerN(2, 5)).toEqual(32);
});

test('powerN should return 10 when given (10, 1)', () => {
  expect(recursion1.powerN(10, 1)).toEqual(10);
});

test('powerN should return 100 when given (10, 2)', () => {
  expect(recursion1.powerN(10, 2)).toEqual(100);
});

test('powerN should return 1000 when given (10, 3)', () => {
  expect(recursion1.powerN(10, 3)).toEqual(1000);
});

test('countX should return 4 when given "xxhixx"', () => {
  expect(recursion1.countX("xxhixx")).toEqual(4);
});

test('countX should return 3 when given "xhixhix"', () => {
  expect(recursion1.countX("xhixhix")).toEqual(3);
});

test('countX should return 0 when given "hi"', () => {
  expect(recursion1.countX("hi")).toEqual(0);
});

test('countX should return 0 when given "h"', () => {
  expect(recursion1.countX("h")).toEqual(0);
});

test('countX should return 1 when given "x"', () => {
  expect(recursion1.countX("x")).toEqual(1);
});

test('countX should return 0 when given ""', () => {
  expect(recursion1.countX("")).toEqual(0);
});

test('countX should return 0 when given "hihi"', () => {
  expect(recursion1.countX("hihi")).toEqual(0);
});

test('countX should return 0 when given "hiAAhi12hi"', () => {
  expect(recursion1.countX("hiAAhi12hi")).toEqual(0);
});

test('countHi should return 1 when given "xxhixx"', () => {
  expect(recursion1.countHi("xxhixx")).toEqual(1);
});

test('countHi should return 2 when given "xhixhix"', () => {
  expect(recursion1.countHi("xhixhix")).toEqual(2);
});

test('countHi should return 1 when given "hi"', () => {
  expect(recursion1.countHi("hi")).toEqual(1);
});

test('countHi should return 2 when given "hihih"', () => {
  expect(recursion1.countHi("hihih")).toEqual(2);
});

test('countHi should return 0 when given "h"', () => {
  expect(recursion1.countHi("h")).toEqual(0);
});

test('countHi should return 0 when given ""', () => {
  expect(recursion1.countHi("")).toEqual(0);
});

test('countHi should return 4 when given "ihihihihih"', () => {
  expect(recursion1.countHi("ihihihihih")).toEqual(4);
});

test('countHi should return 5 when given "ihihihihihi"', () => {
  expect(recursion1.countHi("ihihihihihi")).toEqual(5);
});

test('countHi should return 3 when given "hiAAhi12hi"', () => {
  expect(recursion1.countHi("hiAAhi12hi")).toEqual(3);
});

test('countHi should return 3 when given "xhixhxihihhhih"', () => {
  expect(recursion1.countHi("xhixhxihihhhih")).toEqual(3);
});

test('countHi should return 1 when given "ship"', () => {
  expect(recursion1.countHi("ship")).toEqual(1);
});

test('changeXY should return "codey" when given "codex"', () => {
  expect(recursion1.changeXY("codex")).toEqual("codey");
});

test('changeXY should return "yyhiyy" when given "xxhixx"', () => {
  expect(recursion1.changeXY("xxhixx")).toEqual("yyhiyy");
});

test('changeXY should return "yhiyhiy" when given "xhixhix"', () => {
  expect(recursion1.changeXY("xhixhix")).toEqual("yhiyhiy");
});

test('changeXY should return "hiy" when given "hiy"', () => {
  expect(recursion1.changeXY("hiy")).toEqual("hiy");
});

test('changeXY should return "h" when given "h"', () => {
  expect(recursion1.changeXY("h")).toEqual("h");
});

test('changeXY should return "y" when given "x"', () => {
  expect(recursion1.changeXY("x")).toEqual("y");
});

test('changeXY should return "" when given ""', () => {
  expect(recursion1.changeXY("")).toEqual("");
});

test('changeXY should return "yyy" when given "xxx"', () => {
  expect(recursion1.changeXY("xxx")).toEqual("yyy");
});

test('changeXY should return "yyhyyi" when given "yyhxyi"', () => {
  expect(recursion1.changeXY("yyhxyi")).toEqual("yyhyyi");
});

test('changeXY should return "hihi" when given "hihi"', () => {
  expect(recursion1.changeXY("hihi")).toEqual("hihi");
});

test('changePi should return "x3.14x" when given "xpix"', () => {
  expect(recursion1.changePi("xpix")).toEqual("x3.14x");
});

test('changePi should return "3.143.14" when given "pipi"', () => {
  expect(recursion1.changePi("pipi")).toEqual("3.143.14");
});

test('changePi should return "3.14p" when given "pip"', () => {
  expect(recursion1.changePi("pip")).toEqual("3.14p");
});

test('changePi should return "3.14" when given "pi"', () => {
  expect(recursion1.changePi("pi")).toEqual("3.14");
});

test('changePi should return "hip" when given "hip"', () => {
  expect(recursion1.changePi("hip")).toEqual("hip");
});

test('changePi should return "p" when given "p"', () => {
  expect(recursion1.changePi("p")).toEqual("p");
});

test('changePi should return "x" when given "x"', () => {
  expect(recursion1.changePi("x")).toEqual("x");
});

test('changePi should return "" when given ""', () => {
  expect(recursion1.changePi("")).toEqual("");
});

test('changePi should return "3.14xx" when given "pixx"', () => {
  expect(recursion1.changePi("pixx")).toEqual("3.14xx");
});

test('changePi should return "xyzzy" when given "xyzzy"', () => {
  expect(recursion1.changePi("xyzzy")).toEqual("xyzzy");
});

test('noX should return "ab" when given "xaxb"', () => {
  expect(recursion1.noX("xaxb")).toEqual("ab");
});

test('noX should return "abc" when given "abc"', () => {
  expect(recursion1.noX("abc")).toEqual("abc");
});

test('noX should return "" when given "xx"', () => {
  expect(recursion1.noX("xx")).toEqual("");
});

test('noX should return "" when given ""', () => {
  expect(recursion1.noX("")).toEqual("");
});

test('noX should return "ab" when given "axxbxx"', () => {
  expect(recursion1.noX("axxbxx")).toEqual("ab");
});

test('noX should return "Hello" when given "Hellox"', () => {
  expect(recursion1.noX("Hellox")).toEqual("Hello");
});

test('array6 should return true when given ([1,6,4], 0)', () => {
  expect(recursion1.array6([1,6,4], 0)).toEqual(true);
});

test('array6 should return false when given ([1,4], 0)', () => {
  expect(recursion1.array6([1,4], 0)).toEqual(false);
});

test('array6 should return true when given ([6], 0)', () => {
  expect(recursion1.array6([6], 0)).toEqual(true);
});

test('array6 should return false when given ([], 0)', () => {
  expect(recursion1.array6([], 0)).toEqual(false);
});

test('array6 should return true when given ([6,2,2], 0)', () => {
  expect(recursion1.array6([6,2,2], 0)).toEqual(true);
});

test('array6 should return false when given ([2,5], 0)', () => {
  expect(recursion1.array6([2,5], 0)).toEqual(false);
});

test('array6 should return true when given ([1,9,4,6,6], 0)', () => {
  expect(recursion1.array6([1,9,4,6,6], 0)).toEqual(true);
});

test('array6 should return true when given ([2,5,6], 0)', () => {
  expect(recursion1.array6([2,5,6], 0)).toEqual(true);
});

test('array11 should return 1 when given ([1,2,11], 0)', () => {
  expect(recursion1.array11([1,2,11], 0)).toEqual(1);
});

test('array11 should return 2 when given ([11,11], 0)', () => {
  expect(recursion1.array11([11,11], 0)).toEqual(2);
});

test('array11 should return 0 when given ([1,2,3,4], 0)', () => {
  expect(recursion1.array11([1,2,3,4], 0)).toEqual(0);
});

test('array11 should return 3 when given ([1,11,3,11,11], 0)', () => {
  expect(recursion1.array11([1,11,3,11,11], 0)).toEqual(3);
});

test('array11 should return 1 when given ([11], 0)', () => {
  expect(recursion1.array11([11], 0)).toEqual(1);
});

test('array11 should return 0 when given ([1], 0)', () => {
  expect(recursion1.array11([1], 0)).toEqual(0);
});

test('array11 should return 0 when given ([], 0)', () => {
  expect(recursion1.array11([], 0)).toEqual(0);
});

test('array11 should return 2 when given ([11,2,3,4,11,5], 0)', () => {
  expect(recursion1.array11([11,2,3,4,11,5], 0)).toEqual(2);
});

test('array11 should return 2 when given ([11,5,11], 0)', () => {
  expect(recursion1.array11([11,5,11], 0)).toEqual(2);
});

test('array220 should return true when given ([1,2,20], 0)', () => {
  expect(recursion1.array220([1,2,20], 0)).toEqual(true);
});

test('array220 should return true when given ([3,30], 0)', () => {
  expect(recursion1.array220([3,30], 0)).toEqual(true);
});

test('array220 should return false when given ([3], 0)', () => {
  expect(recursion1.array220([3], 0)).toEqual(false);
});

test('array220 should return false when given ([], 0)', () => {
  expect(recursion1.array220([], 0)).toEqual(false);
});

test('array220 should return true when given ([3,3,30,4], 0)', () => {
  expect(recursion1.array220([3,3,30,4], 0)).toEqual(true);
});

test('array220 should return false when given ([2,19,4], 0)', () => {
  expect(recursion1.array220([2,19,4], 0)).toEqual(false);
});

test('array220 should return false when given ([20,2,21], 0)', () => {
  expect(recursion1.array220([20,2,21], 0)).toEqual(false);
});

test('array220 should return true when given ([20,2,21,210], 0)', () => {
  expect(recursion1.array220([20,2,21,210], 0)).toEqual(true);
});

test('array220 should return true when given ([2,200,2000], 0)', () => {
  expect(recursion1.array220([2,200,2000], 0)).toEqual(true);
});

test('array220 should return true when given ([0,0], 0)', () => {
  expect(recursion1.array220([0,0], 0)).toEqual(true);
});

test('array220 should return false when given ([1,2,3,4,5,6], 0)', () => {
  expect(recursion1.array220([1,2,3,4,5,6], 0)).toEqual(false);
});

test('array220 should return true when given ([1,2,3,4,5,50,6], 0)', () => {
  expect(recursion1.array220([1,2,3,4,5,50,6], 0)).toEqual(true);
});

test('array220 should return false when given ([1,2,3,4,5,51,6], 0)', () => {
  expect(recursion1.array220([1,2,3,4,5,51,6], 0)).toEqual(false);
});

test('array220 should return true when given ([1,2,3,4,4,50,500,6], 0)', () => {
  expect(recursion1.array220([1,2,3,4,4,50,500,6], 0)).toEqual(true);
});

test('allStar should return "h*e*l*l*o" when given "hello"', () => {
  expect(recursion1.allStar("hello")).toEqual("h*e*l*l*o");
});

test('allStar should return "a*b*c" when given "abc"', () => {
  expect(recursion1.allStar("abc")).toEqual("a*b*c");
});

test('allStar should return "a*b" when given "ab"', () => {
  expect(recursion1.allStar("ab")).toEqual("a*b");
});

test('allStar should return "a" when given "a"', () => {
  expect(recursion1.allStar("a")).toEqual("a");
});

test('allStar should return "" when given ""', () => {
  expect(recursion1.allStar("")).toEqual("");
});

test('allStar should return "3*.*1*4" when given "3.14"', () => {
  expect(recursion1.allStar("3.14")).toEqual("3*.*1*4");
});

test('allStar should return "C*h*o*c*o*l*a*t*e" when given "Chocolate"', () => {
  expect(recursion1.allStar("Chocolate")).toEqual("C*h*o*c*o*l*a*t*e");
});

test('allStar should return "1*2*3*4" when given "1234"', () => {
  expect(recursion1.allStar("1234")).toEqual("1*2*3*4");
});

test('pairStar should return "hel*lo" when given "hello"', () => {
  expect(recursion1.pairStar("hello")).toEqual("hel*lo");
});

test('pairStar should return "x*xy*y" when given "xxyy"', () => {
  expect(recursion1.pairStar("xxyy")).toEqual("x*xy*y");
});

test('pairStar should return "a*a*a*a" when given "aaaa"', () => {
  expect(recursion1.pairStar("aaaa")).toEqual("a*a*a*a");
});

test('pairStar should return "a*a*ab" when given "aaab"', () => {
  expect(recursion1.pairStar("aaab")).toEqual("a*a*ab");
});

test('pairStar should return "a*a" when given "aa"', () => {
  expect(recursion1.pairStar("aa")).toEqual("a*a");
});

test('pairStar should return "a" when given "a"', () => {
  expect(recursion1.pairStar("a")).toEqual("a");
});

test('pairStar should return "" when given ""', () => {
  expect(recursion1.pairStar("")).toEqual("");
});

test('pairStar should return "noadjacent" when given "noadjacent"', () => {
  expect(recursion1.pairStar("noadjacent")).toEqual("noadjacent");
});

test('pairStar should return "ab*ba" when given "abba"', () => {
  expect(recursion1.pairStar("abba")).toEqual("ab*ba");
});

test('pairStar should return "ab*b*ba" when given "abbba"', () => {
  expect(recursion1.pairStar("abbba")).toEqual("ab*b*ba");
});

test('endX should return "rexx" when given "xxre"', () => {
  expect(recursion1.endX("xxre")).toEqual("rexx");
});

test('endX should return "hixxxx" when given "xxhixx"', () => {
  expect(recursion1.endX("xxhixx")).toEqual("hixxxx");
});

test('endX should return "hihixxx" when given "xhixhix"', () => {
  expect(recursion1.endX("xhixhix")).toEqual("hihixxx");
});

test('endX should return "hiy" when given "hiy"', () => {
  expect(recursion1.endX("hiy")).toEqual("hiy");
});

test('endX should return "h" when given "h"', () => {
  expect(recursion1.endX("h")).toEqual("h");
});

test('endX should return "x" when given "x"', () => {
  expect(recursion1.endX("x")).toEqual("x");
});

test('endX should return "xx" when given "xx"', () => {
  expect(recursion1.endX("xx")).toEqual("xx");
});

test('endX should return "" when given ""', () => {
  expect(recursion1.endX("")).toEqual("");
});

test('endX should return "bxx" when given "bxx"', () => {
  expect(recursion1.endX("bxx")).toEqual("bxx");
});

test('endX should return "baxx" when given "bxax"', () => {
  expect(recursion1.endX("bxax")).toEqual("baxx");
});

test('endX should return "aaaxxx" when given "axaxax"', () => {
  expect(recursion1.endX("axaxax")).toEqual("aaaxxx");
});

test('endX should return "hixxx" when given "xxhxi"', () => {
  expect(recursion1.endX("xxhxi")).toEqual("hixxx");
});

test('countPairs should return 1 when given "axa"', () => {
  expect(recursion1.countPairs("axa")).toEqual(1);
});

test('countPairs should return 2 when given "axax"', () => {
  expect(recursion1.countPairs("axax")).toEqual(2);
});

test('countPairs should return 1 when given "axbx"', () => {
  expect(recursion1.countPairs("axbx")).toEqual(1);
});

test('countPairs should return 0 when given "hi"', () => {
  expect(recursion1.countPairs("hi")).toEqual(0);
});

test('countPairs should return 3 when given "hihih"', () => {
  expect(recursion1.countPairs("hihih")).toEqual(3);
});

test('countPairs should return 3 when given "ihihhh"', () => {
  expect(recursion1.countPairs("ihihhh")).toEqual(3);
});

test('countPairs should return 0 when given "ihjxhh"', () => {
  expect(recursion1.countPairs("ihjxhh")).toEqual(0);
});

test('countPairs should return 0 when given ""', () => {
  expect(recursion1.countPairs("")).toEqual(0);
});

test('countPairs should return 0 when given "a"', () => {
  expect(recursion1.countPairs("a")).toEqual(0);
});

test('countPairs should return 0 when given "aa"', () => {
  expect(recursion1.countPairs("aa")).toEqual(0);
});

test('countPairs should return 1 when given "aaa"', () => {
  expect(recursion1.countPairs("aaa")).toEqual(1);
});

test('countAbc should return 1 when given "abc"', () => {
  expect(recursion1.countAbc("abc")).toEqual(1);
});

test('countAbc should return 2 when given "abcxxabc"', () => {
  expect(recursion1.countAbc("abcxxabc")).toEqual(2);
});

test('countAbc should return 2 when given "abaxxaba"', () => {
  expect(recursion1.countAbc("abaxxaba")).toEqual(2);
});

test('countAbc should return 2 when given "ababc"', () => {
  expect(recursion1.countAbc("ababc")).toEqual(2);
});

test('countAbc should return 0 when given "abxbc"', () => {
  expect(recursion1.countAbc("abxbc")).toEqual(0);
});

test('countAbc should return 1 when given "aaabc"', () => {
  expect(recursion1.countAbc("aaabc")).toEqual(1);
});

test('countAbc should return 0 when given "hello"', () => {
  expect(recursion1.countAbc("hello")).toEqual(0);
});

test('countAbc should return 0 when given ""', () => {
  expect(recursion1.countAbc("")).toEqual(0);
});

test('countAbc should return 0 when given "ab"', () => {
  expect(recursion1.countAbc("ab")).toEqual(0);
});

test('countAbc should return 1 when given "aba"', () => {
  expect(recursion1.countAbc("aba")).toEqual(1);
});

test('countAbc should return 0 when given "aca"', () => {
  expect(recursion1.countAbc("aca")).toEqual(0);
});

test('countAbc should return 0 when given "aaa"', () => {
  expect(recursion1.countAbc("aaa")).toEqual(0);
});

test('count11 should return 2 when given "11abc11"', () => {
  expect(recursion1.count11("11abc11")).toEqual(2);
});

test('count11 should return 3 when given "abc11x11x11"', () => {
  expect(recursion1.count11("abc11x11x11")).toEqual(3);
});

test('count11 should return 1 when given "111"', () => {
  expect(recursion1.count11("111")).toEqual(1);
});

test('count11 should return 2 when given "1111"', () => {
  expect(recursion1.count11("1111")).toEqual(2);
});

test('count11 should return 0 when given "1"', () => {
  expect(recursion1.count11("1")).toEqual(0);
});

test('count11 should return 0 when given ""', () => {
  expect(recursion1.count11("")).toEqual(0);
});

test('count11 should return 0 when given "hi"', () => {
  expect(recursion1.count11("hi")).toEqual(0);
});

test('count11 should return 4 when given "11x111x1111"', () => {
  expect(recursion1.count11("11x111x1111")).toEqual(4);
});

test('count11 should return 1 when given "1x111"', () => {
  expect(recursion1.count11("1x111")).toEqual(1);
});

test('count11 should return 0 when given "1Hello1"', () => {
  expect(recursion1.count11("1Hello1")).toEqual(0);
});

test('count11 should return 0 when given "Hello"', () => {
  expect(recursion1.count11("Hello")).toEqual(0);
});

test('stringClean should return "yza" when given "yyzzza"', () => {
  expect(recursion1.stringClean("yyzzza")).toEqual("yza");
});

test('stringClean should return "abcd" when given "abbbcdd"', () => {
  expect(recursion1.stringClean("abbbcdd")).toEqual("abcd");
});

test('stringClean should return "Helo" when given "Hello"', () => {
  expect(recursion1.stringClean("Hello")).toEqual("Helo");
});

test('stringClean should return "XabcY" when given "XXabcYY"', () => {
  expect(recursion1.stringClean("XXabcYY")).toEqual("XabcY");
});

test('stringClean should return "12ab45" when given "112ab445"', () => {
  expect(recursion1.stringClean("112ab445")).toEqual("12ab45");
});

test('stringClean should return "Helo Bokeper" when given "Hello Bookkeeper"', () => {
  expect(recursion1.stringClean("Hello Bookkeeper")).toEqual("Helo Bokeper");
});

test('countHi2 should return 1 when given "ahixhi"', () => {
  expect(recursion1.countHi2("ahixhi")).toEqual(1);
});

test('countHi2 should return 2 when given "ahibhi"', () => {
  expect(recursion1.countHi2("ahibhi")).toEqual(2);
});

test('countHi2 should return 0 when given "xhixhi"', () => {
  expect(recursion1.countHi2("xhixhi")).toEqual(0);
});

test('countHi2 should return 1 when given "hixhi"', () => {
  expect(recursion1.countHi2("hixhi")).toEqual(1);
});

test('countHi2 should return 2 when given "hixhhi"', () => {
  expect(recursion1.countHi2("hixhhi")).toEqual(2);
});

test('countHi2 should return 3 when given "hihihi"', () => {
  expect(recursion1.countHi2("hihihi")).toEqual(3);
});

test('countHi2 should return 3 when given "hihihix"', () => {
  expect(recursion1.countHi2("hihihix")).toEqual(3);
});

test('countHi2 should return 2 when given "xhihihix"', () => {
  expect(recursion1.countHi2("xhihihix")).toEqual(2);
});

test('countHi2 should return 0 when given "xxhi"', () => {
  expect(recursion1.countHi2("xxhi")).toEqual(0);
});

test('countHi2 should return 1 when given "hixxhi"', () => {
  expect(recursion1.countHi2("hixxhi")).toEqual(1);
});

test('countHi2 should return 1 when given "hi"', () => {
  expect(recursion1.countHi2("hi")).toEqual(1);
});

test('countHi2 should return 0 when given "xxxx"', () => {
  expect(recursion1.countHi2("xxxx")).toEqual(0);
});

test('countHi2 should return 0 when given "h"', () => {
  expect(recursion1.countHi2("h")).toEqual(0);
});

test('countHi2 should return 0 when given "x"', () => {
  expect(recursion1.countHi2("x")).toEqual(0);
});

test('countHi2 should return 0 when given ""', () => {
  expect(recursion1.countHi2("")).toEqual(0);
});

test('countHi2 should return 1 when given "Hellohi"', () => {
  expect(recursion1.countHi2("Hellohi")).toEqual(1);
});

test('starBit should return "-abc*" when given "xyz,-abc*123"', () => {
  expect(recursion1.starBit("xyz,-abc*123")).toEqual("-abc*");
});

test('starBit should return "-hello*" when given "x,-hello*"', () => {
  expect(recursion1.starBit("x,-hello*")).toEqual("-hello*");
});

test('starBit should return "-xy*" when given ",-xy*1"', () => {
  expect(recursion1.starBit(",-xy*1")).toEqual("-xy*");
});

test('starBit should return "-possible*" when given "not really ,-possible*"', () => {
  expect(recursion1.starBit("not really ,-possible*")).toEqual("-possible*");
});

test('starBit should return "-abc*" when given ",-abc*"', () => {
  expect(recursion1.starBit(",-abc*")).toEqual("-abc*");
});

test('starBit should return "-abc*" when given ",-abc*xyz"', () => {
  expect(recursion1.starBit(",-abc*xyz")).toEqual("-abc*");
});

test('starBit should return "-abc*" when given ",-abc*x"', () => {
  expect(recursion1.starBit(",-abc*x")).toEqual("-abc*");
});

test('starBit should return "-x*" when given ",-x*"', () => {
  expect(recursion1.starBit(",-x*")).toEqual("-x*");
});

test('starBit should return "-)*" when given ",-)*"', () => {
  expect(recursion1.starBit(",-)*")).toEqual("-)*");
});

test('starBit should return "-ipsa*" when given "res ,-ipsa* loquitor"', () => {
  expect(recursion1.starBit("res ,-ipsa* loquitor")).toEqual("-ipsa*");
});

test('starBit should return "-not really*" when given "hello,-not really*there"', () => {
  expect(recursion1.starBit("hello,-not really*there")).toEqual("-not really*");
});

test('starBit should return "-ab*" when given "ab,-ab*ab"', () => {
  expect(recursion1.starBit("ab,-ab*ab")).toEqual("-ab*");
});

test('nestParen should return true when given "(())"', () => {
  expect(recursion1.nestParen("(())")).toEqual(true);
});

test('nestParen should return true when given "((()))"', () => {
  expect(recursion1.nestParen("((()))")).toEqual(true);
});

test('nestParen should return false when given "(((x))"', () => {
  expect(recursion1.nestParen("(((x))")).toEqual(false);
});

test('nestParen should return false when given "((())"', () => {
  expect(recursion1.nestParen("((())")).toEqual(false);
});

test('nestParen should return false when given "((()()"', () => {
  expect(recursion1.nestParen("((()()")).toEqual(false);
});

test('nestParen should return true when given "()"', () => {
  expect(recursion1.nestParen("()")).toEqual(true);
});

test('nestParen should return true when given ""', () => {
  expect(recursion1.nestParen("")).toEqual(true);
});

test('nestParen should return false when given "(yy)"', () => {
  expect(recursion1.nestParen("(yy)")).toEqual(false);
});

test('nestParen should return true when given "(())"', () => {
  expect(recursion1.nestParen("(())")).toEqual(true);
});

test('nestParen should return false when given "(((y))"', () => {
  expect(recursion1.nestParen("(((y))")).toEqual(false);
});

test('nestParen should return false when given "((y)))"', () => {
  expect(recursion1.nestParen("((y)))")).toEqual(false);
});

test('nestParen should return true when given "((()))"', () => {
  expect(recursion1.nestParen("((()))")).toEqual(true);
});

test('nestParen should return false when given "(())))"', () => {
  expect(recursion1.nestParen("(())))")).toEqual(false);
});

test('nestParen should return false when given "((yy())))"', () => {
  expect(recursion1.nestParen("((yy())))")).toEqual(false);
});

test('nestParen should return true when given "(((())))"', () => {
  expect(recursion1.nestParen("(((())))")).toEqual(true);
});

test('strCount should return 2 when given ("catcowcat", "cat")', () => {
  expect(recursion1.strCount("catcowcat", "cat")).toEqual(2);
});

test('strCount should return 1 when given ("catcowcat", "cow")', () => {
  expect(recursion1.strCount("catcowcat", "cow")).toEqual(1);
});

test('strCount should return 0 when given ("catcowcat", "dog")', () => {
  expect(recursion1.strCount("catcowcat", "dog")).toEqual(0);
});

test('strCount should return 2 when given ("cacatcowcat", "cat")', () => {
  expect(recursion1.strCount("cacatcowcat", "cat")).toEqual(2);
});

test('strCount should return 2 when given ("xyx", "x")', () => {
  expect(recursion1.strCount("xyx", "x")).toEqual(2);
});

test('strCount should return 4 when given ("iiiijj", "i")', () => {
  expect(recursion1.strCount("iiiijj", "i")).toEqual(4);
});

test('strCount should return 2 when given ("iiiijj", "ii")', () => {
  expect(recursion1.strCount("iiiijj", "ii")).toEqual(2);
});

test('strCount should return 1 when given ("iiiijj", "iii")', () => {
  expect(recursion1.strCount("iiiijj", "iii")).toEqual(1);
});

test('strCount should return 2 when given ("iiiijj", "j")', () => {
  expect(recursion1.strCount("iiiijj", "j")).toEqual(2);
});

test('strCount should return 1 when given ("iiiijj", "jj")', () => {
  expect(recursion1.strCount("iiiijj", "jj")).toEqual(1);
});

test('strCount should return 4 when given ("aaabababab", "ab")', () => {
  expect(recursion1.strCount("aaabababab", "ab")).toEqual(4);
});

test('strCount should return 1 when given ("aaabababab", "aa")', () => {
  expect(recursion1.strCount("aaabababab", "aa")).toEqual(1);
});

test('strCount should return 6 when given ("aaabababab", "a")', () => {
  expect(recursion1.strCount("aaabababab", "a")).toEqual(6);
});

test('strCount should return 4 when given ("aaabababab", "b")', () => {
  expect(recursion1.strCount("aaabababab", "b")).toEqual(4);
});

test('strCopies should return true when given ("catcowcat", "cat", 2)', () => {
  expect(recursion1.strCopies("catcowcat", "cat", 2)).toEqual(true);
});

test('strCopies should return false when given ("catcowcat", "cow", 2)', () => {
  expect(recursion1.strCopies("catcowcat", "cow", 2)).toEqual(false);
});

test('strCopies should return true when given ("catcowcat", "cow", 1)', () => {
  expect(recursion1.strCopies("catcowcat", "cow", 1)).toEqual(true);
});

test('strCopies should return true when given ("iiijjj", "i", 3)', () => {
  expect(recursion1.strCopies("iiijjj", "i", 3)).toEqual(true);
});

test('strCopies should return false when given ("iiijjj", "i", 4)', () => {
  expect(recursion1.strCopies("iiijjj", "i", 4)).toEqual(false);
});

test('strCopies should return true when given ("iiijjj", "ii", 2)', () => {
  expect(recursion1.strCopies("iiijjj", "ii", 2)).toEqual(true);
});

test('strCopies should return false when given ("iiijjj", "ii", 3)', () => {
  expect(recursion1.strCopies("iiijjj", "ii", 3)).toEqual(false);
});

test('strCopies should return false when given ("iiijjj", "x", 3)', () => {
  expect(recursion1.strCopies("iiijjj", "x", 3)).toEqual(false);
});

test('strCopies should return true when given ("iiijjj", "x", 0)', () => {
  expect(recursion1.strCopies("iiijjj", "x", 0)).toEqual(true);
});

test('strCopies should return true when given ("iiiiij", "iii", 3)', () => {
  expect(recursion1.strCopies("iiiiij", "iii", 3)).toEqual(true);
});

test('strCopies should return false when given ("iiiiij", "iii", 4)', () => {
  expect(recursion1.strCopies("iiiiij", "iii", 4)).toEqual(false);
});

test('strCopies should return true when given ("ijiiiiij", "iiii", 2)', () => {
  expect(recursion1.strCopies("ijiiiiij", "iiii", 2)).toEqual(true);
});

test('strCopies should return false when given ("ijiiiiij", "iiii", 3)', () => {
  expect(recursion1.strCopies("ijiiiiij", "iiii", 3)).toEqual(false);
});

test('strCopies should return true when given ("dogcatdogcat", "dog", 2)', () => {
  expect(recursion1.strCopies("dogcatdogcat", "dog", 2)).toEqual(true);
});

test('strDist should return 9 when given ("catcowcat", "cat")', () => {
  expect(recursion1.strDist("catcowcat", "cat")).toEqual(9);
});

test('strDist should return 3 when given ("catcowcat", "cow")', () => {
  expect(recursion1.strDist("catcowcat", "cow")).toEqual(3);
});

test('strDist should return 9 when given ("cccatcowcatxx", "cat")', () => {
  expect(recursion1.strDist("cccatcowcatxx", "cat")).toEqual(9);
});

test('strDist should return 12 when given ("abccatcowcatcatxyz", "cat")', () => {
  expect(recursion1.strDist("abccatcowcatcatxyz", "cat")).toEqual(12);
});

test('strDist should return 3 when given ("xyx", "x")', () => {
  expect(recursion1.strDist("xyx", "x")).toEqual(3);
});

test('strDist should return 1 when given ("xyx", "y")', () => {
  expect(recursion1.strDist("xyx", "y")).toEqual(1);
});

test('strDist should return 0 when given ("xyx", "z")', () => {
  expect(recursion1.strDist("xyx", "z")).toEqual(0);
});

test('strDist should return 1 when given ("z", "z")', () => {
  expect(recursion1.strDist("z", "z")).toEqual(1);
});

test('strDist should return 0 when given ("x", "z")', () => {
  expect(recursion1.strDist("x", "z")).toEqual(0);
});

test('strDist should return 0 when given ("", "z")', () => {
  expect(recursion1.strDist("", "z")).toEqual(0);
});

test('strDist should return 13 when given ("hiHellohihihi", "hi")', () => {
  expect(recursion1.strDist("hiHellohihihi", "hi")).toEqual(13);
});

test('strDist should return 5 when given ("hiHellohihihi", "hih")', () => {
  expect(recursion1.strDist("hiHellohihihi", "hih")).toEqual(5);
});

test('strDist should return 1 when given ("hiHellohihihi", "o")', () => {
  expect(recursion1.strDist("hiHellohihihi", "o")).toEqual(1);
});

test('strDist should return 2 when given ("hiHellohihihi", "ll")', () => {
  expect(recursion1.strDist("hiHellohihihi", "ll")).toEqual(2);
});
