# Array 2
## findLowestIndex
Return the index of the minimum value in an array. The input array will have at least one element in it.
Example|Expected
-|-
`findLowestIndex([99,98,97,96,95])` | &#10132; `4`
`findLowestIndex([2,2,0])` | &#10132; `2`
`findLowestIndex([1,3,5])` | &#10132; `0`
`findLowestIndex([5])` | &#10132; `0`
`findLowestIndex([11,9,0,1])` | &#10132; `2`
`findLowestIndex([2,11,9,0])` | &#10132; `3`
`findLowestIndex([2])` | &#10132; `0`
`findLowestIndex([2,5,-12])` | &#10132; `2`
## countEvens
Return the number of even ints in the given array. Note: the % "mod" operator computes the remainder, e.g. 5 % 2 is 1.
Example|Expected
-|-
`countEvens([2,1,2,3,4])` | &#10132; `3`
`countEvens([2,2,0])` | &#10132; `3`
`countEvens([1,3,5])` | &#10132; `0`
`countEvens([])` | &#10132; `0`
`countEvens([11,9,0,1])` | &#10132; `1`
`countEvens([2,11,9,0])` | &#10132; `2`
`countEvens([2])` | &#10132; `1`
`countEvens([2,5,12])` | &#10132; `2`
## bigDiff
Given an array length 1 or more of ints, return the difference between the largest and smallest values in the array. Note: the built-in Math.min(v1, v2) and Math.max(v1, v2) methods return the smaller or larger of two values.
Example|Expected
-|-
`bigDiff([10,3,5,6])` | &#10132; `7`
`bigDiff([7,2,10,9])` | &#10132; `8`
`bigDiff([2,10,7,2])` | &#10132; `8`
`bigDiff([2,10])` | &#10132; `8`
`bigDiff([10,2])` | &#10132; `8`
`bigDiff([10,0])` | &#10132; `10`
`bigDiff([2,3])` | &#10132; `1`
`bigDiff([2,2])` | &#10132; `0`
`bigDiff([2])` | &#10132; `0`
`bigDiff([5,1,6,1,9,9])` | &#10132; `8`
`bigDiff([7,6,8,5])` | &#10132; `3`
`bigDiff([7,7,6,8,5,5,6])` | &#10132; `3`
## centeredAverage
Return the "centered" average of an array of ints, which we'll say is the mean average of the values, except ignoring the largest and smallest values in the array. If there are multiple copies of the smallest value, ignore just one copy, and likewise for the largest value. Use int division to produce the final average. You may assume that the array is length 3 or more.
Example|Expected
-|-
`centeredAverage([2,3,4])` | &#10132; `3`
`centeredAverage([1,5,5,8,7])` | &#10132; `5.2`
`centeredAverage([-4,-2,-4,-2])` | &#10132; `-3`
`centeredAverage([5,3,4])` | &#10132; `4`
`centeredAverage([5,3,4])` | &#10132; `4`
`centeredAverage([5,3,4])` | &#10132; `4`
`centeredAverage([4])` | &#10132; `4`
`centeredAverage([2,3,4])` | &#10132; `3`
`centeredAverage([1])` | &#10132; `1`
`centeredAverage([7])` | &#10132; `7`
`centeredAverage([7])` | &#10132; `7`
`centeredAverage([1,99])` | &#10132; `50`
`centeredAverage([1,99])` | &#10132; `50`
`centeredAverage([4,4,4])` | &#10132; `4`
`centeredAverage([4,4,4])` | &#10132; `4`
`centeredAverage([6,4,8])` | &#10132; `6`
## sum13
Return the sum of the numbers in the array, returning 0 for an empty array. Except the number 13 is very unlucky, so it does not count and numbers that come immediately after a 13 also do not count.
Example|Expected
-|-
`sum13([1,2,2,1])` | &#10132; `6`
`sum13([1,1])` | &#10132; `2`
`sum13([1,2,2,1,13])` | &#10132; `6`
`sum13([1,2,13,2,1,13])` | &#10132; `4`
`sum13([13,1,2,13,2,1,13])` | &#10132; `3`
`sum13([])` | &#10132; `0`
`sum13([13])` | &#10132; `0`
`sum13([13,13])` | &#10132; `0`
`sum13([13,0,13])` | &#10132; `0`
`sum13([13,1,13])` | &#10132; `0`
`sum13([5,7,2])` | &#10132; `14`
`sum13([5,13,2])` | &#10132; `5`
`sum13([0])` | &#10132; `0`
`sum13([13,0])` | &#10132; `0`
## sum67
Return the sum of the numbers in the array, except ignore sections of numbers starting with a 6 and extending to the next 7 (every 6 will be followed by at least one 7). Return 0 for no numbers.
Example|Expected
-|-
`sum67([1,2,2])` | &#10132; `5`
`sum67([1,2,2,6,99,99,7])` | &#10132; `5`
`sum67([1,1,6,7,2])` | &#10132; `4`
`sum67([1,6,2,2,7,1,6,99,99,7])` | &#10132; `2`
`sum67([1,6,2,6,2,7,1,6,99,99,7])` | &#10132; `2`
`sum67([2,7,6,2,6,7,2,7])` | &#10132; `18`
`sum67([2,7,6,2,6,2,7])` | &#10132; `9`
`sum67([1,6,7,7])` | &#10132; `8`
`sum67([6,7,1,6,7,7])` | &#10132; `8`
`sum67([6,8,1,6,7])` | &#10132; `0`
`sum67([])` | &#10132; `0`
`sum67([6,7,11])` | &#10132; `11`
`sum67([11,6,7,11])` | &#10132; `22`
`sum67([2,2,6,7,7])` | &#10132; `11`
## has22
Given an array of ints, return true if the array contains a 2 next to a 2 somewhere.
Example|Expected
-|-
`has22([1,2,2])` | &#10132; `true`
`has22([1,2,1,2])` | &#10132; `false`
`has22([2,1,2])` | &#10132; `false`
`has22([2,2,1,2])` | &#10132; `true`
`has22([1,3,2])` | &#10132; `false`
`has22([1,3,2,2])` | &#10132; `true`
`has22([2,3,2,2])` | &#10132; `true`
`has22([4,2,4,2,2,5])` | &#10132; `true`
`has22([1,2])` | &#10132; `false`
`has22([2,2])` | &#10132; `true`
`has22([2])` | &#10132; `false`
`has22([])` | &#10132; `false`
`has22([3,3,2,2])` | &#10132; `true`
`has22([5,2,5,2])` | &#10132; `false`
## lucky13
Given an array of ints, return true if the array contains no 1's and no 3's.
Example|Expected
-|-
`lucky13([0,2,4])` | &#10132; `true`
`lucky13([1,2,3])` | &#10132; `false`
`lucky13([1,2,4])` | &#10132; `false`
`lucky13([2,7,2,8])` | &#10132; `true`
`lucky13([2,7,1,8])` | &#10132; `false`
`lucky13([3,7,2,8])` | &#10132; `false`
`lucky13([2,7,2,1])` | &#10132; `false`
`lucky13([1,2])` | &#10132; `false`
`lucky13([2,2])` | &#10132; `true`
`lucky13([2])` | &#10132; `true`
`lucky13([3])` | &#10132; `false`
`lucky13([])` | &#10132; `true`
## sum28
Given an array of ints, return true if the sum of all the 2's in the array is exactly 8.
Example|Expected
-|-
`sum28([2,3,2,2,4,2])` | &#10132; `true`
`sum28([2,3,2,2,4,2,2])` | &#10132; `false`
`sum28([1,2,3,4])` | &#10132; `false`
`sum28([2,2,2,2])` | &#10132; `true`
`sum28([1,2,2,2,2,4])` | &#10132; `true`
`sum28([])` | &#10132; `false`
`sum28([2])` | &#10132; `false`
`sum28([8])` | &#10132; `false`
`sum28([2,2,2])` | &#10132; `false`
`sum28([2,2,2,2,2])` | &#10132; `false`
`sum28([1,2,2,1,2,2])` | &#10132; `true`
`sum28([5,2,2,2,4,2])` | &#10132; `true`
## more14
Given an array of ints, return true if the number of 1's is greater than the number of 4's
Example|Expected
-|-
`more14([1,4,1])` | &#10132; `true`
`more14([1,4,1,4])` | &#10132; `false`
`more14([1,1])` | &#10132; `true`
`more14([1,6,6])` | &#10132; `true`
`more14([1])` | &#10132; `true`
`more14([1,4])` | &#10132; `false`
`more14([6,1,1])` | &#10132; `true`
`more14([1,6,4])` | &#10132; `false`
`more14([1,1,4,4,1])` | &#10132; `true`
`more14([1,1,6,4,4,1])` | &#10132; `true`
`more14([])` | &#10132; `false`
`more14([4,1,4,6])` | &#10132; `false`
`more14([4,1,4,6,1])` | &#10132; `false`
`more14([1,4,1,4,1,6])` | &#10132; `true`
## prependSum
Return a modified version of the input array (nums), where the first two items have been removed and one item – the sum of those two items - is added to the start of the array.
Example|Expected
-|-
`prependSum([3,4,4])` | &#10132; `[3,4,4]`
`prependSum([6,0])` | &#10132; `[6,0]`
`prependSum([2,1,1,1])` | &#10132; `[2,1,1,1]`
`prependSum([12])` | &#10132; `[12]`
`prependSum([0,0,0])` | &#10132; `[0,0,0]`
`prependSum([25,19,20])` | &#10132; `[25,19,20]`
`prependSum([0,-2,2])` | &#10132; `[0,-2,2]`
`prependSum([9,3,2,1,0])` | &#10132; `[9,3,2,1,0]`
## fizzArray
Given a number n, create and return a new array of length n, containing the numbers 0, 1, 2, ... n-1. The given n may be 0, in which case just return a length 0 array. You do not need a separate if-statement for the length-0 case; the for-loop should naturally execute 0 times in that case, so it just works. The syntax to make a new array is let myArray = [];
Example|Expected
-|-
`fizzArray(4)` | &#10132; `[0,1,2,3]`
`fizzArray(1)` | &#10132; `[0]`
`fizzArray(10)` | &#10132; `[0,1,2,3,4,5,6,7,8,9]`
`fizzArray(0)` | &#10132; `[]`
`fizzArray(2)` | &#10132; `[0,1]`
`fizzArray(7)` | &#10132; `[0,1,2,3,4,5,6]`
## only14
Given an array of ints, return true if every element is a 1 or a 4.
Example|Expected
-|-
`only14([1,4,1,4])` | &#10132; `true`
`only14([1,4,2,4])` | &#10132; `false`
`only14([1,1])` | &#10132; `true`
`only14([4,1])` | &#10132; `true`
`only14([2])` | &#10132; `false`
`only14([])` | &#10132; `true`
`only14([1,4,1,3])` | &#10132; `false`
`only14([3,1,3])` | &#10132; `false`
`only14([1])` | &#10132; `true`
`only14([4])` | &#10132; `true`
`only14([3,4])` | &#10132; `false`
`only14([1,3,4])` | &#10132; `false`
`only14([1,1,1])` | &#10132; `true`
`only14([1,1,1,5])` | &#10132; `false`
`only14([4,1,4,1])` | &#10132; `true`
## fizzArray2
Given a number n, create and return a new string array of length n, containing the strings "0", "1" "2" .. through n-1. N may be 0, in which case just return a length 0 array. Note: String(xxx) will make the String form of most types.
Example|Expected
-|-
`fizzArray2(4)` | &#10132; `["0","1","2","3"]`
`fizzArray2(10)` | &#10132; `["0","1","2","3","4","5","6","7","8","9"]`
`fizzArray2(2)` | &#10132; `["0","1"]`
`fizzArray2(1)` | &#10132; `["0"]`
`fizzArray2(0)` | &#10132; `[]`
`fizzArray2(7)` | &#10132; `["0","1","2","3","4","5","6"]`
`fizzArray2(9)` | &#10132; `["0","1","2","3","4","5","6","7","8"]`
`fizzArray2(11)` | &#10132; `["0","1","2","3","4","5","6","7","8","9","10"]`
## no14
Given an array of ints, return true if it contains no 1's or it contains no 4's.
Example|Expected
-|-
`no14([1,2,3])` | &#10132; `true`
`no14([1,2,3,4])` | &#10132; `false`
`no14([2,3,4])` | &#10132; `true`
`no14([1,1,4,4])` | &#10132; `false`
`no14([2,2,4,4])` | &#10132; `true`
`no14([2,3,4,1])` | &#10132; `false`
`no14([2,1,1])` | &#10132; `true`
`no14([1,4])` | &#10132; `false`
`no14([2])` | &#10132; `true`
`no14([2,1])` | &#10132; `true`
`no14([1])` | &#10132; `true`
`no14([4])` | &#10132; `true`
`no14([])` | &#10132; `true`
`no14([1,1,1,1])` | &#10132; `true`
`no14([9,4,4,1])` | &#10132; `false`
`no14([4,2,3,1])` | &#10132; `false`
`no14([4,2,3,5])` | &#10132; `true`
`no14([4,4,2])` | &#10132; `true`
`no14([1,4,4])` | &#10132; `false`
## isEverywhere
We'll say that a value is "everywhere" in an array if for every pair of adjacent elements in the array, at least one of the pair is that value. Return true if the given value is everywhere in the array.
Example|Expected
-|-
`isEverywhere([1,2,1,3], 1)` | &#10132; `true`
`isEverywhere([1,2,1,3], 2)` | &#10132; `false`
`isEverywhere([1,2,1,3,4], 1)` | &#10132; `false`
`isEverywhere([2,1,2,1], 1)` | &#10132; `true`
`isEverywhere([2,1,2,1], 2)` | &#10132; `true`
`isEverywhere([2,1,2,3,1], 2)` | &#10132; `false`
`isEverywhere([3,1], 3)` | &#10132; `true`
`isEverywhere([3,1], 2)` | &#10132; `false`
`isEverywhere([3], 1)` | &#10132; `true`
`isEverywhere([], 1)` | &#10132; `true`
`isEverywhere([1,2,1,2,3,2,5], 2)` | &#10132; `true`
`isEverywhere([1,2,1,1,1,2], 2)` | &#10132; `false`
`isEverywhere([2,1,2,1,1,2], 2)` | &#10132; `false`
`isEverywhere([2,1,2,2,2,1,1,2], 2)` | &#10132; `false`
`isEverywhere([2,1,2,2,2,1,2,1], 2)` | &#10132; `true`
`isEverywhere([2,1,2,1,2], 2)` | &#10132; `true`
## either24
Given an array of ints, return true if the array contains a 2 next to a 2 or a 4 next to a 4, but not both.
Example|Expected
-|-
`either24([1,2,2])` | &#10132; `true`
`either24([4,4,1])` | &#10132; `true`
`either24([4,4,1,2,2])` | &#10132; `false`
`either24([1,2,3,4])` | &#10132; `false`
`either24([3,5,9])` | &#10132; `false`
`either24([1,2,3,4,4])` | &#10132; `true`
`either24([2,2,3,4])` | &#10132; `true`
`either24([1,2,3,2,2,4])` | &#10132; `true`
`either24([1,2,3,2,2,4,4])` | &#10132; `false`
`either24([1,2])` | &#10132; `false`
`either24([2,2])` | &#10132; `true`
`either24([4,4])` | &#10132; `true`
`either24([2])` | &#10132; `false`
`either24([])` | &#10132; `false`
## matchUp
Given arrays nums1 and nums2 of the same length, for every element in nums1, consider the corresponding element in nums2 (at the same index). Return the count of the number of times that the two elements differ by 2 or less, but are not equal.
Example|Expected
-|-
`matchUp([1,2,3], [2,3,10])` | &#10132; `2`
`matchUp([1,2,3], [2,3,5])` | &#10132; `3`
`matchUp([1,2,3], [2,3,3])` | &#10132; `2`
`matchUp([5,3], [5,5])` | &#10132; `1`
`matchUp([5,3], [4,4])` | &#10132; `2`
`matchUp([5,3], [3,3])` | &#10132; `1`
`matchUp([5,3], [2,2])` | &#10132; `1`
`matchUp([5,3], [1,1])` | &#10132; `1`
`matchUp([5,3], [0,0])` | &#10132; `0`
`matchUp([4], [4])` | &#10132; `0`
`matchUp([4], [5])` | &#10132; `1`
## has77
Given an array of ints, return true if the array contains two 7's next to each other, or there are two 7's separated by one element, such as with {7, 1, 7}.
Example|Expected
-|-
`has77([1,7,7])` | &#10132; `true`
`has77([1,7,1,7])` | &#10132; `true`
`has77([1,7,1,1,7])` | &#10132; `false`
`has77([7,7,1,1,7])` | &#10132; `true`
`has77([2,7,2,2,7,2])` | &#10132; `false`
`has77([2,7,2,2,7,7])` | &#10132; `true`
`has77([7,2,7,2,2,7])` | &#10132; `true`
`has77([7,2,6,2,2,7])` | &#10132; `false`
`has77([7,7,7])` | &#10132; `true`
`has77([7,1,7])` | &#10132; `true`
`has77([7,1,1])` | &#10132; `false`
`has77([1,2])` | &#10132; `false`
`has77([1,7])` | &#10132; `false`
`has77([7])` | &#10132; `false`
## has12
Given an array of ints, return true if there is a 1 in the array with a 2 somewhere later in the array.
Example|Expected
-|-
`has12([1,3,2])` | &#10132; `true`
`has12([3,1,2])` | &#10132; `true`
`has12([3,1,4,5,2])` | &#10132; `true`
`has12([3,1,4,5,6])` | &#10132; `false`
`has12([3,1,4,1,6,2])` | &#10132; `true`
`has12([2,1,4,1,6,2])` | &#10132; `true`
`has12([2,1,4,1,6])` | &#10132; `false`
`has12([1])` | &#10132; `false`
`has12([2,1,3])` | &#10132; `false`
`has12([2,1,3,2])` | &#10132; `true`
`has12([2])` | &#10132; `false`
`has12([3,2])` | &#10132; `false`
`has12([3,1,3,2])` | &#10132; `true`
`has12([3,5,9])` | &#10132; `false`
`has12([3,5,1])` | &#10132; `false`
`has12([3,2,1])` | &#10132; `false`
`has12([1,2])` | &#10132; `true`
## modThree
Given an array of ints, return true if the array contains either 3 even or 3 odd values all next to each other.
Example|Expected
-|-
`modThree([2,1,3,5])` | &#10132; `true`
`modThree([2,1,2,5])` | &#10132; `false`
`modThree([2,4,2,5])` | &#10132; `true`
`modThree([1,2,1,2,1])` | &#10132; `false`
`modThree([9,9,9])` | &#10132; `true`
`modThree([1,2,1])` | &#10132; `false`
`modThree([1,2])` | &#10132; `false`
`modThree([1])` | &#10132; `false`
`modThree([])` | &#10132; `false`
`modThree([9,7,2,9])` | &#10132; `false`
`modThree([9,7,2,9,2,2])` | &#10132; `false`
`modThree([9,7,2,9,2,2,6])` | &#10132; `true`
## findTheMedian
Write a method that returns the median value of an array. The input array will never be empty. If the array is odd in length, the median is the value in the centre of the array. If the array is even, the median should be the average of the two middle values. Hint: You will need to ensure the input array is sorted - there is a sort() array method you can use for this step.
Example|Expected
-|-
`findTheMedian([4,9,9,2,1,5])` | &#10132; `5.5`
`findTheMedian([1,5,3,1,5])` | &#10132; `3`
`findTheMedian([10,12,15])` | &#10132; `12`
`findTheMedian([5])` | &#10132; `5`
`findTheMedian([11,9,0,1])` | &#10132; `4.5`
`findTheMedian([-1,11,-2,10,-3,15])` | &#10132; `4`
`findTheMedian([2,10,15,13])` | &#10132; `12.5`
`findTheMedian([2,5,-12])` | &#10132; `5`
## haveThree
Given an array of ints, return true if the value 3 appears in the array exactly 3 times, and no 3's are next to each other.
Example|Expected
-|-
`haveThree([3,1,3,1,3])` | &#10132; `true`
`haveThree([3,1,3,3])` | &#10132; `false`
`haveThree([3,4,3,3,4])` | &#10132; `false`
`haveThree([1,3,1,3,1,2])` | &#10132; `false`
`haveThree([1,3,1,3,1,3])` | &#10132; `true`
`haveThree([1,3,3,1,3])` | &#10132; `false`
`haveThree([1,3,1,3,1,3,4,3])` | &#10132; `false`
`haveThree([3,4,3,4,3,4,4])` | &#10132; `true`
`haveThree([3,3,3])` | &#10132; `false`
`haveThree([1,3])` | &#10132; `false`
`haveThree([3])` | &#10132; `false`
`haveThree([1])` | &#10132; `false`
## twoTwo
Given an array of ints, return true if every 2 that appears in the array is next to another 2.
Example|Expected
-|-
`twoTwo([4,2,2,3])` | &#10132; `true`
`twoTwo([2,2,4])` | &#10132; `true`
`twoTwo([2,2,4,2])` | &#10132; `false`
`twoTwo([1,3,4])` | &#10132; `true`
`twoTwo([1,2,2,3,4])` | &#10132; `true`
`twoTwo([1,2,3,4])` | &#10132; `false`
`twoTwo([2,2])` | &#10132; `true`
`twoTwo([2,2,7])` | &#10132; `true`
`twoTwo([2,2,7,2,1])` | &#10132; `false`
`twoTwo([4,2,2,2])` | &#10132; `true`
`twoTwo([2,2,2])` | &#10132; `true`
`twoTwo([1,2])` | &#10132; `false`
`twoTwo([2])` | &#10132; `false`
`twoTwo([1])` | &#10132; `true`
`twoTwo([])` | &#10132; `true`
`twoTwo([5,2,2,3])` | &#10132; `true`
`twoTwo([2,2,5,2])` | &#10132; `false`
## sameEnds
Return true if the group of N numbers at the start and end of the array are the same. For example, with {5, 6, 45, 99, 13, 5, 6}, the ends are the same for n=0 and n=2, and false for n=1 and n=3. You may assume that n is in the range 0..nums.length inclusive.
Example|Expected
-|-
`sameEnds([5,6,45,99,13,5,6], 1)` | &#10132; `false`
`sameEnds([5,6,45,99,13,5,6], 2)` | &#10132; `true`
`sameEnds([5,6,45,99,13,5,6], 3)` | &#10132; `false`
`sameEnds([1,2,5,2,1], 1)` | &#10132; `true`
`sameEnds([1,2,5,2,1], 2)` | &#10132; `false`
`sameEnds([1,2,5,2,1], 0)` | &#10132; `true`
`sameEnds([1,2,5,2,1], 5)` | &#10132; `true`
`sameEnds([1,1,1], 0)` | &#10132; `true`
`sameEnds([1,1,1], 1)` | &#10132; `true`
`sameEnds([1,1,1], 2)` | &#10132; `true`
`sameEnds([1,1,1], 3)` | &#10132; `true`
`sameEnds([1], 1)` | &#10132; `true`
`sameEnds([], 0)` | &#10132; `true`
`sameEnds([4,2,4,5], 1)` | &#10132; `false`
## tripleUp
Return true if the array contains, somewhere, three increasing adjacent numbers like .... 4, 5, 6, ... or 23, 24, 25.
Example|Expected
-|-
`tripleUp([1,4,5,6,2])` | &#10132; `true`
`tripleUp([1,2,3])` | &#10132; `true`
`tripleUp([1,2,4])` | &#10132; `false`
`tripleUp([1,2,4,5,7,6,5,6,7,6])` | &#10132; `true`
`tripleUp([1,2,4,5,7,6,5,7,7,6])` | &#10132; `false`
`tripleUp([1,2])` | &#10132; `false`
`tripleUp([1])` | &#10132; `false`
`tripleUp([])` | &#10132; `false`
`tripleUp([10,9,8,-100,-99,-98,100])` | &#10132; `true`
`tripleUp([10,9,8,-100,-99,99,100])` | &#10132; `false`
`tripleUp([-100,-99,-99,100,101,102])` | &#10132; `true`
`tripleUp([2,3,5,6,8,9,2,3])` | &#10132; `false`
## fizzArray3
Given start and end numbers, return a new array containing the sequence of integers from start up to but not including end, so start=5 and end=10 yields {5, 6, 7, 8, 9}. The end number will be greater or equal to the start number. Note that a length-0 array is valid.
Example|Expected
-|-
`fizzArray3(5, 10)` | &#10132; `[5,6,7,8,9]`
`fizzArray3(11, 18)` | &#10132; `[11,12,13,14,15,16,17]`
`fizzArray3(1, 3)` | &#10132; `[1,2]`
`fizzArray3(1, 2)` | &#10132; `[1]`
`fizzArray3(1, 1)` | &#10132; `[]`
`fizzArray3(1000, 1005)` | &#10132; `[1000,1001,1002,1003,1004]`
## shiftLeft
Return an array that is "left shifted" by one -- so {6, 2, 5, 3} returns {2, 5, 3, 6}. You may modify and return the given array, or return a new array.
Example|Expected
-|-
`shiftLeft([2,5,3,6])` | &#10132; `[2,5,3,6]`
`shiftLeft([2,1])` | &#10132; `[2,1]`
`shiftLeft([1])` | &#10132; `[1]`
`shiftLeft([])` | &#10132; `[]`
`shiftLeft([1,2,2,4,1])` | &#10132; `[1,2,2,4,1]`
`shiftLeft([1,1,1])` | &#10132; `[1,1,1]`
`shiftLeft([2,3,1])` | &#10132; `[2,3,1]`
## tenRun
For each multiple of 10 in the given array, change all the values following it to be that multiple of 10, until encountering another multiple of 10. So {2, 10, 3, 4, 20, 5} yields {2, 10, 10, 10, 20, 20}.
Example|Expected
-|-
`tenRun([2,10,10,10,20,20])` | &#10132; `[2,10,10,10,20,20]`
`tenRun([10,10,20,20])` | &#10132; `[10,10,20,20]`
`tenRun([10,10,10,20])` | &#10132; `[10,10,10,20]`
`tenRun([1,2,50,50])` | &#10132; `[1,2,50,50]`
`tenRun([1,20,50,50])` | &#10132; `[1,20,50,50]`
`tenRun([10,10])` | &#10132; `[10,10]`
`tenRun([10,10])` | &#10132; `[10,10]`
`tenRun([0,0])` | &#10132; `[0,0]`
`tenRun([1,2])` | &#10132; `[1,2]`
`tenRun([1])` | &#10132; `[1]`
`tenRun([])` | &#10132; `[]`
## pre4
Given a non-empty array of ints, return a new array containing the elements from the original array that come before the first 4 in the original array. The original array will contain at least one 4. Note that it is valid in java to create an array of length 0.
Example|Expected
-|-
`pre4([1,2,4,1])` | &#10132; `[1,2]`
`pre4([3,1,4])` | &#10132; `[3,1]`
`pre4([1,4,4])` | &#10132; `[1]`
`pre4([1,4,4,2])` | &#10132; `[1]`
`pre4([1,3,4,2,4])` | &#10132; `[1,3]`
`pre4([4,4])` | &#10132; `[]`
`pre4([3,3,4])` | &#10132; `[3,3]`
`pre4([1,2,1,4])` | &#10132; `[1,2,1]`
`pre4([2,1,4,2])` | &#10132; `[2,1]`
`pre4([2,1,2,1,4,2])` | &#10132; `[2,1,2,1]`
## post4
Given a non-empty array of ints, return a new array containing the elements from the original array that come after the last 4 in the original array. The original array will contain at least one 4. Note that it is valid in java to create an array of length 0.
Example|Expected
-|-
`post4([2,4,1,2])` | &#10132; `[1,2]`
`post4([4,1,4,2])` | &#10132; `[2]`
`post4([4,4,1,2,3])` | &#10132; `[1,2,3]`
`post4([4,2])` | &#10132; `[2]`
`post4([4,4,3])` | &#10132; `[3]`
`post4([4,4])` | &#10132; `[]`
`post4([4])` | &#10132; `[]`
`post4([2,4,1,4,3,2])` | &#10132; `[3,2]`
`post4([4,1,4,2,2,2])` | &#10132; `[2,2,2]`
`post4([3,4,3,2])` | &#10132; `[3,2]`
## notAlone
We'll say that an element in an array is "alone" if there are values before and after it, and those values are different from it. Return a version of the given array where every instance of the given value which is alone is replaced by whichever value to its left or right is larger.
Example|Expected
-|-
`notAlone([1,3,3], 2)` | &#10132; `[1,3,3]`
`notAlone([1,3,3,5,5,2], 2)` | &#10132; `[1,3,3,5,5,2]`
`notAlone([3,4], 3)` | &#10132; `[3,4]`
`notAlone([3,3], 3)` | &#10132; `[3,3]`
`notAlone([1,3,3,2], 1)` | &#10132; `[1,3,3,2]`
`notAlone([3], 3)` | &#10132; `[3]`
`notAlone([], 3)` | &#10132; `[]`
`notAlone([7,7,6], 1)` | &#10132; `[7,7,6]`
`notAlone([1,1,1], 1)` | &#10132; `[1,1,1]`
`notAlone([1,1,1,2], 1)` | &#10132; `[1,1,1,2]`
## zeroFront
Return an array that contains the exact same numbers as the given array, but rearranged so that all the zeros are grouped at the start of the array. The order of the non-zero numbers does not matter. So {1, 0, 0, 1} becomes {0 ,0, 1, 1}. You may modify and return the given array or make a new array.
Example|Expected
-|-
`zeroFront([0,0,1,1])` | &#10132; `[0,0,1,1]`
`zeroFront([0,0,1,1,1])` | &#10132; `[0,0,1,1,1]`
`zeroFront([0,1])` | &#10132; `[0,1]`
`zeroFront([0,1])` | &#10132; `[0,1]`
`zeroFront([0,1,1,1])` | &#10132; `[0,1,1,1]`
`zeroFront([2,2,2,2])` | &#10132; `[2,2,2,2]`
`zeroFront([0,0,0,1])` | &#10132; `[0,0,0,1]`
`zeroFront([0,0,0,-1,-1])` | &#10132; `[0,0,0,-1,-1]`
`zeroFront([0,0,-3,-3])` | &#10132; `[0,0,-3,-3]`
`zeroFront([])` | &#10132; `[]`
`zeroFront([0,0,9,9,9,9])` | &#10132; `[0,0,9,9,9,9]`
## withoutTen
Return a version of the given array where all the 10's have been removed. The remaining elements should shift left towards the start of the array as needed, and the empty spaces a the end of the array should be 0. So {1, 10, 10, 2} yields {1, 2, 0, 0}. You may modify and return the given array or make a new array.
Example|Expected
-|-
`withoutTen([1,10,10,2])` | &#10132; `[1,2,0,0]`
`withoutTen([10,2,10])` | &#10132; `[2,0,0]`
`withoutTen([1,99,10])` | &#10132; `[1,99,0]`
`withoutTen([10,13,10,14])` | &#10132; `[13,14,0,0]`
`withoutTen([10,13,10,14,10])` | &#10132; `[13,14,0,0,0]`
`withoutTen([10,10,3])` | &#10132; `[3,0,0]`
`withoutTen([1])` | &#10132; `[1]`
`withoutTen([13,1])` | &#10132; `[13,1]`
`withoutTen([10])` | &#10132; `[0]`
`withoutTen([])` | &#10132; `[]`
## zeroMax
Return a version of the given array where each zero value in the array is replaced by the largest odd value to the right of the zero in the array. If there is no odd value to the right of the zero, leave the zero as a zero.
Example|Expected
-|-
`zeroMax([5,5,3,3])` | &#10132; `[5,5,3,3]`
`zeroMax([3,4,3,3])` | &#10132; `[3,4,3,3]`
`zeroMax([1,1,0])` | &#10132; `[1,1,0]`
`zeroMax([5,1,5])` | &#10132; `[5,1,5]`
`zeroMax([0,2,0])` | &#10132; `[0,2,0]`
`zeroMax([1])` | &#10132; `[1]`
`zeroMax([0])` | &#10132; `[0]`
`zeroMax([])` | &#10132; `[]`
`zeroMax([7,3,4,3,0,2])` | &#10132; `[7,3,4,3,0,2]`
`zeroMax([7,3,4,3,1,1])` | &#10132; `[7,3,4,3,1,1]`
`zeroMax([7,3,4,3,0,0])` | &#10132; `[7,3,4,3,0,0]`
`zeroMax([7,7,1,7,7,7])` | &#10132; `[7,7,1,7,7,7]`
## evenOdd
Return an array that contains the exact same numbers as the given array, but rearranged so that all the even numbers come before all the odd numbers. Other than that, the numbers can be in any order. You may modify and return the given array, or make a new array.
Example|Expected
-|-
`evenOdd([1,0,1,0,0,1,1])` | &#10132; `[0,0,0,1,1,1,1]`
`evenOdd([3,3,2])` | &#10132; `[2,3,3]`
`evenOdd([2,2,2])` | &#10132; `[2,2,2]`
`evenOdd([3,2,2])` | &#10132; `[2,2,3]`
`evenOdd([1,1,0,1,0])` | &#10132; `[0,0,1,1,1]`
`evenOdd([1])` | &#10132; `[1]`
`evenOdd([1,2])` | &#10132; `[2,1]`
`evenOdd([2,1])` | &#10132; `[2,1]`
`evenOdd([])` | &#10132; `[]`
## fizzBuzz
This is slightly more difficult version of the famous FizzBuzz problem which is sometimes given as a first problem for job interviews. Consider the series of numbers beginning at start and running up to but not including end, so for example start=1 and end=5 gives the series 1, 2, 3, 4. Return a new String[] array containing the string form of these numbers, except for multiples of 3, use "Fizz" instead of the number, for multiples of 5 use "Buzz", and for multiples of both 3 and 5 use "FizzBuzz". In Java, String.valueOf(xxx) will make the String form of an int or other type. This version is a little more complicated than the usual version since you have to allocate and index into an array instead of just printing, and we vary the start/end instead of just always doing 1..100.
Example|Expected
-|-
`fizzBuzz(1, 6)` | &#10132; `["1","2","Fizz","4","Buzz"]`
`fizzBuzz(1, 8)` | &#10132; `["1","2","Fizz","4","Buzz","Fizz","7"]`
`fizzBuzz(1, 11)` | &#10132; `["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz"]`
`fizzBuzz(1, 16)` | &#10132; `["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"]`
`fizzBuzz(1, 4)` | &#10132; `["1","2","Fizz"]`
`fizzBuzz(1, 2)` | &#10132; `["1"]`
`fizzBuzz(50, 56)` | &#10132; `["Buzz","Fizz","52","53","Fizz","Buzz"]`
`fizzBuzz(15, 17)` | &#10132; `["FizzBuzz","16"]`
`fizzBuzz(30, 36)` | &#10132; `["FizzBuzz","31","32","Fizz","34","Buzz"]`
`fizzBuzz(1000, 1006)` | &#10132; `["Buzz","1001","Fizz","1003","1004","FizzBuzz"]`
`fizzBuzz(99, 102)` | &#10132; `["Fizz","Buzz","101"]`
`fizzBuzz(14, 20)` | &#10132; `["14","FizzBuzz","16","17","Fizz","19"]`
