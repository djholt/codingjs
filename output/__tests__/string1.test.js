const string1 = require('../string1');

test('helloName should return "Hello Bob!" when given "Bob"', () => {
  expect(string1.helloName("Bob")).toEqual("Hello Bob!");
});

test('helloName should return "Hello Alice!" when given "Alice"', () => {
  expect(string1.helloName("Alice")).toEqual("Hello Alice!");
});

test('helloName should return "Hello X!" when given "X"', () => {
  expect(string1.helloName("X")).toEqual("Hello X!");
});

test('helloName should return "Hello Dolly!" when given "Dolly"', () => {
  expect(string1.helloName("Dolly")).toEqual("Hello Dolly!");
});

test('helloName should return "Hello Alpha!" when given "Alpha"', () => {
  expect(string1.helloName("Alpha")).toEqual("Hello Alpha!");
});

test('helloName should return "Hello Omega!" when given "Omega"', () => {
  expect(string1.helloName("Omega")).toEqual("Hello Omega!");
});

test('helloName should return "Hello Goodbye!" when given "Goodbye"', () => {
  expect(string1.helloName("Goodbye")).toEqual("Hello Goodbye!");
});

test('helloName should return "Hello ho ho ho!" when given "ho ho ho"', () => {
  expect(string1.helloName("ho ho ho")).toEqual("Hello ho ho ho!");
});

test('helloName should return "Hello xyz!!" when given "xyz!"', () => {
  expect(string1.helloName("xyz!")).toEqual("Hello xyz!!");
});

test('helloName should return "Hello Hello!!" when given "Hello!"', () => {
  expect(string1.helloName("Hello!")).toEqual("Hello Hello!!");
});

test('makeAbba should return "HiByeByeHi" when given ("Hi", "Bye")', () => {
  expect(string1.makeAbba("Hi", "Bye")).toEqual("HiByeByeHi");
});

test('makeAbba should return "YoAliceAliceYo" when given ("Yo", "Alice")', () => {
  expect(string1.makeAbba("Yo", "Alice")).toEqual("YoAliceAliceYo");
});

test('makeAbba should return "WhatUpUpWhat" when given ("What", "Up")', () => {
  expect(string1.makeAbba("What", "Up")).toEqual("WhatUpUpWhat");
});

test('makeAbba should return "aaabbbbbbaaa" when given ("aaa", "bbb")', () => {
  expect(string1.makeAbba("aaa", "bbb")).toEqual("aaabbbbbbaaa");
});

test('makeAbba should return "xyyx" when given ("x", "y")', () => {
  expect(string1.makeAbba("x", "y")).toEqual("xyyx");
});

test('makeAbba should return "xx" when given ("x", "")', () => {
  expect(string1.makeAbba("x", "")).toEqual("xx");
});

test('makeAbba should return "baYaYaba" when given ("ba", "Ya")', () => {
  expect(string1.makeAbba("ba", "Ya")).toEqual("baYaYaba");
});

test('makeAbba should return "YaYaYaYa" when given ("Ya", "Ya")', () => {
  expect(string1.makeAbba("Ya", "Ya")).toEqual("YaYaYaYa");
});

test('makeTags should return "<i>Yay</i>" when given ("i", "Yay")', () => {
  expect(string1.makeTags("i", "Yay")).toEqual("<i>Yay</i>");
});

test('makeTags should return "<i>Hello</i>" when given ("i", "Hello")', () => {
  expect(string1.makeTags("i", "Hello")).toEqual("<i>Hello</i>");
});

test('makeTags should return "<cite>Yay</cite>" when given ("cite", "Yay")', () => {
  expect(string1.makeTags("cite", "Yay")).toEqual("<cite>Yay</cite>");
});

test('makeTags should return "<address>here</address>" when given ("address", "here")', () => {
  expect(string1.makeTags("address", "here")).toEqual("<address>here</address>");
});

test('makeTags should return "<body>Heart</body>" when given ("body", "Heart")', () => {
  expect(string1.makeTags("body", "Heart")).toEqual("<body>Heart</body>");
});

test('makeTags should return "<i>i</i>" when given ("i", "i")', () => {
  expect(string1.makeTags("i", "i")).toEqual("<i>i</i>");
});

test('makeTags should return "<i>i</i>" when given ("i", "i")', () => {
  expect(string1.makeTags("i", "i")).toEqual("<i>i</i>");
});

test('makeTags should return "<i></i>" when given ("i", "")', () => {
  expect(string1.makeTags("i", "")).toEqual("<i></i>");
});

test('makeOutWord should return "<<Yay>>" when given ("<<>>", "Yay")', () => {
  expect(string1.makeOutWord("<<>>", "Yay")).toEqual("<<Yay>>");
});

test('makeOutWord should return "<<WooHoo>>" when given ("<<>>", "WooHoo")', () => {
  expect(string1.makeOutWord("<<>>", "WooHoo")).toEqual("<<WooHoo>>");
});

