const string3 = require('../string3');

test('countYZ should return 2 when given "fez day"', () => {
  expect(string3.countYZ("fez day")).toEqual(2);
});

test('countYZ should return 2 when given "day fez"', () => {
  expect(string3.countYZ("day fez")).toEqual(2);
});

test('countYZ should return 2 when given "day fyyyz"', () => {
  expect(string3.countYZ("day fyyyz")).toEqual(2);
});

test('countYZ should return 1 when given "day yak"', () => {
  expect(string3.countYZ("day yak")).toEqual(1);
});

test('countYZ should return 1 when given "day:yak"', () => {
  expect(string3.countYZ("day:yak")).toEqual(1);
});

test('countYZ should return 2 when given "!!day--yaz!!"', () => {
  expect(string3.countYZ("!!day--yaz!!")).toEqual(2);
});

test('countYZ should return 0 when given "yak zak"', () => {
  expect(string3.countYZ("yak zak")).toEqual(0);
});

test('countYZ should return 2 when given "DAY abc XYZ"', () => {
  expect(string3.countYZ("DAY abc XYZ")).toEqual(2);
});

test('countYZ should return 3 when given "aaz yyz my"', () => {
  expect(string3.countYZ("aaz yyz my")).toEqual(3);
});

test('countYZ should return 2 when given "y2bz"', () => {
  expect(string3.countYZ("y2bz")).toEqual(2);
});

test('countYZ should return 0 when given "zxyx"', () => {
  expect(string3.countYZ("zxyx")).toEqual(0);
});

test('withoutString should return "He there" when given ("Hello there", "llo")', () => {
  expect(string3.withoutString("Hello there", "llo")).toEqual("He there");
});

test('withoutString should return "Hllo thr" when given ("Hello there", "e")', () => {
  expect(string3.withoutString("Hello there", "e")).toEqual("Hllo thr");
});

test('withoutString should return "Hello there" when given ("Hello there", "x")', () => {
  expect(string3.withoutString("Hello there", "x")).toEqual("Hello there");
});

test('withoutString should return "Th a FH" when given ("This is a FISH", "IS")', () => {
  expect(string3.withoutString("This is a FISH", "IS")).toEqual("Th a FH");
});

test('withoutString should return "TH a FH" when given ("THIS is a FISH", "is")', () => {
  expect(string3.withoutString("THIS is a FISH", "is")).toEqual("TH a FH");
});

test('withoutString should return "TH a FH" when given ("THIS is a FISH", "iS")', () => {
  expect(string3.withoutString("THIS is a FISH", "iS")).toEqual("TH a FH");
});

test('withoutString should return "abab" when given ("abxxxxab", "xx")', () => {
  expect(string3.withoutString("abxxxxab", "xx")).toEqual("abab");
});

test('withoutString should return "abxab" when given ("abxxxab", "xx")', () => {
  expect(string3.withoutString("abxxxab", "xx")).toEqual("abxab");
});

test('withoutString should return "abab" when given ("abxxxab", "x")', () => {
  expect(string3.withoutString("abxxxab", "x")).toEqual("abab");
});

test('withoutString should return "" when given ("xxx", "x")', () => {
  expect(string3.withoutString("xxx", "x")).toEqual("");
});

test('withoutString should return "x" when given ("xxx", "xx")', () => {
  expect(string3.withoutString("xxx", "xx")).toEqual("x");
});

test('withoutString should return "xzz" when given ("xyzzy", "Y")', () => {
  expect(string3.withoutString("xyzzy", "Y")).toEqual("xzz");
});

test('withoutString should return "" when given ("", "x")', () => {
  expect(string3.withoutString("", "x")).toEqual("");
});

test('withoutString should return "acac" when given ("abcabc", "b")', () => {
  expect(string3.withoutString("abcabc", "b")).toEqual("acac");
});

test('withoutString should return "AAbb" when given ("AA22bb", "2")', () => {
  expect(string3.withoutString("AA22bb", "2")).toEqual("AAbb");
});

test('withoutString should return "" when given ("1111", "1")', () => {
  expect(string3.withoutString("1111", "1")).toEqual("");
});

test('withoutString should return "" when given ("1111", "11")', () => {
  expect(string3.withoutString("1111", "11")).toEqual("");
});

test('withoutString should return "jtx" when given ("MkjtMkx", "Mk")', () => {
  expect(string3.withoutString("MkjtMkx", "Mk")).toEqual("jtx");
});

test('withoutString should return "Hi " when given ("Hi HoHo", "Ho")', () => {
  expect(string3.withoutString("Hi HoHo", "Ho")).toEqual("Hi ");
});

