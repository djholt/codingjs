const string2 = require('../string2');

test('doubleChar should return "TThhee" when given "The"', () => {
  expect(string2.doubleChar("The")).toEqual("TThhee");
});

test('doubleChar should return "AAAAbbbb" when given "AAbb"', () => {
  expect(string2.doubleChar("AAbb")).toEqual("AAAAbbbb");
});

test('doubleChar should return "HHii--TThheerree" when given "Hi-There"', () => {
  expect(string2.doubleChar("Hi-There")).toEqual("HHii--TThheerree");
});

test('doubleChar should return "WWoorrdd!!" when given "Word!"', () => {
  expect(string2.doubleChar("Word!")).toEqual("WWoorrdd!!");
});

test('doubleChar should return "!!!!" when given "!!"', () => {
  expect(string2.doubleChar("!!")).toEqual("!!!!");
});

test('doubleChar should return "" when given ""', () => {
  expect(string2.doubleChar("")).toEqual("");
});

test('doubleChar should return "aa" when given "a"', () => {
  expect(string2.doubleChar("a")).toEqual("aa");
});

test('doubleChar should return ".." when given "."', () => {
  expect(string2.doubleChar(".")).toEqual("..");
});

test('doubleChar should return "aaaa" when given "aa"', () => {
  expect(string2.doubleChar("aa")).toEqual("aaaa");
});

test('countHi should return 1 when given "abc hi ho"', () => {
  expect(string2.countHi("abc hi ho")).toEqual(1);
});

test('countHi should return 2 when given "ABChi hi"', () => {
  expect(string2.countHi("ABChi hi")).toEqual(2);
});

test('countHi should return 2 when given "hihi"', () => {
  expect(string2.countHi("hihi")).toEqual(2);
});

test('countHi should return 2 when given "hiHIhi"', () => {
  expect(string2.countHi("hiHIhi")).toEqual(2);
});

test('countHi should return 0 when given ""', () => {
  expect(string2.countHi("")).toEqual(0);
});

test('countHi should return 0 when given "h"', () => {
  expect(string2.countHi("h")).toEqual(0);
});

test('countHi should return 1 when given "hi"', () => {
  expect(string2.countHi("hi")).toEqual(1);
});

test('countHi should return 0 when given "Hi is no HI on ahI"', () => {
  expect(string2.countHi("Hi is no HI on ahI")).toEqual(0);
});

test('countHi should return 2 when given "hiho not HOHIhi"', () => {
  expect(string2.countHi("hiho not HOHIhi")).toEqual(2);
});

test('catDog should return true when given "catdog"', () => {
  expect(string2.catDog("catdog")).toEqual(true);
});

test('catDog should return false when given "catcat"', () => {
  expect(string2.catDog("catcat")).toEqual(false);
});

test('catDog should return true when given "1cat1cadodog"', () => {
  expect(string2.catDog("1cat1cadodog")).toEqual(true);
});

test('catDog should return false when given "catxxdogxxxdog"', () => {
  expect(string2.catDog("catxxdogxxxdog")).toEqual(false);
});

test('catDog should return true when given "catxdogxdogxcat"', () => {
  expect(string2.catDog("catxdogxdogxcat")).toEqual(true);
});

test('catDog should return false when given "catxdogxdogxca"', () => {
  expect(string2.catDog("catxdogxdogxca")).toEqual(false);
});

test('catDog should return false when given "dogdogcat"', () => {
  expect(string2.catDog("dogdogcat")).toEqual(false);
});

test('catDog should return true when given "dogogcat"', () => {
  expect(string2.catDog("dogogcat")).toEqual(true);
});

test('catDog should return false when given "dog"', () => {
  expect(string2.catDog("dog")).toEqual(false);
});

test('catDog should return false when given "cat"', () => {
  expect(string2.catDog("cat")).toEqual(false);
});

test('catDog should return true when given "ca"', () => {
  expect(string2.catDog("ca")).toEqual(true);
});

test('catDog should return true when given "c"', () => {
  expect(string2.catDog("c")).toEqual(true);
});

test('catDog should return true when given ""', () => {
  expect(string2.catDog("")).toEqual(true);
});

test('countCode should return 1 when given "aaacodebbb"', () => {
  expect(string2.countCode("aaacodebbb")).toEqual(1);
});

test('countCode should return 2 when given "codexxcode"', () => {
  expect(string2.countCode("codexxcode")).toEqual(2);
});

test('countCode should return 2 when given "cozexxcope"', () => {
  expect(string2.countCode("cozexxcope")).toEqual(2);
});

test('countCode should return 1 when given "cozfxxcope"', () => {
  expect(string2.countCode("cozfxxcope")).toEqual(1);
});

test('countCode should return 1 when given "xxcozeyycop"', () => {
  expect(string2.countCode("xxcozeyycop")).toEqual(1);
});

test('countCode should return 0 when given "cozcop"', () => {
  expect(string2.countCode("cozcop")).toEqual(0);
});

test('countCode should return 0 when given "abcxyz"', () => {
  expect(string2.countCode("abcxyz")).toEqual(0);
});

test('countCode should return 1 when given "code"', () => {
  expect(string2.countCode("code")).toEqual(1);
});