test('makeOutWord should return "[[word]]" when given ("[[]]", "word")', () => {
  expect(string1.makeOutWord("[[]]", "word")).toEqual("[[word]]");
});

test('makeOutWord should return "HHHellooo" when given ("HHoo", "Hello")', () => {
  expect(string1.makeOutWord("HHoo", "Hello")).toEqual("HHHellooo");
});

test('makeOutWord should return "abYAYyz" when given ("abyz", "YAY")', () => {
  expect(string1.makeOutWord("abyz", "YAY")).toEqual("abYAYyz");
});

test('extraEnd should return "lololo" when given "Hello"', () => {
  expect(string1.extraEnd("Hello")).toEqual("lololo");
});

test('extraEnd should return "ababab" when given "ab"', () => {
  expect(string1.extraEnd("ab")).toEqual("ababab");
});

test('extraEnd should return "HiHiHi" when given "Hi"', () => {
  expect(string1.extraEnd("Hi")).toEqual("HiHiHi");
});

test('extraEnd should return "dydydy" when given "Candy"', () => {
  expect(string1.extraEnd("Candy")).toEqual("dydydy");
});

test('extraEnd should return "dedede" when given "Code"', () => {
  expect(string1.extraEnd("Code")).toEqual("dedede");
});

test('firstTwo should return "He" when given "Hello"', () => {
  expect(string1.firstTwo("Hello")).toEqual("He");
});

test('firstTwo should return "ab" when given "abcdefg"', () => {
  expect(string1.firstTwo("abcdefg")).toEqual("ab");
});

test('firstTwo should return "ab" when given "ab"', () => {
  expect(string1.firstTwo("ab")).toEqual("ab");
});

test('firstTwo should return "a" when given "a"', () => {
  expect(string1.firstTwo("a")).toEqual("a");
});

test('firstTwo should return "" when given ""', () => {
  expect(string1.firstTwo("")).toEqual("");
});

test('firstTwo should return "ki" when given "kitten"', () => {
  expect(string1.firstTwo("kitten")).toEqual("ki");
});

test('firstTwo should return "hi" when given "hi"', () => {
  expect(string1.firstTwo("hi")).toEqual("hi");
});

test('firstTwo should return "hi" when given "hiya"', () => {
  expect(string1.firstTwo("hiya")).toEqual("hi");
});

test('firstHalf should return "WooHoo" when given "WooHoo"', () => {
  expect(string1.firstHalf("WooHoo")).toEqual("WooHoo");
});

test('firstHalf should return "HelloThere" when given "HelloThere"', () => {
  expect(string1.firstHalf("HelloThere")).toEqual("HelloThere");
});

test('firstHalf should return "abcdefg" when given "abcdefg"', () => {
  expect(string1.firstHalf("abcdefg")).toEqual("abcdefg");
});

test('firstHalf should return "ab" when given "ab"', () => {
  expect(string1.firstHalf("ab")).toEqual("ab");
});

test('firstHalf should return "" when given ""', () => {
  expect(string1.firstHalf("")).toEqual("");
});

test('firstHalf should return "0123456789" when given "0123456789"', () => {
  expect(string1.firstHalf("0123456789")).toEqual("0123456789");
});

test('firstHalf should return "kitten" when given "kitten"', () => {
  expect(string1.firstHalf("kitten")).toEqual("kitten");
});

test('withoutEnd should return "ell" when given "Hello"', () => {
  expect(string1.withoutEnd("Hello")).toEqual("ell");
});

test('withoutEnd should return "av" when given "java"', () => {
  expect(string1.withoutEnd("java")).toEqual("av");
});

test('withoutEnd should return "odin" when given "coding"', () => {
  expect(string1.withoutEnd("coding")).toEqual("odin");
});

test('withoutEnd should return "od" when given "code"', () => {
  expect(string1.withoutEnd("code")).toEqual("od");
});

test('withoutEnd should return "" when given "ab"', () => {
  expect(string1.withoutEnd("ab")).toEqual("");
});

test('withoutEnd should return "hocolate" when given "Chocolate!"', () => {
  expect(string1.withoutEnd("Chocolate!")).toEqual("hocolate");
});

test('withoutEnd should return "itte" when given "kitten"', () => {
  expect(string1.withoutEnd("kitten")).toEqual("itte");
});

test('withoutEnd should return "ooho" when given "woohoo"', () => {
  expect(string1.withoutEnd("woohoo")).toEqual("ooho");
});

test('comboString should return "hiHellohi" when given ("Hello", "hi")', () => {
  expect(string1.comboString("Hello", "hi")).toEqual("hiHellohi");
});

test('comboString should return "HiHelloHi" when given ("Hi", "Hello")', () => {
  expect(string1.comboString("Hi", "Hello")).toEqual("HiHelloHi");
});

test('comboString should return "baaab" when given ("aaa", "b")', () => {
  expect(string1.comboString("aaa", "b")).toEqual("baaab");
});

test('comboString should return "baaab" when given ("b", "aaa")', () => {
  expect(string1.comboString("b", "aaa")).toEqual("baaab");
});

