# Logic 1
## cigarParty
When squirrels get together for a party, they like to have cigars. A squirrel party is successful when the number of cigars is between 40 and 60, inclusive. Unless it is the weekend, in which case there is no upper bound on the number of cigars. Return true if the party with the given values is successful, or false otherwise.
Example|Expected
-|-
`cigarParty(30, false)` | &#10132; `false`
`cigarParty(50, false)` | &#10132; `true`
`cigarParty(70, true)` | &#10132; `true`
`cigarParty(30, true)` | &#10132; `false`
`cigarParty(50, true)` | &#10132; `true`
`cigarParty(60, false)` | &#10132; `true`
`cigarParty(61, false)` | &#10132; `false`
`cigarParty(40, false)` | &#10132; `true`
`cigarParty(39, false)` | &#10132; `false`
`cigarParty(40, true)` | &#10132; `true`
`cigarParty(39, true)` | &#10132; `false`
## dateFashion
You and your date are trying to get a table at a restaurant. The parameter "you" is the stylishness of your clothes, in the range 0..10, and "date" is the stylishness of your date's clothes. The result getting the table is encoded as an int value with 0=no, 1=maybe, 2=yes. If either of you is very stylish, 8 or more, then the result is 2 (yes). With the exception that if either of you has style of 2 or less, then the result is 0 (no). Otherwise the result is 1 (maybe).
Example|Expected
-|-
`dateFashion(5, 10)` | &#10132; `2`
`dateFashion(5, 2)` | &#10132; `0`
`dateFashion(5, 5)` | &#10132; `1`
`dateFashion(3, 3)` | &#10132; `1`
`dateFashion(10, 2)` | &#10132; `0`
`dateFashion(2, 9)` | &#10132; `0`
`dateFashion(9, 9)` | &#10132; `2`
`dateFashion(10, 5)` | &#10132; `2`
`dateFashion(2, 2)` | &#10132; `0`
`dateFashion(3, 7)` | &#10132; `1`
`dateFashion(2, 7)` | &#10132; `0`
`dateFashion(6, 2)` | &#10132; `0`
## squirrelPlay
The squirrels in Palo Alto spend most of the day playing. In particular, they play if the temperature is between 60 and 90 (inclusive). Unless it is summer, then the upper limit is 100 instead of 90. Given an int temperature and a boolean isSummer, return true if the squirrels play and false otherwise.
Example|Expected
-|-
`squirrelPlay(70, false)` | &#10132; `true`
`squirrelPlay(95, false)` | &#10132; `false`
`squirrelPlay(95, true)` | &#10132; `true`
`squirrelPlay(90, false)` | &#10132; `true`
`squirrelPlay(90, true)` | &#10132; `true`
`squirrelPlay(50, false)` | &#10132; `false`
`squirrelPlay(50, true)` | &#10132; `false`
`squirrelPlay(100, false)` | &#10132; `false`
`squirrelPlay(100, true)` | &#10132; `true`
`squirrelPlay(105, true)` | &#10132; `false`
`squirrelPlay(59, false)` | &#10132; `false`
`squirrelPlay(59, true)` | &#10132; `false`
`squirrelPlay(60, false)` | &#10132; `true`
## caughtSpeeding
You are driving a little too fast, and a police officer stops you. Write code to compute the result, encoded as an int value: 0=no ticket, 1=small ticket, 2=big ticket. If speed is 60 or less, the result is 0. If speed is between 61 and 80 inclusive, the result is 1. If speed is 81 or more, the result is 2. Unless it is your birthday -- on that day, your speed can be 5 higher in all cases.
Example|Expected
-|-
`caughtSpeeding(60, false)` | &#10132; `0`
`caughtSpeeding(65, false)` | &#10132; `1`
`caughtSpeeding(65, true)` | &#10132; `0`
`caughtSpeeding(80, false)` | &#10132; `1`
`caughtSpeeding(85, false)` | &#10132; `2`
`caughtSpeeding(85, true)` | &#10132; `1`
`caughtSpeeding(70, false)` | &#10132; `1`
`caughtSpeeding(75, false)` | &#10132; `1`
`caughtSpeeding(75, true)` | &#10132; `1`
`caughtSpeeding(40, false)` | &#10132; `0`
`caughtSpeeding(40, true)` | &#10132; `0`
`caughtSpeeding(90, false)` | &#10132; `2`
## sortaSum
Given 2 ints, a and b, return their sum. However, sums in the range 10..19 inclusive, are forbidden, so in that case just return 20.
Example|Expected
-|-
`sortaSum(3, 4)` | &#10132; `7`
`sortaSum(9, 4)` | &#10132; `20`
`sortaSum(10, 11)` | &#10132; `21`
`sortaSum(12, -3)` | &#10132; `9`
`sortaSum(-3, 12)` | &#10132; `9`
`sortaSum(4, 5)` | &#10132; `9`
`sortaSum(4, 6)` | &#10132; `20`
`sortaSum(14, 7)` | &#10132; `21`
`sortaSum(14, 6)` | &#10132; `20`
## alarmClock
Given a day of the week encoded as 0=Sun, 1=Mon, 2=Tue, ...6=Sat, and a boolean indicating if we are on vacation, return a string of the form "7:00" indicating when the alarm clock should ring. Weekdays, the alarm should be "7:00" and on the weekend it should be "10:00". Unless we are on vacation -- then on weekdays it should be "10:00" and weekends it should be "off".
Example|Expected
-|-
`alarmClock(1, false)` | &#10132; `"7:00"`
`alarmClock(5, false)` | &#10132; `"7:00"`
`alarmClock(0, false)` | &#10132; `"10:00"`
`alarmClock(6, false)` | &#10132; `"10:00"`
`alarmClock(0, true)` | &#10132; `"off"`
`alarmClock(6, true)` | &#10132; `"off"`
`alarmClock(1, true)` | &#10132; `"10:00"`
`alarmClock(3, true)` | &#10132; `"10:00"`
`alarmClock(5, true)` | &#10132; `"10:00"`
## love6
The number 6 is a truly great number. Given two int values, a and b, return true if either one is 6. Or if their sum or difference is 6. Note: the function Math.abs(num) computes the absolute value of a number.
Example|Expected
-|-
`love6(6, 4)` | &#10132; `true`
`love6(4, 5)` | &#10132; `false`
`love6(1, 5)` | &#10132; `true`
`love6(1, 6)` | &#10132; `true`
`love6(1, 8)` | &#10132; `false`
`love6(1, 7)` | &#10132; `true`
`love6(7, 5)` | &#10132; `false`
`love6(8, 2)` | &#10132; `true`
`love6(6, 6)` | &#10132; `true`
`love6(-6, 2)` | &#10132; `false`
`love6(-4, -10)` | &#10132; `true`
`love6(-7, 1)` | &#10132; `false`
`love6(7, -1)` | &#10132; `true`
`love6(-6, 12)` | &#10132; `true`
`love6(-2, -4)` | &#10132; `false`
`love6(7, 1)` | &#10132; `true`
`love6(0, 9)` | &#10132; `false`
`love6(8, 3)` | &#10132; `false`
`love6(3, 3)` | &#10132; `true`
`love6(3, 4)` | &#10132; `false`
## in1To10
Given a number n, return true if n is in the range 1..10, inclusive. Unless "outsideMode" is true, in which case return true if the number is less or equal to 1, or greater or equal to 10.
Example|Expected
-|-
`in1To10(5, false)` | &#10132; `true`
`in1To10(11, false)` | &#10132; `false`
`in1To10(11, true)` | &#10132; `true`
`in1To10(10, false)` | &#10132; `true`
`in1To10(10, true)` | &#10132; `true`
`in1To10(9, false)` | &#10132; `true`
`in1To10(9, true)` | &#10132; `false`
`in1To10(1, false)` | &#10132; `true`
`in1To10(1, true)` | &#10132; `true`
`in1To10(0, false)` | &#10132; `false`
`in1To10(0, true)` | &#10132; `true`
`in1To10(-1, false)` | &#10132; `false`
## specialEleven
We'll say a number is special if it is a multiple of 11 or if it is one more than a multiple of 11. Return true if the given non-negative number is special. Use the % "mod" operator.
Example|Expected
-|-
`specialEleven(22)` | &#10132; `true`
`specialEleven(23)` | &#10132; `true`
`specialEleven(24)` | &#10132; `false`
`specialEleven(21)` | &#10132; `false`
`specialEleven(11)` | &#10132; `true`
`specialEleven(12)` | &#10132; `true`
`specialEleven(10)` | &#10132; `false`
`specialEleven(9)` | &#10132; `false`
`specialEleven(8)` | &#10132; `false`
`specialEleven(0)` | &#10132; `true`
`specialEleven(1)` | &#10132; `true`
`specialEleven(2)` | &#10132; `false`
`specialEleven(121)` | &#10132; `true`
`specialEleven(122)` | &#10132; `true`
`specialEleven(123)` | &#10132; `false`
`specialEleven(46)` | &#10132; `false`
`specialEleven(49)` | &#10132; `false`
`specialEleven(52)` | &#10132; `false`
`specialEleven(54)` | &#10132; `false`
`specialEleven(55)` | &#10132; `true`
## more20
Return true if the given non-negative number is 1 or 2 more than a multiple of 20.
Example|Expected
-|-
`more20(20)` | &#10132; `false`
`more20(21)` | &#10132; `true`
`more20(22)` | &#10132; `true`
`more20(23)` | &#10132; `false`
`more20(25)` | &#10132; `false`
`more20(30)` | &#10132; `false`
`more20(31)` | &#10132; `false`
`more20(59)` | &#10132; `false`
`more20(60)` | &#10132; `false`
`more20(61)` | &#10132; `true`
`more20(62)` | &#10132; `true`
`more20(1020)` | &#10132; `false`
`more20(1021)` | &#10132; `true`
`more20(1000)` | &#10132; `false`
`more20(1001)` | &#10132; `true`
`more20(50)` | &#10132; `false`
`more20(55)` | &#10132; `false`
`more20(40)` | &#10132; `false`
`more20(41)` | &#10132; `true`
`more20(39)` | &#10132; `false`
`more20(42)` | &#10132; `true`
## old35
Return true if the given non-negative number is a multiple of 3 or 5, but not both. Use the % "mod" operator.
Example|Expected
-|-
`old35(3)` | &#10132; `true`
`old35(10)` | &#10132; `true`
`old35(15)` | &#10132; `false`
`old35(5)` | &#10132; `true`
`old35(9)` | &#10132; `true`
`old35(8)` | &#10132; `false`
`old35(7)` | &#10132; `false`
`old35(6)` | &#10132; `true`
`old35(17)` | &#10132; `false`
`old35(18)` | &#10132; `true`
`old35(29)` | &#10132; `false`
`old35(20)` | &#10132; `true`
`old35(21)` | &#10132; `true`
`old35(22)` | &#10132; `false`
`old35(45)` | &#10132; `false`
`old35(99)` | &#10132; `true`
## less20
Return true if the given non-negative number is 1 or 2 less than a multiple of 20. So for example 38 and 39 return true, but 40 returns false.
Example|Expected
-|-
`less20(18)` | &#10132; `true`
`less20(19)` | &#10132; `true`
`less20(20)` | &#10132; `false`
`less20(8)` | &#10132; `false`
`less20(17)` | &#10132; `false`
`less20(23)` | &#10132; `false`
`less20(25)` | &#10132; `false`
`less20(30)` | &#10132; `false`
`less20(31)` | &#10132; `false`
`less20(58)` | &#10132; `true`
`less20(59)` | &#10132; `true`
`less20(60)` | &#10132; `false`
`less20(61)` | &#10132; `false`
`less20(62)` | &#10132; `false`
`less20(1017)` | &#10132; `false`
`less20(1018)` | &#10132; `true`
`less20(1019)` | &#10132; `true`
`less20(1020)` | &#10132; `false`
`less20(1021)` | &#10132; `false`
`less20(1022)` | &#10132; `false`
`less20(1023)` | &#10132; `false`
`less20(37)` | &#10132; `false`
## nearTen
Given a non-negative number "num", return true if num is within 2 of a multiple of 10. Note: (a % b) is the remainder of dividing a by b, so (7 % 5) is 2.
Example|Expected
-|-
`nearTen(12)` | &#10132; `true`
`nearTen(17)` | &#10132; `false`
`nearTen(19)` | &#10132; `true`
`nearTen(31)` | &#10132; `true`
`nearTen(6)` | &#10132; `false`
`nearTen(10)` | &#10132; `true`
`nearTen(11)` | &#10132; `true`
`nearTen(21)` | &#10132; `true`
`nearTen(22)` | &#10132; `true`
`nearTen(23)` | &#10132; `false`
`nearTen(54)` | &#10132; `false`
`nearTen(155)` | &#10132; `false`
`nearTen(158)` | &#10132; `true`
`nearTen(3)` | &#10132; `false`
`nearTen(1)` | &#10132; `true`
## teenSum
Given 2 ints, a and b, return their sum. However, "teen" values in the range 13..19 inclusive, are extra lucky. So if either value is a teen, just return 19.
Example|Expected
-|-
`teenSum(3, 4)` | &#10132; `7`
`teenSum(10, 13)` | &#10132; `19`
`teenSum(13, 2)` | &#10132; `19`
`teenSum(3, 19)` | &#10132; `19`
`teenSum(13, 13)` | &#10132; `19`
`teenSum(10, 10)` | &#10132; `20`
`teenSum(6, 14)` | &#10132; `19`
`teenSum(15, 2)` | &#10132; `19`
`teenSum(19, 19)` | &#10132; `19`
`teenSum(19, 20)` | &#10132; `19`
`teenSum(2, 18)` | &#10132; `19`
`teenSum(12, 4)` | &#10132; `16`
`teenSum(2, 20)` | &#10132; `22`
`teenSum(2, 17)` | &#10132; `19`
`teenSum(2, 16)` | &#10132; `19`
`teenSum(6, 7)` | &#10132; `13`
## answerCell
Your cell phone rings. Return true if you should answer it. Normally you answer, except in the morning you only answer if it is your mom calling. In all cases, if you are asleep, you do not answer.
Example|Expected
-|-
`answerCell(false, false, false)` | &#10132; `true`
`answerCell(false, false, true)` | &#10132; `false`
`answerCell(true, false, false)` | &#10132; `false`
`answerCell(true, true, false)` | &#10132; `true`
`answerCell(false, true, false)` | &#10132; `true`
`answerCell(true, true, true)` | &#10132; `false`
## teaParty
We are having a party with amounts of tea and candy. Return the int outcome of the party encoded as 0=bad, 1=good, or 2=great. A party is good (1) if both tea and candy are at least 5. However, if either tea or candy is at least double the amount of the other one, the party is great (2). However, in all cases, if either tea or candy is less than 5, the party is always bad (0).
Example|Expected
-|-
`teaParty(6, 8)` | &#10132; `1`
`teaParty(3, 8)` | &#10132; `0`
`teaParty(20, 6)` | &#10132; `2`
`teaParty(12, 6)` | &#10132; `2`
`teaParty(11, 6)` | &#10132; `1`
`teaParty(11, 4)` | &#10132; `0`
`teaParty(4, 5)` | &#10132; `0`
`teaParty(5, 5)` | &#10132; `1`
`teaParty(6, 6)` | &#10132; `1`
`teaParty(5, 10)` | &#10132; `2`
`teaParty(5, 9)` | &#10132; `1`
`teaParty(10, 4)` | &#10132; `0`
`teaParty(10, 20)` | &#10132; `2`
## fizzString
Given a string str, if the string starts with "f" return "Fizz". If the string ends with "b" return "Buzz". If both the "f" and "b" conditions are true, return "FizzBuzz". In all other cases, return the string unchanged. 
Example|Expected
-|-
`fizzString("fig")` | &#10132; `"Fizz"`
`fizzString("dib")` | &#10132; `"Buzz"`
`fizzString("fib")` | &#10132; `"FizzBuzz"`
`fizzString("abc")` | &#10132; `"abc"`
`fizzString("fooo")` | &#10132; `"Fizz"`
`fizzString("booo")` | &#10132; `"booo"`
`fizzString("ooob")` | &#10132; `"Buzz"`
`fizzString("fooob")` | &#10132; `"FizzBuzz"`
`fizzString("f")` | &#10132; `"Fizz"`
`fizzString("b")` | &#10132; `"Buzz"`
`fizzString("abcb")` | &#10132; `"Buzz"`
`fizzString("Hello")` | &#10132; `"Hello"`
`fizzString("Hellob")` | &#10132; `"Buzz"`
`fizzString("af")` | &#10132; `"af"`
`fizzString("bf")` | &#10132; `"bf"`
`fizzString("fb")` | &#10132; `"FizzBuzz"`
## fizzString2
Given an int n, return the string form of the number followed by "!". So the int 6 yields "6!". Except if the number is divisible by 3 use "Fizz" instead of the number, and if the number is divisible by 5 use "Buzz", and if divisible by both 3 and 5, use "FizzBuzz". Note: the % "mod" operator computes the remainder after division, so 23 % 10 yields 3. What will the remainder be when one number divides evenly into another?
Example|Expected
-|-
`fizzString2(1)` | &#10132; `"1!"`
`fizzString2(2)` | &#10132; `"2!"`
`fizzString2(3)` | &#10132; `"Fizz!"`
`fizzString2(4)` | &#10132; `"4!"`
`fizzString2(5)` | &#10132; `"Buzz!"`
`fizzString2(6)` | &#10132; `"Fizz!"`
`fizzString2(7)` | &#10132; `"7!"`
`fizzString2(8)` | &#10132; `"8!"`
`fizzString2(9)` | &#10132; `"Fizz!"`
`fizzString2(15)` | &#10132; `"FizzBuzz!"`
`fizzString2(16)` | &#10132; `"16!"`
`fizzString2(18)` | &#10132; `"Fizz!"`
`fizzString2(19)` | &#10132; `"19!"`
`fizzString2(21)` | &#10132; `"Fizz!"`
`fizzString2(44)` | &#10132; `"44!"`
`fizzString2(45)` | &#10132; `"FizzBuzz!"`
`fizzString2(100)` | &#10132; `"Buzz!"`
## twoAsOne
Given three ints, a b c, return true if it is possible to add two of the ints to get the third.
Example|Expected
-|-
`twoAsOne(1, 2, 3)` | &#10132; `true`
`twoAsOne(3, 1, 2)` | &#10132; `true`
`twoAsOne(3, 2, 2)` | &#10132; `false`
`twoAsOne(2, 3, 1)` | &#10132; `true`
`twoAsOne(5, 3, -2)` | &#10132; `true`
`twoAsOne(5, 3, -3)` | &#10132; `false`
`twoAsOne(2, 5, 3)` | &#10132; `true`
`twoAsOne(9, 5, 5)` | &#10132; `false`
`twoAsOne(9, 4, 5)` | &#10132; `true`
`twoAsOne(5, 4, 9)` | &#10132; `true`
`twoAsOne(3, 3, 0)` | &#10132; `true`
`twoAsOne(3, 3, 2)` | &#10132; `false`
## inOrder
Given three ints, a b c, return true if b is greater than a, and c is greater than b. However, with the exception that if "bOk" is true, b does not need to be greater than a.
Example|Expected
-|-
`inOrder(1, 2, 4, false)` | &#10132; `true`
`inOrder(1, 2, 1, false)` | &#10132; `false`
`inOrder(1, 1, 2, true)` | &#10132; `true`
`inOrder(3, 2, 4, false)` | &#10132; `false`
`inOrder(2, 3, 4, false)` | &#10132; `true`
`inOrder(3, 2, 4, true)` | &#10132; `true`
`inOrder(4, 2, 2, true)` | &#10132; `false`
`inOrder(4, 5, 2, true)` | &#10132; `false`
`inOrder(2, 4, 6, true)` | &#10132; `true`
`inOrder(7, 9, 10, false)` | &#10132; `true`
`inOrder(7, 5, 6, true)` | &#10132; `true`
`inOrder(7, 5, 4, true)` | &#10132; `false`
## inOrderEqual
Given three ints, a b c, return true if they are in strict increasing order, such as 2 5 11, or 5 6 7, but not 6 5 7 or 5 5 7. However, with the exception that if "equalOk" is true, equality is allowed, such as 5 5 7 or 5 5 5.
Example|Expected
-|-
`inOrderEqual(2, 5, 11, false)` | &#10132; `true`
`inOrderEqual(5, 7, 6, false)` | &#10132; `false`
`inOrderEqual(5, 5, 7, true)` | &#10132; `true`
`inOrderEqual(5, 5, 7, false)` | &#10132; `false`
`inOrderEqual(2, 5, 4, false)` | &#10132; `false`
`inOrderEqual(3, 4, 3, false)` | &#10132; `false`
`inOrderEqual(3, 4, 4, false)` | &#10132; `false`
`inOrderEqual(3, 4, 3, true)` | &#10132; `false`
`inOrderEqual(3, 4, 4, true)` | &#10132; `true`
`inOrderEqual(1, 5, 5, true)` | &#10132; `true`
`inOrderEqual(5, 5, 5, true)` | &#10132; `true`
`inOrderEqual(2, 2, 1, true)` | &#10132; `false`
`inOrderEqual(9, 2, 2, true)` | &#10132; `false`
`inOrderEqual(0, 1, 0, true)` | &#10132; `false`
## lastDigit
Given three ints, a b c, return true if two or more of them have the same rightmost digit. The ints are non-negative. Note: the % "mod" operator computes the remainder, e.g. 17 % 10 is 7.
Example|Expected
-|-
`lastDigit(23, 19, 13)` | &#10132; `false`
`lastDigit(23, 19, 12)` | &#10132; `false`
`lastDigit(23, 19, 3)` | &#10132; `true`
`lastDigit(23, 19, 39)` | &#10132; `true`
`lastDigit(1, 2, 3)` | &#10132; `false`
`lastDigit(1, 1, 2)` | &#10132; `true`
`lastDigit(1, 2, 2)` | &#10132; `true`
`lastDigit(14, 25, 43)` | &#10132; `false`
`lastDigit(14, 25, 45)` | &#10132; `true`
`lastDigit(248, 106, 1002)` | &#10132; `false`
`lastDigit(248, 106, 1008)` | &#10132; `false`
`lastDigit(10, 11, 20)` | &#10132; `false`
`lastDigit(0, 11, 0)` | &#10132; `true`
## lessBy10
Given three ints, a b c, return true if one of them is 10 or more less than one of the others.
Example|Expected
-|-
`lessBy10(1, 7, 11)` | &#10132; `true`
`lessBy10(1, 7, 10)` | &#10132; `false`
`lessBy10(11, 1, 7)` | &#10132; `true`
`lessBy10(10, 7, 1)` | &#10132; `false`
`lessBy10(-10, 2, 2)` | &#10132; `true`
`lessBy10(2, 11, 11)` | &#10132; `false`
`lessBy10(3, 3, 30)` | &#10132; `true`
`lessBy10(3, 3, 3)` | &#10132; `false`
`lessBy10(10, 1, 11)` | &#10132; `true`
`lessBy10(10, 11, 1)` | &#10132; `true`
`lessBy10(10, 11, 2)` | &#10132; `false`
`lessBy10(3, 30, 3)` | &#10132; `true`
`lessBy10(2, 2, -8)` | &#10132; `true`
`lessBy10(2, 8, 12)` | &#10132; `true`
## withoutDoubles
Return the sum of two 6-sided dice rolls, each in the range 1..6. However, if noDoubles is true, if the two dice show the same value, increment one die to the next value, wrapping around to 1 if its value was 6.
Example|Expected
-|-
`withoutDoubles(2, 3, true)` | &#10132; `5`
`withoutDoubles(3, 3, true)` | &#10132; `7`
`withoutDoubles(3, 3, false)` | &#10132; `6`
`withoutDoubles(2, 3, false)` | &#10132; `5`
`withoutDoubles(5, 4, true)` | &#10132; `9`
`withoutDoubles(5, 4, false)` | &#10132; `9`
`withoutDoubles(5, 5, true)` | &#10132; `11`
`withoutDoubles(5, 5, false)` | &#10132; `10`
`withoutDoubles(6, 6, true)` | &#10132; `7`
`withoutDoubles(6, 6, false)` | &#10132; `12`
`withoutDoubles(1, 6, true)` | &#10132; `7`
`withoutDoubles(6, 1, false)` | &#10132; `7`
## maxMod5
Given two int values, return whichever value is larger. However if the two values have the same remainder when divided by 5, then the return the smaller value. However, in all cases, if the two values are the same, return 0. Note: the % "mod" operator computes the remainder, e.g. 7 % 5 is 2.
Example|Expected
-|-
`maxMod5(2, 3)` | &#10132; `3`
`maxMod5(6, 2)` | &#10132; `6`
`maxMod5(3, 2)` | &#10132; `3`
`maxMod5(8, 12)` | &#10132; `12`
`maxMod5(7, 12)` | &#10132; `7`
`maxMod5(11, 6)` | &#10132; `6`
`maxMod5(2, 7)` | &#10132; `2`
`maxMod5(7, 7)` | &#10132; `0`
`maxMod5(9, 1)` | &#10132; `9`
`maxMod5(9, 14)` | &#10132; `9`
`maxMod5(1, 2)` | &#10132; `2`
## redTicket
You have a red lottery ticket showing ints a, b, and c, each of which is 0, 1, or 2. If they are all the value 2, the result is 10. Otherwise if they are all the same, the result is 5. Otherwise so long as both b and c are different from a, the result is 1. Otherwise the result is 0.
Example|Expected
-|-
`redTicket(2, 2, 2)` | &#10132; `10`
`redTicket(2, 2, 1)` | &#10132; `0`
`redTicket(0, 0, 0)` | &#10132; `5`
`redTicket(2, 0, 0)` | &#10132; `1`
`redTicket(1, 1, 1)` | &#10132; `5`
`redTicket(1, 2, 1)` | &#10132; `0`
`redTicket(1, 2, 0)` | &#10132; `1`
`redTicket(0, 2, 2)` | &#10132; `1`
`redTicket(1, 2, 2)` | &#10132; `1`
`redTicket(0, 2, 0)` | &#10132; `0`
`redTicket(1, 1, 2)` | &#10132; `0`
## greenTicket
You have a green lottery ticket, with ints a, b, and c on it. If the numbers are all different from each other, the result is 0. If all of the numbers are the same, the result is 20. If two of the numbers are the same, the result is 10.
Example|Expected
-|-
`greenTicket(1, 2, 3)` | &#10132; `0`
`greenTicket(2, 2, 2)` | &#10132; `20`
`greenTicket(1, 1, 2)` | &#10132; `10`
`greenTicket(2, 1, 1)` | &#10132; `10`
`greenTicket(1, 2, 1)` | &#10132; `10`
`greenTicket(3, 2, 1)` | &#10132; `0`
`greenTicket(0, 0, 0)` | &#10132; `20`
`greenTicket(2, 0, 0)` | &#10132; `10`
`greenTicket(0, 9, 10)` | &#10132; `0`
`greenTicket(0, 10, 0)` | &#10132; `10`
`greenTicket(9, 9, 9)` | &#10132; `20`
`greenTicket(9, 0, 9)` | &#10132; `10`
## blueTicket
You have a blue lottery ticket, with ints a, b, and c on it. This makes three pairs, which we'll call ab, bc, and ac. Consider the sum of the numbers in each pair. If any pair sums to exactly 10, the result is 10. Otherwise if the ab sum is exactly 10 more than either bc or ac sums, the result is 5. Otherwise the result is 0.
Example|Expected
-|-
`blueTicket(9, 1, 0)` | &#10132; `10`
`blueTicket(9, 2, 0)` | &#10132; `0`
`blueTicket(6, 1, 4)` | &#10132; `10`
`blueTicket(6, 1, 5)` | &#10132; `0`
`blueTicket(10, 0, 0)` | &#10132; `10`
`blueTicket(15, 0, 5)` | &#10132; `5`
`blueTicket(5, 15, 5)` | &#10132; `10`
`blueTicket(4, 11, 1)` | &#10132; `5`
`blueTicket(13, 2, 3)` | &#10132; `5`
`blueTicket(8, 4, 3)` | &#10132; `0`
`blueTicket(8, 4, 2)` | &#10132; `10`
`blueTicket(8, 4, 1)` | &#10132; `0`
## shareDigit
Given two ints, each in the range 10..99, return true if there is a digit that appears in both numbers, such as the 2 in 12 and 23. (Note: division, e.g. n/10, gives the left digit while the % "mod" n%10 gives the right digit.)
Example|Expected
-|-
`shareDigit(12, 23)` | &#10132; `true`
`shareDigit(12, 43)` | &#10132; `false`
`shareDigit(12, 44)` | &#10132; `false`
`shareDigit(23, 12)` | &#10132; `true`
`shareDigit(23, 39)` | &#10132; `true`
`shareDigit(23, 19)` | &#10132; `false`
`shareDigit(30, 90)` | &#10132; `true`
`shareDigit(30, 91)` | &#10132; `false`
`shareDigit(55, 55)` | &#10132; `true`
`shareDigit(55, 44)` | &#10132; `false`
## sumLimit
Given 2 non-negative ints, a and b, return their sum, so long as the sum has the same number of digits as a. If the sum has more digits than a, just return a without b. (Note: one way to compute the number of digits of a non-negative int n is to convert it to a string with String.valueOf(n) and then check the length of the string.)
Example|Expected
-|-
`sumLimit(2, 3)` | &#10132; `5`
`sumLimit(8, 3)` | &#10132; `8`
`sumLimit(8, 1)` | &#10132; `9`
`sumLimit(11, 39)` | &#10132; `50`
`sumLimit(11, 99)` | &#10132; `11`
`sumLimit(0, 0)` | &#10132; `0`
`sumLimit(99, 0)` | &#10132; `99`
`sumLimit(99, 1)` | &#10132; `99`
`sumLimit(123, 1)` | &#10132; `124`
`sumLimit(1, 123)` | &#10132; `1`
`sumLimit(23, 60)` | &#10132; `83`
`sumLimit(23, 80)` | &#10132; `23`
`sumLimit(9000, 1)` | &#10132; `9001`
`sumLimit(90000000, 1)` | &#10132; `90000001`
`sumLimit(9000, 1000)` | &#10132; `9000`