test('countCode should return 0 when given "ode"', () => {
  expect(string2.countCode("ode")).toEqual(0);
});

test('countCode should return 0 when given "c"', () => {
  expect(string2.countCode("c")).toEqual(0);
});

test('countCode should return 0 when given ""', () => {
  expect(string2.countCode("")).toEqual(0);
});

test('countCode should return 3 when given "AAcodeBBcoleCCccoreDD"', () => {
  expect(string2.countCode("AAcodeBBcoleCCccoreDD")).toEqual(3);
});

test('countCode should return 2 when given "AAcodeBBcoleCCccorfDD"', () => {
  expect(string2.countCode("AAcodeBBcoleCCccorfDD")).toEqual(2);
});

test('countCode should return 3 when given "coAcodeBcoleccoreDD"', () => {
  expect(string2.countCode("coAcodeBcoleccoreDD")).toEqual(3);
});

test('endOther should return true when given ("Hiabc", "abc")', () => {
  expect(string2.endOther("Hiabc", "abc")).toEqual(true);
});

test('endOther should return true when given ("AbC", "HiaBc")', () => {
  expect(string2.endOther("AbC", "HiaBc")).toEqual(true);
});

test('endOther should return true when given ("abc", "abXabc")', () => {
  expect(string2.endOther("abc", "abXabc")).toEqual(true);
});

test('endOther should return false when given ("Hiabc", "abcd")', () => {
  expect(string2.endOther("Hiabc", "abcd")).toEqual(false);
});

test('endOther should return true when given ("Hiabc", "bc")', () => {
  expect(string2.endOther("Hiabc", "bc")).toEqual(true);
});

test('endOther should return false when given ("Hiabcx", "bc")', () => {
  expect(string2.endOther("Hiabcx", "bc")).toEqual(false);
});

test('endOther should return true when given ("abc", "abc")', () => {
  expect(string2.endOther("abc", "abc")).toEqual(true);
});

test('endOther should return true when given ("xyz", "12xyz")', () => {
  expect(string2.endOther("xyz", "12xyz")).toEqual(true);
});

test('endOther should return false when given ("yz", "12xz")', () => {
  expect(string2.endOther("yz", "12xz")).toEqual(false);
});

test('endOther should return true when given ("Z", "12xz")', () => {
  expect(string2.endOther("Z", "12xz")).toEqual(true);
});

test('endOther should return true when given ("12", "12")', () => {
  expect(string2.endOther("12", "12")).toEqual(true);
});

test('endOther should return false when given ("abcXYZ", "abcDEF")', () => {
  expect(string2.endOther("abcXYZ", "abcDEF")).toEqual(false);
});

test('endOther should return false when given ("ab", "ab12")', () => {
  expect(string2.endOther("ab", "ab12")).toEqual(false);
});

test('endOther should return true when given ("ab", "12ab")', () => {
  expect(string2.endOther("ab", "12ab")).toEqual(true);
});

test('xyzThere should return true when given "abcxyz"', () => {
  expect(string2.xyzThere("abcxyz")).toEqual(true);
});

test('xyzThere should return false when given "abc.xyz"', () => {
  expect(string2.xyzThere("abc.xyz")).toEqual(false);
});

test('xyzThere should return true when given "xyz.abc"', () => {
  expect(string2.xyzThere("xyz.abc")).toEqual(true);
});

test('xyzThere should return false when given "abcxy"', () => {
  expect(string2.xyzThere("abcxy")).toEqual(false);
});

test('xyzThere should return true when given "xyz"', () => {
  expect(string2.xyzThere("xyz")).toEqual(true);
});

test('xyzThere should return false when given "xy"', () => {
  expect(string2.xyzThere("xy")).toEqual(false);
});

test('xyzThere should return false when given "x"', () => {
  expect(string2.xyzThere("x")).toEqual(false);
});

test('xyzThere should return false when given ""', () => {
  expect(string2.xyzThere("")).toEqual(false);
});

test('xyzThere should return true when given "abc.xyzxyz"', () => {
  expect(string2.xyzThere("abc.xyzxyz")).toEqual(true);
});

test('xyzThere should return true when given "abc.xxyz"', () => {
  expect(string2.xyzThere("abc.xxyz")).toEqual(true);
});

test('xyzThere should return false when given ".xyz"', () => {
  expect(string2.xyzThere(".xyz")).toEqual(false);
});

test('xyzThere should return false when given "12.xyz"', () => {
  expect(string2.xyzThere("12.xyz")).toEqual(false);
});

test('xyzThere should return true when given "12xyz"', () => {
  expect(string2.xyzThere("12xyz")).toEqual(true);
});

test('xyzThere should return false when given "1.xyz.xyz2.xyz"', () => {
  expect(string2.xyzThere("1.xyz.xyz2.xyz")).toEqual(false);
});

test('bobThere should return true when given "abcbob"', () => {
  expect(string2.bobThere("abcbob")).toEqual(true);
});

test('bobThere should return true when given "b9b"', () => {
  expect(string2.bobThere("b9b")).toEqual(true);
});

test('bobThere should return false when given "bac"', () => {
  expect(string2.bobThere("bac")).toEqual(false);
});