test('comboString should return "aaa" when given ("aaa", "")', () => {
  expect(string1.comboString("aaa", "")).toEqual("aaa");
});

test('comboString should return "bb" when given ("", "bb")', () => {
  expect(string1.comboString("", "bb")).toEqual("bb");
});

test('comboString should return "aaa1234aaa" when given ("aaa", "1234")', () => {
  expect(string1.comboString("aaa", "1234")).toEqual("aaa1234aaa");
});

test('comboString should return "bbaaabb" when given ("aaa", "bb")', () => {
  expect(string1.comboString("aaa", "bb")).toEqual("bbaaabb");
});

test('comboString should return "abba" when given ("a", "bb")', () => {
  expect(string1.comboString("a", "bb")).toEqual("abba");
});

test('comboString should return "abba" when given ("bb", "a")', () => {
  expect(string1.comboString("bb", "a")).toEqual("abba");
});

test('comboString should return "abba" when given ("a", "bb")', () => {
  expect(string1.comboString("a", "bb")).toEqual("abba");
});

test('comboString should return "abxyzab" when given ("xyz", "ab")', () => {
  expect(string1.comboString("xyz", "ab")).toEqual("abxyzab");
});

test('nonStart should return "ellohere" when given ("Hello", "There")', () => {
  expect(string1.nonStart("Hello", "There")).toEqual("ellohere");
});

test('nonStart should return "avaode" when given ("java", "code")', () => {
  expect(string1.nonStart("java", "code")).toEqual("avaode");
});

test('nonStart should return "hotlava" when given ("shotl", "java")', () => {
  expect(string1.nonStart("shotl", "java")).toEqual("hotlava");
});

test('nonStart should return "by" when given ("ab", "xy")', () => {
  expect(string1.nonStart("ab", "xy")).toEqual("by");
});

test('nonStart should return "b" when given ("ab", "x")', () => {
  expect(string1.nonStart("ab", "x")).toEqual("b");
});

test('nonStart should return "c" when given ("x", "ac")', () => {
  expect(string1.nonStart("x", "ac")).toEqual("c");
});

test('nonStart should return "" when given ("a", "x")', () => {
  expect(string1.nonStart("a", "x")).toEqual("");
});

test('nonStart should return "itat" when given ("kit", "kat")', () => {
  expect(string1.nonStart("kit", "kat")).toEqual("itat");
});

test('nonStart should return "artart" when given ("mart", "dart")', () => {
  expect(string1.nonStart("mart", "dart")).toEqual("artart");
});

test('left2 should return "lloHe" when given "Hello"', () => {
  expect(string1.left2("Hello")).toEqual("lloHe");
});

test('left2 should return "vaja" when given "java"', () => {
  expect(string1.left2("java")).toEqual("vaja");
});

test('left2 should return "Hi" when given "Hi"', () => {
  expect(string1.left2("Hi")).toEqual("Hi");
});

test('left2 should return "deco" when given "code"', () => {
  expect(string1.left2("code")).toEqual("deco");
});

test('left2 should return "tca" when given "cat"', () => {
  expect(string1.left2("cat")).toEqual("tca");
});

test('left2 should return "34512" when given "12345"', () => {
  expect(string1.left2("12345")).toEqual("34512");
});

test('left2 should return "ocolateCh" when given "Chocolate"', () => {
  expect(string1.left2("Chocolate")).toEqual("ocolateCh");
});

test('left2 should return "icksbr" when given "bricks"', () => {
  expect(string1.left2("bricks")).toEqual("icksbr");
});

test('right2 should return "loHel" when given "Hello"', () => {
  expect(string1.right2("Hello")).toEqual("loHel");
});

test('right2 should return "vaja" when given "java"', () => {
  expect(string1.right2("java")).toEqual("vaja");
});

test('right2 should return "Hi" when given "Hi"', () => {
  expect(string1.right2("Hi")).toEqual("Hi");
});

test('right2 should return "deco" when given "code"', () => {
  expect(string1.right2("code")).toEqual("deco");
});

test('right2 should return "atc" when given "cat"', () => {
  expect(string1.right2("cat")).toEqual("atc");
});

test('right2 should return "45123" when given "12345"', () => {
  expect(string1.right2("12345")).toEqual("45123");
});

test('theEnd should return "H" when given ("Hello", true)', () => {
  expect(string1.theEnd("Hello", true)).toEqual("H");
});

test('theEnd should return "o" when given ("Hello", false)', () => {
  expect(string1.theEnd("Hello", false)).toEqual("o");
});

test('theEnd should return "o" when given ("oh", true)', () => {
  expect(string1.theEnd("oh", true)).toEqual("o");
});

test('theEnd should return "h" when given ("oh", false)', () => {
  expect(string1.theEnd("oh", false)).toEqual("h");
});

test('theEnd should return "x" when given ("x", true)', () => {
  expect(string1.theEnd("x", true)).toEqual("x");
});

test('theEnd should return "x" when given ("x", false)', () => {
  expect(string1.theEnd("x", false)).toEqual("x");
});

