# QuizQuestions
## sumDownBy2
Given an integer, n, return the sum of the positive integers n + (n-2) + (n-4) + ... Note: Your solution must be recursive. In other words, there can be no for or while loops in your solution.
sumDownBy2(n)|Expected
-|-
`sumDownBy2(7)` | &#10132; `16`
`sumDownBy2(8)` | &#10132; `20`
`sumDownBy2(0)` | &#10132; `0`
`sumDownBy2(1)` | &#10132; `1`
`sumDownBy2(-1)` | &#10132; `0`
`sumDownBy2(10)` | &#10132; `30`
`sumDownBy2(5)` | &#10132; `9`
`sumDownBy2(-5)` | &#10132; `0`
`sumDownBy2(50)` | &#10132; `650`
`sumDownBy2(2)` | &#10132; `2`
`sumDownBy2(3)` | &#10132; `4`
## makes8
Given 2 ints, a and b, return true if one if them is 8 or if their sum is 8.
makes8(a, b)|Expected
-|-
`makes8(5, 8)` | &#10132; `true`
`makes8(3, 8)` | &#10132; `true`
`makes8(3, 4)` | &#10132; `false`
`makes8(4, 4)` | &#10132; `true`
`makes8(5, 2)` | &#10132; `false`
`makes8(5, 3)` | &#10132; `true`
`makes8(8, 7)` | &#10132; `true`
`makes8(8, 8)` | &#10132; `true`
`makes8(-16, 24)` | &#10132; `true`
`makes8(9, 1)` | &#10132; `false`
## countOdds
Return the number of odd integers in the given array. Note: the % "mod" operator computes the remainder, e.g. 5 % 2 is 1.
countOdds(nums)|Expected
-|-
`countOdds([2,1,2,3,4])` | &#10132; `2`
`countOdds([2,2,0])` | &#10132; `0`
`countOdds([1,3,5])` | &#10132; `3`
`countOdds([])` | &#10132; `0`
`countOdds([11,9,0,1])` | &#10132; `3`
`countOdds([2,11,9,0])` | &#10132; `2`
`countOdds([2])` | &#10132; `0`
`countOdds([2,5,12])` | &#10132; `1`
## fib
The fibonacci sequence is a famous bit of mathematics, and it happens to have a recursive definition. The first two values in the sequence are 0 and 1 (essentially 2 base cases). Each subsequent value is the sum of the previous two values, so the whole sequence is: 0, 1, 1, 2, 3, 5, 8, 13, 21 and so on. Define a recursive fibonacci(n) method that returns the nth fibonacci number, with n=0 representing the start of the sequence.
fib(n)|Expected
-|-
`fib(0)` | &#10132; `0`
`fib(1)` | &#10132; `1`
`fib(2)` | &#10132; `1`
`fib(3)` | &#10132; `2`
`fib(4)` | &#10132; `3`
`fib(5)` | &#10132; `5`
`fib(6)` | &#10132; `8`
`fib(7)` | &#10132; `13`
