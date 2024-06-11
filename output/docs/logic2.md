# Logic 2
## makeBricks
We want to make a row of bricks that is goal inches long. We have a number of small bricks (1 inch each) and big bricks (5 inches each). Return true if it is possible to make the goal by choosing from the given bricks. This is a little harder than it looks and can be done without any loops. See also: Introduction to MakeBricks
makeBricks(small, big, goal)|Expected
-|-
`makeBricks(3, 1, 8)` | &#10132; `true`
`makeBricks(3, 1, 9)` | &#10132; `false`
`makeBricks(3, 2, 10)` | &#10132; `true`
`makeBricks(3, 2, 8)` | &#10132; `true`
`makeBricks(3, 2, 9)` | &#10132; `false`
`makeBricks(6, 1, 11)` | &#10132; `true`
`makeBricks(6, 0, 11)` | &#10132; `false`
`makeBricks(1, 4, 11)` | &#10132; `true`
`makeBricks(0, 3, 10)` | &#10132; `true`
`makeBricks(1, 4, 12)` | &#10132; `false`
`makeBricks(3, 1, 7)` | &#10132; `true`
`makeBricks(1, 1, 7)` | &#10132; `false`
`makeBricks(2, 1, 7)` | &#10132; `true`
`makeBricks(7, 1, 11)` | &#10132; `true`
`makeBricks(7, 1, 8)` | &#10132; `true`
`makeBricks(7, 1, 13)` | &#10132; `false`
`makeBricks(43, 1, 46)` | &#10132; `true`
`makeBricks(40, 1, 46)` | &#10132; `false`
`makeBricks(40, 2, 47)` | &#10132; `true`
`makeBricks(40, 2, 50)` | &#10132; `true`
`makeBricks(40, 2, 52)` | &#10132; `false`
`makeBricks(22, 2, 33)` | &#10132; `false`
`makeBricks(0, 2, 10)` | &#10132; `true`
`makeBricks(1000000, 1000, 1000100)` | &#10132; `true`
`makeBricks(2, 1000000, 100003)` | &#10132; `false`
`makeBricks(20, 0, 19)` | &#10132; `true`
`makeBricks(20, 0, 21)` | &#10132; `false`
`makeBricks(20, 4, 51)` | &#10132; `false`
`makeBricks(20, 4, 39)` | &#10132; `true`
## loneSum
Given 3 int values, a b c, return their sum. However, if one of the values is the same as another of the values, it does not count towards the sum.
loneSum(a, b, c)|Expected
-|-
`loneSum(1, 2, 3)` | &#10132; `6`
`loneSum(3, 2, 3)` | &#10132; `2`
`loneSum(3, 3, 3)` | &#10132; `0`
`loneSum(9, 2, 2)` | &#10132; `9`
`loneSum(2, 2, 9)` | &#10132; `9`
`loneSum(2, 9, 2)` | &#10132; `9`
`loneSum(2, 9, 3)` | &#10132; `14`
`loneSum(4, 2, 3)` | &#10132; `9`
`loneSum(1, 3, 1)` | &#10132; `3`
## luckySum
Given 3 int values, a b c, return their sum. However, if one of the values is 13 then it does not count towards the sum and values to its right do not count. So for example, if b is 13, then both b and c do not count.
luckySum(a, b, c)|Expected
-|-
`luckySum(1, 2, 3)` | &#10132; `6`
`luckySum(1, 2, 13)` | &#10132; `3`
`luckySum(1, 13, 3)` | &#10132; `1`
`luckySum(1, 13, 13)` | &#10132; `1`
`luckySum(6, 5, 2)` | &#10132; `13`
`luckySum(13, 2, 3)` | &#10132; `0`
`luckySum(13, 2, 13)` | &#10132; `0`
`luckySum(13, 13, 2)` | &#10132; `0`
`luckySum(9, 4, 13)` | &#10132; `13`
`luckySum(8, 13, 2)` | &#10132; `8`
`luckySum(7, 2, 1)` | &#10132; `10`
`luckySum(3, 3, 13)` | &#10132; `6`
## noTeenSum
Given 3 int values, a b c, return their sum. However, if any of the values is a teen -- in the range 13..19 inclusive -- then that value counts as 0, except 15 and 16 do not count as a teens. Write a separate helper "public int fixTeen(int n) {"that takes in an int value and returns that value fixed for the teen rule. In this way, you avoid repeating the teen code 3 times (i.e. "decomposition"). Define the helper below and at the same indent level as the main noTeenSum().
noTeenSum(a, b, c)|Expected
-|-
`noTeenSum(1, 2, 3)` | &#10132; `6`
`noTeenSum(2, 13, 1)` | &#10132; `3`
`noTeenSum(2, 1, 14)` | &#10132; `3`
`noTeenSum(2, 1, 15)` | &#10132; `18`
`noTeenSum(2, 1, 16)` | &#10132; `19`
`noTeenSum(2, 1, 17)` | &#10132; `3`
`noTeenSum(17, 1, 2)` | &#10132; `3`
`noTeenSum(2, 15, 2)` | &#10132; `19`
`noTeenSum(16, 17, 18)` | &#10132; `16`
`noTeenSum(17, 18, 19)` | &#10132; `0`
`noTeenSum(15, 16, 1)` | &#10132; `32`
`noTeenSum(15, 15, 19)` | &#10132; `30`
`noTeenSum(15, 19, 16)` | &#10132; `31`
`noTeenSum(5, 17, 18)` | &#10132; `5`
`noTeenSum(17, 18, 16)` | &#10132; `16`
`noTeenSum(17, 19, 18)` | &#10132; `0`
## roundSum
For this problem, we'll round an int value up to the next multiple of 10 if its rightmost digit is 5 or more, so 15 rounds up to 20. Alternately, round down to the previous multiple of 10 if its rightmost digit is less than 5, so 12 rounds down to 10. Given 3 ints, a b c, return the sum of their rounded values. To avoid code repetition, write a separate helper "public int round10(int num) {" and call it 3 times. Write the helper entirely below and at the same indent level as roundSum().
roundSum(a, b, c)|Expected
-|-
`roundSum(16, 17, 18)` | &#10132; `60`
`roundSum(12, 13, 14)` | &#10132; `30`
`roundSum(6, 4, 4)` | &#10132; `10`
`roundSum(4, 6, 5)` | &#10132; `20`
`roundSum(4, 4, 6)` | &#10132; `10`
`roundSum(9, 4, 4)` | &#10132; `10`
`roundSum(0, 0, 1)` | &#10132; `0`
`roundSum(0, 9, 0)` | &#10132; `10`
`roundSum(10, 10, 19)` | &#10132; `40`
`roundSum(20, 30, 40)` | &#10132; `90`
`roundSum(45, 21, 30)` | &#10132; `100`
`roundSum(23, 11, 26)` | &#10132; `60`
`roundSum(23, 24, 25)` | &#10132; `70`
`roundSum(25, 24, 25)` | &#10132; `80`
`roundSum(23, 24, 29)` | &#10132; `70`
`roundSum(11, 24, 36)` | &#10132; `70`
`roundSum(24, 36, 32)` | &#10132; `90`
`roundSum(14, 12, 26)` | &#10132; `50`
`roundSum(12, 10, 24)` | &#10132; `40`
## closeFar
Given three ints, a b c, return true if one of b or c is "close" (differing from a by at most 1), while the other is "far", differing from both other values by 2 or more. Note: Math.abs(num) computes the absolute value of a number.
closeFar(a, b, c)|Expected
-|-
`closeFar(1, 2, 10)` | &#10132; `true`
`closeFar(1, 2, 3)` | &#10132; `false`
`closeFar(4, 1, 3)` | &#10132; `true`
`closeFar(4, 5, 3)` | &#10132; `false`
`closeFar(4, 3, 5)` | &#10132; `false`
`closeFar(-1, 10, 0)` | &#10132; `true`
`closeFar(0, -1, 10)` | &#10132; `true`
`closeFar(10, 10, 8)` | &#10132; `true`
`closeFar(10, 8, 9)` | &#10132; `false`
`closeFar(8, 9, 10)` | &#10132; `false`
`closeFar(8, 9, 7)` | &#10132; `false`
`closeFar(8, 6, 9)` | &#10132; `true`
## blackjack
Given 2 int values greater than 0, return whichever value is nearest to 21 without going over. Return 0 if they both go over.
blackjack(a, b)|Expected
-|-
`blackjack(19, 21)` | &#10132; `21`
`blackjack(21, 19)` | &#10132; `21`
`blackjack(19, 22)` | &#10132; `19`
`blackjack(22, 19)` | &#10132; `19`
`blackjack(22, 50)` | &#10132; `0`
`blackjack(22, 22)` | &#10132; `0`
`blackjack(33, 1)` | &#10132; `1`
`blackjack(1, 2)` | &#10132; `2`
`blackjack(34, 33)` | &#10132; `0`
`blackjack(17, 19)` | &#10132; `19`
`blackjack(18, 17)` | &#10132; `18`
`blackjack(16, 23)` | &#10132; `16`
`blackjack(3, 4)` | &#10132; `4`
`blackjack(3, 2)` | &#10132; `3`
`blackjack(21, 20)` | &#10132; `21`
## evenlySpaced
Given three ints, a b c, one of them is small, one is medium and one is large. Return true if the three values are evenly spaced, so the difference between small and medium is the same as the difference between medium and large.
evenlySpaced(a, b, c)|Expected
-|-
`evenlySpaced(2, 4, 6)` | &#10132; `true`
`evenlySpaced(4, 6, 2)` | &#10132; `true`
`evenlySpaced(4, 6, 3)` | &#10132; `false`
`evenlySpaced(6, 2, 4)` | &#10132; `true`
`evenlySpaced(6, 2, 8)` | &#10132; `false`
`evenlySpaced(2, 2, 2)` | &#10132; `true`
`evenlySpaced(2, 2, 3)` | &#10132; `false`
`evenlySpaced(9, 10, 11)` | &#10132; `true`
`evenlySpaced(10, 9, 11)` | &#10132; `true`
`evenlySpaced(10, 9, 9)` | &#10132; `false`
`evenlySpaced(2, 4, 4)` | &#10132; `false`
`evenlySpaced(2, 2, 4)` | &#10132; `false`
`evenlySpaced(3, 6, 12)` | &#10132; `false`
`evenlySpaced(12, 3, 6)` | &#10132; `false`
## makeChocolate
We want make a package of goal kilos of chocolate. We have small bars (1 kilo each) and big bars (5 kilos each). Return the number of small bars to use, assuming we always use big bars before small bars. Return -1 if it can't be done.
makeChocolate(small, big, goal)|Expected
-|-
`makeChocolate(4, 1, 9)` | &#10132; `4`
`makeChocolate(4, 1, 10)` | &#10132; `-1`
`makeChocolate(4, 1, 7)` | &#10132; `2`
`makeChocolate(6, 2, 7)` | &#10132; `2`
`makeChocolate(4, 1, 5)` | &#10132; `0`
`makeChocolate(4, 1, 4)` | &#10132; `4`
`makeChocolate(5, 4, 9)` | &#10132; `4`
`makeChocolate(9, 3, 18)` | &#10132; `3`
`makeChocolate(3, 1, 9)` | &#10132; `-1`
`makeChocolate(1, 2, 7)` | &#10132; `2`
`makeChocolate(1, 2, 6)` | &#10132; `1`
`makeChocolate(1, 2, 5)` | &#10132; `0`
`makeChocolate(6, 1, 10)` | &#10132; `5`
`makeChocolate(6, 1, 11)` | &#10132; `6`
`makeChocolate(6, 1, 12)` | &#10132; `-1`
`makeChocolate(6, 1, 13)` | &#10132; `-1`
`makeChocolate(6, 2, 10)` | &#10132; `0`
`makeChocolate(6, 2, 11)` | &#10132; `1`
`makeChocolate(6, 2, 12)` | &#10132; `2`
`makeChocolate(60, 100, 550)` | &#10132; `50`
`makeChocolate(1000, 1000000, 5000006)` | &#10132; `6`
`makeChocolate(7, 1, 12)` | &#10132; `7`
`makeChocolate(7, 1, 13)` | &#10132; `-1`
`makeChocolate(7, 2, 13)` | &#10132; `3`