test('equalIsNot should return false when given "This is not"', () => {
  expect(string3.equalIsNot("This is not")).toEqual(false);
});

test('equalIsNot should return true when given "This is notnot"', () => {
  expect(string3.equalIsNot("This is notnot")).toEqual(true);
});

test('equalIsNot should return true when given "noisxxnotyynotxisi"', () => {
  expect(string3.equalIsNot("noisxxnotyynotxisi")).toEqual(true);
});

test('equalIsNot should return false when given "noisxxnotyynotxsi"', () => {
  expect(string3.equalIsNot("noisxxnotyynotxsi")).toEqual(false);
});

test('equalIsNot should return true when given "xxxyyyzzzintint"', () => {
  expect(string3.equalIsNot("xxxyyyzzzintint")).toEqual(true);
});

test('equalIsNot should return true when given ""', () => {
  expect(string3.equalIsNot("")).toEqual(true);
});

test('equalIsNot should return true when given "isisnotnot"', () => {
  expect(string3.equalIsNot("isisnotnot")).toEqual(true);
});

test('equalIsNot should return false when given "isisnotno7Not"', () => {
  expect(string3.equalIsNot("isisnotno7Not")).toEqual(false);
});

test('equalIsNot should return false when given "isnotis"', () => {
  expect(string3.equalIsNot("isnotis")).toEqual(false);
});

test('equalIsNot should return false when given "mis3notpotbotis"', () => {
  expect(string3.equalIsNot("mis3notpotbotis")).toEqual(false);
});

test('gHappy should return true when given "xxggxx"', () => {
  expect(string3.gHappy("xxggxx")).toEqual(true);
});

test('gHappy should return false when given "xxgxx"', () => {
  expect(string3.gHappy("xxgxx")).toEqual(false);
});

test('gHappy should return false when given "xxggyygxx"', () => {
  expect(string3.gHappy("xxggyygxx")).toEqual(false);
});

test('gHappy should return false when given "g"', () => {
  expect(string3.gHappy("g")).toEqual(false);
});

test('gHappy should return true when given "gg"', () => {
  expect(string3.gHappy("gg")).toEqual(true);
});

test('gHappy should return true when given ""', () => {
  expect(string3.gHappy("")).toEqual(true);
});

test('gHappy should return true when given "xxgggxyz"', () => {
  expect(string3.gHappy("xxgggxyz")).toEqual(true);
});

test('gHappy should return false when given "xxgggxyg"', () => {
  expect(string3.gHappy("xxgggxyg")).toEqual(false);
});

test('gHappy should return true when given "xxgggxygg"', () => {
  expect(string3.gHappy("xxgggxygg")).toEqual(true);
});

test('gHappy should return false when given "mgm"', () => {
  expect(string3.gHappy("mgm")).toEqual(false);
});

test('gHappy should return true when given "mggm"', () => {
  expect(string3.gHappy("mggm")).toEqual(true);
});

test('gHappy should return true when given "yyygggxyy"', () => {
  expect(string3.gHappy("yyygggxyy")).toEqual(true);
});

test('countTriple should return 1 when given "abcXXXabc"', () => {
  expect(string3.countTriple("abcXXXabc")).toEqual(1);
});

test('countTriple should return 3 when given "xxxabyyyycd"', () => {
  expect(string3.countTriple("xxxabyyyycd")).toEqual(3);
});

test('countTriple should return 0 when given "a"', () => {
  expect(string3.countTriple("a")).toEqual(0);
});

test('countTriple should return 0 when given ""', () => {
  expect(string3.countTriple("")).toEqual(0);
});

test('countTriple should return 1 when given "XXXabc"', () => {
  expect(string3.countTriple("XXXabc")).toEqual(1);
});

test('countTriple should return 2 when given "XXXXabc"', () => {
  expect(string3.countTriple("XXXXabc")).toEqual(2);
});

test('countTriple should return 3 when given "XXXXXabc"', () => {
  expect(string3.countTriple("XXXXXabc")).toEqual(3);
});

test('countTriple should return 3 when given "222abyyycdXXX"', () => {
  expect(string3.countTriple("222abyyycdXXX")).toEqual(3);
});

test('countTriple should return 4 when given "abYYYabXXXXXab"', () => {
  expect(string3.countTriple("abYYYabXXXXXab")).toEqual(4);
});

test('countTriple should return 0 when given "abYYXabXXYXXab"', () => {
  expect(string3.countTriple("abYYXabXXYXXab")).toEqual(0);
});

test('countTriple should return 0 when given "abYYXabXXYXXab"', () => {
  expect(string3.countTriple("abYYXabXXYXXab")).toEqual(0);
});