test('bobThere should return true when given "bbb"', () => {
  expect(string2.bobThere("bbb")).toEqual(true);
});

test('bobThere should return false when given "abcdefb"', () => {
  expect(string2.bobThere("abcdefb")).toEqual(false);
});

test('bobThere should return true when given "123abcbcdbabxyz"', () => {
  expect(string2.bobThere("123abcbcdbabxyz")).toEqual(true);
});

test('bobThere should return false when given "b12"', () => {
  expect(string2.bobThere("b12")).toEqual(false);
});

test('bobThere should return true when given "b1b"', () => {
  expect(string2.bobThere("b1b")).toEqual(true);
});

test('bobThere should return true when given "b12b1b"', () => {
  expect(string2.bobThere("b12b1b")).toEqual(true);
});

test('bobThere should return false when given "bbc"', () => {
  expect(string2.bobThere("bbc")).toEqual(false);
});

test('bobThere should return true when given "bbb"', () => {
  expect(string2.bobThere("bbb")).toEqual(true);
});

test('bobThere should return false when given "bb"', () => {
  expect(string2.bobThere("bb")).toEqual(false);
});

test('bobThere should return false when given "b"', () => {
  expect(string2.bobThere("b")).toEqual(false);
});

test('xyBalance should return true when given "aaxbby"', () => {
  expect(string2.xyBalance("aaxbby")).toEqual(true);
});

test('xyBalance should return false when given "aaxbb"', () => {
  expect(string2.xyBalance("aaxbb")).toEqual(false);
});

test('xyBalance should return false when given "yaaxbb"', () => {
  expect(string2.xyBalance("yaaxbb")).toEqual(false);
});

test('xyBalance should return true when given "yaaxbby"', () => {
  expect(string2.xyBalance("yaaxbby")).toEqual(true);
});

test('xyBalance should return true when given "xaxxbby"', () => {
  expect(string2.xyBalance("xaxxbby")).toEqual(true);
});

test('xyBalance should return false when given "xaxxbbyx"', () => {
  expect(string2.xyBalance("xaxxbbyx")).toEqual(false);
});

test('xyBalance should return true when given "xxbxy"', () => {
  expect(string2.xyBalance("xxbxy")).toEqual(true);
});

test('xyBalance should return false when given "xxbx"', () => {
  expect(string2.xyBalance("xxbx")).toEqual(false);
});

test('xyBalance should return true when given "bbb"', () => {
  expect(string2.xyBalance("bbb")).toEqual(true);
});

test('xyBalance should return false when given "bxbb"', () => {
  expect(string2.xyBalance("bxbb")).toEqual(false);
});

test('xyBalance should return true when given "bxyb"', () => {
  expect(string2.xyBalance("bxyb")).toEqual(true);
});

test('xyBalance should return true when given "xy"', () => {
  expect(string2.xyBalance("xy")).toEqual(true);
});

test('xyBalance should return true when given "y"', () => {
  expect(string2.xyBalance("y")).toEqual(true);
});

test('xyBalance should return false when given "x"', () => {
  expect(string2.xyBalance("x")).toEqual(false);
});

test('xyBalance should return true when given ""', () => {
  expect(string2.xyBalance("")).toEqual(true);
});

test('xyBalance should return false when given "yxyxyxyx"', () => {
  expect(string2.xyBalance("yxyxyxyx")).toEqual(false);
});

test('xyBalance should return true when given "yxyxyxyxy"', () => {
  expect(string2.xyBalance("yxyxyxyxy")).toEqual(true);
});

test('xyBalance should return true when given "12xabxxydxyxyzz"', () => {
  expect(string2.xyBalance("12xabxxydxyxyzz")).toEqual(true);
});

test('mixString should return "axbycz" when given ("abc", "xyz")', () => {
  expect(string2.mixString("abc", "xyz")).toEqual("axbycz");
});

test('mixString should return "HTihere" when given ("Hi", "There")', () => {
  expect(string2.mixString("Hi", "There")).toEqual("HTihere");
});

test('mixString should return "xTxhxexre" when given ("xxxx", "There")', () => {
  expect(string2.mixString("xxxx", "There")).toEqual("xTxhxexre");
});

test('mixString should return "xXxx" when given ("xxx", "X")', () => {
  expect(string2.mixString("xxx", "X")).toEqual("xXxx");
});

test('mixString should return "22/7 around" when given ("2/", "27 around")', () => {
  expect(string2.mixString("2/", "27 around")).toEqual("22/7 around");
});

test('mixString should return "Hello" when given ("", "Hello")', () => {
  expect(string2.mixString("", "Hello")).toEqual("Hello");
});

test('mixString should return "Abc" when given ("Abc", "")', () => {
  expect(string2.mixString("Abc", "")).toEqual("Abc");
});

test('mixString should return "" when given ("", "")', () => {
  expect(string2.mixString("", "")).toEqual("");
});

test('mixString should return "ab" when given ("a", "b")', () => {
  expect(string2.mixString("a", "b")).toEqual("ab");
});

test('mixString should return "abx" when given ("ax", "b")', () => {
  expect(string2.mixString("ax", "b")).toEqual("abx");
});

