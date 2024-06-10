const warmup2 = require('../warmup2');

test('stringTimes should return "HiHi" when given ("Hi", 2)', () => {
  expect(warmup2.stringTimes("Hi", 2)).toEqual("HiHi");
});

test('stringTimes should return "HiHiHi" when given ("Hi", 3)', () => {
  expect(warmup2.stringTimes("Hi", 3)).toEqual("HiHiHi");
});

test('stringTimes should return "Hi" when given ("Hi", 1)', () => {
  expect(warmup2.stringTimes("Hi", 1)).toEqual("Hi");
});

test('stringTimes should return "" when given ("Hi", 0)', () => {
  expect(warmup2.stringTimes("Hi", 0)).toEqual("");
});

test('stringTimes should return "HiHiHiHiHi" when given ("Hi", 5)', () => {
  expect(warmup2.stringTimes("Hi", 5)).toEqual("HiHiHiHiHi");
});

test('stringTimes should return "Oh Boy!Oh Boy!" when given ("Oh Boy!", 2)', () => {
  expect(warmup2.stringTimes("Oh Boy!", 2)).toEqual("Oh Boy!Oh Boy!");
});

test('stringTimes should return "xxxx" when given ("x", 4)', () => {
  expect(warmup2.stringTimes("x", 4)).toEqual("xxxx");
});

test('stringTimes should return "" when given ("", 4)', () => {
  expect(warmup2.stringTimes("", 4)).toEqual("");
});

test('stringTimes should return "codecode" when given ("code", 2)', () => {
  expect(warmup2.stringTimes("code", 2)).toEqual("codecode");
});

test('stringTimes should return "codecodecode" when given ("code", 3)', () => {
  expect(warmup2.stringTimes("code", 3)).toEqual("codecodecode");
});

test('frontTimes should return "ChoCho" when given ("Chocolate", 2)', () => {
  expect(warmup2.frontTimes("Chocolate", 2)).toEqual("ChoCho");
});

test('frontTimes should return "ChoChoCho" when given ("Chocolate", 3)', () => {
  expect(warmup2.frontTimes("Chocolate", 3)).toEqual("ChoChoCho");
});

test('frontTimes should return "AbcAbcAbc" when given ("Abc", 3)', () => {
  expect(warmup2.frontTimes("Abc", 3)).toEqual("AbcAbcAbc");
});

test('frontTimes should return "AbAbAbAb" when given ("Ab", 4)', () => {
  expect(warmup2.frontTimes("Ab", 4)).toEqual("AbAbAbAb");
});

test('frontTimes should return "AAAA" when given ("A", 4)', () => {
  expect(warmup2.frontTimes("A", 4)).toEqual("AAAA");
});

test('frontTimes should return "" when given ("", 4)', () => {
  expect(warmup2.frontTimes("", 4)).toEqual("");
});

test('frontTimes should return "" when given ("Abc", 0)', () => {
  expect(warmup2.frontTimes("Abc", 0)).toEqual("");
});

test('countXX should return 1 when given "abcxx"', () => {
  expect(warmup2.countXX("abcxx")).toEqual(1);
});

test('countXX should return 2 when given "xxx"', () => {
  expect(warmup2.countXX("xxx")).toEqual(2);
});

test('countXX should return 3 when given "xxxx"', () => {
  expect(warmup2.countXX("xxxx")).toEqual(3);
});

test('countXX should return 0 when given "abc"', () => {
  expect(warmup2.countXX("abc")).toEqual(0);
});

test('countXX should return 0 when given "Hello There"', () => {
  expect(warmup2.countXX("Hello There")).toEqual(0);
});

test('countXX should return 2 when given "Hexxo Thxxe"', () => {
  expect(warmup2.countXX("Hexxo Thxxe")).toEqual(2);
});

test('countXX should return 0 when given ""', () => {
  expect(warmup2.countXX("")).toEqual(0);
});

test('countXX should return 0 when given "Kittens"', () => {
  expect(warmup2.countXX("Kittens")).toEqual(0);
});

test('countXX should return 2 when given "Kittensxxx"', () => {
  expect(warmup2.countXX("Kittensxxx")).toEqual(2);
});

