# Array 3
## maxSpan
Consider the leftmost and righmost appearances of some value in an array. We'll say that the "span" is the number of elements between the two inclusive. A single value has a span of 1. Returns the largest span found in the given array. (Efficiency is not a priority.)
maxSpan(nums)|Expected
-|-
`maxSpan([1,2,1,1,3])` | &#10132; `4`
`maxSpan([1,4,2,1,4,1,4])` | &#10132; `6`
`maxSpan([1,4,2,1,4,4,4])` | &#10132; `6`
`maxSpan([3,3,3])` | &#10132; `3`
`maxSpan([3,9,3])` | &#10132; `3`
`maxSpan([3,9,9])` | &#10132; `2`
`maxSpan([3,9])` | &#10132; `1`
`maxSpan([3,3])` | &#10132; `2`
`maxSpan([])` | &#10132; `0`
`maxSpan([1])` | &#10132; `1`
## fix34
Return an array that contains exactly the same numbers as the given array, but rearranged so that every 3 is immediately followed by a 4. Do not move the 3's, but every other number may move. The array contains the same number of 3's and 4's, every 3 has a number after it that is not a 3, and a 3 appears in the array before any 4.
fix34(nums)|Expected
-|-
`fix34([1,3,1,4])` | &#10132; `[1,3,4,1]`
`fix34([1,3,1,4,4,3,1])` | &#10132; `[1,3,4,1,1,3,4]`
`fix34([3,2,2,4])` | &#10132; `[3,4,2,2]`
`fix34([3,2,3,2,4,4])` | &#10132; `[3,4,3,4,2,2]`
`fix34([2,3,2,3,2,4,4])` | &#10132; `[2,3,4,3,4,2,2]`
`fix34([5,3,5,4,5,4,5,4,3,5,3,5])` | &#10132; `[5,3,4,5,5,5,5,5,3,4,3,4]`
`fix34([3,1,4])` | &#10132; `[3,4,1]`
`fix34([3,4,1])` | &#10132; `[3,4,1]`
`fix34([1,1,1])` | &#10132; `[1,1,1]`
`fix34([1])` | &#10132; `[1]`
`fix34([])` | &#10132; `[]`
`fix34([7,3,7,7,4])` | &#10132; `[7,3,4,7,7]`
`fix34([3,1,4,3,1,4])` | &#10132; `[3,4,1,3,4,1]`
`fix34([3,1,1,3,4,4])` | &#10132; `[3,4,1,3,4,1]`
## fix45
(This is a slightly harder version of the fix34 problem.) Return an array that contains exactly the same numbers as the given array, but rearranged so that every 4 is immediately followed by a 5. Do not move the 4's, but every other number may move. The array contains the same number of 4's and 5's, and every 4 has a number after it that is not a 4. In this version, 5's may appear anywhere in the original array.
fix45(nums)|Expected
-|-
`fix45([5,4,9,4,9,5])` | &#10132; `[9,4,5,4,5,9]`
`fix45([1,4,1,5])` | &#10132; `[1,4,5,1]`
`fix45([1,4,1,5,5,4,1])` | &#10132; `[1,4,5,1,1,4,5]`
`fix45([4,9,4,9,5,5,4,9,5])` | &#10132; `[4,5,4,5,9,9,4,5,9]`
`fix45([5,5,4,1,4,1])` | &#10132; `[1,1,4,5,4,5]`
`fix45([4,2,2,5])` | &#10132; `[4,5,2,2]`
`fix45([4,2,4,2,5,5])` | &#10132; `[4,5,4,5,2,2]`
`fix45([4,2,4,5,5])` | &#10132; `[4,5,4,5,2]`
`fix45([1,1,1])` | &#10132; `[1,1,1]`
`fix45([4,5])` | &#10132; `[4,5]`
`fix45([5,4,1])` | &#10132; `[1,4,5]`
`fix45([])` | &#10132; `[]`
`fix45([5,4,5,4,1])` | &#10132; `[1,4,5,4,5]`
`fix45([4,5,4,1,5])` | &#10132; `[4,5,4,5,1]`
`fix45([3,4,5])` | &#10132; `[3,4,5]`
`fix45([4,1,5])` | &#10132; `[4,5,1]`
`fix45([5,4,1])` | &#10132; `[1,4,5]`
`fix45([2,4,2,5])` | &#10132; `[2,4,5,2]`
## canBalance
Given a non-empty array, return true if there is a place to split the array so that the sum of the numbers on one side is equal to the sum of the numbers on the other side.
canBalance(nums)|Expected
-|-
`canBalance([1,1,1,2,1])` | &#10132; `true`
`canBalance([2,1,1,2,1])` | &#10132; `false`
`canBalance([10,10])` | &#10132; `true`
`canBalance([10,0,1,-1,10])` | &#10132; `true`
`canBalance([1,1,1,1,4])` | &#10132; `true`
`canBalance([2,1,1,1,4])` | &#10132; `false`
`canBalance([2,3,4,1,2])` | &#10132; `false`
`canBalance([1,2,3,1,0,2,3])` | &#10132; `true`
`canBalance([1,2,3,1,0,1,3])` | &#10132; `false`
`canBalance([1])` | &#10132; `false`
`canBalance([1,1,1,2,1])` | &#10132; `true`
## linearIn
Given two arrays of ints sorted in increasing order, outer and inner, return true if all of the numbers in inner appear in outer. The best solution makes only a single "linear" pass of both arrays, taking advantage of the fact that both arrays are already in sorted order.
linearIn(outer, inner)|Expected
-|-
`linearIn([1,2,4,6], [2,4])` | &#10132; `true`
`linearIn([1,2,4,6], [2,3,4])` | &#10132; `false`
`linearIn([1,2,4,4,6], [2,4])` | &#10132; `true`
`linearIn([2,2,4,4,6,6], [2,4])` | &#10132; `true`
`linearIn([2,2,2,2,2], [2,2])` | &#10132; `true`
`linearIn([2,2,2,2,2], [2,4])` | &#10132; `false`
`linearIn([2,2,2,2,4], [2,4])` | &#10132; `true`
`linearIn([1,2,3], [2])` | &#10132; `true`
`linearIn([1,2,3], [-1])` | &#10132; `false`
`linearIn([1,2,3], [])` | &#10132; `true`
`linearIn([-1,0,3,3,3,10,12], [-1,0,3,12])` | &#10132; `true`
`linearIn([-1,0,3,3,3,10,12], [0,3,12,14])` | &#10132; `false`
`linearIn([-1,0,3,3,3,10,12], [-1,10,11])` | &#10132; `false`
## squareUp
Given n>=0, create an array length n*n with the following pattern, shown here for n=3 : {0, 0, 1, 0, 2, 1, 3, 2, 1} (spaces added to show the 3 groups).
squareUp(n)|Expected
-|-
`squareUp(3)` | &#10132; `[0,0,1,0,2,1,3,2,1]`
`squareUp(2)` | &#10132; `[0,1,2,1]`
`squareUp(4)` | &#10132; `[0,0,0,1,0,0,2,1,0,3,2,1,4,3,2,1]`
`squareUp(1)` | &#10132; `[1]`
`squareUp(0)` | &#10132; `[]`
## seriesUp
Given n>=0, create an array with the pattern {1, 1, 2, 1, 2, 3, ... 1, 2, 3 .. n} (spaces added to show the grouping). Note that the length of the array will be 1 + 2 + 3 ... + n, which is known to sum to exactly n*(n + 1)/2.
seriesUp(n)|Expected
-|-
`seriesUp(3)` | &#10132; `[1,1,2,1,2,3]`
`seriesUp(4)` | &#10132; `[1,1,2,1,2,3,1,2,3,4]`
`seriesUp(2)` | &#10132; `[1,1,2]`
`seriesUp(1)` | &#10132; `[1]`
`seriesUp(0)` | &#10132; `[]`
## maxMirror
We'll say that a "mirror" section in an array is a group of contiguous elements such that somewhere in the array, the same group appears in reverse order. For example, the largest mirror section in {1, 2, 3, 8, 9, 3, 2, 1} is length 3 (the {1, 2, 3} part). Return the size of the largest mirror section found in the given array.
maxMirror(nums)|Expected
-|-
`maxMirror([1,2,3,8,9,3,2,1])` | &#10132; `3`
`maxMirror([1,2,1,4])` | &#10132; `3`
`maxMirror([7,1,2,9,7,2,1])` | &#10132; `2`
`maxMirror([21,22,9,8,7,6,23,24,6,7,8,9,25,7,8,9])` | &#10132; `4`
`maxMirror([1,2,1,20,21,1,2,1,2,23,24,2,1,2,1,25])` | &#10132; `4`
`maxMirror([1,2,3,2,1])` | &#10132; `5`
`maxMirror([1,2,3,3,8])` | &#10132; `2`
`maxMirror([1,2,7,8,1,7,2])` | &#10132; `2`
`maxMirror([1,1,1])` | &#10132; `3`
`maxMirror([1])` | &#10132; `1`
`maxMirror([])` | &#10132; `0`
`maxMirror([9,1,1,4,2,1,1,1])` | &#10132; `3`
`maxMirror([5,9,9,4,5,4,9,9,2])` | &#10132; `7`
`maxMirror([5,9,9,6,5,4,9,9,2])` | &#10132; `2`
`maxMirror([5,9,1,6,5,4,1,9,5])` | &#10132; `3`
## countClumps
Say that a "clump" in an array is a series of 2 or more adjacent elements of the same value. Return the number of clumps in the given array.
countClumps(nums)|Expected
-|-
`countClumps([1,2,2,3,4,4])` | &#10132; `2`
`countClumps([1,1,2,1,1])` | &#10132; `2`
`countClumps([1,1,1,1,1])` | &#10132; `1`
`countClumps([1,2,3])` | &#10132; `0`
`countClumps([2,2,1,1,1,2,1,1,2,2])` | &#10132; `4`
`countClumps([0,2,2,1,1,1,2,1,1,2,2])` | &#10132; `4`
`countClumps([0,0,2,2,1,1,1,2,1,1,2,2])` | &#10132; `5`
`countClumps([0,0,0,2,2,1,1,1,2,1,1,2,2])` | &#10132; `5`
`countClumps([])` | &#10132; `0`