test('theEnd should return "j" when given ("java", true)', () => {
  expect(string1.theEnd("java", true)).toEqual("j");
});

test('theEnd should return "e" when given ("chocolate", false)', () => {
  expect(string1.theEnd("chocolate", false)).toEqual("e");
});

test('theEnd should return "1" when given ("1234", true)', () => {
  expect(string1.theEnd("1234", true)).toEqual("1");
});

test('theEnd should return "e" when given ("code", false)', () => {
  expect(string1.theEnd("code", false)).toEqual("e");
});

test('withoutEnd2 should return "ell" when given "Hello"', () => {
  expect(string1.withoutEnd2("Hello")).toEqual("ell");
});

test('withoutEnd2 should return "b" when given "abc"', () => {
  expect(string1.withoutEnd2("abc")).toEqual("b");
});

test('withoutEnd2 should return "" when given "ab"', () => {
  expect(string1.withoutEnd2("ab")).toEqual("");
});

test('withoutEnd2 should return "" when given "a"', () => {
  expect(string1.withoutEnd2("a")).toEqual("");
});

test('withoutEnd2 should return "" when given ""', () => {
  expect(string1.withoutEnd2("")).toEqual("");
});

test('withoutEnd2 should return "old" when given "coldy"', () => {
  expect(string1.withoutEnd2("coldy")).toEqual("old");
});

test('withoutEnd2 should return "ava cod" when given "java code"', () => {
  expect(string1.withoutEnd2("java code")).toEqual("ava cod");
});

test('middleTwo should return "" when given "string"', () => {
  expect(string1.middleTwo("string")).toEqual("");
});

test('middleTwo should return "" when given "code"', () => {
  expect(string1.middleTwo("code")).toEqual("");
});

test('middleTwo should return "" when given "Practice"', () => {
  expect(string1.middleTwo("Practice")).toEqual("");
});

test('middleTwo should return "" when given "ab"', () => {
  expect(string1.middleTwo("ab")).toEqual("");
});

test('middleTwo should return "123456789" when given "123456789"', () => {
  expect(string1.middleTwo("123456789")).toEqual("123456789");
});

test('endsLy should return true when given "oddly"', () => {
  expect(string1.endsLy("oddly")).toEqual(true);
});

test('endsLy should return false when given "y"', () => {
  expect(string1.endsLy("y")).toEqual(false);
});

test('endsLy should return false when given "oddl"', () => {
  expect(string1.endsLy("oddl")).toEqual(false);
});

test('endsLy should return false when given "olydd"', () => {
  expect(string1.endsLy("olydd")).toEqual(false);
});

test('endsLy should return true when given "ly"', () => {
  expect(string1.endsLy("ly")).toEqual(true);
});

test('endsLy should return false when given ""', () => {
  expect(string1.endsLy("")).toEqual(false);
});

test('endsLy should return true when given "falsely"', () => {
  expect(string1.endsLy("falsely")).toEqual(true);
});

test('endsLy should return true when given "evenly"', () => {
  expect(string1.endsLy("evenly")).toEqual(true);
});

test('nTwice should return "helo" when given ("hello", 2)', () => {
  expect(string1.nTwice("hello", 2)).toEqual("helo");
});

test('nTwice should return "Choate" when given ("Chocolate", 3)', () => {
  expect(string1.nTwice("Chocolate", 3)).toEqual("Choate");
});

test('nTwice should return "Ce" when given ("Chocolate", 1)', () => {
  expect(string1.nTwice("Chocolate", 1)).toEqual("Ce");
});

test('nTwice should return "" when given ("Chocolate", 0)', () => {
  expect(string1.nTwice("Chocolate", 0)).toEqual("");
});

test('nTwice should return "Hellello" when given ("Hello", 4)', () => {
  expect(string1.nTwice("Hello", 4)).toEqual("Hellello");
});

test('nTwice should return "CodeCode" when given ("Code", 4)', () => {
  expect(string1.nTwice("Code", 4)).toEqual("CodeCode");
});

test('nTwice should return "Code" when given ("Code", 2)', () => {
  expect(string1.nTwice("Code", 2)).toEqual("Code");
});

test('twoChar should return "ja" when given ("java", 0)', () => {
  expect(string1.twoChar("java", 0)).toEqual("ja");
});

test('twoChar should return "va" when given ("java", 2)', () => {
  expect(string1.twoChar("java", 2)).toEqual("va");
});

test('twoChar should return "ja" when given ("java", 3)', () => {
  expect(string1.twoChar("java", 3)).toEqual("ja");
});

test('twoChar should return "ja" when given ("java", 4)', () => {
  expect(string1.twoChar("java", 4)).toEqual("ja");
});

test('twoChar should return "ja" when given ("java", -1)', () => {
  expect(string1.twoChar("java", -1)).toEqual("ja");
});

test('twoChar should return "He" when given ("Hello", 0)', () => {
  expect(string1.twoChar("Hello", 0)).toEqual("He");
});

test('twoChar should return "el" when given ("Hello", 1)', () => {
  expect(string1.twoChar("Hello", 1)).toEqual("el");
});