test('mixString should return "abx" when given ("a", "bx")', () => {
  expect(string2.mixString("a", "bx")).toEqual("abx");
});

test('mixString should return "SLoong" when given ("So", "Long")', () => {
  expect(string2.mixString("So", "Long")).toEqual("SLoong");
});

test('mixString should return "LSoong" when given ("Long", "So")', () => {
  expect(string2.mixString("Long", "So")).toEqual("LSoong");
});

test('repeatEnd should return "llollollo" when given ("Hello", 3)', () => {
  expect(string2.repeatEnd("Hello", 3)).toEqual("llollollo");
});

test('repeatEnd should return "lolo" when given ("Hello", 2)', () => {
  expect(string2.repeatEnd("Hello", 2)).toEqual("lolo");
});

test('repeatEnd should return "o" when given ("Hello", 1)', () => {
  expect(string2.repeatEnd("Hello", 1)).toEqual("o");
});

test('repeatEnd should return "" when given ("Hello", 0)', () => {
  expect(string2.repeatEnd("Hello", 0)).toEqual("");
});

test('repeatEnd should return "abcabcabc" when given ("abc", 3)', () => {
  expect(string2.repeatEnd("abc", 3)).toEqual("abcabcabc");
});

test('repeatEnd should return "3434" when given ("1234", 2)', () => {
  expect(string2.repeatEnd("1234", 2)).toEqual("3434");
});

test('repeatEnd should return "234234234" when given ("1234", 3)', () => {
  expect(string2.repeatEnd("1234", 3)).toEqual("234234234");
});

test('repeatEnd should return "" when given ("", 0)', () => {
  expect(string2.repeatEnd("", 0)).toEqual("");
});

test('repeatFront should return "ChocChoChC" when given ("Chocolate", 4)', () => {
  expect(string2.repeatFront("Chocolate", 4)).toEqual("ChocChoChC");
});

test('repeatFront should return "ChoChC" when given ("Chocolate", 3)', () => {
  expect(string2.repeatFront("Chocolate", 3)).toEqual("ChoChC");
});

test('repeatFront should return "IcI" when given ("Ice Cream", 2)', () => {
  expect(string2.repeatFront("Ice Cream", 2)).toEqual("IcI");
});

test('repeatFront should return "I" when given ("Ice Cream", 1)', () => {
  expect(string2.repeatFront("Ice Cream", 1)).toEqual("I");
});

test('repeatFront should return "" when given ("Ice Cream", 0)', () => {
  expect(string2.repeatFront("Ice Cream", 0)).toEqual("");
});

test('repeatFront should return "xyzxyx" when given ("xyz", 3)', () => {
  expect(string2.repeatFront("xyz", 3)).toEqual("xyzxyx");
});

test('repeatFront should return "" when given ("", 0)', () => {
  expect(string2.repeatFront("", 0)).toEqual("");
});

test('repeatFront should return "JavaJavJaJ" when given ("Java", 4)', () => {
  expect(string2.repeatFront("Java", 4)).toEqual("JavaJavJaJ");
});

test('repeatFront should return "J" when given ("Java", 1)', () => {
  expect(string2.repeatFront("Java", 1)).toEqual("J");
});

test('repeatSeparator should return "WordXWordXWord" when given ("Word", "X", 3)', () => {
  expect(string2.repeatSeparator("Word", "X", 3)).toEqual("WordXWordXWord");
});

test('repeatSeparator should return "ThisAndThis" when given ("This", "And", 2)', () => {
  expect(string2.repeatSeparator("This", "And", 2)).toEqual("ThisAndThis");
});

test('repeatSeparator should return "This" when given ("This", "And", 1)', () => {
  expect(string2.repeatSeparator("This", "And", 1)).toEqual("This");
});

test('repeatSeparator should return "Hi-n-Hi" when given ("Hi", "-n-", 2)', () => {
  expect(string2.repeatSeparator("Hi", "-n-", 2)).toEqual("Hi-n-Hi");
});

test('repeatSeparator should return "AAA" when given ("AAA", "", 1)', () => {
  expect(string2.repeatSeparator("AAA", "", 1)).toEqual("AAA");
});

test('repeatSeparator should return "" when given ("AAA", "", 0)', () => {
  expect(string2.repeatSeparator("AAA", "", 0)).toEqual("");
});

test('repeatSeparator should return "ABABABABA" when given ("A", "B", 5)', () => {
  expect(string2.repeatSeparator("A", "B", 5)).toEqual("ABABABABA");
});

test('repeatSeparator should return "abcXXabcXXabc" when given ("abc", "XX", 3)', () => {
  expect(string2.repeatSeparator("abc", "XX", 3)).toEqual("abcXXabcXXabc");
});

test('repeatSeparator should return "abcXXabc" when given ("abc", "XX", 2)', () => {
  expect(string2.repeatSeparator("abc", "XX", 2)).toEqual("abcXXabc");
});

test('repeatSeparator should return "abc" when given ("abc", "XX", 1)', () => {
  expect(string2.repeatSeparator("abc", "XX", 1)).toEqual("abc");
});

test('repeatSeparator should return "XYZaXYZ" when given ("XYZ", "a", 2)', () => {
  expect(string2.repeatSeparator("XYZ", "a", 2)).toEqual("XYZaXYZ");
});