test('doubleX should return true when given "axxbb"', () => {
  expect(warmup2.doubleX("axxbb")).toEqual(true);
});

test('doubleX should return false when given "axaxax"', () => {
  expect(warmup2.doubleX("axaxax")).toEqual(false);
});

test('doubleX should return true when given "xxxxx"', () => {
  expect(warmup2.doubleX("xxxxx")).toEqual(true);
});

test('doubleX should return false when given "xaxxx"', () => {
  expect(warmup2.doubleX("xaxxx")).toEqual(false);
});

test('doubleX should return false when given "aaaax"', () => {
  expect(warmup2.doubleX("aaaax")).toEqual(false);
});

test('doubleX should return false when given ""', () => {
  expect(warmup2.doubleX("")).toEqual(false);
});

test('doubleX should return false when given "abc"', () => {
  expect(warmup2.doubleX("abc")).toEqual(false);
});

test('doubleX should return false when given "x"', () => {
  expect(warmup2.doubleX("x")).toEqual(false);
});

test('doubleX should return true when given "xx"', () => {
  expect(warmup2.doubleX("xx")).toEqual(true);
});

test('doubleX should return false when given "xaxx"', () => {
  expect(warmup2.doubleX("xaxx")).toEqual(false);
});

test('stringBits should return "Hlo" when given "Hello"', () => {
  expect(warmup2.stringBits("Hello")).toEqual("Hlo");
});

test('stringBits should return "H" when given "Hi"', () => {
  expect(warmup2.stringBits("Hi")).toEqual("H");
});

test('stringBits should return "Hello" when given "Heeololeo"', () => {
  expect(warmup2.stringBits("Heeololeo")).toEqual("Hello");
});

test('stringBits should return "HHH" when given "HiHiHi"', () => {
  expect(warmup2.stringBits("HiHiHi")).toEqual("HHH");
});

test('stringBits should return "" when given ""', () => {
  expect(warmup2.stringBits("")).toEqual("");
});

test('stringBits should return "Getns" when given "Greetings"', () => {
  expect(warmup2.stringBits("Greetings")).toEqual("Getns");
});

test('stringBits should return "Cooae" when given "Chocolate"', () => {
  expect(warmup2.stringBits("Chocolate")).toEqual("Cooae");
});

test('stringBits should return "p" when given "pi"', () => {
  expect(warmup2.stringBits("pi")).toEqual("p");
});

test('stringBits should return "HloKte" when given "Hello Kitten"', () => {
  expect(warmup2.stringBits("Hello Kitten")).toEqual("HloKte");
});

test('stringBits should return "happy" when given "hxaxpxpxy"', () => {
  expect(warmup2.stringBits("hxaxpxpxy")).toEqual("happy");
});

test('last2 should return 1 when given "hixxhi"', () => {
  expect(warmup2.last2("hixxhi")).toEqual(1);
});

test('last2 should return 1 when given "xaxxaxaxx"', () => {
  expect(warmup2.last2("xaxxaxaxx")).toEqual(1);
});

test('last2 should return 1 when given "axxaaxx"', () => {
  expect(warmup2.last2("axxaaxx")).toEqual(1);
});

test('last2 should return 3 when given "xxaxxaxxaxx"', () => {
  expect(warmup2.last2("xxaxxaxxaxx")).toEqual(3);
});

test('last2 should return 0 when given "xaxaxaa"', () => {
  expect(warmup2.last2("xaxaxaa")).toEqual(0);
});

test('last2 should return 2 when given "xxxx"', () => {
  expect(warmup2.last2("xxxx")).toEqual(2);
});

test('last2 should return 1 when given "13121312"', () => {
  expect(warmup2.last2("13121312")).toEqual(1);
});

test('last2 should return 1 when given "11212"', () => {
  expect(warmup2.last2("11212")).toEqual(1);
});

test('last2 should return 0 when given "13121311"', () => {
  expect(warmup2.last2("13121311")).toEqual(0);
});

test('last2 should return 0 when given "hi"', () => {
  expect(warmup2.last2("hi")).toEqual(0);
});

test('last2 should return 0 when given "h"', () => {
  expect(warmup2.last2("h")).toEqual(0);
});

test('last2 should return 0 when given ""', () => {
  expect(warmup2.last2("")).toEqual(0);
});