test('twoChar should return "He" when given ("Hello", 99)', () => {
  expect(string1.twoChar("Hello", 99)).toEqual("He");
});

test('twoChar should return "lo" when given ("Hello", 3)', () => {
  expect(string1.twoChar("Hello", 3)).toEqual("lo");
});

test('twoChar should return "He" when given ("Hello", 4)', () => {
  expect(string1.twoChar("Hello", 4)).toEqual("He");
});

test('twoChar should return "He" when given ("Hello", 5)', () => {
  expect(string1.twoChar("Hello", 5)).toEqual("He");
});

test('twoChar should return "He" when given ("Hello", -7)', () => {
  expect(string1.twoChar("Hello", -7)).toEqual("He");
});

test('twoChar should return "He" when given ("Hello", 6)', () => {
  expect(string1.twoChar("Hello", 6)).toEqual("He");
});

test('twoChar should return "He" when given ("Hello", -1)', () => {
  expect(string1.twoChar("Hello", -1)).toEqual("He");
});

test('twoChar should return "ya" when given ("yay", 0)', () => {
  expect(string1.twoChar("yay", 0)).toEqual("ya");
});

test('middleThree should return "and" when given "Candy"', () => {
  expect(string1.middleThree("Candy")).toEqual("and");
});

test('middleThree should return "and" when given "and"', () => {
  expect(string1.middleThree("and")).toEqual("and");
});

test('middleThree should return "lvi" when given "solving"', () => {
  expect(string1.middleThree("solving")).toEqual("lvi");
});

test('middleThree should return "yet" when given "Hi yet Hi"', () => {
  expect(string1.middleThree("Hi yet Hi")).toEqual("yet");
});

test('middleThree should return "yet" when given "java yet java"', () => {
  expect(string1.middleThree("java yet java")).toEqual("yet");
});

test('middleThree should return "col" when given "Chocolate"', () => {
  expect(string1.middleThree("Chocolate")).toEqual("col");
});

test('middleThree should return "xyz" when given "XabcxyzabcX"', () => {
  expect(string1.middleThree("XabcxyzabcX")).toEqual("xyz");
});

test('hasBad should return true when given "badxx"', () => {
  expect(string1.hasBad("badxx")).toEqual(true);
});

test('hasBad should return true when given "xbadxx"', () => {
  expect(string1.hasBad("xbadxx")).toEqual(true);
});

test('hasBad should return false when given "xxbadxx"', () => {
  expect(string1.hasBad("xxbadxx")).toEqual(false);
});

test('hasBad should return false when given "code"', () => {
  expect(string1.hasBad("code")).toEqual(false);
});

test('hasBad should return true when given "bad"', () => {
  expect(string1.hasBad("bad")).toEqual(true);
});

test('hasBad should return false when given "ba"', () => {
  expect(string1.hasBad("ba")).toEqual(false);
});

test('hasBad should return false when given "xba"', () => {
  expect(string1.hasBad("xba")).toEqual(false);
});

test('hasBad should return true when given "xbad"', () => {
  expect(string1.hasBad("xbad")).toEqual(true);
});

test('hasBad should return false when given ""', () => {
  expect(string1.hasBad("")).toEqual(false);
});

test('hasBad should return true when given "badyy"', () => {
  expect(string1.hasBad("badyy")).toEqual(true);
});

test('atFirst should return "he" when given "hello"', () => {
  expect(string1.atFirst("hello")).toEqual("he");
});

test('atFirst should return "hi" when given "hi"', () => {
  expect(string1.atFirst("hi")).toEqual("hi");
});

test('atFirst should return "h@" when given "h"', () => {
  expect(string1.atFirst("h")).toEqual("h@");
});

test('atFirst should return "@@" when given ""', () => {
  expect(string1.atFirst("")).toEqual("@@");
});

test('atFirst should return "ki" when given "kitten"', () => {
  expect(string1.atFirst("kitten")).toEqual("ki");
});

test('atFirst should return "ja" when given "java"', () => {
  expect(string1.atFirst("java")).toEqual("ja");
});

test('atFirst should return "j@" when given "j"', () => {
  expect(string1.atFirst("j")).toEqual("j@");
});

test('lastChars should return "ls" when given ("last", "chars")', () => {
  expect(string1.lastChars("last", "chars")).toEqual("ls");
});

test('lastChars should return "ya" when given ("yo", "java")', () => {
  expect(string1.lastChars("yo", "java")).toEqual("ya");
});

test('lastChars should return "h@" when given ("hi", "")', () => {
  expect(string1.lastChars("hi", "")).toEqual("h@");
});

test('lastChars should return "@o" when given ("", "hello")', () => {
  expect(string1.lastChars("", "hello")).toEqual("@o");
});

test('lastChars should return "@@" when given ("", "")', () => {
  expect(string1.lastChars("", "")).toEqual("@@");
});

test('lastChars should return "ki" when given ("kitten", "hi")', () => {
  expect(string1.lastChars("kitten", "hi")).toEqual("ki");
});