test('prefixAgain should return true when given ("abXYabc", 1)', () => {
  expect(string2.prefixAgain("abXYabc", 1)).toEqual(true);
});

test('prefixAgain should return true when given ("abXYabc", 2)', () => {
  expect(string2.prefixAgain("abXYabc", 2)).toEqual(true);
});

test('prefixAgain should return false when given ("abXYabc", 3)', () => {
  expect(string2.prefixAgain("abXYabc", 3)).toEqual(false);
});

test('prefixAgain should return true when given ("xyzxyxyxy", 2)', () => {
  expect(string2.prefixAgain("xyzxyxyxy", 2)).toEqual(true);
});

test('prefixAgain should return false when given ("xyzxyxyxy", 3)', () => {
  expect(string2.prefixAgain("xyzxyxyxy", 3)).toEqual(false);
});

test('prefixAgain should return true when given ("Hi12345Hi6789Hi10", 1)', () => {
  expect(string2.prefixAgain("Hi12345Hi6789Hi10", 1)).toEqual(true);
});

test('prefixAgain should return true when given ("Hi12345Hi6789Hi10", 2)', () => {
  expect(string2.prefixAgain("Hi12345Hi6789Hi10", 2)).toEqual(true);
});

test('prefixAgain should return true when given ("Hi12345Hi6789Hi10", 3)', () => {
  expect(string2.prefixAgain("Hi12345Hi6789Hi10", 3)).toEqual(true);
});

test('prefixAgain should return false when given ("Hi12345Hi6789Hi10", 4)', () => {
  expect(string2.prefixAgain("Hi12345Hi6789Hi10", 4)).toEqual(false);
});

test('prefixAgain should return false when given ("a", 1)', () => {
  expect(string2.prefixAgain("a", 1)).toEqual(false);
});

test('prefixAgain should return true when given ("aa", 1)', () => {
  expect(string2.prefixAgain("aa", 1)).toEqual(true);
});

test('prefixAgain should return false when given ("ab", 1)', () => {
  expect(string2.prefixAgain("ab", 1)).toEqual(false);
});

test('xyzMiddle should return true when given "AAxyzBB"', () => {
  expect(string2.xyzMiddle("AAxyzBB")).toEqual(true);
});

test('xyzMiddle should return true when given "AxyzBB"', () => {
  expect(string2.xyzMiddle("AxyzBB")).toEqual(true);
});

test('xyzMiddle should return false when given "AxyzBBB"', () => {
  expect(string2.xyzMiddle("AxyzBBB")).toEqual(false);
});

test('xyzMiddle should return false when given "AxyzBBBB"', () => {
  expect(string2.xyzMiddle("AxyzBBBB")).toEqual(false);
});

test('xyzMiddle should return false when given "AAAxyzB"', () => {
  expect(string2.xyzMiddle("AAAxyzB")).toEqual(false);
});

test('xyzMiddle should return true when given "AAAxyzBB"', () => {
  expect(string2.xyzMiddle("AAAxyzBB")).toEqual(true);
});

test('xyzMiddle should return false when given "AAAAxyzBB"', () => {
  expect(string2.xyzMiddle("AAAAxyzBB")).toEqual(false);
});

test('xyzMiddle should return false when given "AAAAAxyzBBB"', () => {
  expect(string2.xyzMiddle("AAAAAxyzBBB")).toEqual(false);
});

test('xyzMiddle should return true when given "1x345xyz12x4"', () => {
  expect(string2.xyzMiddle("1x345xyz12x4")).toEqual(true);
});

test('xyzMiddle should return true when given "xyzAxyzBBB"', () => {
  expect(string2.xyzMiddle("xyzAxyzBBB")).toEqual(true);
});

test('xyzMiddle should return true when given "xyzAxyzBxyz"', () => {
  expect(string2.xyzMiddle("xyzAxyzBxyz")).toEqual(true);
});

test('xyzMiddle should return true when given "xyzxyzAxyzBxyzxyz"', () => {
  expect(string2.xyzMiddle("xyzxyzAxyzBxyzxyz")).toEqual(true);
});

test('xyzMiddle should return true when given "xyzxyzxyzBxyzxyz"', () => {
  expect(string2.xyzMiddle("xyzxyzxyzBxyzxyz")).toEqual(true);
});

test('xyzMiddle should return true when given "xyzxyzAxyzxyzxyz"', () => {
  expect(string2.xyzMiddle("xyzxyzAxyzxyzxyz")).toEqual(true);
});

test('xyzMiddle should return false when given "xyzxyzAxyzxyzxy"', () => {
  expect(string2.xyzMiddle("xyzxyzAxyzxyzxy")).toEqual(false);
});

test('xyzMiddle should return false when given "AxyzxyzBB"', () => {
  expect(string2.xyzMiddle("AxyzxyzBB")).toEqual(false);
});

test('xyzMiddle should return false when given ""', () => {
  expect(string2.xyzMiddle("")).toEqual(false);
});

test('xyzMiddle should return false when given "x"', () => {
  expect(string2.xyzMiddle("x")).toEqual(false);
});

test('xyzMiddle should return false when given "xy"', () => {
  expect(string2.xyzMiddle("xy")).toEqual(false);
});