test('countTriple should return 1 when given "122abhhh2"', () => {
  expect(string3.countTriple("122abhhh2")).toEqual(1);
});

test('sumDigits should return 6 when given "aa1bc2d3"', () => {
  expect(string3.sumDigits("aa1bc2d3")).toEqual(6);
});

test('sumDigits should return 8 when given "aa11b33"', () => {
  expect(string3.sumDigits("aa11b33")).toEqual(8);
});

test('sumDigits should return 0 when given "Chocolate"', () => {
  expect(string3.sumDigits("Chocolate")).toEqual(0);
});

test('sumDigits should return 7 when given "5hoco1a1e"', () => {
  expect(string3.sumDigits("5hoco1a1e")).toEqual(7);
});

test('sumDigits should return 12 when given "123abc123"', () => {
  expect(string3.sumDigits("123abc123")).toEqual(12);
});

test('sumDigits should return 0 when given ""', () => {
  expect(string3.sumDigits("")).toEqual(0);
});

test('sumDigits should return 0 when given "Hello"', () => {
  expect(string3.sumDigits("Hello")).toEqual(0);
});

test('sumDigits should return 12 when given "X1z9b2"', () => {
  expect(string3.sumDigits("X1z9b2")).toEqual(12);
});

test('sumDigits should return 14 when given "5432a"', () => {
  expect(string3.sumDigits("5432a")).toEqual(14);
});

test('sameEnds should return "ab" when given "abXYab"', () => {
  expect(string3.sameEnds("abXYab")).toEqual("ab");
});

test('sameEnds should return "x" when given "xx"', () => {
  expect(string3.sameEnds("xx")).toEqual("x");
});

test('sameEnds should return "x" when given "xxx"', () => {
  expect(string3.sameEnds("xxx")).toEqual("x");
});

test('sameEnds should return "xx" when given "xxxx"', () => {
  expect(string3.sameEnds("xxxx")).toEqual("xx");
});

test('sameEnds should return "java" when given "javaXYZjava"', () => {
  expect(string3.sameEnds("javaXYZjava")).toEqual("java");
});

test('sameEnds should return "java" when given "javajava"', () => {
  expect(string3.sameEnds("javajava")).toEqual("java");
});

test('sameEnds should return "" when given "xavaXYZjava"', () => {
  expect(string3.sameEnds("xavaXYZjava")).toEqual("");
});

test('sameEnds should return "Hello!" when given "Hello! and Hello!"', () => {
  expect(string3.sameEnds("Hello! and Hello!")).toEqual("Hello!");
});

test('sameEnds should return "" when given "x"', () => {
  expect(string3.sameEnds("x")).toEqual("");
});

test('sameEnds should return "" when given ""', () => {
  expect(string3.sameEnds("")).toEqual("");
});

test('sameEnds should return "" when given "abcb"', () => {
  expect(string3.sameEnds("abcb")).toEqual("");
});

test('sameEnds should return "my" when given "mymmy"', () => {
  expect(string3.sameEnds("mymmy")).toEqual("my");
});

test('mirrorEnds should return "ab" when given "abXYZba"', () => {
  expect(string3.mirrorEnds("abXYZba")).toEqual("ab");
});

test('mirrorEnds should return "a" when given "abca"', () => {
  expect(string3.mirrorEnds("abca")).toEqual("a");
});

test('mirrorEnds should return "aba" when given "aba"', () => {
  expect(string3.mirrorEnds("aba")).toEqual("aba");
});

test('mirrorEnds should return "" when given "abab"', () => {
  expect(string3.mirrorEnds("abab")).toEqual("");
});

test('mirrorEnds should return "xxx" when given "xxx"', () => {
  expect(string3.mirrorEnds("xxx")).toEqual("xxx");
});

test('mirrorEnds should return "xxYxx" when given "xxYxx"', () => {
  expect(string3.mirrorEnds("xxYxx")).toEqual("xxYxx");
});

test('mirrorEnds should return "Hi " when given "Hi and iH"', () => {
  expect(string3.mirrorEnds("Hi and iH")).toEqual("Hi ");
});

test('mirrorEnds should return "x" when given "x"', () => {
  expect(string3.mirrorEnds("x")).toEqual("x");
});

test('mirrorEnds should return "" when given ""', () => {
  expect(string3.mirrorEnds("")).toEqual("");
});

test('mirrorEnds should return "123" when given "123and then 321"', () => {
  expect(string3.mirrorEnds("123and then 321")).toEqual("123");
});

test('mirrorEnds should return "ba" when given "band andab"', () => {
  expect(string3.mirrorEnds("band andab")).toEqual("ba");
});