test('arrayCount9 should return 1 when given [1,2,9]', () => {
  expect(warmup2.arrayCount9([1,2,9])).toEqual(1);
});

test('arrayCount9 should return 2 when given [1,9,9]', () => {
  expect(warmup2.arrayCount9([1,9,9])).toEqual(2);
});

test('arrayCount9 should return 3 when given [1,9,9,3,9]', () => {
  expect(warmup2.arrayCount9([1,9,9,3,9])).toEqual(3);
});

test('arrayCount9 should return 0 when given [1,2,3]', () => {
  expect(warmup2.arrayCount9([1,2,3])).toEqual(0);
});

test('arrayCount9 should return 0 when given []', () => {
  expect(warmup2.arrayCount9([])).toEqual(0);
});

test('arrayCount9 should return 0 when given [4,2,4,3,1]', () => {
  expect(warmup2.arrayCount9([4,2,4,3,1])).toEqual(0);
});

test('arrayCount9 should return 1 when given [9,2,4,3,1]', () => {
  expect(warmup2.arrayCount9([9,2,4,3,1])).toEqual(1);
});

test('arrayFront9 should return true when given [1,2,9,3,4]', () => {
  expect(warmup2.arrayFront9([1,2,9,3,4])).toEqual(true);
});

test('arrayFront9 should return false when given [1,2,3,4,9]', () => {
  expect(warmup2.arrayFront9([1,2,3,4,9])).toEqual(false);
});

test('arrayFront9 should return false when given [1,2,3,4,5]', () => {
  expect(warmup2.arrayFront9([1,2,3,4,5])).toEqual(false);
});

test('arrayFront9 should return true when given [9,2,3]', () => {
  expect(warmup2.arrayFront9([9,2,3])).toEqual(true);
});

test('arrayFront9 should return true when given [1,9,9]', () => {
  expect(warmup2.arrayFront9([1,9,9])).toEqual(true);
});

test('arrayFront9 should return false when given [1,2,3]', () => {
  expect(warmup2.arrayFront9([1,2,3])).toEqual(false);
});

test('arrayFront9 should return true when given [1,9]', () => {
  expect(warmup2.arrayFront9([1,9])).toEqual(true);
});

test('arrayFront9 should return false when given [5,5]', () => {
  expect(warmup2.arrayFront9([5,5])).toEqual(false);
});

test('arrayFront9 should return false when given [2]', () => {
  expect(warmup2.arrayFront9([2])).toEqual(false);
});

test('arrayFront9 should return true when given [9]', () => {
  expect(warmup2.arrayFront9([9])).toEqual(true);
});

test('arrayFront9 should return false when given []', () => {
  expect(warmup2.arrayFront9([])).toEqual(false);
});

test('arrayFront9 should return true when given [3,9,2,3,3]', () => {
  expect(warmup2.arrayFront9([3,9,2,3,3])).toEqual(true);
});

test('stringMatch should return 3 when given ("xxcaazz", "xxbaaz")', () => {
  expect(warmup2.stringMatch("xxcaazz", "xxbaaz")).toEqual(3);
});

test('stringMatch should return 2 when given ("abc", "abc")', () => {
  expect(warmup2.stringMatch("abc", "abc")).toEqual(2);
});

test('stringMatch should return 0 when given ("abc", "axc")', () => {
  expect(warmup2.stringMatch("abc", "axc")).toEqual(0);
});

test('stringMatch should return 1 when given ("hello", "he")', () => {
  expect(warmup2.stringMatch("hello", "he")).toEqual(1);
});

test('stringMatch should return 1 when given ("he", "hello")', () => {
  expect(warmup2.stringMatch("he", "hello")).toEqual(1);
});

test('stringMatch should return 0 when given ("", "hello")', () => {
  expect(warmup2.stringMatch("", "hello")).toEqual(0);
});

test('stringMatch should return 1 when given ("aabbccdd", "abbbxxd")', () => {
  expect(warmup2.stringMatch("aabbccdd", "abbbxxd")).toEqual(1);
});

test('stringMatch should return 3 when given ("aaxxaaxx", "iaxxai")', () => {
  expect(warmup2.stringMatch("aaxxaaxx", "iaxxai")).toEqual(3);
});

