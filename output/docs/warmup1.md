# Warmup 1
## sleepIn
The parameter weekday is true if it is a weekday, and the parameter vacation is true if we are on vacation. We sleep in if it is not a weekday or we're on vacation. Return true if we sleep in.
Example|Expected
-|-
`sleepIn(true, true)` | &#10132; `true`
`sleepIn(true, false)` | &#10132; `false`
`sleepIn(false, true)` | &#10132; `true`
`sleepIn(false, false)` | &#10132; `true`
## monkeyTrouble
We have two monkeys, a and b, and the parameters aSmile and bSmile indicate if each is smiling. We are in trouble if they are both smiling or if neither of them is smiling. Return true if we are in trouble.
Example|Expected
-|-
`monkeyTrouble(true, true)` | &#10132; `true`
`monkeyTrouble(false, false)` | &#10132; `true`
`monkeyTrouble(true, false)` | &#10132; `false`
`monkeyTrouble(false, true)` | &#10132; `false`
## sumDouble
Given two int values, return their sum. Unless the two values are the same, then return double their sum.
Example|Expected
-|-
`sumDouble(1, 2)` | &#10132; `3`
`sumDouble(3, 2)` | &#10132; `5`
`sumDouble(2, 2)` | &#10132; `8`
`sumDouble(-1, 0)` | &#10132; `-1`
`sumDouble(3, 3)` | &#10132; `12`
`sumDouble(0, 0)` | &#10132; `0`
`sumDouble(0, 1)` | &#10132; `1`
`sumDouble(3, 4)` | &#10132; `7`
## diff21
Given an int n, return the absolute difference between n and 21, except return double the absolute difference if n is over 21.
Example|Expected
-|-
`diff21(19)` | &#10132; `2`
`diff21(10)` | &#10132; `11`
`diff21(21)` | &#10132; `0`
`diff21(22)` | &#10132; `2`
`diff21(25)` | &#10132; `8`
`diff21(30)` | &#10132; `18`
`diff21(0)` | &#10132; `21`
`diff21(1)` | &#10132; `20`
`diff21(2)` | &#10132; `19`
`diff21(-1)` | &#10132; `22`
`diff21(-2)` | &#10132; `23`
`diff21(50)` | &#10132; `58`
## parrotTrouble
We have a loud talking parrot. The "hour" parameter is the current hour time in the range 0..23. We are in trouble if the parrot is talking and the hour is before 7 or after 20. Return true if we are in trouble.
Example|Expected
-|-
`parrotTrouble(true, 6)` | &#10132; `true`
`parrotTrouble(true, 7)` | &#10132; `false`
`parrotTrouble(false, 6)` | &#10132; `false`
`parrotTrouble(true, 21)` | &#10132; `true`
`parrotTrouble(false, 21)` | &#10132; `false`
`parrotTrouble(true, 23)` | &#10132; `true`
`parrotTrouble(false, 23)` | &#10132; `false`
`parrotTrouble(true, 20)` | &#10132; `false`
`parrotTrouble(false, 12)` | &#10132; `false`
## makes10
Given 2 ints, a and b, return true if one if them is 10 or if their sum is 10.
Example|Expected
-|-
`makes10(9, 10)` | &#10132; `true`
`makes10(9, 9)` | &#10132; `false`
`makes10(1, 9)` | &#10132; `true`
`makes10(10, 1)` | &#10132; `true`
`makes10(10, 10)` | &#10132; `true`
`makes10(8, 2)` | &#10132; `true`
`makes10(8, 3)` | &#10132; `false`
`makes10(10, 42)` | &#10132; `true`
`makes10(12, -2)` | &#10132; `true`
## nearHundred
Given an int n, return true if it is within 10 of 100 or 200. Note: Math.abs(num) computes the absolute value of a number.
Example|Expected
-|-
`nearHundred(93)` | &#10132; `true`
`nearHundred(90)` | &#10132; `true`
`nearHundred(89)` | &#10132; `false`
`nearHundred(110)` | &#10132; `true`
`nearHundred(111)` | &#10132; `false`
`nearHundred(121)` | &#10132; `false`
`nearHundred(0)` | &#10132; `false`
`nearHundred(5)` | &#10132; `false`
`nearHundred(191)` | &#10132; `true`
`nearHundred(189)` | &#10132; `false`
## posNeg
Given 2 int values, return true if one is negative and one is positive. Except if the parameter "negative" is true, then return true only if both are negative.
Example|Expected
-|-
`posNeg(1, -1, false)` | &#10132; `true`
`posNeg(-1, 1, false)` | &#10132; `true`
`posNeg(-4, -5, true)` | &#10132; `true`
`posNeg(-4, -5, false)` | &#10132; `false`
`posNeg(-4, 5, false)` | &#10132; `true`
`posNeg(-4, 5, true)` | &#10132; `false`
`posNeg(1, 1, false)` | &#10132; `false`
`posNeg(-1, -1, false)` | &#10132; `false`
`posNeg(1, -1, true)` | &#10132; `false`
`posNeg(-1, 1, true)` | &#10132; `false`
`posNeg(1, 1, true)` | &#10132; `false`
`posNeg(-1, -1, true)` | &#10132; `true`
`posNeg(5, -5, false)` | &#10132; `true`
`posNeg(-6, 6, false)` | &#10132; `true`
`posNeg(-5, -6, false)` | &#10132; `false`
`posNeg(-2, -1, false)` | &#10132; `false`
`posNeg(1, 2, false)` | &#10132; `false`
`posNeg(-5, 6, true)` | &#10132; `false`
`posNeg(-5, -5, true)` | &#10132; `true`
## notString
Given a string, return a new string where "not " has been added to the front. However, if the string already begins with "not", return the string unchanged.
Example|Expected
-|-
`notString("candy")` | &#10132; `"not candy"`
`notString("x")` | &#10132; `"not x"`
`notString("not bad")` | &#10132; `"not bad"`
`notString("bad")` | &#10132; `"not bad"`
`notString("not")` | &#10132; `"not"`
`notString("is not")` | &#10132; `"not is not"`
`notString("no")` | &#10132; `"not no"`
## missingChar
Given a non-empty string and an int n, return a new string where the char at index n has been removed. The value of n will be a valid index of a char in the original string (i.e. n will be in the range 0..str.length()-1 inclusive).
Example|Expected
-|-
`missingChar("kitten", 1)` | &#10132; `"ktten"`
`missingChar("kitten", 0)` | &#10132; `"itten"`
`missingChar("kitten", 4)` | &#10132; `"kittn"`
`missingChar("Hi", 0)` | &#10132; `"i"`
`missingChar("Hi", 1)` | &#10132; `"H"`
`missingChar("code", 0)` | &#10132; `"ode"`
`missingChar("code", 1)` | &#10132; `"cde"`
`missingChar("code", 2)` | &#10132; `"coe"`
`missingChar("code", 3)` | &#10132; `"cod"`
`missingChar("chocolate", 8)` | &#10132; `"chocolat"`
## frontBack
Given a string, return a new string where the first and last chars have been exchanged.
Example|Expected
-|-
`frontBack("code")` | &#10132; `"eodc"`
`frontBack("a")` | &#10132; `"a"`
`frontBack("ab")` | &#10132; `"ba"`
`frontBack("abc")` | &#10132; `"cba"`
`frontBack("")` | &#10132; `""`
`frontBack("Chocolate")` | &#10132; `"ehocolatC"`
`frontBack("aavj")` | &#10132; `"java"`
`frontBack("hello")` | &#10132; `"oellh"`
## front3
Given a string, we'll say that the front is the first 3 chars of the string. If the string length is less than 3, the front is whatever is there. Return a new string which is 3 copies of the front.
Example|Expected
-|-
`front3("Java")` | &#10132; `"JavJavJav"`
`front3("Chocolate")` | &#10132; `"ChoChoCho"`
`front3("abc")` | &#10132; `"abcabcabc"`
`front3("abcXYZ")` | &#10132; `"abcabcabc"`
`front3("ab")` | &#10132; `"ababab"`
`front3("a")` | &#10132; `"aaa"`
`front3("")` | &#10132; `""`
## backAround
Given a string, take the last char and return a new string with the last char added at the front and back, so 'cat' yields 'tcatt' The original string will be length 1 or more.
Example|Expected
-|-
`backAround("cat")` | &#10132; `"tcatt"`
`backAround("Hello")` | &#10132; `"oHelloo"`
`backAround("a")` | &#10132; `"aaa"`
`backAround("abc")` | &#10132; `"cabcc"`
`backAround("read")` | &#10132; `"dreadd"`
`backAround("boo")` | &#10132; `"obooo"`
## or35
Return true if the given non-negative number is a multiple of 3 or a multiple of 5. (Hint: Use the % 'mod' operator)
Example|Expected
-|-
`or35(3)` | &#10132; `true`
`or35(10)` | &#10132; `true`
`or35(8)` | &#10132; `false`
`or35(15)` | &#10132; `true`
`or35(5)` | &#10132; `true`
`or35(4)` | &#10132; `false`
`or35(9)` | &#10132; `true`
`or35(4)` | &#10132; `false`
`or35(7)` | &#10132; `false`
`or35(6)` | &#10132; `true`
`or35(17)` | &#10132; `false`
`or35(18)` | &#10132; `true`
`or35(29)` | &#10132; `false`
`or35(20)` | &#10132; `true`
`or35(21)` | &#10132; `true`
`or35(22)` | &#10132; `false`
`or35(45)` | &#10132; `true`
`or35(99)` | &#10132; `true`
`or35(100)` | &#10132; `true`
`or35(101)` | &#10132; `false`
`or35(121)` | &#10132; `false`
`or35(122)` | &#10132; `false`
`or35(123)` | &#10132; `true`
## front22
Given a string, take the first 2 chars and return the string with the 2 chars added at both the front and back, so 'kitten' yields 'kikittenki' chars are there.
Example|Expected
-|-
`front22("kitten")` | &#10132; `"kikittenki"`
`front22("Ha")` | &#10132; `"HaHaHa"`
`front22("abc")` | &#10132; `"ababcab"`
`front22("ab")` | &#10132; `"ababab"`
`front22("a")` | &#10132; `"aaa"`
`front22("")` | &#10132; `""`
`front22("Logic")` | &#10132; `"LoLogicLo"`
## startHi
Given a string, return true if the string starts with 'hi'and false otherwise.
Example|Expected
-|-
`startHi("hi there")` | &#10132; `true`
`startHi("hi")` | &#10132; `true`
`startHi("hello hi")` | &#10132; `false`
`startHi("he")` | &#10132; `false`
`startHi("h")` | &#10132; `false`
`startHi("")` | &#10132; `false`
`startHi("ho hi")` | &#10132; `false`
`startHi("hi ho")` | &#10132; `true`
## icyHot
Given two temperatures, return true if one is less than 0 and the other is greater than 100.
Example|Expected
-|-
`icyHot(120, -1)` | &#10132; `true`
`icyHot(-1, 120)` | &#10132; `true`
`icyHot(2, 120)` | &#10132; `false`
`icyHot(-1, 100)` | &#10132; `false`
`icyHot(-2, 120)` | &#10132; `true`
`icyHot(120, 120)` | &#10132; `false`
## in1020
Given 2 int values, return true if either of them is in the range 10..20 inclusive.
Example|Expected
-|-
`in1020(12, 99)` | &#10132; `true`
`in1020(21, 12)` | &#10132; `true`
`in1020(8, 99)` | &#10132; `false`
`in1020(99, 10)` | &#10132; `true`
`in1020(20, 20)` | &#10132; `true`
`in1020(21, 21)` | &#10132; `false`
`in1020(9, 9)` | &#10132; `false`
## hasTeen
We'll say that a number is 'teen' if it is in the range 13..19 inclusive. Given 3 int values, return true if 1 or more of them are teen.
Example|Expected
-|-
`hasTeen(13, 20, 10)` | &#10132; `true`
`hasTeen(20, 19, 10)` | &#10132; `true`
`hasTeen(20, 10, 13)` | &#10132; `true`
`hasTeen(1, 20, 12)` | &#10132; `false`
`hasTeen(19, 20, 12)` | &#10132; `true`
`hasTeen(12, 20, 19)` | &#10132; `true`
`hasTeen(12, 9, 20)` | &#10132; `false`
`hasTeen(12, 18, 20)` | &#10132; `true`
`hasTeen(14, 2, 20)` | &#10132; `true`
`hasTeen(4, 2, 20)` | &#10132; `false`
`hasTeen(11, 22, 22)` | &#10132; `false`
## loneTeen
We'll say that a number is 'teen' if it is in the range 13..19 inclusive. Given 2 int values, return true if one or the other is teen, but not both.
Example|Expected
-|-
`loneTeen(13, 99)` | &#10132; `true`
`loneTeen(21, 19)` | &#10132; `true`
`loneTeen(13, 13)` | &#10132; `false`
`loneTeen(14, 20)` | &#10132; `true`
`loneTeen(20, 15)` | &#10132; `true`
`loneTeen(16, 17)` | &#10132; `false`
`loneTeen(16, 9)` | &#10132; `true`
`loneTeen(16, 18)` | &#10132; `false`
`loneTeen(13, 19)` | &#10132; `false`
`loneTeen(13, 20)` | &#10132; `true`
`loneTeen(6, 18)` | &#10132; `true`
`loneTeen(99, 13)` | &#10132; `true`
`loneTeen(99, 99)` | &#10132; `false`
## delDel
Given a string, if the string "del" appears starting at index 1, return a string where that "del" has been deleted. Otherwise, return the string unchanged.
Example|Expected
-|-
`delDel("adelbc")` | &#10132; `"abc"`
`delDel("adelHello")` | &#10132; `"aHello"`
`delDel("abcdel")` | &#10132; `"abcdel"`
`delDel("add")` | &#10132; `"add"`
`delDel("ad")` | &#10132; `"ad"`
`delDel("a")` | &#10132; `"a"`
`delDel("")` | &#10132; `""`
`delDel("del")` | &#10132; `"del"`
`delDel("adel")` | &#10132; `"a"`
`delDel("aadelbb")` | &#10132; `"aadelbb"`
## mixStart
Return true if the given string begins with 'mix', except the 'm' can be anything, so 'pix', '9ix' .. all count.
Example|Expected
-|-
`mixStart("mix snacks")` | &#10132; `true`
`mixStart("pix snacks")` | &#10132; `true`
`mixStart("piz snacks")` | &#10132; `false`
`mixStart("nix")` | &#10132; `true`
`mixStart("ni")` | &#10132; `false`
`mixStart("n")` | &#10132; `false`
## startOz
Given a string, return a string made of the first 2 chars (if present), however include first char only if it is 'o' and include the second only if it is 'z', so 'ozymandias' yields 'oz'.
Example|Expected
-|-
`startOz("ozymandias")` | &#10132; `"oz"`
`startOz("bzoo")` | &#10132; `"z"`
`startOz("oxx")` | &#10132; `"o"`
`startOz("ounce")` | &#10132; `"o"`
`startOz("o")` | &#10132; `"o"`
`startOz("abc")` | &#10132; `""`
`startOz("")` | &#10132; `""`
`startOz("zoo")` | &#10132; `""`
`startOz("aztec")` | &#10132; `"z"`
`startOz("zzzz")` | &#10132; `"z"`
`startOz("oznic")` | &#10132; `"oz"`
## intMax
Given three int values, a b c, return the largest.
Example|Expected
-|-
`intMax(1, 2, 3)` | &#10132; `3`
`intMax(1, 3, 2)` | &#10132; `3`
`intMax(3, 2, 1)` | &#10132; `3`
`intMax(9, 3, 3)` | &#10132; `9`
`intMax(3, 9, 3)` | &#10132; `9`
`intMax(3, 3, 9)` | &#10132; `9`
`intMax(8, 2, 3)` | &#10132; `8`
`intMax(-3, -1, -2)` | &#10132; `-1`
`intMax(6, 2, 5)` | &#10132; `6`
`intMax(5, 6, 2)` | &#10132; `6`
`intMax(5, 2, 6)` | &#10132; `6`
## close10
Given 2 int values, return whichever value is nearest to the value 10, or return 0 in the event of a tie. Note that Math.abs(n) returns the absolute value of a number.
Example|Expected
-|-
`close10(8, 13)` | &#10132; `8`
`close10(13, 8)` | &#10132; `8`
`close10(13, 7)` | &#10132; `0`
`close10(7, 13)` | &#10132; `0`
`close10(9, 13)` | &#10132; `9`
`close10(13, 8)` | &#10132; `8`
`close10(10, 12)` | &#10132; `10`
`close10(11, 10)` | &#10132; `10`
`close10(5, 21)` | &#10132; `5`
`close10(0, 20)` | &#10132; `0`
`close10(0, 20)` | &#10132; `0`
`close10(10, 10)` | &#10132; `0`
## in3050
Given 2 int values, return true if they are both in the range 30..40 inclusive, or they are both in the range 40..50 inclusive.
Example|Expected
-|-
`in3050(30, 31)` | &#10132; `true`
`in3050(30, 41)` | &#10132; `false`
`in3050(40, 50)` | &#10132; `true`
`in3050(40, 51)` | &#10132; `false`
`in3050(39, 50)` | &#10132; `false`
`in3050(50, 39)` | &#10132; `false`
`in3050(40, 39)` | &#10132; `true`
`in3050(49, 48)` | &#10132; `true`
`in3050(50, 40)` | &#10132; `true`
`in3050(50, 51)` | &#10132; `false`
`in3050(35, 36)` | &#10132; `true`
`in3050(35, 45)` | &#10132; `false`
## max1020
Given 2 positive int values, return the larger value that is in the range 10..20 inclusive, or return 0 if neither is in that range.
Example|Expected
-|-
`max1020(11, 19)` | &#10132; `19`
`max1020(19, 11)` | &#10132; `19`
`max1020(11, 9)` | &#10132; `11`
`max1020(9, 21)` | &#10132; `0`
`max1020(10, 21)` | &#10132; `10`
`max1020(21, 10)` | &#10132; `10`
`max1020(9, 11)` | &#10132; `11`
`max1020(23, 10)` | &#10132; `10`
`max1020(20, 10)` | &#10132; `20`
`max1020(7, 20)` | &#10132; `20`
`max1020(17, 16)` | &#10132; `17`
## stringE
Return true if the given string contains between 1 and 3 'e' chars.
Example|Expected
-|-
`stringE("Hello")` | &#10132; `true`
`stringE("Heelle")` | &#10132; `true`
`stringE("Heelele")` | &#10132; `false`
`stringE("HII")` | &#10132; `false`
`stringE("e")` | &#10132; `true`
`stringE("")` | &#10132; `false`
## lastDigit
Given two non-negative int values, return true if they have the same last digit, such as with 27 and 57. Note that the % 'mod' operator computes remainders, so 17 % 10 is 7.
Example|Expected
-|-
`lastDigit(7, 17)` | &#10132; `true`
`lastDigit(6, 17)` | &#10132; `false`
`lastDigit(3, 113)` | &#10132; `true`
`lastDigit(114, 113)` | &#10132; `false`
`lastDigit(114, 4)` | &#10132; `true`
`lastDigit(10, 0)` | &#10132; `true`
`lastDigit(11, 0)` | &#10132; `false`
## endUp
Given a string, return a new string where the last 3 chars are now in upper case. If the string has less than 3 chars, uppercase whatever is there. Note that str.toUpperCase() returns the uppercase version of a string.
Example|Expected
-|-
`endUp("Hello")` | &#10132; `"HeLLO"`
`endUp("hi there")` | &#10132; `"hi thERE"`
`endUp("hi")` | &#10132; `"HI"`
`endUp("woo hoo")` | &#10132; `"woo HOO"`
`endUp("xyz12")` | &#10132; `"xyZ12"`
`endUp("x")` | &#10132; `"X"`
`endUp("")` | &#10132; `""`
## everyNth
Given a non-empty string and an int N, return the string made starting with char 0, and then every Nth char of the string. So if N is 3, use char 0, 3, 6, ... and so on. N is 1 or more.
Example|Expected
-|-
`everyNth("Miracle", 2)` | &#10132; `"Mrce"`
`everyNth("abcdefg", 2)` | &#10132; `"aceg"`
`everyNth("abcdefg", 3)` | &#10132; `"adg"`
`everyNth("Chocolate", 3)` | &#10132; `"Cca"`
`everyNth("Chocolates", 3)` | &#10132; `"Ccas"`
`everyNth("Chocolates", 4)` | &#10132; `"Coe"`
`everyNth("Chocolates", 100)` | &#10132; `"C"`