test('lastChars should return "kp" when given ("k", "zip")', () => {
  expect(string1.lastChars("k", "zip")).toEqual("kp");
});

test('lastChars should return "k@" when given ("kitten", "")', () => {
  expect(string1.lastChars("kitten", "")).toEqual("k@");
});

test('lastChars should return "kp" when given ("kitten", "zip")', () => {
  expect(string1.lastChars("kitten", "zip")).toEqual("kp");
});

test('conCat should return "abcat" when given ("abc", "cat")', () => {
  expect(string1.conCat("abc", "cat")).toEqual("abcat");
});

test('conCat should return "dogcat" when given ("dog", "cat")', () => {
  expect(string1.conCat("dog", "cat")).toEqual("dogcat");
});

test('conCat should return "abc" when given ("abc", "")', () => {
  expect(string1.conCat("abc", "")).toEqual("abc");
});

test('conCat should return "cat" when given ("", "cat")', () => {
  expect(string1.conCat("", "cat")).toEqual("cat");
});

test('conCat should return "pig" when given ("pig", "g")', () => {
  expect(string1.conCat("pig", "g")).toEqual("pig");
});

test('conCat should return "pigdoggy" when given ("pig", "doggy")', () => {
  expect(string1.conCat("pig", "doggy")).toEqual("pigdoggy");
});

test('lastTwo should return "codign" when given "coding"', () => {
  expect(string1.lastTwo("coding")).toEqual("codign");
});

test('lastTwo should return "cta" when given "cat"', () => {
  expect(string1.lastTwo("cat")).toEqual("cta");
});

test('lastTwo should return "ba" when given "ab"', () => {
  expect(string1.lastTwo("ab")).toEqual("ba");
});

test('lastTwo should return "a" when given "a"', () => {
  expect(string1.lastTwo("a")).toEqual("a");
});

test('lastTwo should return "" when given ""', () => {
  expect(string1.lastTwo("")).toEqual("");
});

test('seeColor should return "red" when given "redxx"', () => {
  expect(string1.seeColor("redxx")).toEqual("red");
});

test('seeColor should return "" when given "xxred"', () => {
  expect(string1.seeColor("xxred")).toEqual("");
});

test('seeColor should return "blue" when given "blueTimes"', () => {
  expect(string1.seeColor("blueTimes")).toEqual("blue");
});

test('seeColor should return "" when given "NoColor"', () => {
  expect(string1.seeColor("NoColor")).toEqual("");
});

test('seeColor should return "red" when given "red"', () => {
  expect(string1.seeColor("red")).toEqual("red");
});

test('seeColor should return "" when given "re"', () => {
  expect(string1.seeColor("re")).toEqual("");
});

test('seeColor should return "" when given "blu"', () => {
  expect(string1.seeColor("blu")).toEqual("");
});

test('seeColor should return "blue" when given "blue"', () => {
  expect(string1.seeColor("blue")).toEqual("blue");
});

test('seeColor should return "" when given "a"', () => {
  expect(string1.seeColor("a")).toEqual("");
});

test('seeColor should return "" when given ""', () => {
  expect(string1.seeColor("")).toEqual("");
});

test('seeColor should return "" when given "xyzred"', () => {
  expect(string1.seeColor("xyzred")).toEqual("");
});

test('frontAgain should return true when given "edited"', () => {
  expect(string1.frontAgain("edited")).toEqual(true);
});

test('frontAgain should return false when given "edit"', () => {
  expect(string1.frontAgain("edit")).toEqual(false);
});

test('frontAgain should return true when given "ed"', () => {
  expect(string1.frontAgain("ed")).toEqual(true);
});

test('frontAgain should return true when given "jj"', () => {
  expect(string1.frontAgain("jj")).toEqual(true);
});

test('frontAgain should return true when given "jjj"', () => {
  expect(string1.frontAgain("jjj")).toEqual(true);
});

test('frontAgain should return true when given "jjjj"', () => {
  expect(string1.frontAgain("jjjj")).toEqual(true);
});

test('frontAgain should return false when given "jjjk"', () => {
  expect(string1.frontAgain("jjjk")).toEqual(false);
});

test('frontAgain should return false when given "x"', () => {
  expect(string1.frontAgain("x")).toEqual(false);
});

test('frontAgain should return false when given ""', () => {
  expect(string1.frontAgain("")).toEqual(false);
});

test('frontAgain should return false when given "java"', () => {
  expect(string1.frontAgain("java")).toEqual(false);
});

test('frontAgain should return true when given "javaja"', () => {
  expect(string1.frontAgain("javaja")).toEqual(true);
});

test('minCat should return "loHi" when given ("Hello", "Hi")', () => {
  expect(string1.minCat("Hello", "Hi")).toEqual("loHi");
});

test('minCat should return "ellojava" when given ("Hello", "java")', () => {
  expect(string1.minCat("Hello", "java")).toEqual("ellojava");
});

test('minCat should return "javaello" when given ("java", "Hello")', () => {
  expect(string1.minCat("java", "Hello")).toEqual("javaello");
});

