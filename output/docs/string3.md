# String 3
## countYZ
Given a string, count the number of words ending in 'y' or 'z' -- so the 'y' in "heavy" and the 'z' in "fez" count, but not the 'y' in "yellow" (not case sensitive). We'll say that a y or z is at the end of a word if there is not an alphabetic letter immediately following it. (Note: Character.isLetter(char) tests if a char is an alphabetic letter.)
Example|Expected
-|-
`countYZ("fez day")` | &#10132; `2`
`countYZ("day fez")` | &#10132; `2`
`countYZ("day fyyyz")` | &#10132; `2`
`countYZ("day yak")` | &#10132; `1`
`countYZ("day:yak")` | &#10132; `1`
`countYZ("!!day--yaz!!")` | &#10132; `2`
`countYZ("yak zak")` | &#10132; `0`
`countYZ("DAY abc XYZ")` | &#10132; `2`
`countYZ("aaz yyz my")` | &#10132; `3`
`countYZ("y2bz")` | &#10132; `2`
`countYZ("zxyx")` | &#10132; `0`
## withoutString
Given two strings, base and remove, return a version of the base string where all instances of the remove string have been removed (not case sensitive). You may assume that the remove string is length 1 or more. Remove only non-overlapping instances, so with "xxx" removing "xx" leaves "x".
Example|Expected
-|-
`withoutString("Hello there", "llo")` | &#10132; `"He there"`
`withoutString("Hello there", "e")` | &#10132; `"Hllo thr"`
`withoutString("Hello there", "x")` | &#10132; `"Hello there"`
`withoutString("This is a FISH", "IS")` | &#10132; `"Th a FH"`
`withoutString("THIS is a FISH", "is")` | &#10132; `"TH a FH"`
`withoutString("THIS is a FISH", "iS")` | &#10132; `"TH a FH"`
`withoutString("abxxxxab", "xx")` | &#10132; `"abab"`
`withoutString("abxxxab", "xx")` | &#10132; `"abxab"`
`withoutString("abxxxab", "x")` | &#10132; `"abab"`
`withoutString("xxx", "x")` | &#10132; `""`
`withoutString("xxx", "xx")` | &#10132; `"x"`
`withoutString("xyzzy", "Y")` | &#10132; `"xzz"`
`withoutString("", "x")` | &#10132; `""`
`withoutString("abcabc", "b")` | &#10132; `"acac"`
`withoutString("AA22bb", "2")` | &#10132; `"AAbb"`
`withoutString("1111", "1")` | &#10132; `""`
`withoutString("1111", "11")` | &#10132; `""`
`withoutString("MkjtMkx", "Mk")` | &#10132; `"jtx"`
`withoutString("Hi HoHo", "Ho")` | &#10132; `"Hi "`
## equalIsNot
Given a string, return true if the number of appearances of "is" anywhere in the string is equal to the number of appearances of "not" anywhere in the string (case sensitive).
Example|Expected
-|-
`equalIsNot("This is not")` | &#10132; `false`
`equalIsNot("This is notnot")` | &#10132; `true`
`equalIsNot("noisxxnotyynotxisi")` | &#10132; `true`
`equalIsNot("noisxxnotyynotxsi")` | &#10132; `false`
`equalIsNot("xxxyyyzzzintint")` | &#10132; `true`
`equalIsNot("")` | &#10132; `true`
`equalIsNot("isisnotnot")` | &#10132; `true`
`equalIsNot("isisnotno7Not")` | &#10132; `false`
`equalIsNot("isnotis")` | &#10132; `false`
`equalIsNot("mis3notpotbotis")` | &#10132; `false`
## gHappy
We'll say that a lowercase 'g' in a string is "happy" if there is another 'g' immediately to its left or right. Return true if all the g's in the given string are happy.
Example|Expected
-|-
`gHappy("xxggxx")` | &#10132; `true`
`gHappy("xxgxx")` | &#10132; `false`
`gHappy("xxggyygxx")` | &#10132; `false`
`gHappy("g")` | &#10132; `false`
`gHappy("gg")` | &#10132; `true`
`gHappy("")` | &#10132; `true`
`gHappy("xxgggxyz")` | &#10132; `true`
`gHappy("xxgggxyg")` | &#10132; `false`
`gHappy("xxgggxygg")` | &#10132; `true`
`gHappy("mgm")` | &#10132; `false`
`gHappy("mggm")` | &#10132; `true`
`gHappy("yyygggxyy")` | &#10132; `true`
## countTriple
We'll say that a "triple" in a string is a char appearing three times in a row. Return the number of triples in the given string. The triples may overlap.
Example|Expected
-|-
`countTriple("abcXXXabc")` | &#10132; `1`
`countTriple("xxxabyyyycd")` | &#10132; `3`
`countTriple("a")` | &#10132; `0`
`countTriple("")` | &#10132; `0`
`countTriple("XXXabc")` | &#10132; `1`
`countTriple("XXXXabc")` | &#10132; `2`
`countTriple("XXXXXabc")` | &#10132; `3`
`countTriple("222abyyycdXXX")` | &#10132; `3`
`countTriple("abYYYabXXXXXab")` | &#10132; `4`
`countTriple("abYYXabXXYXXab")` | &#10132; `0`
`countTriple("abYYXabXXYXXab")` | &#10132; `0`
`countTriple("122abhhh2")` | &#10132; `1`
## sumDigits
Given a string, return the sum of the digits 0-9 that appear in the string, ignoring all other characters. Return 0 if there are no digits in the string. (Note: Character.isDigit(char) tests if a char is one of the chars '0', '1', .. '9'. Integer.parseInt(string) converts a string to an int.)
Example|Expected
-|-
`sumDigits("aa1bc2d3")` | &#10132; `6`
`sumDigits("aa11b33")` | &#10132; `8`
`sumDigits("Chocolate")` | &#10132; `0`
`sumDigits("5hoco1a1e")` | &#10132; `7`
`sumDigits("123abc123")` | &#10132; `12`
`sumDigits("")` | &#10132; `0`
`sumDigits("Hello")` | &#10132; `0`
`sumDigits("X1z9b2")` | &#10132; `12`
`sumDigits("5432a")` | &#10132; `14`
## sameEnds
Given a string, return the longest substring that appears at both the beginning and end of the string without overlapping. For example, sameEnds("abXab") is "ab".
Example|Expected
-|-
`sameEnds("abXYab")` | &#10132; `"ab"`
`sameEnds("xx")` | &#10132; `"x"`
`sameEnds("xxx")` | &#10132; `"x"`
`sameEnds("xxxx")` | &#10132; `"xx"`
`sameEnds("javaXYZjava")` | &#10132; `"java"`
`sameEnds("javajava")` | &#10132; `"java"`
`sameEnds("xavaXYZjava")` | &#10132; `""`
`sameEnds("Hello! and Hello!")` | &#10132; `"Hello!"`
`sameEnds("x")` | &#10132; `""`
`sameEnds("")` | &#10132; `""`
`sameEnds("abcb")` | &#10132; `""`
`sameEnds("mymmy")` | &#10132; `"my"`
## mirrorEnds
Given a string, look for a mirror image (backwards) string at both the beginning and end of the given string. In other words, zero or more characters at the very begining of the given string, and at the very end of the string in reverse order (possibly overlapping). For example, the string "abXYZba" has the mirror end "ab".
Example|Expected
-|-
`mirrorEnds("abXYZba")` | &#10132; `"ab"`
`mirrorEnds("abca")` | &#10132; `"a"`
`mirrorEnds("aba")` | &#10132; `"aba"`
`mirrorEnds("abab")` | &#10132; `""`
`mirrorEnds("xxx")` | &#10132; `"xxx"`
`mirrorEnds("xxYxx")` | &#10132; `"xxYxx"`
`mirrorEnds("Hi and iH")` | &#10132; `"Hi "`
`mirrorEnds("x")` | &#10132; `"x"`
`mirrorEnds("")` | &#10132; `""`
`mirrorEnds("123and then 321")` | &#10132; `"123"`
`mirrorEnds("band andab")` | &#10132; `"ba"`
## maxBlock
Given a string, return the length of the largest "block" in the string. A block is a run of adjacent chars that are the same.
Example|Expected
-|-
`maxBlock("hoopla")` | &#10132; `2`
`maxBlock("abbCCCddBBBxx")` | &#10132; `3`
`maxBlock("")` | &#10132; `0`
`maxBlock("xyz")` | &#10132; `1`
`maxBlock("xxyz")` | &#10132; `2`
`maxBlock("xyzz")` | &#10132; `2`
`maxBlock("abbbcbbbxbbbx")` | &#10132; `3`
`maxBlock("XXBBBbbxx")` | &#10132; `3`
`maxBlock("XXBBBBbbxx")` | &#10132; `4`
`maxBlock("XXBBBbbxxXXXX")` | &#10132; `4`
`maxBlock("XX2222BBBbbXX2222")` | &#10132; `4`
## sumNumbers
Given a string, return the sum of the numbers appearing in the string, ignoring all other characters. A number is a series of 1 or more digit chars in a row. (Note: Character.isDigit(char) tests if a char is one of the chars '0', '1', .. '9'. Integer.parseInt(string) converts a string to an int.)
Example|Expected
-|-
`sumNumbers("abc123xyz")` | &#10132; `123`
`sumNumbers("aa11b33")` | &#10132; `44`
`sumNumbers("7 11")` | &#10132; `18`
`sumNumbers("Chocolate")` | &#10132; `0`
`sumNumbers("5hoco1a1e")` | &#10132; `7`
`sumNumbers("5$$1;;1!!")` | &#10132; `7`
`sumNumbers("a1234bb11")` | &#10132; `1245`
`sumNumbers("")` | &#10132; `0`
`sumNumbers("a22bbb3")` | &#10132; `25`
## notReplace
Given a string, return a string where every appearance of the lowercase word "is" has been replaced with "is not". The word "is" should not be immediately preceeded or followed by a letter -- so for example the "is" in "this" does not count. (Note: Character.isLetter(char) tests if a char is a letter.)
Example|Expected
-|-
`notReplace("is test")` | &#10132; `"is not test"`
`notReplace("is-is")` | &#10132; `"is not-is not"`
`notReplace("This is right")` | &#10132; `"This is not right"`
`notReplace("This is isabell")` | &#10132; `"This is not isabell"`
`notReplace("")` | &#10132; `""`
`notReplace("is")` | &#10132; `"is not"`
`notReplace("isis")` | &#10132; `"isis"`
`notReplace("Dis is bliss is")` | &#10132; `"Dis is not bliss is not"`
`notReplace("is his")` | &#10132; `"is not his"`
`notReplace("xis yis")` | &#10132; `"xis yis"`
`notReplace("AAAis is")` | &#10132; `"AAAis is not"`