test('maxBlock should return 2 when given "hoopla"', () => {
  expect(string3.maxBlock("hoopla")).toEqual(2);
});

test('maxBlock should return 3 when given "abbCCCddBBBxx"', () => {
  expect(string3.maxBlock("abbCCCddBBBxx")).toEqual(3);
});

test('maxBlock should return 0 when given ""', () => {
  expect(string3.maxBlock("")).toEqual(0);
});

test('maxBlock should return 1 when given "xyz"', () => {
  expect(string3.maxBlock("xyz")).toEqual(1);
});

test('maxBlock should return 2 when given "xxyz"', () => {
  expect(string3.maxBlock("xxyz")).toEqual(2);
});

test('maxBlock should return 2 when given "xyzz"', () => {
  expect(string3.maxBlock("xyzz")).toEqual(2);
});

test('maxBlock should return 3 when given "abbbcbbbxbbbx"', () => {
  expect(string3.maxBlock("abbbcbbbxbbbx")).toEqual(3);
});

test('maxBlock should return 3 when given "XXBBBbbxx"', () => {
  expect(string3.maxBlock("XXBBBbbxx")).toEqual(3);
});

test('maxBlock should return 4 when given "XXBBBBbbxx"', () => {
  expect(string3.maxBlock("XXBBBBbbxx")).toEqual(4);
});

test('maxBlock should return 4 when given "XXBBBbbxxXXXX"', () => {
  expect(string3.maxBlock("XXBBBbbxxXXXX")).toEqual(4);
});

test('maxBlock should return 4 when given "XX2222BBBbbXX2222"', () => {
  expect(string3.maxBlock("XX2222BBBbbXX2222")).toEqual(4);
});

test('sumNumbers should return 123 when given "abc123xyz"', () => {
  expect(string3.sumNumbers("abc123xyz")).toEqual(123);
});

test('sumNumbers should return 44 when given "aa11b33"', () => {
  expect(string3.sumNumbers("aa11b33")).toEqual(44);
});

test('sumNumbers should return 18 when given "7 11"', () => {
  expect(string3.sumNumbers("7 11")).toEqual(18);
});

test('sumNumbers should return 0 when given "Chocolate"', () => {
  expect(string3.sumNumbers("Chocolate")).toEqual(0);
});

test('sumNumbers should return 7 when given "5hoco1a1e"', () => {
  expect(string3.sumNumbers("5hoco1a1e")).toEqual(7);
});

test('sumNumbers should return 7 when given "5$$1;;1!!"', () => {
  expect(string3.sumNumbers("5$$1;;1!!")).toEqual(7);
});

test('sumNumbers should return 1245 when given "a1234bb11"', () => {
  expect(string3.sumNumbers("a1234bb11")).toEqual(1245);
});

test('sumNumbers should return 0 when given ""', () => {
  expect(string3.sumNumbers("")).toEqual(0);
});

test('sumNumbers should return 25 when given "a22bbb3"', () => {
  expect(string3.sumNumbers("a22bbb3")).toEqual(25);
});

test('notReplace should return "is not test" when given "is test"', () => {
  expect(string3.notReplace("is test")).toEqual("is not test");
});

test('notReplace should return "is not-is not" when given "is-is"', () => {
  expect(string3.notReplace("is-is")).toEqual("is not-is not");
});

test('notReplace should return "This is not right" when given "This is right"', () => {
  expect(string3.notReplace("This is right")).toEqual("This is not right");
});

test('notReplace should return "This is not isabell" when given "This is isabell"', () => {
  expect(string3.notReplace("This is isabell")).toEqual("This is not isabell");
});

test('notReplace should return "" when given ""', () => {
  expect(string3.notReplace("")).toEqual("");
});

test('notReplace should return "is not" when given "is"', () => {
  expect(string3.notReplace("is")).toEqual("is not");
});

test('notReplace should return "isis" when given "isis"', () => {
  expect(string3.notReplace("isis")).toEqual("isis");
});

test('notReplace should return "Dis is not bliss is not" when given "Dis is bliss is"', () => {
  expect(string3.notReplace("Dis is bliss is")).toEqual("Dis is not bliss is not");
});

test('notReplace should return "is not his" when given "is his"', () => {
  expect(string3.notReplace("is his")).toEqual("is not his");
});

test('notReplace should return "xis yis" when given "xis yis"', () => {
  expect(string3.notReplace("xis yis")).toEqual("xis yis");
});

test('notReplace should return "AAAis is not" when given "AAAis is"', () => {
  expect(string3.notReplace("AAAis is")).toEqual("AAAis is not");
});