test('minCat should return "cx" when given ("abc", "x")', () => {
  expect(string1.minCat("abc", "x")).toEqual("cx");
});

test('minCat should return "xc" when given ("x", "abc")', () => {
  expect(string1.minCat("x", "abc")).toEqual("xc");
});

test('minCat should return "" when given ("abc", "")', () => {
  expect(string1.minCat("abc", "")).toEqual("");
});

test('extraFront should return "HeHeHe" when given "Hello"', () => {
  expect(string1.extraFront("Hello")).toEqual("HeHeHe");
});

test('extraFront should return "ababab" when given "ab"', () => {
  expect(string1.extraFront("ab")).toEqual("ababab");
});

test('extraFront should return "HHH" when given "H"', () => {
  expect(string1.extraFront("H")).toEqual("HHH");
});

test('extraFront should return "" when given ""', () => {
  expect(string1.extraFront("")).toEqual("");
});

test('extraFront should return "CaCaCa" when given "Candy"', () => {
  expect(string1.extraFront("Candy")).toEqual("CaCaCa");
});

test('extraFront should return "CoCoCo" when given "Code"', () => {
  expect(string1.extraFront("Code")).toEqual("CoCoCo");
});

test('without2 should return "lloHe" when given "HelloHe"', () => {
  expect(string1.without2("HelloHe")).toEqual("lloHe");
});

test('without2 should return "HelloHi" when given "HelloHi"', () => {
  expect(string1.without2("HelloHi")).toEqual("HelloHi");
});

test('without2 should return "" when given "Hi"', () => {
  expect(string1.without2("Hi")).toEqual("");
});

test('without2 should return "Chocolate" when given "Chocolate"', () => {
  expect(string1.without2("Chocolate")).toEqual("Chocolate");
});

test('without2 should return "x" when given "xxx"', () => {
  expect(string1.without2("xxx")).toEqual("x");
});

test('without2 should return "" when given "xx"', () => {
  expect(string1.without2("xx")).toEqual("");
});

test('without2 should return "x" when given "x"', () => {
  expect(string1.without2("x")).toEqual("x");
});

test('without2 should return "" when given ""', () => {
  expect(string1.without2("")).toEqual("");
});

test('without2 should return "Fruits" when given "Fruits"', () => {
  expect(string1.without2("Fruits")).toEqual("Fruits");
});

test('deFront should return "llo" when given "Hello"', () => {
  expect(string1.deFront("Hello")).toEqual("llo");
});

test('deFront should return "va" when given "java"', () => {
  expect(string1.deFront("java")).toEqual("va");
});

test('deFront should return "aay" when given "away"', () => {
  expect(string1.deFront("away")).toEqual("aay");
});

test('deFront should return "ay" when given "axy"', () => {
  expect(string1.deFront("axy")).toEqual("ay");
});

test('deFront should return "abc" when given "abc"', () => {
  expect(string1.deFront("abc")).toEqual("abc");
});

test('deFront should return "by" when given "xby"', () => {
  expect(string1.deFront("xby")).toEqual("by");
});

test('deFront should return "ab" when given "ab"', () => {
  expect(string1.deFront("ab")).toEqual("ab");
});

test('deFront should return "a" when given "ax"', () => {
  expect(string1.deFront("ax")).toEqual("a");
});

test('deFront should return "ab" when given "axb"', () => {
  expect(string1.deFront("axb")).toEqual("ab");
});

test('deFront should return "aa" when given "aaa"', () => {
  expect(string1.deFront("aaa")).toEqual("aa");
});

test('deFront should return "bc" when given "xbc"', () => {
  expect(string1.deFront("xbc")).toEqual("bc");
});

test('deFront should return "bb" when given "bbb"', () => {
  expect(string1.deFront("bbb")).toEqual("bb");
});

test('deFront should return "zz" when given "bazz"', () => {
  expect(string1.deFront("bazz")).toEqual("zz");
});

test('deFront should return "" when given "ba"', () => {
  expect(string1.deFront("ba")).toEqual("");
});

test('deFront should return "abxyz" when given "abxyz"', () => {
  expect(string1.deFront("abxyz")).toEqual("abxyz");
});

test('deFront should return "" when given "hi"', () => {
  expect(string1.deFront("hi")).toEqual("");
});

test('deFront should return "s" when given "his"', () => {
  expect(string1.deFront("his")).toEqual("s");
});

test('deFront should return "" when given "xz"', () => {
  expect(string1.deFront("xz")).toEqual("");
});

test('deFront should return "z" when given "zzz"', () => {
  expect(string1.deFront("zzz")).toEqual("z");
});

test('startWord should return "hi" when given ("hippo", "hi")', () => {
  expect(string1.startWord("hippo", "hi")).toEqual("hi");
});

test('startWord should return "hip" when given ("hippo", "xip")', () => {
  expect(string1.startWord("hippo", "xip")).toEqual("hip");
});

test('startWord should return "h" when given ("hippo", "i")', () => {
  expect(string1.startWord("hippo", "i")).toEqual("h");
});