test('stringMatch should return 3 when given ("iaxxai", "aaxxaaxx")', () => {
  expect(warmup2.stringMatch("iaxxai", "aaxxaaxx")).toEqual(3);
});

test('stringX should return "xHix" when given "xxHxix"', () => {
  expect(warmup2.stringX("xxHxix")).toEqual("xHix");
});

test('stringX should return "abcd" when given "abxxxcd"', () => {
  expect(warmup2.stringX("abxxxcd")).toEqual("abcd");
});

test('stringX should return "xabcdx" when given "xabxxxcdx"', () => {
  expect(warmup2.stringX("xabxxxcdx")).toEqual("xabcdx");
});

test('stringX should return "xKittenx" when given "xKittenx"', () => {
  expect(warmup2.stringX("xKittenx")).toEqual("xKittenx");
});

test('stringX should return "Hello" when given "Hello"', () => {
  expect(warmup2.stringX("Hello")).toEqual("Hello");
});

test('stringX should return "xx" when given "xx"', () => {
  expect(warmup2.stringX("xx")).toEqual("xx");
});

test('stringX should return "xx" when given "x"', () => {
  expect(warmup2.stringX("x")).toEqual("xx");
});

test('stringX should return "" when given ""', () => {
  expect(warmup2.stringX("")).toEqual("");
});

test('altPairs should return "kien" when given "kitten"', () => {
  expect(warmup2.altPairs("kitten")).toEqual("kien");
});

test('altPairs should return "Chole" when given "Chocolate"', () => {
  expect(warmup2.altPairs("Chocolate")).toEqual("Chole");
});

test('altPairs should return "Congrr" when given "CodingHorror"', () => {
  expect(warmup2.altPairs("CodingHorror")).toEqual("Congrr");
});

test('altPairs should return "ya" when given "yak"', () => {
  expect(warmup2.altPairs("yak")).toEqual("ya");
});

test('altPairs should return "ya" when given "ya"', () => {
  expect(warmup2.altPairs("ya")).toEqual("ya");
});

test('altPairs should return "y" when given "y"', () => {
  expect(warmup2.altPairs("y")).toEqual("y");
});

test('altPairs should return "" when given ""', () => {
  expect(warmup2.altPairs("")).toEqual("");
});

test('altPairs should return "ThThThth" when given "ThisThatTheOther"', () => {
  expect(warmup2.altPairs("ThisThatTheOther")).toEqual("ThThThth");
});

test('stringYak should return "pak" when given "yakpak"', () => {
  expect(warmup2.stringYak("yakpak")).toEqual("pak");
});

test('stringYak should return "pak" when given "pakyak"', () => {
  expect(warmup2.stringYak("pakyak")).toEqual("pak");
});

test('stringYak should return "123ya" when given "yak123ya"', () => {
  expect(warmup2.stringYak("yak123ya")).toEqual("123ya");
});

test('stringYak should return "" when given "yak"', () => {
  expect(warmup2.stringYak("yak")).toEqual("");
});

test('stringYak should return "xxx" when given "yakxxxyak"', () => {
  expect(warmup2.stringYak("yakxxxyak")).toEqual("xxx");
});

test('stringYak should return "xxcaazz" when given ("xxcaazz", "hiyakHi")', () => {
  expect(warmup2.stringYak("xxcaazz", "hiyakHi")).toEqual("xxcaazz");
});

test('stringYak should return "xxxyyzzz" when given "xxxyakyyyakzzz"', () => {
  expect(warmup2.stringYak("xxxyakyyyakzzz")).toEqual("xxxyyzzz");
});

test('array667 should return 1 when given [6,6,2]', () => {
  expect(warmup2.array667([6,6,2])).toEqual(1);
});

test('array667 should return 1 when given [6,6,2,6]', () => {
  expect(warmup2.array667([6,6,2,6])).toEqual(1);
});

test('array667 should return 1 when given [6,7,2,6]', () => {
  expect(warmup2.array667([6,7,2,6])).toEqual(1);
});

test('array667 should return 2 when given [6,6,2,7,6,7]', () => {
  expect(warmup2.array667([6,6,2,7,6,7])).toEqual(2);
});