test('xyzMiddle should return true when given "xyz"', () => {
  expect(string2.xyzMiddle("xyz")).toEqual(true);
});

test('xyzMiddle should return true when given "xyzz"', () => {
  expect(string2.xyzMiddle("xyzz")).toEqual(true);
});

test('getSandwich should return "jam" when given "breadjambread"', () => {
  expect(string2.getSandwich("breadjambread")).toEqual("jam");
});

test('getSandwich should return "jam" when given "xxbreadjambreadyy"', () => {
  expect(string2.getSandwich("xxbreadjambreadyy")).toEqual("jam");
});

test('getSandwich should return "" when given "xxbreadyy"', () => {
  expect(string2.getSandwich("xxbreadyy")).toEqual("");
});

test('getSandwich should return "breadjam" when given "xxbreadbreadjambreadyy"', () => {
  expect(string2.getSandwich("xxbreadbreadjambreadyy")).toEqual("breadjam");
});

test('getSandwich should return "A" when given "breadAbread"', () => {
  expect(string2.getSandwich("breadAbread")).toEqual("A");
});

test('getSandwich should return "" when given "breadbread"', () => {
  expect(string2.getSandwich("breadbread")).toEqual("");
});

test('getSandwich should return "" when given "abcbreaz"', () => {
  expect(string2.getSandwich("abcbreaz")).toEqual("");
});

test('getSandwich should return "" when given "xyz"', () => {
  expect(string2.getSandwich("xyz")).toEqual("");
});

test('getSandwich should return "" when given ""', () => {
  expect(string2.getSandwich("")).toEqual("");
});

test('getSandwich should return "breax" when given "breadbreaxbread"', () => {
  expect(string2.getSandwich("breadbreaxbread")).toEqual("breax");
});

test('getSandwich should return "y" when given "breaxbreadybread"', () => {
  expect(string2.getSandwich("breaxbreadybread")).toEqual("y");
});

test('getSandwich should return "breadbread" when given "breadbreadbreadbread"', () => {
  expect(string2.getSandwich("breadbreadbreadbread")).toEqual("breadbread");
});

test('sameStarChar should return true when given "xy*yzz"', () => {
  expect(string2.sameStarChar("xy*yzz")).toEqual(true);
});

test('sameStarChar should return false when given "xy*zzz"', () => {
  expect(string2.sameStarChar("xy*zzz")).toEqual(false);
});

test('sameStarChar should return true when given "*xa*az"', () => {
  expect(string2.sameStarChar("*xa*az")).toEqual(true);
});

test('sameStarChar should return false when given "*xa*bz"', () => {
  expect(string2.sameStarChar("*xa*bz")).toEqual(false);
});

test('sameStarChar should return true when given "*xa*a*"', () => {
  expect(string2.sameStarChar("*xa*a*")).toEqual(true);
});

test('sameStarChar should return true when given ""', () => {
  expect(string2.sameStarChar("")).toEqual(true);
});

test('sameStarChar should return true when given "*xa*a*a"', () => {
  expect(string2.sameStarChar("*xa*a*a")).toEqual(true);
});

test('sameStarChar should return false when given "*xa*a*b"', () => {
  expect(string2.sameStarChar("*xa*a*b")).toEqual(false);
});

test('sameStarChar should return true when given "*12*2*2"', () => {
  expect(string2.sameStarChar("*12*2*2")).toEqual(true);
});

test('sameStarChar should return false when given "12*2*3*"', () => {
  expect(string2.sameStarChar("12*2*3*")).toEqual(false);
});

test('sameStarChar should return true when given "abcDEF"', () => {
  expect(string2.sameStarChar("abcDEF")).toEqual(true);
});

test('sameStarChar should return false when given "XY*YYYY*Z*"', () => {
  expect(string2.sameStarChar("XY*YYYY*Z*")).toEqual(false);
});

test('sameStarChar should return true when given "XY*YYYY*Y*"', () => {
  expect(string2.sameStarChar("XY*YYYY*Y*")).toEqual(true);
});

test('sameStarChar should return false when given "12*2*3*"', () => {
  expect(string2.sameStarChar("12*2*3*")).toEqual(false);
});

test('sameStarChar should return true when given "*"', () => {
  expect(string2.sameStarChar("*")).toEqual(true);
});

test('sameStarChar should return true when given "**"', () => {
  expect(string2.sameStarChar("**")).toEqual(true);
});

test('oneTwo should return "bca" when given "abc"', () => {
  expect(string2.oneTwo("abc")).toEqual("bca");
});

test('oneTwo should return "cat" when given "tca"', () => {
  expect(string2.oneTwo("tca")).toEqual("cat");
});

test('oneTwo should return "catdog" when given "tcagdo"', () => {
  expect(string2.oneTwo("tcagdo")).toEqual("catdog");
});

test('oneTwo should return "hocolctea" when given "chocolate"', () => {
  expect(string2.oneTwo("chocolate")).toEqual("hocolctea");
});

test('oneTwo should return "231564897" when given "1234567890"', () => {
  expect(string2.oneTwo("1234567890")).toEqual("231564897");
});