test('startWord should return "" when given ("hippo", "ix")', () => {
  expect(string1.startWord("hippo", "ix")).toEqual("");
});

test('startWord should return "" when given ("h", "ix")', () => {
  expect(string1.startWord("h", "ix")).toEqual("");
});

test('startWord should return "" when given ("", "i")', () => {
  expect(string1.startWord("", "i")).toEqual("");
});

test('startWord should return "hi" when given ("hip", "zi")', () => {
  expect(string1.startWord("hip", "zi")).toEqual("hi");
});

test('startWord should return "hip" when given ("hip", "zip")', () => {
  expect(string1.startWord("hip", "zip")).toEqual("hip");
});

test('startWord should return "" when given ("hip", "zig")', () => {
  expect(string1.startWord("hip", "zig")).toEqual("");
});

test('startWord should return "h" when given ("h", "z")', () => {
  expect(string1.startWord("h", "z")).toEqual("h");
});

test('startWord should return "hippo" when given ("hippo", "xippo")', () => {
  expect(string1.startWord("hippo", "xippo")).toEqual("hippo");
});

test('startWord should return "" when given ("hippo", "xyz")', () => {
  expect(string1.startWord("hippo", "xyz")).toEqual("");
});

test('startWord should return "hip" when given ("hippo", "hip")', () => {
  expect(string1.startWord("hippo", "hip")).toEqual("hip");
});

test('startWord should return "kit" when given ("kitten", "cit")', () => {
  expect(string1.startWord("kitten", "cit")).toEqual("kit");
});

test('startWord should return "kit" when given ("kit", "cit")', () => {
  expect(string1.startWord("kit", "cit")).toEqual("kit");
});

test('withoutX should return "Hi" when given "xHix"', () => {
  expect(string1.withoutX("xHix")).toEqual("Hi");
});

test('withoutX should return "Hi" when given "xHi"', () => {
  expect(string1.withoutX("xHi")).toEqual("Hi");
});

test('withoutX should return "Hxi" when given "Hxix"', () => {
  expect(string1.withoutX("Hxix")).toEqual("Hxi");
});

test('withoutX should return "Hi" when given "Hi"', () => {
  expect(string1.withoutX("Hi")).toEqual("Hi");
});

test('withoutX should return "xHi" when given "xxHi"', () => {
  expect(string1.withoutX("xxHi")).toEqual("xHi");
});

test('withoutX should return "Hi" when given "Hix"', () => {
  expect(string1.withoutX("Hix")).toEqual("Hi");
});

test('withoutX should return "axb" when given "xaxbx"', () => {
  expect(string1.withoutX("xaxbx")).toEqual("axb");
});

test('withoutX should return "" when given "xx"', () => {
  expect(string1.withoutX("xx")).toEqual("");
});

test('withoutX should return "" when given "x"', () => {
  expect(string1.withoutX("x")).toEqual("");
});

test('withoutX should return "" when given ""', () => {
  expect(string1.withoutX("")).toEqual("");
});

test('withoutX should return "Hello" when given "Hello"', () => {
  expect(string1.withoutX("Hello")).toEqual("Hello");
});

test('withoutX should return "Hexllo" when given "Hexllo"', () => {
  expect(string1.withoutX("Hexllo")).toEqual("Hexllo");
});

test('withoutX2 should return "Hi" when given "xHi"', () => {
  expect(string1.withoutX2("xHi")).toEqual("Hi");
});

test('withoutX2 should return "Hi" when given "Hxi"', () => {
  expect(string1.withoutX2("Hxi")).toEqual("Hi");
});

test('withoutX2 should return "Hi" when given "Hi"', () => {
  expect(string1.withoutX2("Hi")).toEqual("Hi");
});

test('withoutX2 should return "Hi" when given "xxHi"', () => {
  expect(string1.withoutX2("xxHi")).toEqual("Hi");
});

test('withoutX2 should return "Hix" when given "Hix"', () => {
  expect(string1.withoutX2("Hix")).toEqual("Hix");
});

test('withoutX2 should return "axb" when given "xaxb"', () => {
  expect(string1.withoutX2("xaxb")).toEqual("axb");
});

test('withoutX2 should return "" when given "xx"', () => {
  expect(string1.withoutX2("xx")).toEqual("");
});

test('withoutX2 should return "" when given "x"', () => {
  expect(string1.withoutX2("x")).toEqual("");
});

test('withoutX2 should return "" when given ""', () => {
  expect(string1.withoutX2("")).toEqual("");
});

test('withoutX2 should return "Hello" when given "Hello"', () => {
  expect(string1.withoutX2("Hello")).toEqual("Hello");
});

test('withoutX2 should return "Hexllo" when given "Hexllo"', () => {
  expect(string1.withoutX2("Hexllo")).toEqual("Hexllo");
});

test('withoutX2 should return "Hxllo" when given "xHxllo"', () => {
  expect(string1.withoutX2("xHxllo")).toEqual("Hxllo");
});