test('array667 should return 0 when given [1,6,3]', () => {
  expect(warmup2.array667([1,6,3])).toEqual(0);
});

test('array667 should return 0 when given [6,1]', () => {
  expect(warmup2.array667([6,1])).toEqual(0);
});

test('array667 should return 0 when given []', () => {
  expect(warmup2.array667([])).toEqual(0);
});

test('array667 should return 1 when given [3,6,7,6]', () => {
  expect(warmup2.array667([3,6,7,6])).toEqual(1);
});

test('array667 should return 2 when given [3,6,6,7]', () => {
  expect(warmup2.array667([3,6,6,7])).toEqual(2);
});

test('array667 should return 1 when given [6,3,6,6]', () => {
  expect(warmup2.array667([6,3,6,6])).toEqual(1);
});

test('array667 should return 2 when given [6,7,6,6]', () => {
  expect(warmup2.array667([6,7,6,6])).toEqual(2);
});

test('array667 should return 0 when given [1,2,3,5,6]', () => {
  expect(warmup2.array667([1,2,3,5,6])).toEqual(0);
});

test('array667 should return 1 when given [1,2,3,6,6]', () => {
  expect(warmup2.array667([1,2,3,6,6])).toEqual(1);
});

test('noTriples should return true when given [1,1,2,2,1]', () => {
  expect(warmup2.noTriples([1,1,2,2,1])).toEqual(true);
});

test('noTriples should return false when given [1,1,2,2,2,1]', () => {
  expect(warmup2.noTriples([1,1,2,2,2,1])).toEqual(false);
});

test('noTriples should return false when given [1,1,2,2,2,1]', () => {
  expect(warmup2.noTriples([1,1,2,2,2,1])).toEqual(false);
});

test('noTriples should return true when given [1,2,1]', () => {
  expect(warmup2.noTriples([1,2,1])).toEqual(true);
});

test('noTriples should return false when given [1,1,1]', () => {
  expect(warmup2.noTriples([1,1,1])).toEqual(false);
});

test('noTriples should return true when given [1,1]', () => {
  expect(warmup2.noTriples([1,1])).toEqual(true);
});

test('noTriples should return true when given [1]', () => {
  expect(warmup2.noTriples([1])).toEqual(true);
});

test('noTriples should return true when given [1]', () => {
  expect(warmup2.noTriples([1])).toEqual(true);
});

test('noTriples should return true when given []', () => {
  expect(warmup2.noTriples([])).toEqual(true);
});

test('has271 should return true when given [1,2,7,1]', () => {
  expect(warmup2.has271([1,2,7,1])).toEqual(true);
});

test('has271 should return false when given [1,2,8,1]', () => {
  expect(warmup2.has271([1,2,8,1])).toEqual(false);
});

test('has271 should return true when given [2,7,1]', () => {
  expect(warmup2.has271([2,7,1])).toEqual(true);
});

test('has271 should return false when given [3,8,2]', () => {
  expect(warmup2.has271([3,8,2])).toEqual(false);
});

test('has271 should return false when given [2,7,3]', () => {
  expect(warmup2.has271([2,7,3])).toEqual(false);
});

test('has271 should return false when given [2,7,4]', () => {
  expect(warmup2.has271([2,7,4])).toEqual(false);
});

test('has271 should return false when given [2,7,-1]', () => {
  expect(warmup2.has271([2,7,-1])).toEqual(false);
});

test('has271 should return false when given [2,7,-2]', () => {
  expect(warmup2.has271([2,7,-2])).toEqual(false);
});

test('has271 should return false when given [4,5,3,8,0]', () => {
  expect(warmup2.has271([4,5,3,8,0])).toEqual(false);
});

test('has271 should return false when given [2,7,5,10,4]', () => {
  expect(warmup2.has271([2,7,5,10,4])).toEqual(false);
});

test('has271 should return false when given [2,7,-2,4,9,3]', () => {
  expect(warmup2.has271([2,7,-2,4,9,3])).toEqual(false);
});

test('has271 should return false when given [2,7,5,10,1]', () => {
  expect(warmup2.has271([2,7,5,10,1])).toEqual(false);
});

test('has271 should return false when given [2,7,-2,10,2]', () => {
  expect(warmup2.has271([2,7,-2,10,2])).toEqual(false);
});