test('oneTwo should return "abxabxabxabxabxabxabx" when given "xabxabxabxabxabxabxab"', () => {
  expect(string2.oneTwo("xabxabxabxabxabxabxab")).toEqual("abxabxabxabxabxabxabx");
});

test('oneTwo should return "bcaefd" when given "abcdefx"', () => {
  expect(string2.oneTwo("abcdefx")).toEqual("bcaefd");
});

test('oneTwo should return "bcaefd" when given "abcdefxy"', () => {
  expect(string2.oneTwo("abcdefxy")).toEqual("bcaefd");
});

test('oneTwo should return "bcaefdyzx" when given "abcdefxyz"', () => {
  expect(string2.oneTwo("abcdefxyz")).toEqual("bcaefdyzx");
});

test('oneTwo should return "" when given ""', () => {
  expect(string2.oneTwo("")).toEqual("");
});

test('oneTwo should return "" when given "x"', () => {
  expect(string2.oneTwo("x")).toEqual("");
});

test('oneTwo should return "" when given "xy"', () => {
  expect(string2.oneTwo("xy")).toEqual("");
});

test('oneTwo should return "yzx" when given "xyz"', () => {
  expect(string2.oneTwo("xyz")).toEqual("yzx");
});

test('oneTwo should return "bcaefdhigkljmnkpqostrvwuyzx231564897" when given "abcdefghijklkmnopqrstuvwxyz1234567890"', () => {
  expect(string2.oneTwo("abcdefghijklkmnopqrstuvwxyz1234567890")).toEqual("bcaefdhigkljmnkpqostrvwuyzx231564897");
});

test('oneTwo should return "bcaefdhigkljmnkpqostrvwuyzx231564897" when given "abcdefghijklkmnopqrstuvwxyz123456789"', () => {
  expect(string2.oneTwo("abcdefghijklkmnopqrstuvwxyz123456789")).toEqual("bcaefdhigkljmnkpqostrvwuyzx231564897");
});

test('oneTwo should return "bcaefdhigkljmnkpqostrvwuyzx231564" when given "abcdefghijklkmnopqrstuvwxyz12345678"', () => {
  expect(string2.oneTwo("abcdefghijklkmnopqrstuvwxyz12345678")).toEqual("bcaefdhigkljmnkpqostrvwuyzx231564");
});

test('zipZap should return "zpXzp" when given "zipXzap"', () => {
  expect(string2.zipZap("zipXzap")).toEqual("zpXzp");
});

test('zipZap should return "zpzp" when given "zopzop"', () => {
  expect(string2.zipZap("zopzop")).toEqual("zpzp");
});

test('zipZap should return "zzzpzp" when given "zzzopzop"', () => {
  expect(string2.zipZap("zzzopzop")).toEqual("zzzpzp");
});

test('zipZap should return "zibzp" when given "zibzap"', () => {
  expect(string2.zipZap("zibzap")).toEqual("zibzp");
});

test('zipZap should return "zp" when given "zip"', () => {
  expect(string2.zipZap("zip")).toEqual("zp");
});

test('zipZap should return "zi" when given "zi"', () => {
  expect(string2.zipZap("zi")).toEqual("zi");
});

test('zipZap should return "z" when given "z"', () => {
  expect(string2.zipZap("z")).toEqual("z");
});

test('zipZap should return "" when given ""', () => {
  expect(string2.zipZap("")).toEqual("");
});

test('zipZap should return "zp" when given "zzp"', () => {
  expect(string2.zipZap("zzp")).toEqual("zp");
});

test('zipZap should return "abcppp" when given "abcppp"', () => {
  expect(string2.zipZap("abcppp")).toEqual("abcppp");
});

test('zipZap should return "azbcppp" when given "azbcppp"', () => {
  expect(string2.zipZap("azbcppp")).toEqual("azbcppp");
});

test('zipZap should return "azbcpzp" when given "azbcpzpp"', () => {
  expect(string2.zipZap("azbcpzpp")).toEqual("azbcpzp");
});

test('starOut should return "ad" when given "ab*cd"', () => {
  expect(string2.starOut("ab*cd")).toEqual("ad");
});

test('starOut should return "ad" when given "ab**cd"', () => {
  expect(string2.starOut("ab**cd")).toEqual("ad");
});

test('starOut should return "silly" when given "sm*eilly"', () => {
  expect(string2.starOut("sm*eilly")).toEqual("silly");
});

test('starOut should return "siy" when given "sm*eil*ly"', () => {
  expect(string2.starOut("sm*eil*ly")).toEqual("siy");
});

test('starOut should return "siy" when given "sm**eil*ly"', () => {
  expect(string2.starOut("sm**eil*ly")).toEqual("siy");
});

test('starOut should return "siy" when given "sm***eil*ly"', () => {
  expect(string2.starOut("sm***eil*ly")).toEqual("siy");
});

test('starOut should return "string" when given "stringy*"', () => {
  expect(string2.starOut("stringy*")).toEqual("string");
});

test('starOut should return "tringy" when given "*stringy"', () => {
  expect(string2.starOut("*stringy")).toEqual("tringy");
});

test('starOut should return "ty" when given "*str*in*gy"', () => {
  expect(string2.starOut("*str*in*gy")).toEqual("ty");
});

