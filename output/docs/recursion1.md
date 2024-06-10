# Recursion 1
## factorial
Given n of 1 or more, return the factorial of n, which is n * (n-1) * (n-2) ... 1. Compute the result recursively (without loops).
Example|Expected
-|-
`factorial(1)` | &#10132; `1`
`factorial(2)` | &#10132; `2`
`factorial(3)` | &#10132; `6`
`factorial(4)` | &#10132; `24`
`factorial(5)` | &#10132; `120`
`factorial(6)` | &#10132; `720`
`factorial(7)` | &#10132; `5040`
`factorial(8)` | &#10132; `40320`
`factorial(12)` | &#10132; `479001600`
## bunnyEars
We have a number of bunnies and each bunny has two big floppy ears. We want to compute the total number of ears across all the bunnies recursively (without loops or multiplication).
Example|Expected
-|-
`bunnyEars(0)` | &#10132; `0`
`bunnyEars(1)` | &#10132; `2`
`bunnyEars(2)` | &#10132; `4`
`bunnyEars(3)` | &#10132; `6`
`bunnyEars(4)` | &#10132; `8`
`bunnyEars(5)` | &#10132; `10`
`bunnyEars(12)` | &#10132; `24`
`bunnyEars(50)` | &#10132; `100`
`bunnyEars(234)` | &#10132; `468`
## fibonacci
The fibonacci sequence is a famous bit of mathematics, and it happens to have a recursive definition. The first two values in the sequence are 0 and 1 (essentially 2 base cases). Each subsequent value is the sum of the previous two values, so the whole sequence is: 0, 1, 1, 2, 3, 5, 8, 13, 21 and so on. Define a recursive fibonacci(n) method that returns the nth fibonacci number, with n=0 representing the start of the sequence.
Example|Expected
-|-
`fibonacci(0)` | &#10132; `0`
`fibonacci(1)` | &#10132; `1`
`fibonacci(2)` | &#10132; `1`
`fibonacci(3)` | &#10132; `2`
`fibonacci(4)` | &#10132; `3`
`fibonacci(5)` | &#10132; `5`
`fibonacci(6)` | &#10132; `8`
`fibonacci(7)` | &#10132; `13`
## bunnyEars2
We have bunnies standing in a line, numbered 1, 2, ... The odd bunnies (1, 3, ..) have the normal 2 ears. The even bunnies (2, 4, ..) we'll say have 3 ears, because they each have a raised foot. Recursively return the number of "ears" in the bunny line 1, 2, ... n (without loops or multiplication).
Example|Expected
-|-
`bunnyEars2(0)` | &#10132; `0`
`bunnyEars2(1)` | &#10132; `2`
`bunnyEars2(2)` | &#10132; `5`
`bunnyEars2(3)` | &#10132; `7`
`bunnyEars2(4)` | &#10132; `10`
`bunnyEars2(5)` | &#10132; `12`
`bunnyEars2(6)` | &#10132; `15`
`bunnyEars2(10)` | &#10132; `25`
## triangle
We have triangle made of blocks. The topmost row has 1 block, the next row down has 2 blocks, the next row has 3 blocks, and so on. Compute recursively (no loops or multiplication) the total number of blocks in such a triangle with the given number of rows.
Example|Expected
-|-
`triangle(0)` | &#10132; `0`
`triangle(1)` | &#10132; `1`
`triangle(2)` | &#10132; `3`
`triangle(3)` | &#10132; `6`
`triangle(4)` | &#10132; `10`
`triangle(5)` | &#10132; `15`
`triangle(6)` | &#10132; `21`
`triangle(7)` | &#10132; `28`
## sumDigits1
Given a non-negative int n, return the sum of its digits recursively (no loops). Note that mod (%) by 10 yields the rightmost digit (126 % 10 is 6), while flooring division (Math.floor(n/10)) by 10 removes the rightmost digit [Math.floor(126 / 10) is 12].
Example|Expected
-|-
`sumDigits1(126)` | &#10132; `9`
`sumDigits1(49)` | &#10132; `13`
`sumDigits1(12)` | &#10132; `3`
`sumDigits1(10)` | &#10132; `1`
`sumDigits1(1)` | &#10132; `1`
`sumDigits1(0)` | &#10132; `0`
`sumDigits1(730)` | &#10132; `10`
`sumDigits1(1111)` | &#10132; `4`
`sumDigits1(11111)` | &#10132; `5`
`sumDigits1(10110)` | &#10132; `3`
`sumDigits1(235)` | &#10132; `10`
## count7
Given a non-negative int n, return the count of the occurrences of 7 as a digit, so for example 717 yields 2. (no loops). Note that mod (%) by 10 yields the rightmost digit (126 % 10 is 6), while flooring division (Math.floor(n/10)) by 10 removes the rightmost digit [Math.floor(126 / 10) is 12].
Example|Expected
-|-
`count7(717)` | &#10132; `2`
`count7(7)` | &#10132; `1`
`count7(123)` | &#10132; `0`
`count7(77)` | &#10132; `2`
`count7(7123)` | &#10132; `1`
`count7(771237)` | &#10132; `3`
`count7(771737)` | &#10132; `4`
`count7(47571)` | &#10132; `2`
`count7(777777)` | &#10132; `6`
`count7(70701277)` | &#10132; `4`
`count7(777576197)` | &#10132; `5`
`count7(99999)` | &#10132; `0`
`count7(99799)` | &#10132; `1`
## count8
Given a non-negative int n, compute recursively (no loops) the count of the occurrences of 8 as a digit, except that an 8 with another 8 immediately to its left counts double, so 8818 yields 4. Note that mod (%) by 10 yields the rightmost digit (126 % 10 is 6), while flooring division (Math.floor(n/10)) by 10 removes the rightmost digit [Math.floor(126 / 10) is 12].
Example|Expected
-|-
`count8(8)` | &#10132; `1`
`count8(818)` | &#10132; `2`
`count8(8818)` | &#10132; `4`
`count8(8088)` | &#10132; `4`
`count8(123)` | &#10132; `0`
`count8(81238)` | &#10132; `2`
`count8(88788)` | &#10132; `6`
`count8(8234)` | &#10132; `1`
`count8(2348)` | &#10132; `1`
`count8(23884)` | &#10132; `3`
`count8(0)` | &#10132; `0`
`count8(1818188)` | &#10132; `5`
`count8(8818181)` | &#10132; `5`
`count8(1080)` | &#10132; `1`
`count8(188)` | &#10132; `3`
`count8(88888)` | &#10132; `9`
`count8(9898)` | &#10132; `2`
`count8(78)` | &#10132; `1`
## powerN
Given base and n that are both 1 or more, compute recursively (no loops) the value of base to the n power, so powerN(3, 2) is 9 (3 squared).
Example|Expected
-|-
`powerN(3, 1)` | &#10132; `3`
`powerN(3, 2)` | &#10132; `9`
`powerN(3, 3)` | &#10132; `27`
`powerN(2, 1)` | &#10132; `2`
`powerN(2, 2)` | &#10132; `4`
`powerN(2, 3)` | &#10132; `8`
`powerN(2, 4)` | &#10132; `16`
`powerN(2, 5)` | &#10132; `32`
`powerN(10, 1)` | &#10132; `10`
`powerN(10, 2)` | &#10132; `100`
`powerN(10, 3)` | &#10132; `1000`
## countX
Given a string, compute recursively (no loops) the number of lowercase 'x' chars in the string.
Example|Expected
-|-
`countX("xxhixx")` | &#10132; `4`
`countX("xhixhix")` | &#10132; `3`
`countX("hi")` | &#10132; `0`
`countX("h")` | &#10132; `0`
`countX("x")` | &#10132; `1`
`countX("")` | &#10132; `0`
`countX("hihi")` | &#10132; `0`
`countX("hiAAhi12hi")` | &#10132; `0`
## countHi
Given a string, compute recursively (no loops) the number of times lowercase "hi" appears in the string.
Example|Expected
-|-
`countHi("xxhixx")` | &#10132; `1`
`countHi("xhixhix")` | &#10132; `2`
`countHi("hi")` | &#10132; `1`
`countHi("hihih")` | &#10132; `2`
`countHi("h")` | &#10132; `0`
`countHi("")` | &#10132; `0`
`countHi("ihihihihih")` | &#10132; `4`
`countHi("ihihihihihi")` | &#10132; `5`
`countHi("hiAAhi12hi")` | &#10132; `3`
`countHi("xhixhxihihhhih")` | &#10132; `3`
`countHi("ship")` | &#10132; `1`
## changeXY
Given a string, compute recursively (no loops) a new string where all the lowercase 'x' chars have been changed to 'y' chars.
Example|Expected
-|-
`changeXY("codex")` | &#10132; `"codey"`
`changeXY("xxhixx")` | &#10132; `"yyhiyy"`
`changeXY("xhixhix")` | &#10132; `"yhiyhiy"`
`changeXY("hiy")` | &#10132; `"hiy"`
`changeXY("h")` | &#10132; `"h"`
`changeXY("x")` | &#10132; `"y"`
`changeXY("")` | &#10132; `""`
`changeXY("xxx")` | &#10132; `"yyy"`
`changeXY("yyhxyi")` | &#10132; `"yyhyyi"`
`changeXY("hihi")` | &#10132; `"hihi"`
## changePi
Given a string, compute recursively (no loops) a new string where all appearances of "pi" have been replaced by "3.14".
Example|Expected
-|-
`changePi("xpix")` | &#10132; `"x3.14x"`
`changePi("pipi")` | &#10132; `"3.143.14"`
`changePi("pip")` | &#10132; `"3.14p"`
`changePi("pi")` | &#10132; `"3.14"`
`changePi("hip")` | &#10132; `"hip"`
`changePi("p")` | &#10132; `"p"`
`changePi("x")` | &#10132; `"x"`
`changePi("")` | &#10132; `""`
`changePi("pixx")` | &#10132; `"3.14xx"`
`changePi("xyzzy")` | &#10132; `"xyzzy"`
## noX
Given a string, compute recursively a new string where all the 'x' chars have been removed.
Example|Expected
-|-
`noX("xaxb")` | &#10132; `"ab"`
`noX("abc")` | &#10132; `"abc"`
`noX("xx")` | &#10132; `""`
`noX("")` | &#10132; `""`
`noX("axxbxx")` | &#10132; `"ab"`
`noX("Hellox")` | &#10132; `"Hello"`
## array6
Given an array of ints, compute recursively if the array contains a 6. We'll use the convention of considering only the part of the array that begins at the given index. In this way, a recursive call can pass index+1 to move down the array. The initial call will pass in index as 0.
Example|Expected
-|-
`array6([1,6,4], 0)` | &#10132; `true`
`array6([1,4], 0)` | &#10132; `false`
`array6([6], 0)` | &#10132; `true`
`array6([], 0)` | &#10132; `false`
`array6([6,2,2], 0)` | &#10132; `true`
`array6([2,5], 0)` | &#10132; `false`
`array6([1,9,4,6,6], 0)` | &#10132; `true`
`array6([2,5,6], 0)` | &#10132; `true`
## array11
Given an array of ints, compute recursively the number of times that the value 11 appears in the array. We'll use the convention of considering only the part of the array that begins at the given index. In this way, a recursive call can pass index+1 to move down the array. The initial call will pass in index as 0.
Example|Expected
-|-
`array11([1,2,11], 0)` | &#10132; `1`
`array11([11,11], 0)` | &#10132; `2`
`array11([1,2,3,4], 0)` | &#10132; `0`
`array11([1,11,3,11,11], 0)` | &#10132; `3`
`array11([11], 0)` | &#10132; `1`
`array11([1], 0)` | &#10132; `0`
`array11([], 0)` | &#10132; `0`
`array11([11,2,3,4,11,5], 0)` | &#10132; `2`
`array11([11,5,11], 0)` | &#10132; `2`
## array220
Given an array of ints, compute recursively if the array contains somewhere a value followed in the array by that value times 10. We'll use the convention of considering only the part of the array that begins at the given index. In this way, a recursive call can pass index+1 to move down the array. The initial call will pass in index as 0.
Example|Expected
-|-
`array220([1,2,20], 0)` | &#10132; `true`
`array220([3,30], 0)` | &#10132; `true`
`array220([3], 0)` | &#10132; `false`
`array220([], 0)` | &#10132; `false`
`array220([3,3,30,4], 0)` | &#10132; `true`
`array220([2,19,4], 0)` | &#10132; `false`
`array220([20,2,21], 0)` | &#10132; `false`
`array220([20,2,21,210], 0)` | &#10132; `true`
`array220([2,200,2000], 0)` | &#10132; `true`
`array220([0,0], 0)` | &#10132; `true`
`array220([1,2,3,4,5,6], 0)` | &#10132; `false`
`array220([1,2,3,4,5,50,6], 0)` | &#10132; `true`
`array220([1,2,3,4,5,51,6], 0)` | &#10132; `false`
`array220([1,2,3,4,4,50,500,6], 0)` | &#10132; `true`
## allStar
Given a string, compute recursively a new string where all the adjacent chars are now separated by a "*".
Example|Expected
-|-
`allStar("hello")` | &#10132; `"h*e*l*l*o"`
`allStar("abc")` | &#10132; `"a*b*c"`
`allStar("ab")` | &#10132; `"a*b"`
`allStar("a")` | &#10132; `"a"`
`allStar("")` | &#10132; `""`
`allStar("3.14")` | &#10132; `"3*.*1*4"`
`allStar("Chocolate")` | &#10132; `"C*h*o*c*o*l*a*t*e"`
`allStar("1234")` | &#10132; `"1*2*3*4"`
## pairStar
Given a string, compute recursively a new string where identical chars that are adjacent in the original string are separated from each other by a "*".
Example|Expected
-|-
`pairStar("hello")` | &#10132; `"hel*lo"`
`pairStar("xxyy")` | &#10132; `"x*xy*y"`
`pairStar("aaaa")` | &#10132; `"a*a*a*a"`
`pairStar("aaab")` | &#10132; `"a*a*ab"`
`pairStar("aa")` | &#10132; `"a*a"`
`pairStar("a")` | &#10132; `"a"`
`pairStar("")` | &#10132; `""`
`pairStar("noadjacent")` | &#10132; `"noadjacent"`
`pairStar("abba")` | &#10132; `"ab*ba"`
`pairStar("abbba")` | &#10132; `"ab*b*ba"`
## endX
Given a string, compute recursively a new string where all the lowercase 'x' chars have been moved to the end of the string.
Example|Expected
-|-
`endX("xxre")` | &#10132; `"rexx"`
`endX("xxhixx")` | &#10132; `"hixxxx"`
`endX("xhixhix")` | &#10132; `"hihixxx"`
`endX("hiy")` | &#10132; `"hiy"`
`endX("h")` | &#10132; `"h"`
`endX("x")` | &#10132; `"x"`
`endX("xx")` | &#10132; `"xx"`
`endX("")` | &#10132; `""`
`endX("bxx")` | &#10132; `"bxx"`
`endX("bxax")` | &#10132; `"baxx"`
`endX("axaxax")` | &#10132; `"aaaxxx"`
`endX("xxhxi")` | &#10132; `"hixxx"`
## countPairs
We'll say that a "pair" in a string is two instances of a char separated by a char. So "AxA" the A's make a pair. Pair's can overlap, so "AxAxA" contains 3 pairs -- 2 for A and 1 for x. Recursively compute the number of pairs in the given string.
Example|Expected
-|-
`countPairs("axa")` | &#10132; `1`
`countPairs("axax")` | &#10132; `2`
`countPairs("axbx")` | &#10132; `1`
`countPairs("hi")` | &#10132; `0`
`countPairs("hihih")` | &#10132; `3`
`countPairs("ihihhh")` | &#10132; `3`
`countPairs("ihjxhh")` | &#10132; `0`
`countPairs("")` | &#10132; `0`
`countPairs("a")` | &#10132; `0`
`countPairs("aa")` | &#10132; `0`
`countPairs("aaa")` | &#10132; `1`
## countAbc
Count recursively the total number of "abc" and "aba" substrings that appear in the given string.
Example|Expected
-|-
`countAbc("abc")` | &#10132; `1`
`countAbc("abcxxabc")` | &#10132; `2`
`countAbc("abaxxaba")` | &#10132; `2`
`countAbc("ababc")` | &#10132; `2`
`countAbc("abxbc")` | &#10132; `0`
`countAbc("aaabc")` | &#10132; `1`
`countAbc("hello")` | &#10132; `0`
`countAbc("")` | &#10132; `0`
`countAbc("ab")` | &#10132; `0`
`countAbc("aba")` | &#10132; `1`
`countAbc("aca")` | &#10132; `0`
`countAbc("aaa")` | &#10132; `0`
## count11
Given a string, compute recursively (no loops) the number of "11" substrings in the string. The "11" substrings should not overlap.
Example|Expected
-|-
`count11("11abc11")` | &#10132; `2`
`count11("abc11x11x11")` | &#10132; `3`
`count11("111")` | &#10132; `1`
`count11("1111")` | &#10132; `2`
`count11("1")` | &#10132; `0`
`count11("")` | &#10132; `0`
`count11("hi")` | &#10132; `0`
`count11("11x111x1111")` | &#10132; `4`
`count11("1x111")` | &#10132; `1`
`count11("1Hello1")` | &#10132; `0`
`count11("Hello")` | &#10132; `0`
## stringClean
Given a string, return recursively a "cleaned" string where adjacent chars that are the same have been reduced to a single char. So "yyzzza" yields "yza".
Example|Expected
-|-
`stringClean("yyzzza")` | &#10132; `"yza"`
`stringClean("abbbcdd")` | &#10132; `"abcd"`
`stringClean("Hello")` | &#10132; `"Helo"`
`stringClean("XXabcYY")` | &#10132; `"XabcY"`
`stringClean("112ab445")` | &#10132; `"12ab45"`
`stringClean("Hello Bookkeeper")` | &#10132; `"Helo Bokeper"`
## countHi2
Given a string, compute recursively the number of times lowercase "hi" appears in the string, however do not count "hi" that have an 'x' immedately before them.
Example|Expected
-|-
`countHi2("ahixhi")` | &#10132; `1`
`countHi2("ahibhi")` | &#10132; `2`
`countHi2("xhixhi")` | &#10132; `0`
`countHi2("hixhi")` | &#10132; `1`
`countHi2("hixhhi")` | &#10132; `2`
`countHi2("hihihi")` | &#10132; `3`
`countHi2("hihihix")` | &#10132; `3`
`countHi2("xhihihix")` | &#10132; `2`
`countHi2("xxhi")` | &#10132; `0`
`countHi2("hixxhi")` | &#10132; `1`
`countHi2("hi")` | &#10132; `1`
`countHi2("xxxx")` | &#10132; `0`
`countHi2("h")` | &#10132; `0`
`countHi2("x")` | &#10132; `0`
`countHi2("")` | &#10132; `0`
`countHi2("Hellohi")` | &#10132; `1`
## starBit
This question is modified from parenBit on CodingBat to starBit. Given a string that contains a dash and a star, compute recursively a new string made of only of the dash and star and their contents, so "xyz-abc*123" yields "-abc*".
Example|Expected
-|-
`starBit("xyz,-abc*123")` | &#10132; `"-abc*"`
`starBit("x,-hello*")` | &#10132; `"-hello*"`
`starBit(",-xy*1")` | &#10132; `"-xy*"`
`starBit("not really ,-possible*")` | &#10132; `"-possible*"`
`starBit(",-abc*")` | &#10132; `"-abc*"`
`starBit(",-abc*xyz")` | &#10132; `"-abc*"`
`starBit(",-abc*x")` | &#10132; `"-abc*"`
`starBit(",-x*")` | &#10132; `"-x*"`
`starBit(",-)*")` | &#10132; `"-)*"`
`starBit("res ,-ipsa* loquitor")` | &#10132; `"-ipsa*"`
`starBit("hello,-not really*there")` | &#10132; `"-not really*"`
`starBit("ab,-ab*ab")` | &#10132; `"-ab*"`
## nestParen
Given a string, return true if it is a nesting of zero or more pairs of parenthesis, like "(())" or "((()))". Suggestion: check the first and last chars, and then recur on what's inside them.
Example|Expected
-|-
`nestParen("(())")` | &#10132; `true`
`nestParen("((()))")` | &#10132; `true`
`nestParen("(((x))")` | &#10132; `false`
`nestParen("((())")` | &#10132; `false`
`nestParen("((()()")` | &#10132; `false`
`nestParen("()")` | &#10132; `true`
`nestParen("")` | &#10132; `true`
`nestParen("(yy)")` | &#10132; `false`
`nestParen("(())")` | &#10132; `true`
`nestParen("(((y))")` | &#10132; `false`
`nestParen("((y)))")` | &#10132; `false`
`nestParen("((()))")` | &#10132; `true`
`nestParen("(())))")` | &#10132; `false`
`nestParen("((yy())))")` | &#10132; `false`
`nestParen("(((())))")` | &#10132; `true`
## strCount
Given a string and a non-empty substring sub, compute recursively the number of times that sub appears in the string, without the sub strings overlapping.
Example|Expected
-|-
`strCount("catcowcat", "cat")` | &#10132; `2`
`strCount("catcowcat", "cow")` | &#10132; `1`
`strCount("catcowcat", "dog")` | &#10132; `0`
`strCount("cacatcowcat", "cat")` | &#10132; `2`
`strCount("xyx", "x")` | &#10132; `2`
`strCount("iiiijj", "i")` | &#10132; `4`
`strCount("iiiijj", "ii")` | &#10132; `2`
`strCount("iiiijj", "iii")` | &#10132; `1`
`strCount("iiiijj", "j")` | &#10132; `2`
`strCount("iiiijj", "jj")` | &#10132; `1`
`strCount("aaabababab", "ab")` | &#10132; `4`
`strCount("aaabababab", "aa")` | &#10132; `1`
`strCount("aaabababab", "a")` | &#10132; `6`
`strCount("aaabababab", "b")` | &#10132; `4`
## strCopies
Given a string and a non-empty substring sub, compute recursively if at least n copies of sub appear in the string somewhere, possibly with overlapping. N will be non-negative.
Example|Expected
-|-
`strCopies("catcowcat", "cat", 2)` | &#10132; `true`
`strCopies("catcowcat", "cow", 2)` | &#10132; `false`
`strCopies("catcowcat", "cow", 1)` | &#10132; `true`
`strCopies("iiijjj", "i", 3)` | &#10132; `true`
`strCopies("iiijjj", "i", 4)` | &#10132; `false`
`strCopies("iiijjj", "ii", 2)` | &#10132; `true`
`strCopies("iiijjj", "ii", 3)` | &#10132; `false`
`strCopies("iiijjj", "x", 3)` | &#10132; `false`
`strCopies("iiijjj", "x", 0)` | &#10132; `true`
`strCopies("iiiiij", "iii", 3)` | &#10132; `true`
`strCopies("iiiiij", "iii", 4)` | &#10132; `false`
`strCopies("ijiiiiij", "iiii", 2)` | &#10132; `true`
`strCopies("ijiiiiij", "iiii", 3)` | &#10132; `false`
`strCopies("dogcatdogcat", "dog", 2)` | &#10132; `true`
## strDist
Given a string and a non-empty substring sub, compute recursively the largest substring which starts and ends with sub and return its length.
Example|Expected
-|-
`strDist("catcowcat", "cat")` | &#10132; `9`
`strDist("catcowcat", "cow")` | &#10132; `3`
`strDist("cccatcowcatxx", "cat")` | &#10132; `9`
`strDist("abccatcowcatcatxyz", "cat")` | &#10132; `12`
`strDist("xyx", "x")` | &#10132; `3`
`strDist("xyx", "y")` | &#10132; `1`
`strDist("xyx", "z")` | &#10132; `0`
`strDist("z", "z")` | &#10132; `1`
`strDist("x", "z")` | &#10132; `0`
`strDist("", "z")` | &#10132; `0`
`strDist("hiHellohihihi", "hi")` | &#10132; `13`
`strDist("hiHellohihihi", "hih")` | &#10132; `5`
`strDist("hiHellohihihi", "o")` | &#10132; `1`
`strDist("hiHellohihihi", "ll")` | &#10132; `2`
