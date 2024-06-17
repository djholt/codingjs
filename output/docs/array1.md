# Array 1
## firstLast6
Given an array of ints, return true if 6 appears as either the first or last element in the array. The array will be length 1 or more.
firstLast6(nums)|Expected
-|-
`firstLast6([1,2,6])` | &#10132; `true`
`firstLast6([6,1,2,3])` | &#10132; `true`
`firstLast6([13,6,1,2,3])` | &#10132; `false`
`firstLast6([13,6,1,2,6])` | &#10132; `true`
`firstLast6([3,2,1])` | &#10132; `false`
`firstLast6([3,6,1])` | &#10132; `false`
`firstLast6([3,6])` | &#10132; `true`
`firstLast6([6])` | &#10132; `true`
`firstLast6([3])` | &#10132; `false`
`firstLast6([5,6])` | &#10132; `true`
`firstLast6([5,5])` | &#10132; `false`
`firstLast6([1,2,3,4,6])` | &#10132; `true`
`firstLast6([1,2,3,4])` | &#10132; `false`
## sameFirstLast
Given an array of ints, return true if the array is length 1 or more, and the first element and the last element are equal.
sameFirstLast(nums)|Expected
-|-
`sameFirstLast([1,2,3])` | &#10132; `false`
`sameFirstLast([1,2,3,1])` | &#10132; `true`
`sameFirstLast([1,2,1])` | &#10132; `true`
`sameFirstLast([7])` | &#10132; `true`
`sameFirstLast([])` | &#10132; `false`
`sameFirstLast([1,2,3,4,5,1])` | &#10132; `true`
`sameFirstLast([1,2,3,4,5,13])` | &#10132; `false`
`sameFirstLast([13,2,3,4,5,13])` | &#10132; `true`
`sameFirstLast([7,7])` | &#10132; `true`
## makePi
Return an int array length 3 containing the first 3 digits of pi, {3, 1, 4}.
makePi()|Expected
-|-
`makePi()` | &#10132; `[3,1,4]`
## commonEnd
Given 2 arrays of ints, a and b, return true if they have the same first element or they have the same last element. Both arrays will be length 1 or more.
commonEnd(a, b)|Expected
-|-
`commonEnd([1,2,3], [7,3])` | &#10132; `true`
`commonEnd([1,2,3], [7,3,2])` | &#10132; `false`
`commonEnd([1,2,3], [1,3])` | &#10132; `true`
`commonEnd([1,2,3], [1])` | &#10132; `true`
`commonEnd([1,2,3], [2])` | &#10132; `false`
## sum3
Given an array of ints length 3, return the sum of all the elements.
sum3(nums)|Expected
-|-
`sum3([1,2,3])` | &#10132; `6`
`sum3([5,11,2])` | &#10132; `18`
`sum3([7,0,0])` | &#10132; `7`
`sum3([1,2,1])` | &#10132; `4`
`sum3([1,1,1])` | &#10132; `3`
`sum3([2,7,2])` | &#10132; `11`
## rotateLeft3
Given an array of ints length 3, return an array with the elements "rotated left" so {1, 2, 3} yields {2, 3, 1}.
rotateLeft3(nums)|Expected
-|-
`rotateLeft3([1,2,3])` | &#10132; `[2,3,1]`
`rotateLeft3([5,11,9])` | &#10132; `[11,9,5]`
`rotateLeft3([7,0,0])` | &#10132; `[0,0,7]`
`rotateLeft3([1,2,1])` | &#10132; `[2,1,1]`
`rotateLeft3([0,0,1])` | &#10132; `[0,1,0]`
## reverse3
Given an array of ints length 3, return a new array with the elements in reverse order, so {1, 2, 3} becomes {3, 2, 1}.
reverse3(nums)|Expected
-|-
`reverse3([1,2,3])` | &#10132; `[3,2,1]`
`reverse3([5,11,9])` | &#10132; `[9,11,5]`
`reverse3([7,0,0])` | &#10132; `[0,0,7]`
`reverse3([2,1,2])` | &#10132; `[2,1,2]`
`reverse3([1,2,1])` | &#10132; `[1,2,1]`
`reverse3([2,11,3])` | &#10132; `[3,11,2]`
`reverse3([0,6,5])` | &#10132; `[5,6,0]`
`reverse3([7,2,3])` | &#10132; `[3,2,7]`
## maxEnd3
Given an array of ints length 3, figure out which is larger, the first or last element in the array, and set all the other elements to be that value. Return the changed array.
maxEnd3(nums)|Expected
-|-
`maxEnd3([1,2,3])` | &#10132; `[3,3,3]`
`maxEnd3([11,5,9])` | &#10132; `[11,11,11]`
`maxEnd3([2,11,3])` | &#10132; `[3,3,3]`
`maxEnd3([11,3,3])` | &#10132; `[11,11,11]`
`maxEnd3([3,11,11])` | &#10132; `[11,11,11]`
`maxEnd3([2,2,2])` | &#10132; `[2,2,2]`
`maxEnd3([2,11,2])` | &#10132; `[2,2,2]`
`maxEnd3([0,0,1])` | &#10132; `[1,1,1]`
## sum2
Given an array of ints, return the sum of the first 2 elements in the array. If the array length is less than 2, just sum up the elements that exist, returning 0 if the array is length 0.
sum2(nums)|Expected
-|-
`sum2([1,2,3])` | &#10132; `3`
`sum2([1,1])` | &#10132; `2`
`sum2([1,1,1,1])` | &#10132; `2`
`sum2([1,2])` | &#10132; `3`
`sum2([1])` | &#10132; `1`
`sum2([])` | &#10132; `0`
`sum2([4,5,6])` | &#10132; `9`
`sum2([4])` | &#10132; `4`
## middleWay
Given 2 int arrays, a and b, each length 3, return a new array length 2 containing their middle elements.
middleWay(a, b)|Expected
-|-
`middleWay([1,2,3], [4,5,6])` | &#10132; `[2,5]`
`middleWay([7,7,7], [3,8,0])` | &#10132; `[7,8]`
`middleWay([5,2,9], [1,4,5])` | &#10132; `[2,4]`
`middleWay([1,9,7], [4,8,8])` | &#10132; `[9,8]`
`middleWay([1,2,3], [3,1,4])` | &#10132; `[2,1]`
`middleWay([1,2,3], [4,1,1])` | &#10132; `[2,1]`
## makeEnds
Given an array of ints, return a new array length 2 containing the first and last elements from the original array. The original array will be length 1 or more.
makeEnds(nums)|Expected
-|-
`makeEnds([1,2,3])` | &#10132; `[1,3]`
`makeEnds([1,2,3,4])` | &#10132; `[1,4]`
`makeEnds([7,4,6,2])` | &#10132; `[7,2]`
`makeEnds([1,2,2,2,2,2,2,3])` | &#10132; `[1,3]`
`makeEnds([7,4])` | &#10132; `[7,4]`
`makeEnds([7])` | &#10132; `[7,7]`
`makeEnds([5,2,9])` | &#10132; `[5,9]`
`makeEnds([2,3,4,1])` | &#10132; `[2,1]`
## has23
Given an int array length 2, return true if it contains a 2 or a 3.
has23(nums)|Expected
-|-
`has23([2,5])` | &#10132; `true`
`has23([4,3])` | &#10132; `true`
`has23([4,5])` | &#10132; `false`
`has23([2,2])` | &#10132; `true`
`has23([3,2])` | &#10132; `true`
`has23([3,3])` | &#10132; `true`
`has23([7,7])` | &#10132; `false`
`has23([3,9])` | &#10132; `true`
`has23([9,5])` | &#10132; `false`
## no23
Given an int array length 2, return true if it does not contain a 2 or 3.
no23(nums)|Expected
-|-
`no23([4,5])` | &#10132; `true`
`no23([4,2])` | &#10132; `false`
`no23([3,5])` | &#10132; `false`
`no23([1,9])` | &#10132; `true`
`no23([2,9])` | &#10132; `false`
`no23([1,3])` | &#10132; `false`
`no23([1,1])` | &#10132; `true`
`no23([2,2])` | &#10132; `false`
`no23([3,3])` | &#10132; `false`
`no23([7,8])` | &#10132; `true`
`no23([8,7])` | &#10132; `true`
## makeLast
Given an int array, return a new array with double the length where its last element is the same as the original array, and all the other elements are 0. The original array will be length 1 or more.
makeLast(nums)|Expected
-|-
`makeLast([4,5,6])` | &#10132; `[0,0,0,0,0,6]`
`makeLast([1,2])` | &#10132; `[0,0,0,2]`
`makeLast([3])` | &#10132; `[0,3]`
`makeLast([0])` | &#10132; `[0,0]`
`makeLast([7,7,7])` | &#10132; `[0,0,0,0,0,7]`
`makeLast([3,1,4])` | &#10132; `[0,0,0,0,0,4]`
`makeLast([1,2,3,4])` | &#10132; `[0,0,0,0,0,0,0,4]`
`makeLast([1,2,3,0])` | &#10132; `[0,0,0,0,0,0,0,0]`
`makeLast([2,4])` | &#10132; `[0,0,0,4]`
## double23
Given an int array, return true if the array contains 2 twice, or 3 twice. The array will be length 0, 1, or 2.
double23(nums)|Expected
-|-
`double23([2,2])` | &#10132; `true`
`double23([3,3])` | &#10132; `true`
`double23([2,3])` | &#10132; `false`
`double23([3,2])` | &#10132; `false`
`double23([4,5])` | &#10132; `false`
`double23([2])` | &#10132; `false`
`double23([3])` | &#10132; `false`
`double23([])` | &#10132; `false`
`double23([3,4])` | &#10132; `false`
## fix23
Given an int array length 3, if there is a 2 in the array immediately followed by a 3, set the 3 element to 0. Return the changed array.
fix23(nums)|Expected
-|-
`fix23([1,2,3])` | &#10132; `[1,2,0]`
`fix23([2,3,5])` | &#10132; `[2,0,5]`
`fix23([1,2,1])` | &#10132; `[1,2,1]`
`fix23([3,2,1])` | &#10132; `[3,2,1]`
`fix23([2,2,3])` | &#10132; `[2,2,0]`
`fix23([2,3,3])` | &#10132; `[2,0,3]`
## start1
Start with 2 int arrays, a and b, of any length. Return how many of the arrays have 1 as their first element.
start1(a, b)|Expected
-|-
`start1([1,2,3], [1,3])` | &#10132; `2`
`start1([7,2,3], [1])` | &#10132; `1`
`start1([1,2], [])` | &#10132; `1`
`start1([], [1,2])` | &#10132; `1`
`start1([7], [])` | &#10132; `0`
`start1([7], [1])` | &#10132; `1`
`start1([1], [1])` | &#10132; `2`
`start1([7], [8])` | &#10132; `0`
`start1([], [])` | &#10132; `0`
`start1([1,3], [1])` | &#10132; `2`
## biggerTwo
Start with 2 int arrays, a and b, each length 2. Consider the sum of the values in each array. Return the array which has the largest sum. In event of a tie, return a.
biggerTwo(a, b)|Expected
-|-
`biggerTwo([1,2], [3,4])` | &#10132; `[3,4]`
`biggerTwo([3,4], [1,2])` | &#10132; `[3,4]`
`biggerTwo([1,1], [1,2])` | &#10132; `[1,2]`
`biggerTwo([2,1], [1,1])` | &#10132; `[2,1]`
`biggerTwo([2,2], [1,3])` | &#10132; `[2,2]`
`biggerTwo([1,3], [2,2])` | &#10132; `[1,3]`
`biggerTwo([6,7], [3,1])` | &#10132; `[6,7]`
## makeMiddle
Given an array of ints of even length, return a new array length 2 containing the middle two elements from the original array. The original array will be length 2 or more.
makeMiddle(nums)|Expected
-|-
`makeMiddle([1,2,3,4])` | &#10132; `[2,3]`
`makeMiddle([7,1,2,3,4,9])` | &#10132; `[2,3]`
`makeMiddle([1,2])` | &#10132; `[1,2]`
`makeMiddle([5,2,4,7])` | &#10132; `[2,4]`
`makeMiddle([9,0,4,3,9,1])` | &#10132; `[4,3]`
## plusTwo
Given 2 int arrays, each length 2, return a new array length 4 containing all their elements.
plusTwo(a, b)|Expected
-|-
`plusTwo([1,2], [3,4])` | &#10132; `[1,2,3,4]`
`plusTwo([4,4], [2,2])` | &#10132; `[4,4,2,2]`
`plusTwo([9,2], [3,4])` | &#10132; `[9,2,3,4]`
## swapEnds
Given an array of ints, swap the first and last elements in the array. Return the modified array. The array length will be at least 1.
swapEnds(nums)|Expected
-|-
`swapEnds([1,2,3,4])` | &#10132; `[4,2,3,1]`
`swapEnds([1,2,3])` | &#10132; `[3,2,1]`
`swapEnds([8,6,7,9,5])` | &#10132; `[5,6,7,9,8]`
`swapEnds([3,1,4,1,5,9])` | &#10132; `[9,1,4,1,5,3]`
`swapEnds([1,2])` | &#10132; `[2,1]`
`swapEnds([1])` | &#10132; `[1]`
## midThree
Given an array of ints of odd length, return a new array length 3 containing the elements from the middle of the array. The array length will be at least 3.
midThree(nums)|Expected
-|-
`midThree([1,2,3,4,5])` | &#10132; `[2,3,4]`
`midThree([8,6,7,5,3,0,9])` | &#10132; `[7,5,3]`
`midThree([1,2,3])` | &#10132; `[1,2,3]`
## maxTriple
Given an array of ints of odd length, look at the first, last, and middle values in the array and return the largest. The array length will be a least 1.
maxTriple(nums)|Expected
-|-
`maxTriple([1,2,3])` | &#10132; `3`
`maxTriple([1,5,3])` | &#10132; `5`
`maxTriple([5,2,3])` | &#10132; `5`
`maxTriple([1,2,3,1,1])` | &#10132; `3`
`maxTriple([1,7,3,1,5])` | &#10132; `5`
`maxTriple([5,1,3,7,1])` | &#10132; `5`
`maxTriple([5,1,7,3,7,8,1])` | &#10132; `5`
`maxTriple([5,1,7,9,7,8,1])` | &#10132; `9`
`maxTriple([5,1,7,3,7,8,9])` | &#10132; `9`
`maxTriple([2,2,5,1,1])` | &#10132; `5`
## frontPiece
Given an int array of any length, return a new array of its first 2 elements. If the array is smaller than length 2, use whatever elements are present.
frontPiece(nums)|Expected
-|-
`frontPiece([1,2,3])` | &#10132; `[1,2]`
`frontPiece([1,2])` | &#10132; `[1,2]`
`frontPiece([1])` | &#10132; `[1]`
`frontPiece([])` | &#10132; `[]`
`frontPiece([6,5,0])` | &#10132; `[6,5]`
`frontPiece([6,5])` | &#10132; `[6,5]`
`frontPiece([3,1,4,1,5])` | &#10132; `[3,1]`
`frontPiece([6])` | &#10132; `[6]`
## unlucky1
We'll say that a 1 immediately followed by a 3 in an array is an "unlucky" 1. Return true if the given array contains an unlucky 1 in the first 2 or last 2 positions in the array.
unlucky1(nums)|Expected
-|-
`unlucky1([1,3,4,5])` | &#10132; `true`
`unlucky1([2,1,3,4,5])` | &#10132; `true`
`unlucky1([1,1,1])` | &#10132; `false`
`unlucky1([1,3,1])` | &#10132; `true`
`unlucky1([1,1,3])` | &#10132; `true`
`unlucky1([1,2,3])` | &#10132; `false`
`unlucky1([3,3,3])` | &#10132; `false`
`unlucky1([1,3])` | &#10132; `true`
`unlucky1([1,4])` | &#10132; `false`
`unlucky1([1])` | &#10132; `false`
`unlucky1([])` | &#10132; `false`
`unlucky1([1,1,1,3,1])` | &#10132; `false`
`unlucky1([1,1,3,1,1])` | &#10132; `true`
`unlucky1([1,1,1,1,3])` | &#10132; `true`
`unlucky1([1,4,1,5])` | &#10132; `false`
`unlucky1([1,1,2,3])` | &#10132; `false`
`unlucky1([2,3,2,1])` | &#10132; `false`
`unlucky1([2,3,1,3])` | &#10132; `true`
`unlucky1([1,2,3,4,1,3])` | &#10132; `true`
## make2
Given 2 int arrays, a and b, return a new array length 2 containing, as much as will fit, the elements from a followed by the elements from b. The arrays may be any length, including 0, but there will be 2 or more elements available between the 2 arrays.
make2(a, b)|Expected
-|-
`make2([4,5], [1,2,3])` | &#10132; `[4,5]`
`make2([4], [1,2,3])` | &#10132; `[4,1]`
`make2([], [1,2])` | &#10132; `[1,2]`
`make2([1,2], [])` | &#10132; `[1,2]`
`make2([3], [1,2,3])` | &#10132; `[3,1]`
`make2([3], [1])` | &#10132; `[3,1]`
`make2([3,1,4], [])` | &#10132; `[3,1]`
`make2([1], [1])` | &#10132; `[1,1]`
`make2([1,2,3], [7,8])` | &#10132; `[1,2]`
`make2([7,8], [1,2,3])` | &#10132; `[7,8]`
`make2([7], [1,2,3])` | &#10132; `[7,1]`
`make2([5,4], [2,3,7])` | &#10132; `[5,4]`
## front11
Given 2 int arrays, a and b, of any length, return a new array with the first element of each array. If either array is length 0, ignore that array.
front11(a, b)|Expected
-|-
`front11([1,2,3], [7,9,8])` | &#10132; `[1,7]`
`front11([1], [2])` | &#10132; `[1,2]`
`front11([1,7], [])` | &#10132; `[1]`
`front11([], [2,8])` | &#10132; `[2]`
`front11([], [])` | &#10132; `[]`
`front11([3], [1,4,1,9])` | &#10132; `[3,1]`
`front11([1,4,1,9], [])` | &#10132; `[1]`