test('starOut should return "abc" when given "abc"', () => {
  expect(string2.starOut("abc")).toEqual("abc");
});

test('starOut should return "c" when given "a*bc"', () => {
  expect(string2.starOut("a*bc")).toEqual("c");
});

test('starOut should return "ab" when given "ab"', () => {
  expect(string2.starOut("ab")).toEqual("ab");
});

test('starOut should return "" when given "a*b"', () => {
  expect(string2.starOut("a*b")).toEqual("");
});

test('starOut should return "a" when given "a"', () => {
  expect(string2.starOut("a")).toEqual("a");
});

test('starOut should return "" when given "a*"', () => {
  expect(string2.starOut("a*")).toEqual("");
});

test('starOut should return "" when given "*a"', () => {
  expect(string2.starOut("*a")).toEqual("");
});

test('starOut should return "" when given "*"', () => {
  expect(string2.starOut("*")).toEqual("");
});

test('starOut should return "" when given ""', () => {
  expect(string2.starOut("")).toEqual("");
});

test('plusOut should return "++xy++" when given ("12xy34", "xy")', () => {
  expect(string2.plusOut("12xy34", "xy")).toEqual("++xy++");
});

test('plusOut should return "1+++++" when given ("12xy34", "1")', () => {
  expect(string2.plusOut("12xy34", "1")).toEqual("1+++++");
});

test('plusOut should return "++xy++xy+++xy" when given ("12xy34xyabcxy", "xy")', () => {
  expect(string2.plusOut("12xy34xyabcxy", "xy")).toEqual("++xy++xy+++xy");
});

test('plusOut should return "ab++ab++++" when given ("abXYabcXYZ", "ab")', () => {
  expect(string2.plusOut("abXYabcXYZ", "ab")).toEqual("ab++ab++++");
});

test('plusOut should return "++++abc+++" when given ("abXYabcXYZ", "abc")', () => {
  expect(string2.plusOut("abXYabcXYZ", "abc")).toEqual("++++abc+++");
});

test('plusOut should return "++XY+++XY+" when given ("abXYabcXYZ", "XY")', () => {
  expect(string2.plusOut("abXYabcXYZ", "XY")).toEqual("++XY+++XY+");
});

test('plusOut should return "+++++++XYZ" when given ("abXYxyzXYZ", "XYZ")', () => {
  expect(string2.plusOut("abXYxyzXYZ", "XYZ")).toEqual("+++++++XYZ");
});

test('plusOut should return "++++++" when given ("--++ab", "++")', () => {
  expect(string2.plusOut("--++ab", "++")).toEqual("++++++");
});

test('plusOut should return "++xxxx++" when given ("aaxxxxbb", "xx")', () => {
  expect(string2.plusOut("aaxxxxbb", "xx")).toEqual("++xxxx++");
});

test('plusOut should return "++3++3" when given ("123123", "3")', () => {
  expect(string2.plusOut("123123", "3")).toEqual("++3++3");
});

test('wordEnds should return "c13i" when given ("abcXY123XYijk", "XY")', () => {
  expect(string2.wordEnds("abcXY123XYijk", "XY")).toEqual("c13i");
});

test('wordEnds should return "13" when given ("XY123XY", "XY")', () => {
  expect(string2.wordEnds("XY123XY", "XY")).toEqual("13");
});

test('wordEnds should return "11" when given ("XY1XY", "XY")', () => {
  expect(string2.wordEnds("XY1XY", "XY")).toEqual("11");
});

test('wordEnds should return "XY" when given ("XYXY", "XY")', () => {
  expect(string2.wordEnds("XYXY", "XY")).toEqual("XY");
});

test('wordEnds should return "" when given ("XY", "XY")', () => {
  expect(string2.wordEnds("XY", "XY")).toEqual("");
});

test('wordEnds should return "" when given ("Hi", "XY")', () => {
  expect(string2.wordEnds("Hi", "XY")).toEqual("");
});

test('wordEnds should return "" when given ("", "XY")', () => {
  expect(string2.wordEnds("", "XY")).toEqual("");
});

test('wordEnds should return "cxziij" when given ("abc1xyz1i1j", "1")', () => {
  expect(string2.wordEnds("abc1xyz1i1j", "1")).toEqual("cxziij");
});

test('wordEnds should return "cxz" when given ("abc1xyz1", "1")', () => {
  expect(string2.wordEnds("abc1xyz1", "1")).toEqual("cxz");
});

test('wordEnds should return "cxz11" when given ("abc1xyz11", "1")', () => {
  expect(string2.wordEnds("abc1xyz11", "1")).toEqual("cxz11");
});

test('wordEnds should return "11" when given ("abc1xyz1abc", "abc")', () => {
  expect(string2.wordEnds("abc1xyz1abc", "abc")).toEqual("11");
});

test('wordEnds should return "acac" when given ("abc1xyz1abc", "b")', () => {
  expect(string2.wordEnds("abc1xyz1abc", "b")).toEqual("acac");
});

test('wordEnds should return "1111" when given ("abc1abc1abc", "abc")', () => {
  expect(string2.wordEnds("abc1abc1abc", "abc")).toEqual("1111");
});
