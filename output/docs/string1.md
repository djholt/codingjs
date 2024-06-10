# String 1
## helloName
Given a string name, e.g. "Bob", return a greeting of the form "Hello Bob!".
Example|Expected
-|-
`helloName("Bob")` | &#10132; `"Hello Bob!"`
`helloName("Alice")` | &#10132; `"Hello Alice!"`
`helloName("X")` | &#10132; `"Hello X!"`
`helloName("Dolly")` | &#10132; `"Hello Dolly!"`
`helloName("Alpha")` | &#10132; `"Hello Alpha!"`
`helloName("Omega")` | &#10132; `"Hello Omega!"`
`helloName("Goodbye")` | &#10132; `"Hello Goodbye!"`
`helloName("ho ho ho")` | &#10132; `"Hello ho ho ho!"`
`helloName("xyz!")` | &#10132; `"Hello xyz!!"`
`helloName("Hello!")` | &#10132; `"Hello Hello!!"`
## makeAbba
Given two strings, a and b, return the result of putting them together in the order abba, e.g. "Hi" and "Bye" returns "HiByeByeHi".
Example|Expected
-|-
`makeAbba("Hi", "Bye")` | &#10132; `"HiByeByeHi"`
`makeAbba("Yo", "Alice")` | &#10132; `"YoAliceAliceYo"`
`makeAbba("What", "Up")` | &#10132; `"WhatUpUpWhat"`
`makeAbba("aaa", "bbb")` | &#10132; `"aaabbbbbbaaa"`
`makeAbba("x", "y")` | &#10132; `"xyyx"`
`makeAbba("x", "")` | &#10132; `"xx"`
`makeAbba("ba", "Ya")` | &#10132; `"baYaYaba"`
`makeAbba("Ya", "Ya")` | &#10132; `"YaYaYaYa"`
## makeTags
The web is built with HTML strings like "<i>Yay</i>" which draws Yay as italic text. In this example, the "i" tag makes <i> and </i> which surround the word "Yay". Given tag and word strings, create the HTML string with tags around the word, e.g. "<i>Yay</i>".
Example|Expected
-|-
`makeTags("i", "Yay")` | &#10132; `"<i>Yay</i>"`
`makeTags("i", "Hello")` | &#10132; `"<i>Hello</i>"`
`makeTags("cite", "Yay")` | &#10132; `"<cite>Yay</cite>"`
`makeTags("address", "here")` | &#10132; `"<address>here</address>"`
`makeTags("body", "Heart")` | &#10132; `"<body>Heart</body>"`
`makeTags("i", "i")` | &#10132; `"<i>i</i>"`
`makeTags("i", "i")` | &#10132; `"<i>i</i>"`
`makeTags("i", "")` | &#10132; `"<i></i>"`
## makeOutWord
Given an "out" string length 4, such as "<<>>", and a word, return a new string where the word is in the middle of the out string, e.g. "<<word>>". Note: use str.substring(i, j) to extract the String starting at index i and going up to but not including index j.
Example|Expected
-|-
`makeOutWord("<<>>", "Yay")` | &#10132; `"<<Yay>>"`
`makeOutWord("<<>>", "WooHoo")` | &#10132; `"<<WooHoo>>"`
`makeOutWord("[[]]", "word")` | &#10132; `"[[word]]"`
`makeOutWord("HHoo", "Hello")` | &#10132; `"HHHellooo"`
`makeOutWord("abyz", "YAY")` | &#10132; `"abYAYyz"`
## extraEnd
Given a string, return a new string made of 3 copies of the last 2 chars of the original string. The string length will be at least 2.
Example|Expected
-|-
`extraEnd("Hello")` | &#10132; `"lololo"`
`extraEnd("ab")` | &#10132; `"ababab"`
`extraEnd("Hi")` | &#10132; `"HiHiHi"`
`extraEnd("Candy")` | &#10132; `"dydydy"`
`extraEnd("Code")` | &#10132; `"dedede"`
## firstTwo
Given a string, return the string made of its first two chars, so the String "Hello" yields "He". If the string is shorter than length 2, return whatever there is, so "X" yields "X", and the empty string "" yields the empty string "". Note that str.length() returns the length of a string.
Example|Expected
-|-
`firstTwo("Hello")` | &#10132; `"He"`
`firstTwo("abcdefg")` | &#10132; `"ab"`
`firstTwo("ab")` | &#10132; `"ab"`
`firstTwo("a")` | &#10132; `"a"`
`firstTwo("")` | &#10132; `""`
`firstTwo("kitten")` | &#10132; `"ki"`
`firstTwo("hi")` | &#10132; `"hi"`
`firstTwo("hiya")` | &#10132; `"hi"`
## firstHalf
Given a string of even length, return the first half. So the string "WooHoo" yields "Woo".
Example|Expected
-|-
`firstHalf("WooHoo")` | &#10132; `"WooHoo"`
`firstHalf("HelloThere")` | &#10132; `"HelloThere"`
`firstHalf("abcdefg")` | &#10132; `"abcdefg"`
`firstHalf("ab")` | &#10132; `"ab"`
`firstHalf("")` | &#10132; `""`
`firstHalf("0123456789")` | &#10132; `"0123456789"`
`firstHalf("kitten")` | &#10132; `"kitten"`
## withoutEnd
Given a string, return a version without the first and last char, so "Hello" yields "ell". The string length will be at least 2.
Example|Expected
-|-
`withoutEnd("Hello")` | &#10132; `"ell"`
`withoutEnd("java")` | &#10132; `"av"`
`withoutEnd("coding")` | &#10132; `"odin"`
`withoutEnd("code")` | &#10132; `"od"`
`withoutEnd("ab")` | &#10132; `""`
`withoutEnd("Chocolate!")` | &#10132; `"hocolate"`
`withoutEnd("kitten")` | &#10132; `"itte"`
`withoutEnd("woohoo")` | &#10132; `"ooho"`
## comboString
Given 2 strings, a and b, return a string of the form short+long+short, with the shorter string on the outside and the longer string on the inside. The strings will not be the same length, but they may be empty (length 0).
Example|Expected
-|-
`comboString("Hello", "hi")` | &#10132; `"hiHellohi"`
`comboString("Hi", "Hello")` | &#10132; `"HiHelloHi"`
`comboString("aaa", "b")` | &#10132; `"baaab"`
`comboString("b", "aaa")` | &#10132; `"baaab"`
`comboString("aaa", "")` | &#10132; `"aaa"`
`comboString("", "bb")` | &#10132; `"bb"`
`comboString("aaa", "1234")` | &#10132; `"aaa1234aaa"`
`comboString("aaa", "bb")` | &#10132; `"bbaaabb"`
`comboString("a", "bb")` | &#10132; `"abba"`
`comboString("bb", "a")` | &#10132; `"abba"`
`comboString("a", "bb")` | &#10132; `"abba"`
`comboString("xyz", "ab")` | &#10132; `"abxyzab"`
## nonStart
Given 2 strings, return their concatenation, except omit the first char of each. The strings will be at least length 1.
Example|Expected
-|-
`nonStart("Hello", "There")` | &#10132; `"ellohere"`
`nonStart("java", "code")` | &#10132; `"avaode"`
`nonStart("shotl", "java")` | &#10132; `"hotlava"`
`nonStart("ab", "xy")` | &#10132; `"by"`
`nonStart("ab", "x")` | &#10132; `"b"`
`nonStart("x", "ac")` | &#10132; `"c"`
`nonStart("a", "x")` | &#10132; `""`
`nonStart("kit", "kat")` | &#10132; `"itat"`
`nonStart("mart", "dart")` | &#10132; `"artart"`
## left2
Given a string, return a "rotated left 2" version where the first 2 chars are moved to the end. The string length will be at least 2.
Example|Expected
-|-
`left2("Hello")` | &#10132; `"lloHe"`
`left2("java")` | &#10132; `"vaja"`
`left2("Hi")` | &#10132; `"Hi"`
`left2("code")` | &#10132; `"deco"`
`left2("cat")` | &#10132; `"tca"`
`left2("12345")` | &#10132; `"34512"`
`left2("Chocolate")` | &#10132; `"ocolateCh"`
`left2("bricks")` | &#10132; `"icksbr"`
## right2
Given a string, return a "rotated right 2" version where the last 2 chars are moved to the start. The string length will be at least 2.
Example|Expected
-|-
`right2("Hello")` | &#10132; `"loHel"`
`right2("java")` | &#10132; `"vaja"`
`right2("Hi")` | &#10132; `"Hi"`
`right2("code")` | &#10132; `"deco"`
`right2("cat")` | &#10132; `"atc"`
`right2("12345")` | &#10132; `"45123"`
## theEnd
Given a string, return a string length 1 from its front, unless front is false, in which case return a string length 1 from its back. The string will be non-empty.
Example|Expected
-|-
`theEnd("Hello", true)` | &#10132; `"H"`
`theEnd("Hello", false)` | &#10132; `"o"`
`theEnd("oh", true)` | &#10132; `"o"`
`theEnd("oh", false)` | &#10132; `"h"`
`theEnd("x", true)` | &#10132; `"x"`
`theEnd("x", false)` | &#10132; `"x"`
`theEnd("java", true)` | &#10132; `"j"`
`theEnd("chocolate", false)` | &#10132; `"e"`
`theEnd("1234", true)` | &#10132; `"1"`
`theEnd("code", false)` | &#10132; `"e"`
## withoutEnd2
Given a string, return a version without both the first and last char of the string. The string may be any length, including 0.
Example|Expected
-|-
`withoutEnd2("Hello")` | &#10132; `"ell"`
`withoutEnd2("abc")` | &#10132; `"b"`
`withoutEnd2("ab")` | &#10132; `""`
`withoutEnd2("a")` | &#10132; `""`
`withoutEnd2("")` | &#10132; `""`
`withoutEnd2("coldy")` | &#10132; `"old"`
`withoutEnd2("java code")` | &#10132; `"ava cod"`
## middleTwo
Given a string of even length, return a string made of the middle two chars, so the string "string" yields "ri". The string length will be at least 2.
Example|Expected
-|-
`middleTwo("string")` | &#10132; `""`
`middleTwo("code")` | &#10132; `""`
`middleTwo("Practice")` | &#10132; `""`
`middleTwo("ab")` | &#10132; `""`
`middleTwo("123456789")` | &#10132; `"123456789"`
## endsLy
Given a string, return true if it ends in "ly".
Example|Expected
-|-
`endsLy("oddly")` | &#10132; `true`
`endsLy("y")` | &#10132; `false`
`endsLy("oddl")` | &#10132; `false`
`endsLy("olydd")` | &#10132; `false`
`endsLy("ly")` | &#10132; `true`
`endsLy("")` | &#10132; `false`
`endsLy("falsely")` | &#10132; `true`
`endsLy("evenly")` | &#10132; `true`
## nTwice
Given a string and an int n, return a string made of the first and last n chars from the string. The string length will be at least n.
Example|Expected
-|-
`nTwice("hello", 2)` | &#10132; `"helo"`
`nTwice("Chocolate", 3)` | &#10132; `"Choate"`
`nTwice("Chocolate", 1)` | &#10132; `"Ce"`
`nTwice("Chocolate", 0)` | &#10132; `""`
`nTwice("Hello", 4)` | &#10132; `"Hellello"`
`nTwice("Code", 4)` | &#10132; `"CodeCode"`
`nTwice("Code", 2)` | &#10132; `"Code"`
## twoChar
Given a string and an index, return a string length 2 starting at the given index. If the index is too big or too small to define a string length 2, use the first 2 chars. The string length will be at least 2.
Example|Expected
-|-
`twoChar("java", 0)` | &#10132; `"ja"`
`twoChar("java", 2)` | &#10132; `"va"`
`twoChar("java", 3)` | &#10132; `"ja"`
`twoChar("java", 4)` | &#10132; `"ja"`
`twoChar("java", -1)` | &#10132; `"ja"`
`twoChar("Hello", 0)` | &#10132; `"He"`
`twoChar("Hello", 1)` | &#10132; `"el"`
`twoChar("Hello", 99)` | &#10132; `"He"`
`twoChar("Hello", 3)` | &#10132; `"lo"`
`twoChar("Hello", 4)` | &#10132; `"He"`
`twoChar("Hello", 5)` | &#10132; `"He"`
`twoChar("Hello", -7)` | &#10132; `"He"`
`twoChar("Hello", 6)` | &#10132; `"He"`
`twoChar("Hello", -1)` | &#10132; `"He"`
`twoChar("yay", 0)` | &#10132; `"ya"`
## middleThree
Given a string of odd length, return the string length 3 from its middle, so "Candy" yields "and". The string length will be at least 3.
Example|Expected
-|-
`middleThree("Candy")` | &#10132; `"and"`
`middleThree("and")` | &#10132; `"and"`
`middleThree("solving")` | &#10132; `"lvi"`
`middleThree("Hi yet Hi")` | &#10132; `"yet"`
`middleThree("java yet java")` | &#10132; `"yet"`
`middleThree("Chocolate")` | &#10132; `"col"`
`middleThree("XabcxyzabcX")` | &#10132; `"xyz"`
## hasBad
Given a string, return true if "bad" appears starting at index 0 or 1 in the string, such as with "badxxx" or "xbadxx" but not "xxbadxx". The string may be any length, including 0.
Example|Expected
-|-
`hasBad("badxx")` | &#10132; `true`
`hasBad("xbadxx")` | &#10132; `true`
`hasBad("xxbadxx")` | &#10132; `false`
`hasBad("code")` | &#10132; `false`
`hasBad("bad")` | &#10132; `true`
`hasBad("ba")` | &#10132; `false`
`hasBad("xba")` | &#10132; `false`
`hasBad("xbad")` | &#10132; `true`
`hasBad("")` | &#10132; `false`
`hasBad("badyy")` | &#10132; `true`
## atFirst
Given a string, return a string length 2 made of its first 2 chars. If the string length is less than 2, use '@' for the missing chars.
Example|Expected
-|-
`atFirst("hello")` | &#10132; `"he"`
`atFirst("hi")` | &#10132; `"hi"`
`atFirst("h")` | &#10132; `"h@"`
`atFirst("")` | &#10132; `"@@"`
`atFirst("kitten")` | &#10132; `"ki"`
`atFirst("java")` | &#10132; `"ja"`
`atFirst("j")` | &#10132; `"j@"`
## lastChars
Given 2 strings, a and b, return a new string made of the first char of a and the last char of b, so "yo" and "java" yields "ya". If either string is length 0, use '@' for its missing char.
Example|Expected
-|-
`lastChars("last", "chars")` | &#10132; `"ls"`
`lastChars("yo", "java")` | &#10132; `"ya"`
`lastChars("hi", "")` | &#10132; `"h@"`
`lastChars("", "hello")` | &#10132; `"@o"`
`lastChars("", "")` | &#10132; `"@@"`
`lastChars("kitten", "hi")` | &#10132; `"ki"`
`lastChars("k", "zip")` | &#10132; `"kp"`
`lastChars("kitten", "")` | &#10132; `"k@"`
`lastChars("kitten", "zip")` | &#10132; `"kp"`
## conCat
Given two strings, append them together (known as "concatenation") and return the result. However, if the concatenation creates a double-char, then omit one of the chars, so "abc" and "cat" yields "abcat".
Example|Expected
-|-
`conCat("abc", "cat")` | &#10132; `"abcat"`
`conCat("dog", "cat")` | &#10132; `"dogcat"`
`conCat("abc", "")` | &#10132; `"abc"`
`conCat("", "cat")` | &#10132; `"cat"`
`conCat("pig", "g")` | &#10132; `"pig"`
`conCat("pig", "doggy")` | &#10132; `"pigdoggy"`
## lastTwo
Given a string of any length, return a new string where the last 2 chars, if present, are swapped, so "coding" yields "codign".
Example|Expected
-|-
`lastTwo("coding")` | &#10132; `"codign"`
`lastTwo("cat")` | &#10132; `"cta"`
`lastTwo("ab")` | &#10132; `"ba"`
`lastTwo("a")` | &#10132; `"a"`
`lastTwo("")` | &#10132; `""`
## seeColor
Given a string, if the string begins with "red" or "blue" return that color string, otherwise return the empty string.
Example|Expected
-|-
`seeColor("redxx")` | &#10132; `"red"`
`seeColor("xxred")` | &#10132; `""`
`seeColor("blueTimes")` | &#10132; `"blue"`
`seeColor("NoColor")` | &#10132; `""`
`seeColor("red")` | &#10132; `"red"`
`seeColor("re")` | &#10132; `""`
`seeColor("blu")` | &#10132; `""`
`seeColor("blue")` | &#10132; `"blue"`
`seeColor("a")` | &#10132; `""`
`seeColor("")` | &#10132; `""`
`seeColor("xyzred")` | &#10132; `""`
## frontAgain
Given a string, return true if the first 2 chars in the string also appear at the end of the string, such as with "edited".
Example|Expected
-|-
`frontAgain("edited")` | &#10132; `true`
`frontAgain("edit")` | &#10132; `false`
`frontAgain("ed")` | &#10132; `true`
`frontAgain("jj")` | &#10132; `true`
`frontAgain("jjj")` | &#10132; `true`
`frontAgain("jjjj")` | &#10132; `true`
`frontAgain("jjjk")` | &#10132; `false`
`frontAgain("x")` | &#10132; `false`
`frontAgain("")` | &#10132; `false`
`frontAgain("java")` | &#10132; `false`
`frontAgain("javaja")` | &#10132; `true`
## minCat
Given two strings, append them together (known as "concatenation") and return the result. However, if the strings are different lengths, omit chars from the longer string so it is the same length as the shorter string. So "Hello" and "Hi" yield "loHi". The strings may be any length.
Example|Expected
-|-
`minCat("Hello", "Hi")` | &#10132; `"loHi"`
`minCat("Hello", "java")` | &#10132; `"ellojava"`
`minCat("java", "Hello")` | &#10132; `"javaello"`
`minCat("abc", "x")` | &#10132; `"cx"`
`minCat("x", "abc")` | &#10132; `"xc"`
`minCat("abc", "")` | &#10132; `""`
## extraFront
Given a string, return a new string made of 3 copies of the first 2 chars of the original string. The string may be any length. If there are fewer than 2 chars, use whatever is there.
Example|Expected
-|-
`extraFront("Hello")` | &#10132; `"HeHeHe"`
`extraFront("ab")` | &#10132; `"ababab"`
`extraFront("H")` | &#10132; `"HHH"`
`extraFront("")` | &#10132; `""`
`extraFront("Candy")` | &#10132; `"CaCaCa"`
`extraFront("Code")` | &#10132; `"CoCoCo"`
## without2
Given a string, if a length 2 substring appears at both its beginning and end, return a string without the substring at the beginning, so "HelloHe" yields "lloHe". The substring may overlap with itself, so "Hi" yields "". Otherwise, return the original string unchanged.
Example|Expected
-|-
`without2("HelloHe")` | &#10132; `"lloHe"`
`without2("HelloHi")` | &#10132; `"HelloHi"`
`without2("Hi")` | &#10132; `""`
`without2("Chocolate")` | &#10132; `"Chocolate"`
`without2("xxx")` | &#10132; `"x"`
`without2("xx")` | &#10132; `""`
`without2("x")` | &#10132; `"x"`
`without2("")` | &#10132; `""`
`without2("Fruits")` | &#10132; `"Fruits"`
## deFront
Given a string, return a version without the first 2 chars. Except keep the first char if it is 'a' and keep the second char if it is 'b'. The string may be any length. Harder than it looks.
Example|Expected
-|-
`deFront("Hello")` | &#10132; `"llo"`
`deFront("java")` | &#10132; `"va"`
`deFront("away")` | &#10132; `"aay"`
`deFront("axy")` | &#10132; `"ay"`
`deFront("abc")` | &#10132; `"abc"`
`deFront("xby")` | &#10132; `"by"`
`deFront("ab")` | &#10132; `"ab"`
`deFront("ax")` | &#10132; `"a"`
`deFront("axb")` | &#10132; `"ab"`
`deFront("aaa")` | &#10132; `"aa"`
`deFront("xbc")` | &#10132; `"bc"`
`deFront("bbb")` | &#10132; `"bb"`
`deFront("bazz")` | &#10132; `"zz"`
`deFront("ba")` | &#10132; `""`
`deFront("abxyz")` | &#10132; `"abxyz"`
`deFront("hi")` | &#10132; `""`
`deFront("his")` | &#10132; `"s"`
`deFront("xz")` | &#10132; `""`
`deFront("zzz")` | &#10132; `"z"`
## startWord
Given a string and a second "word" string, we'll say that the word matches the string if it appears at the front of the string, except its first char does not need to match exactly. On a match, return the front of the string, or otherwise return the empty string. So, so with the string "hippo" the word "hi" returns "hi" and "xip" returns "hip". The word will be at least length 1.
Example|Expected
-|-
`startWord("hippo", "hi")` | &#10132; `"hi"`
`startWord("hippo", "xip")` | &#10132; `"hip"`
`startWord("hippo", "i")` | &#10132; `"h"`
`startWord("hippo", "ix")` | &#10132; `""`
`startWord("h", "ix")` | &#10132; `""`
`startWord("", "i")` | &#10132; `""`
`startWord("hip", "zi")` | &#10132; `"hi"`
`startWord("hip", "zip")` | &#10132; `"hip"`
`startWord("hip", "zig")` | &#10132; `""`
`startWord("h", "z")` | &#10132; `"h"`
`startWord("hippo", "xippo")` | &#10132; `"hippo"`
`startWord("hippo", "xyz")` | &#10132; `""`
`startWord("hippo", "hip")` | &#10132; `"hip"`
`startWord("kitten", "cit")` | &#10132; `"kit"`
`startWord("kit", "cit")` | &#10132; `"kit"`
## withoutX
Given a string, if the first or last chars are 'x', return the string without those 'x' chars, and otherwise return the string unchanged.
Example|Expected
-|-
`withoutX("xHix")` | &#10132; `"Hi"`
`withoutX("xHi")` | &#10132; `"Hi"`
`withoutX("Hxix")` | &#10132; `"Hxi"`
`withoutX("Hi")` | &#10132; `"Hi"`
`withoutX("xxHi")` | &#10132; `"xHi"`
`withoutX("Hix")` | &#10132; `"Hi"`
`withoutX("xaxbx")` | &#10132; `"axb"`
`withoutX("xx")` | &#10132; `""`
`withoutX("x")` | &#10132; `""`
`withoutX("")` | &#10132; `""`
`withoutX("Hello")` | &#10132; `"Hello"`
`withoutX("Hexllo")` | &#10132; `"Hexllo"`
## withoutX2
Given a string, if one or both of the first 2 chars is 'x', return the string without those 'x' chars, and otherwise return the string unchanged. This is a little harder than it looks.
Example|Expected
-|-
`withoutX2("xHi")` | &#10132; `"Hi"`
`withoutX2("Hxi")` | &#10132; `"Hi"`
`withoutX2("Hi")` | &#10132; `"Hi"`
`withoutX2("xxHi")` | &#10132; `"Hi"`
`withoutX2("Hix")` | &#10132; `"Hix"`
`withoutX2("xaxb")` | &#10132; `"axb"`
`withoutX2("xx")` | &#10132; `""`
`withoutX2("x")` | &#10132; `""`
`withoutX2("")` | &#10132; `""`
`withoutX2("Hello")` | &#10132; `"Hello"`
`withoutX2("Hexllo")` | &#10132; `"Hexllo"`
`withoutX2("xHxllo")` | &#10132; `"Hxllo"`
