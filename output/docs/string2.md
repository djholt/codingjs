# String 2
## doubleChar
Given a string, return a string where for every char in the original, there are two chars.
Example|Expected
-|-
`doubleChar("The")` | &#10132; `"TThhee"`
`doubleChar("AAbb")` | &#10132; `"AAAAbbbb"`
`doubleChar("Hi-There")` | &#10132; `"HHii--TThheerree"`
`doubleChar("Word!")` | &#10132; `"WWoorrdd!!"`
`doubleChar("!!")` | &#10132; `"!!!!"`
`doubleChar("")` | &#10132; `""`
`doubleChar("a")` | &#10132; `"aa"`
`doubleChar(".")` | &#10132; `".."`
`doubleChar("aa")` | &#10132; `"aaaa"`
## countHi
Return the number of times that the string "hi" appears anywhere in the given string.
Example|Expected
-|-
`countHi("abc hi ho")` | &#10132; `1`
`countHi("ABChi hi")` | &#10132; `2`
`countHi("hihi")` | &#10132; `2`
`countHi("hiHIhi")` | &#10132; `2`
`countHi("")` | &#10132; `0`
`countHi("h")` | &#10132; `0`
`countHi("hi")` | &#10132; `1`
`countHi("Hi is no HI on ahI")` | &#10132; `0`
`countHi("hiho not HOHIhi")` | &#10132; `2`
## catDog
Return true if the string "cat" and "dog" appear the same number of times in the given string.
Example|Expected
-|-
`catDog("catdog")` | &#10132; `true`
`catDog("catcat")` | &#10132; `false`
`catDog("1cat1cadodog")` | &#10132; `true`
`catDog("catxxdogxxxdog")` | &#10132; `false`
`catDog("catxdogxdogxcat")` | &#10132; `true`
`catDog("catxdogxdogxca")` | &#10132; `false`
`catDog("dogdogcat")` | &#10132; `false`
`catDog("dogogcat")` | &#10132; `true`
`catDog("dog")` | &#10132; `false`
`catDog("cat")` | &#10132; `false`
`catDog("ca")` | &#10132; `true`
`catDog("c")` | &#10132; `true`
`catDog("")` | &#10132; `true`
## countCode
Return the number of times that the string "code" appears anywhere in the given string, except we'll accept any letter for the 'd', so "cope" and "cooe" count.
Example|Expected
-|-
`countCode("aaacodebbb")` | &#10132; `1`
`countCode("codexxcode")` | &#10132; `2`
`countCode("cozexxcope")` | &#10132; `2`
`countCode("cozfxxcope")` | &#10132; `1`
`countCode("xxcozeyycop")` | &#10132; `1`
`countCode("cozcop")` | &#10132; `0`
`countCode("abcxyz")` | &#10132; `0`
`countCode("code")` | &#10132; `1`
`countCode("ode")` | &#10132; `0`
`countCode("c")` | &#10132; `0`
`countCode("")` | &#10132; `0`
`countCode("AAcodeBBcoleCCccoreDD")` | &#10132; `3`
`countCode("AAcodeBBcoleCCccorfDD")` | &#10132; `2`
`countCode("coAcodeBcoleccoreDD")` | &#10132; `3`
## endOther
Given two strings, return true if either of the strings appears at the very end of the other string, ignoring upper/lower case differences (in other words, the computation should not be "case sensitive"). Note: str.toLowerCase() returns the lowercase version of a string.
Example|Expected
-|-
`endOther("Hiabc", "abc")` | &#10132; `true`
`endOther("AbC", "HiaBc")` | &#10132; `true`
`endOther("abc", "abXabc")` | &#10132; `true`
`endOther("Hiabc", "abcd")` | &#10132; `false`
`endOther("Hiabc", "bc")` | &#10132; `true`
`endOther("Hiabcx", "bc")` | &#10132; `false`
`endOther("abc", "abc")` | &#10132; `true`
`endOther("xyz", "12xyz")` | &#10132; `true`
`endOther("yz", "12xz")` | &#10132; `false`
`endOther("Z", "12xz")` | &#10132; `true`
`endOther("12", "12")` | &#10132; `true`
`endOther("abcXYZ", "abcDEF")` | &#10132; `false`
`endOther("ab", "ab12")` | &#10132; `false`
`endOther("ab", "12ab")` | &#10132; `true`
## xyzThere
Return true if the given string contains an appearance of "xyz" where the xyz is not directly preceeded by a period (.). So "xxyz" counts but "x.xyz" does not.
Example|Expected
-|-
`xyzThere("abcxyz")` | &#10132; `true`
`xyzThere("abc.xyz")` | &#10132; `false`
`xyzThere("xyz.abc")` | &#10132; `true`
`xyzThere("abcxy")` | &#10132; `false`
`xyzThere("xyz")` | &#10132; `true`
`xyzThere("xy")` | &#10132; `false`
`xyzThere("x")` | &#10132; `false`
`xyzThere("")` | &#10132; `false`
`xyzThere("abc.xyzxyz")` | &#10132; `true`
`xyzThere("abc.xxyz")` | &#10132; `true`
`xyzThere(".xyz")` | &#10132; `false`
`xyzThere("12.xyz")` | &#10132; `false`
`xyzThere("12xyz")` | &#10132; `true`
`xyzThere("1.xyz.xyz2.xyz")` | &#10132; `false`
## bobThere
Return true if the given string contains a "bob" string, but where the middle 'o' char can be any char.
Example|Expected
-|-
`bobThere("abcbob")` | &#10132; `true`
`bobThere("b9b")` | &#10132; `true`
`bobThere("bac")` | &#10132; `false`
`bobThere("bbb")` | &#10132; `true`
`bobThere("abcdefb")` | &#10132; `false`
`bobThere("123abcbcdbabxyz")` | &#10132; `true`
`bobThere("b12")` | &#10132; `false`
`bobThere("b1b")` | &#10132; `true`
`bobThere("b12b1b")` | &#10132; `true`
`bobThere("bbc")` | &#10132; `false`
`bobThere("bbb")` | &#10132; `true`
`bobThere("bb")` | &#10132; `false`
`bobThere("b")` | &#10132; `false`
## xyBalance
We'll say that a String is xy-balanced if for all the 'x' chars in the string, there exists a 'y' char somewhere later in the string. So "xxy" is balanced, but "xyx" is not. One 'y' can balance multiple 'x's. Return true if the given string is xy-balanced.
Example|Expected
-|-
`xyBalance("aaxbby")` | &#10132; `true`
`xyBalance("aaxbb")` | &#10132; `false`
`xyBalance("yaaxbb")` | &#10132; `false`
`xyBalance("yaaxbby")` | &#10132; `true`
`xyBalance("xaxxbby")` | &#10132; `true`
`xyBalance("xaxxbbyx")` | &#10132; `false`
`xyBalance("xxbxy")` | &#10132; `true`
`xyBalance("xxbx")` | &#10132; `false`
`xyBalance("bbb")` | &#10132; `true`
`xyBalance("bxbb")` | &#10132; `false`
`xyBalance("bxyb")` | &#10132; `true`
`xyBalance("xy")` | &#10132; `true`
`xyBalance("y")` | &#10132; `true`
`xyBalance("x")` | &#10132; `false`
`xyBalance("")` | &#10132; `true`
`xyBalance("yxyxyxyx")` | &#10132; `false`
`xyBalance("yxyxyxyxy")` | &#10132; `true`
`xyBalance("12xabxxydxyxyzz")` | &#10132; `true`
## mixString
Given two strings, a and b, create a bigger string made of the first char of a, the first char of b, the second char of a, the second char of b, and so on. Any leftover chars go at the end of the result.
Example|Expected
-|-
`mixString("abc", "xyz")` | &#10132; `"axbycz"`
`mixString("Hi", "There")` | &#10132; `"HTihere"`
`mixString("xxxx", "There")` | &#10132; `"xTxhxexre"`
`mixString("xxx", "X")` | &#10132; `"xXxx"`
`mixString("2/", "27 around")` | &#10132; `"22/7 around"`
`mixString("", "Hello")` | &#10132; `"Hello"`
`mixString("Abc", "")` | &#10132; `"Abc"`
`mixString("", "")` | &#10132; `""`
`mixString("a", "b")` | &#10132; `"ab"`
`mixString("ax", "b")` | &#10132; `"abx"`
`mixString("a", "bx")` | &#10132; `"abx"`
`mixString("So", "Long")` | &#10132; `"SLoong"`
`mixString("Long", "So")` | &#10132; `"LSoong"`
## repeatEnd
Given a string and an int n, return a string made of n repetitions of the last n characters of the string. You may assume that n is between 0 and the length of the string, inclusive.
Example|Expected
-|-
`repeatEnd("Hello", 3)` | &#10132; `"llollollo"`
`repeatEnd("Hello", 2)` | &#10132; `"lolo"`
`repeatEnd("Hello", 1)` | &#10132; `"o"`
`repeatEnd("Hello", 0)` | &#10132; `""`
`repeatEnd("abc", 3)` | &#10132; `"abcabcabc"`
`repeatEnd("1234", 2)` | &#10132; `"3434"`
`repeatEnd("1234", 3)` | &#10132; `"234234234"`
`repeatEnd("", 0)` | &#10132; `""`
## repeatFront
Given a string and an int n, return a string made of the first n characters of the string, followed by the first n-1 characters of the string, and so on. You may assume that n is between 0 and the length of the string, inclusive (i.e. n >= 0 and n <= str.length()).
Example|Expected
-|-
`repeatFront("Chocolate", 4)` | &#10132; `"ChocChoChC"`
`repeatFront("Chocolate", 3)` | &#10132; `"ChoChC"`
`repeatFront("Ice Cream", 2)` | &#10132; `"IcI"`
`repeatFront("Ice Cream", 1)` | &#10132; `"I"`
`repeatFront("Ice Cream", 0)` | &#10132; `""`
`repeatFront("xyz", 3)` | &#10132; `"xyzxyx"`
`repeatFront("", 0)` | &#10132; `""`
`repeatFront("Java", 4)` | &#10132; `"JavaJavJaJ"`
`repeatFront("Java", 1)` | &#10132; `"J"`
## repeatSeparator
Given two strings, word and a separator sep, return a big string made of count occurrences of the word, separated by the separator string.
Example|Expected
-|-
`repeatSeparator("Word", "X", 3)` | &#10132; `"WordXWordXWord"`
`repeatSeparator("This", "And", 2)` | &#10132; `"ThisAndThis"`
`repeatSeparator("This", "And", 1)` | &#10132; `"This"`
`repeatSeparator("Hi", "-n-", 2)` | &#10132; `"Hi-n-Hi"`
`repeatSeparator("AAA", "", 1)` | &#10132; `"AAA"`
`repeatSeparator("AAA", "", 0)` | &#10132; `""`
`repeatSeparator("A", "B", 5)` | &#10132; `"ABABABABA"`
`repeatSeparator("abc", "XX", 3)` | &#10132; `"abcXXabcXXabc"`
`repeatSeparator("abc", "XX", 2)` | &#10132; `"abcXXabc"`
`repeatSeparator("abc", "XX", 1)` | &#10132; `"abc"`
`repeatSeparator("XYZ", "a", 2)` | &#10132; `"XYZaXYZ"`
## prefixAgain
Given a string, consider the prefix string made of the first N chars of the string. Does that prefix string appear somewhere else in the string? Assume that the string is not empty and that N is in the range 1..str.length().
Example|Expected
-|-
`prefixAgain("abXYabc", 1)` | &#10132; `true`
`prefixAgain("abXYabc", 2)` | &#10132; `true`
`prefixAgain("abXYabc", 3)` | &#10132; `false`
`prefixAgain("xyzxyxyxy", 2)` | &#10132; `true`
`prefixAgain("xyzxyxyxy", 3)` | &#10132; `false`
`prefixAgain("Hi12345Hi6789Hi10", 1)` | &#10132; `true`
`prefixAgain("Hi12345Hi6789Hi10", 2)` | &#10132; `true`
`prefixAgain("Hi12345Hi6789Hi10", 3)` | &#10132; `true`
`prefixAgain("Hi12345Hi6789Hi10", 4)` | &#10132; `false`
`prefixAgain("a", 1)` | &#10132; `false`
`prefixAgain("aa", 1)` | &#10132; `true`
`prefixAgain("ab", 1)` | &#10132; `false`
## xyzMiddle
Given a string, does "xyz" appear in the middle of the string? To define middle, we'll say that the number of chars to the left and right of the "xyz" must differ by at most one. This problem is harder than it looks.
Example|Expected
-|-
`xyzMiddle("AAxyzBB")` | &#10132; `true`
`xyzMiddle("AxyzBB")` | &#10132; `true`
`xyzMiddle("AxyzBBB")` | &#10132; `false`
`xyzMiddle("AxyzBBBB")` | &#10132; `false`
`xyzMiddle("AAAxyzB")` | &#10132; `false`
`xyzMiddle("AAAxyzBB")` | &#10132; `true`
`xyzMiddle("AAAAxyzBB")` | &#10132; `false`
`xyzMiddle("AAAAAxyzBBB")` | &#10132; `false`
`xyzMiddle("1x345xyz12x4")` | &#10132; `true`
`xyzMiddle("xyzAxyzBBB")` | &#10132; `true`
`xyzMiddle("xyzAxyzBxyz")` | &#10132; `true`
`xyzMiddle("xyzxyzAxyzBxyzxyz")` | &#10132; `true`
`xyzMiddle("xyzxyzxyzBxyzxyz")` | &#10132; `true`
`xyzMiddle("xyzxyzAxyzxyzxyz")` | &#10132; `true`
`xyzMiddle("xyzxyzAxyzxyzxy")` | &#10132; `false`
`xyzMiddle("AxyzxyzBB")` | &#10132; `false`
`xyzMiddle("")` | &#10132; `false`
`xyzMiddle("x")` | &#10132; `false`
`xyzMiddle("xy")` | &#10132; `false`
`xyzMiddle("xyz")` | &#10132; `true`
`xyzMiddle("xyzz")` | &#10132; `true`
## getSandwich
A sandwich is two pieces of bread with something in between. Return the string that is between the first and last appearance of "bread" in the given string, or return the empty string "" if there are not two pieces of bread.
Example|Expected
-|-
`getSandwich("breadjambread")` | &#10132; `"jam"`
`getSandwich("xxbreadjambreadyy")` | &#10132; `"jam"`
`getSandwich("xxbreadyy")` | &#10132; `""`
`getSandwich("xxbreadbreadjambreadyy")` | &#10132; `"breadjam"`
`getSandwich("breadAbread")` | &#10132; `"A"`
`getSandwich("breadbread")` | &#10132; `""`
`getSandwich("abcbreaz")` | &#10132; `""`
`getSandwich("xyz")` | &#10132; `""`
`getSandwich("")` | &#10132; `""`
`getSandwich("breadbreaxbread")` | &#10132; `"breax"`
`getSandwich("breaxbreadybread")` | &#10132; `"y"`
`getSandwich("breadbreadbreadbread")` | &#10132; `"breadbread"`
## sameStarChar
Returns true if for every '*' (star) in the string, if there are chars both immediately before and after the star, they are the same.
Example|Expected
-|-
`sameStarChar("xy*yzz")` | &#10132; `true`
`sameStarChar("xy*zzz")` | &#10132; `false`
`sameStarChar("*xa*az")` | &#10132; `true`
`sameStarChar("*xa*bz")` | &#10132; `false`
`sameStarChar("*xa*a*")` | &#10132; `true`
`sameStarChar("")` | &#10132; `true`
`sameStarChar("*xa*a*a")` | &#10132; `true`
`sameStarChar("*xa*a*b")` | &#10132; `false`
`sameStarChar("*12*2*2")` | &#10132; `true`
`sameStarChar("12*2*3*")` | &#10132; `false`
`sameStarChar("abcDEF")` | &#10132; `true`
`sameStarChar("XY*YYYY*Z*")` | &#10132; `false`
`sameStarChar("XY*YYYY*Y*")` | &#10132; `true`
`sameStarChar("12*2*3*")` | &#10132; `false`
`sameStarChar("*")` | &#10132; `true`
`sameStarChar("**")` | &#10132; `true`
## oneTwo
Given a string, compute a new string by moving the first char to come after the next two chars, so "abc" yields "bca". Repeat this process for each subsequent group of 3 chars, so "abcdef" yields "bcaefd". Ignore any group of fewer than 3 chars at the end.
Example|Expected
-|-
`oneTwo("abc")` | &#10132; `"bca"`
`oneTwo("tca")` | &#10132; `"cat"`
`oneTwo("tcagdo")` | &#10132; `"catdog"`
`oneTwo("chocolate")` | &#10132; `"hocolctea"`
`oneTwo("1234567890")` | &#10132; `"231564897"`
`oneTwo("xabxabxabxabxabxabxab")` | &#10132; `"abxabxabxabxabxabxabx"`
`oneTwo("abcdefx")` | &#10132; `"bcaefd"`
`oneTwo("abcdefxy")` | &#10132; `"bcaefd"`
`oneTwo("abcdefxyz")` | &#10132; `"bcaefdyzx"`
`oneTwo("")` | &#10132; `""`
`oneTwo("x")` | &#10132; `""`
`oneTwo("xy")` | &#10132; `""`
`oneTwo("xyz")` | &#10132; `"yzx"`
`oneTwo("abcdefghijklkmnopqrstuvwxyz1234567890")` | &#10132; `"bcaefdhigkljmnkpqostrvwuyzx231564897"`
`oneTwo("abcdefghijklkmnopqrstuvwxyz123456789")` | &#10132; `"bcaefdhigkljmnkpqostrvwuyzx231564897"`
`oneTwo("abcdefghijklkmnopqrstuvwxyz12345678")` | &#10132; `"bcaefdhigkljmnkpqostrvwuyzx231564"`
## zipZap
Look for patterns like "zip" and "zap" in the string -- length-3, starting with 'z' and ending with 'p'. Return a string where for all such words, the middle letter is gone, so "zipXzap" yields "zpXzp".
Example|Expected
-|-
`zipZap("zipXzap")` | &#10132; `"zpXzp"`
`zipZap("zopzop")` | &#10132; `"zpzp"`
`zipZap("zzzopzop")` | &#10132; `"zzzpzp"`
`zipZap("zibzap")` | &#10132; `"zibzp"`
`zipZap("zip")` | &#10132; `"zp"`
`zipZap("zi")` | &#10132; `"zi"`
`zipZap("z")` | &#10132; `"z"`
`zipZap("")` | &#10132; `""`
`zipZap("zzp")` | &#10132; `"zp"`
`zipZap("abcppp")` | &#10132; `"abcppp"`
`zipZap("azbcppp")` | &#10132; `"azbcppp"`
`zipZap("azbcpzpp")` | &#10132; `"azbcpzp"`
## starOut
Return a version of the given string, where for every star (*) in the string the star and the chars immediately to its left and right are gone. So "ab*cd" yields "ad" and "ab**cd" also yields "ad".
Example|Expected
-|-
`starOut("ab*cd")` | &#10132; `"ad"`
`starOut("ab**cd")` | &#10132; `"ad"`
`starOut("sm*eilly")` | &#10132; `"silly"`
`starOut("sm*eil*ly")` | &#10132; `"siy"`
`starOut("sm**eil*ly")` | &#10132; `"siy"`
`starOut("sm***eil*ly")` | &#10132; `"siy"`
`starOut("stringy*")` | &#10132; `"string"`
`starOut("*stringy")` | &#10132; `"tringy"`
`starOut("*str*in*gy")` | &#10132; `"ty"`
`starOut("abc")` | &#10132; `"abc"`
`starOut("a*bc")` | &#10132; `"c"`
`starOut("ab")` | &#10132; `"ab"`
`starOut("a*b")` | &#10132; `""`
`starOut("a")` | &#10132; `"a"`
`starOut("a*")` | &#10132; `""`
`starOut("*a")` | &#10132; `""`
`starOut("*")` | &#10132; `""`
`starOut("")` | &#10132; `""`
## plusOut
Given a string and a non-empty word string, return a version of the original String where all chars have been replaced by pluses ("+"), except for appearances of the word string which are preserved unchanged.
Example|Expected
-|-
`plusOut("12xy34", "xy")` | &#10132; `"++xy++"`
`plusOut("12xy34", "1")` | &#10132; `"1+++++"`
`plusOut("12xy34xyabcxy", "xy")` | &#10132; `"++xy++xy+++xy"`
`plusOut("abXYabcXYZ", "ab")` | &#10132; `"ab++ab++++"`
`plusOut("abXYabcXYZ", "abc")` | &#10132; `"++++abc+++"`
`plusOut("abXYabcXYZ", "XY")` | &#10132; `"++XY+++XY+"`
`plusOut("abXYxyzXYZ", "XYZ")` | &#10132; `"+++++++XYZ"`
`plusOut("--++ab", "++")` | &#10132; `"++++++"`
`plusOut("aaxxxxbb", "xx")` | &#10132; `"++xxxx++"`
`plusOut("123123", "3")` | &#10132; `"++3++3"`
## wordEnds
Given a string and a non-empty word string, return a string made of each char just before and just after every appearance of the word in the string. Ignore cases where there is no char before or after the word, and a char may be included twice if it is between two words.
Example|Expected
-|-
`wordEnds("abcXY123XYijk", "XY")` | &#10132; `"c13i"`
`wordEnds("XY123XY", "XY")` | &#10132; `"13"`
`wordEnds("XY1XY", "XY")` | &#10132; `"11"`
`wordEnds("XYXY", "XY")` | &#10132; `"XY"`
`wordEnds("XY", "XY")` | &#10132; `""`
`wordEnds("Hi", "XY")` | &#10132; `""`
`wordEnds("", "XY")` | &#10132; `""`
`wordEnds("abc1xyz1i1j", "1")` | &#10132; `"cxziij"`
`wordEnds("abc1xyz1", "1")` | &#10132; `"cxz"`
`wordEnds("abc1xyz11", "1")` | &#10132; `"cxz11"`
`wordEnds("abc1xyz1abc", "abc")` | &#10132; `"11"`
`wordEnds("abc1xyz1abc", "b")` | &#10132; `"acac"`
`wordEnds("abc1abc1abc", "abc")` | &#10132; `"1111"`
