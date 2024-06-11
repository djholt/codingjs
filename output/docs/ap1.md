# AP 1
## scoresIncreasing
Given an array of scores, return true if each score is equal or greater than the one before. The array will be length 2 or more.
scoresIncreasing(scores)|Expected
-|-
`scoresIncreasing([1,3,4])` | &#10132; `true`
`scoresIncreasing([1,3,2])` | &#10132; `false`
`scoresIncreasing([1,1,4])` | &#10132; `true`
`scoresIncreasing([1,1,2,4,4,7])` | &#10132; `true`
`scoresIncreasing([1,1,2,4,3,7])` | &#10132; `false`
## scores100
Given an array of scores, return true if there are scores of 100 next to each other in the array. The array length will be at least 2.
scores100(scores)|Expected
-|-
`scores100([1,100,100])` | &#10132; `true`
`scores100([1,100,99,100])` | &#10132; `false`
`scores100([100,1,100,100])` | &#10132; `true`
`scores100([100,1,100,1])` | &#10132; `false`
`scores100([1,2,3,4,5])` | &#10132; `false`
`scores100([1,2,100,4,5])` | &#10132; `false`
## scoresClump
Given an array of scores sorted in increasing order, return true if the array contains 3 adjacent scores that differ from each other by at most 2, such as with {3, 4, 5} or {3, 5, 5}.
scoresClump(scores)|Expected
-|-
`scoresClump([3,4,5])` | &#10132; `true`
`scoresClump([3,4,6])` | &#10132; `false`
`scoresClump([1,3,5,5])` | &#10132; `true`
`scoresClump([2,4,5,6])` | &#10132; `true`
`scoresClump([2,4,5,7])` | &#10132; `false`
`scoresClump([2,4,4,7])` | &#10132; `true`
`scoresClump([3,3,6,7,9])` | &#10132; `false`
`scoresClump([3,3,7,7,9])` | &#10132; `true`
`scoresClump([4,5,8])` | &#10132; `false`
## scoresAverage
Given an array of scores, compute the int average of the first half and the second half, and return whichever is larger. We'll say that the second half begins at index length/2. The array length will be at least 2. To practice decomposition, write a separate helper method int average(int[] scores, int start, int end) { which computes the average of the elements between indexes start..end. Call your helper method twice to implement scoresAverage(). Write your helper method after your scoresAverage() method in the JavaBat text area. Normally you would compute averages with doubles, but here we use ints so the expected results are exact.
scoresAverage(scores)|Expected
-|-
`scoresAverage([2,2,4,4])` | &#10132; `4`
`scoresAverage([4,4,4,2,2,2])` | &#10132; `4`
`scoresAverage([3,4,5,1,2,3])` | &#10132; `4`
`scoresAverage([5,6])` | &#10132; `6`
`scoresAverage([5,4])` | &#10132; `5`
`scoresAverage([5,4,5,6,2,1,2,3])` | &#10132; `5`
## wordsCount
Given an array of strings, return the count of the number of strings with the given length.
wordsCount(words, len)|Expected
-|-
`wordsCount(["a","bb","b","ccc"], 1)` | &#10132; `2`
`wordsCount(["a","bb","b","ccc"], 3)` | &#10132; `1`
`wordsCount(["a","bb","b","ccc"], 4)` | &#10132; `0`
`wordsCount(["xx","yyy","x","yy","z"], 1)` | &#10132; `2`
`wordsCount(["xx","yyy","x","yy","z"], 2)` | &#10132; `2`
## wordsFront
Given an array of strings, return a new array containing the first N strings. N will be in the range 1..length.
wordsFront(words, n)|Expected
-|-
`wordsFront(["a","b","c","d"], 1)` | &#10132; `["a"]`
`wordsFront(["a","b","c","d"], 2)` | &#10132; `["a","b"]`
`wordsFront(["a","b","c","d"], 3)` | &#10132; `["a","b","c"]`
`wordsFront(["a","b","c","d"], 4)` | &#10132; `["a","b","c","d"]`
`wordsFront(["Hi","There"], 1)` | &#10132; `["Hi"]`
## wordsWithoutList
Given an array of strings, return a new List (e.g. an ArrayList) where all the strings of the given length are omitted. See wordsWithout() below which is more difficult because it uses arrays.
wordsWithoutList(words, len)|Expected
-|-
`wordsWithoutList(["a","bb","b","ccc"], 1)` | &#10132; `["bb","ccc"]`
`wordsWithoutList(["a","bb","b","ccc"], 3)` | &#10132; `["a","bb","b"]`
`wordsWithoutList(["a","bb","b","ccc"], 4)` | &#10132; `["a","bb","b","ccc"]`
`wordsWithoutList(["xx","yyy","x","yy","z"], 1)` | &#10132; `["xx","yyy","yy"]`
## hasOne
Given a positive int n, return true if it contains a 1 digit. Note: use % to get the rightmost digit, and / to discard the rightmost digit.
hasOne(n)|Expected
-|-
`hasOne(10)` | &#10132; `true`
`hasOne(22)` | &#10132; `false`
`hasOne(220)` | &#10132; `false`
`hasOne(212)` | &#10132; `true`
`hasOne(1)` | &#10132; `true`
`hasOne(9)` | &#10132; `false`
`hasOne(211112)` | &#10132; `true`
`hasOne(121121)` | &#10132; `true`
`hasOne(222222)` | &#10132; `false`
`hasOne(56156)` | &#10132; `true`
`hasOne(56556)` | &#10132; `false`
## dividesSelf
We'll say that a positive int divides itself if every digit in the number divides into the number evenly. So for example 128 divides itself since 1, 2, and 8 all divide into 128 evenly. We'll say that 0 does not divide into anything evenly, so no number with a 0 digit divides itself. Note: use % to get the rightmost digit, and / to discard the rightmost digit.
dividesSelf(n)|Expected
-|-
`dividesSelf(128)` | &#10132; `true`
`dividesSelf(12)` | &#10132; `true`
`dividesSelf(120)` | &#10132; `false`
`dividesSelf(122)` | &#10132; `true`
`dividesSelf(13)` | &#10132; `false`
`dividesSelf(32)` | &#10132; `false`
`dividesSelf(22)` | &#10132; `true`
`dividesSelf(42)` | &#10132; `false`
`dividesSelf(212)` | &#10132; `true`
`dividesSelf(213)` | &#10132; `false`
`dividesSelf(162)` | &#10132; `true`
## copyEvens
Given an array of positive ints, return a new array of length "count" containing the first even numbers from the original array. The original array will contain at least "count" even numbers.
copyEvens(nums, count)|Expected
-|-
`copyEvens([3,2,4,5,8], 2)` | &#10132; `[2,4]`
`copyEvens([3,2,4,5,8], 3)` | &#10132; `[2,4,8]`
`copyEvens([6,1,2,4,5,8], 3)` | &#10132; `[6,2,4]`
`copyEvens([6,1,2,4,5,8], 4)` | &#10132; `[6,2,4,8]`
`copyEvens([3,1,4,1,5], 1)` | &#10132; `[4]`
`copyEvens([2], 1)` | &#10132; `[2]`
`copyEvens([6,2,4,8], 2)` | &#10132; `[6,2]`
`copyEvens([6,2,4,8], 3)` | &#10132; `[6,2,4]`
`copyEvens([6,2,4,8], 4)` | &#10132; `[6,2,4,8]`
`copyEvens([1,8,4], 1)` | &#10132; `[8]`
`copyEvens([1,8,4], 2)` | &#10132; `[8,4]`
`copyEvens([2,8,4], 2)` | &#10132; `[2,8]`
## copyEndy
We'll say that a positive int n is "endy" if it is in the range 0..10 or 90..100 (inclusive). Given an array of positive ints, return a new array of length "count" containing the first endy numbers from the original array. Decompose out a separate isEndy(int n) method to test if a number is endy. The original array will contain at least "count" endy numbers.
copyEndy(nums, count)|Expected
-|-
`copyEndy([9,11,90,22,6], 2)` | &#10132; `[9,90]`
`copyEndy([9,11,90,22,6], 3)` | &#10132; `[9,90,6]`
`copyEndy([12,1,1,13,0,20], 2)` | &#10132; `[1,1]`
`copyEndy([12,1,1,13,0,20], 3)` | &#10132; `[1,1,0]`
`copyEndy([0], 1)` | &#10132; `[0]`
`copyEndy([10,11,90], 2)` | &#10132; `[10,90]`
`copyEndy([90,22,100], 2)` | &#10132; `[90,100]`
`copyEndy([12,11,10,89,101,4], 1)` | &#10132; `[10]`
`copyEndy([13,2,2,0], 2)` | &#10132; `[2,2]`
`copyEndy([13,2,2,0], 3)` | &#10132; `[2,2,0]`
`copyEndy([13,2,13,2,0,30], 2)` | &#10132; `[2,2]`
`copyEndy([13,2,13,2,0,30], 3)` | &#10132; `[2,2,0]`
## matchUp
Given 2 arrays that are the same length containing strings, compare the 1st string in one array to the 1st string in the other array, the 2nd to the 2nd and so on. Count the number of times that the 2 strings are non-empty and start with the same char. The strings may be any length, including 0.
matchUp(a, b)|Expected
-|-
`matchUp(["aa","bb","cc"], ["aaa","xx","bb"])` | &#10132; `1`
`matchUp(["aa","bb","cc"], ["aaa","b","bb"])` | &#10132; `2`
`matchUp(["aa","bb","cc"], ["","","ccc"])` | &#10132; `1`
`matchUp(["","","ccc"], ["aa","bb","cc"])` | &#10132; `1`
`matchUp(["","",""], ["","bb","cc"])` | &#10132; `0`
`matchUp(["aa","bb","cc"], ["","",""])` | &#10132; `0`
`matchUp(["aa","","ccc"], ["","bb","cc"])` | &#10132; `1`
`matchUp(["x","y","z"], ["y","z","x"])` | &#10132; `0`
`matchUp(["","y","z"], ["","y","x"])` | &#10132; `1`
`matchUp(["x","y","z"], ["xx","yyy","zzz"])` | &#10132; `3`
`matchUp(["x","y","z"], ["xx","yyy",""])` | &#10132; `2`
`matchUp(["b","x","y","z"], ["a","xx","yyy","zzz"])` | &#10132; `3`
`matchUp(["aaa","bb","c"], ["aaa","xx","bb"])` | &#10132; `1`
## scoreUp
The "key" array is an array containing the correct answers to an exam, like {"a", "a", "b", "b"}. the "answers" array contains a student's answers, with "?" representing a question left blank. The two arrays are not empty and are the same length. Return the score for this array of answers, giving +4 for each correct answer, -1 for each incorrect answer, and +0 for each blank answer.
scoreUp(key, answers)|Expected
-|-
`scoreUp(["a","a","b","b"], ["a","c","b","c"])` | &#10132; `6`
`scoreUp(["a","a","b","b"], ["a","a","b","c"])` | &#10132; `11`
`scoreUp(["a","a","b","b"], ["a","a","b","b"])` | &#10132; `16`
`scoreUp(["a","a","b","b"], ["?","c","b","?"])` | &#10132; `3`
`scoreUp(["a","a","b","b"], ["?","c","?","?"])` | &#10132; `-1`
`scoreUp(["a","a","b","b"], ["c","?","b","b"])` | &#10132; `7`
`scoreUp(["a","a","b","b"], ["c","?","b","?"])` | &#10132; `3`
`scoreUp(["a","b","c"], ["a","c","b"])` | &#10132; `2`
`scoreUp(["a","a","b","b","c","c"], ["a","c","a","c","a","c"])` | &#10132; `4`
`scoreUp(["a","a","b","b","c","c"], ["a","c","?","?","a","c"])` | &#10132; `6`
`scoreUp(["a","a","b","b","c","c"], ["a","c","?","?","c","c"])` | &#10132; `11`
`scoreUp(["a","b","c"], ["a","b","c"])` | &#10132; `12`
## wordsWithout
Given an array of strings, return a new array without the strings that are equal to the target string. One approach is to count the occurrences of the target string, make a new array of the correct length, and then copy over the correct strings.
wordsWithout(words, target)|Expected
-|-
`wordsWithout(["a","b","c","a"], "a")` | &#10132; `["b","c"]`
`wordsWithout(["a","b","c","a"], "b")` | &#10132; `["a","c","a"]`
`wordsWithout(["a","b","c","a"], "c")` | &#10132; `["a","b","a"]`
`wordsWithout(["b","c","a","a"], "b")` | &#10132; `["c","a","a"]`
`wordsWithout(["xx","yyy","x","yy","x"], "x")` | &#10132; `["xx","yyy","yy"]`
`wordsWithout(["xx","yyy","x","yy","x"], "yy")` | &#10132; `["xx","yyy","x","x"]`
`wordsWithout(["aa","ab","ac","aa"], "aa")` | &#10132; `["ab","ac"]`
## scoresSpecial
Given two arrays, A and B, of non-negative int scores. A "special" score is one which is a multiple of 10, such as 40 or 90. Return the sum of largest special score in A and the largest special score in B. To practice decomposition, write a separate helper method which finds the largest special score in an array. Write your helper method after your scoresSpecial() method in the JavaBat text area.
scoresSpecial(a, b)|Expected
-|-
`scoresSpecial([12,10,4], [2,20,30])` | &#10132; `40`
`scoresSpecial([20,10,4], [2,20,10])` | &#10132; `40`
`scoresSpecial([12,11,4], [2,20,31])` | &#10132; `20`
`scoresSpecial([1,20,2,50], [3,4,5])` | &#10132; `50`
`scoresSpecial([3,4,5], [1,50,2,20])` | &#10132; `50`
`scoresSpecial([10,4,20,30], [20])` | &#10132; `50`
`scoresSpecial([10,4,20,30], [20])` | &#10132; `50`
`scoresSpecial([10,4,20,30], [3,20,99])` | &#10132; `50`
`scoresSpecial([10,4,20,30], [30,20,99])` | &#10132; `60`
`scoresSpecial([], [2])` | &#10132; `0`
`scoresSpecial([], [20])` | &#10132; `20`
`scoresSpecial([14,10,4], [4,20,30])` | &#10132; `40`
## sumHeights
We have an array of heights, representing the altitude along a walking trail. Given start/end indexes into the array, return the sum of the changes for a walk beginning at the start index and ending at the end index. For example, with the heights {5, 3, 6, 7, 2} and start=2, end=4 yields a sum of 1 + 5 = 6. The start end end index will both be valid indexes into the array with start <= end.
sumHeights(heights, start, end)|Expected
-|-
`sumHeights([5,3,6,7,2], 2, 4)` | &#10132; `6`
`sumHeights([5,3,6,7,2], 0, 1)` | &#10132; `2`
`sumHeights([5,3,6,7,2], 0, 4)` | &#10132; `11`
`sumHeights([5,3,6,7,2], 1, 1)` | &#10132; `0`
`sumHeights([1,2,3,4,5,4,3,2,10], 0, 3)` | &#10132; `3`
`sumHeights([1,2,3,4,5,4,3,2,10], 4, 8)` | &#10132; `11`
`sumHeights([1,2,3,4,5,4,3,2,10], 7, 8)` | &#10132; `8`
`sumHeights([1,2,3,4,5,4,3,2,10], 8, 8)` | &#10132; `0`
`sumHeights([1,2,3,4,5,4,3,2,10], 2, 2)` | &#10132; `0`
`sumHeights([1,2,3,4,5,4,3,2,10], 3, 6)` | &#10132; `3`
`sumHeights([10,8,7,7,7,6,7], 1, 4)` | &#10132; `1`
`sumHeights([10,8,7,7,7,6,7], 1, 5)` | &#10132; `2`
## sumHeights2
(A variation on the sumHeights problem.) We have an array of heights, representing the altitude along a walking trail. Given start/end indexes into the array, return the sum of the changes for a walk beginning at the start index and ending at the end index, however increases in height count double. For example, with the heights {5, 3, 6, 7, 2} and start=2, end=4 yields a sum of 1*2 + 5 = 7. The start end end index will both be valid indexes into the array with start <= end.
sumHeights2(heights, start, end)|Expected
-|-
`sumHeights2([5,3,6,7,2], 2, 4)` | &#10132; `7`
`sumHeights2([5,3,6,7,2], 0, 1)` | &#10132; `2`
`sumHeights2([5,3,6,7,2], 0, 4)` | &#10132; `15`
`sumHeights2([5,3,6,7,2], 1, 1)` | &#10132; `0`
`sumHeights2([1,2,3,4,5,4,3,2,10], 0, 3)` | &#10132; `6`
`sumHeights2([1,2,3,4,5,4,3,2,10], 4, 8)` | &#10132; `19`
`sumHeights2([1,2,3,4,5,4,3,2,10], 7, 8)` | &#10132; `16`
`sumHeights2([1,2,3,4,5,4,3,2,10], 8, 8)` | &#10132; `0`
`sumHeights2([1,2,3,4,5,4,3,2,10], 2, 2)` | &#10132; `0`
`sumHeights2([1,2,3,4,5,4,3,2,10], 3, 6)` | &#10132; `4`
`sumHeights2([10,8,7,7,7,6,7], 1, 4)` | &#10132; `1`
`sumHeights2([10,8,7,7,7,6,7], 1, 5)` | &#10132; `2`
## bigHeights
(A variation on the sumHeights problem.) We have an array of heights, representing the altitude along a walking trail. Given start/end indexes into the array, return the number of "big" steps for a walk starting at the start index and ending at the end index. We'll say that step is big if it is 5 or more up or down. The start end end index will both be valid indexes into the array with start <= end.
bigHeights(heights, start, end)|Expected
-|-
`bigHeights([5,3,6,7,2], 2, 4)` | &#10132; `1`
`bigHeights([5,3,6,7,2], 0, 1)` | &#10132; `0`
`bigHeights([5,3,6,7,2], 0, 4)` | &#10132; `1`
`bigHeights([5,3,6,7,3], 0, 4)` | &#10132; `0`
`bigHeights([5,3,6,7,2], 1, 1)` | &#10132; `0`
`bigHeights([5,13,6,7,2], 1, 2)` | &#10132; `1`
`bigHeights([5,13,6,7,2], 0, 2)` | &#10132; `2`
`bigHeights([5,13,6,7,2], 1, 4)` | &#10132; `2`
`bigHeights([5,13,6,7,2], 0, 4)` | &#10132; `3`
`bigHeights([5,13,6,7,2], 0, 3)` | &#10132; `2`
`bigHeights([1,2,3,4,5,4,3,2,10], 0, 3)` | &#10132; `0`
`bigHeights([1,2,3,4,5,4,3,2,10], 4, 8)` | &#10132; `1`
`bigHeights([1,2,3,14,5,4,3,2,10], 0, 3)` | &#10132; `1`
`bigHeights([1,2,3,14,5,4,3,2,10], 7, 8)` | &#10132; `1`
`bigHeights([1,2,3,14,5,4,3,2,10], 3, 8)` | &#10132; `2`
`bigHeights([1,2,3,14,5,4,3,2,10], 2, 8)` | &#10132; `3`
## userCompare
We have data for two users, A and B, each with a String name and an int id. The goal is to order the users such as for sorting. Return -1 if A comes before B, 1 if A comes after B, and 0 if they are the same. Order first by the string names, and then by the id numbers if the names are the same. Note: with Strings str1.compareTo(str2) returns an int value which is negative/0/positive to indicate how str1 is ordered to str2 (the value is not limited to -1/0/1). (On the AP, there would be two User objects, but here the code simply takes the two strings and two ints directly. The code logic is the same.)
userCompare(aName, aId, bName, bId)|Expected
-|-
`userCompare("bb", 1, "zz", 2)` | &#10132; `-1`
`userCompare("bb", 1, "aa", 2)` | &#10132; `1`
`userCompare("bb", 1, "bb", 1)` | &#10132; `0`
`userCompare("bb", 5, "bb", 1)` | &#10132; `1`
`userCompare("bb", 5, "bb", 10)` | &#10132; `-1`
`userCompare("adam", 1, "bob", 2)` | &#10132; `-1`
`userCompare("bob", 1, "bob", 2)` | &#10132; `-1`
`userCompare("bzb", 1, "bob", 2)` | &#10132; `1`
## mergeTwo
Start with two arrays of strings, A and B, each with its elements in alphabetical order and without duplicates. Return a new array containing the first N elements from the two arrays. The result array should be in alphabetical order and without duplicates. A and B will both have a length which is N or more. The best "linear" solution makes a single pass over A and B, taking advantage of the fact that they are in alphabetical order, copying elements directly to the new array.
mergeTwo(a, b, n)|Expected
-|-
`mergeTwo(["a","c","z"], ["b","f","z"], 3)` | &#10132; `["a","b","c"]`
`mergeTwo(["a","c","z"], ["c","f","z"], 3)` | &#10132; `["a","c","f"]`
`mergeTwo(["f","g","z"], ["c","f","g"], 3)` | &#10132; `["c","f","g"]`
`mergeTwo(["a","c","z"], ["a","c","z"], 3)` | &#10132; `["a","c","z"]`
`mergeTwo(["a","b","c","z"], ["a","c","z"], 3)` | &#10132; `["a","b","c"]`
`mergeTwo(["a","c","z"], ["a","b","c","z"], 3)` | &#10132; `["a","b","c"]`
`mergeTwo(["a","c","z"], ["a","c","z"], 2)` | &#10132; `["a","c"]`
`mergeTwo(["a","c","z"], ["a","c","y","z"], 3)` | &#10132; `["a","c","y"]`
`mergeTwo(["x","y","z"], ["a","b","z"], 3)` | &#10132; `["a","b","x"]`
## commonTwo
Start with two arrays of strings, a and b, each in alphabetical order, possibly with duplicates. Return the count of the number of strings which appear in both arrays. The best "linear" solution makes a single pass over both arrays, taking advantage of the fact that they are in alphabetical order.
commonTwo(a, b)|Expected
-|-
`commonTwo(["a","c","x"], ["b","c","d","x"])` | &#10132; `2`
`commonTwo(["a","c","x"], ["a","b","c","x","z"])` | &#10132; `3`
`commonTwo(["a","b","c"], ["a","b","c"])` | &#10132; `3`
`commonTwo(["a","a","b","b","c"], ["a","b","c"])` | &#10132; `3`
`commonTwo(["a","a","b","b","c"], ["a","b","b","b","c"])` | &#10132; `3`
`commonTwo(["a","a","b","b","c"], ["a","b","b","c","c"])` | &#10132; `3`
`commonTwo(["b","b","b","b","c"], ["a","b","b","b","c"])` | &#10132; `2`
`commonTwo(["a","b","c","c","d"], ["a","b","b","c","d","d"])` | &#10132; `4`
`commonTwo(["a","a","b","b","c"], ["b","b","b"])` | &#10132; `1`
`commonTwo(["a","a","b","b","c"], ["c","c"])` | &#10132; `1`
`commonTwo(["a","a","b","b","c"], ["b","b","b","x"])` | &#10132; `1`
`commonTwo(["a","a","b","b","c"], ["b","b"])` | &#10132; `1`
`commonTwo(["a"], ["a","b"])` | &#10132; `1`
`commonTwo(["a"], ["b"])` | &#10132; `0`
`commonTwo(["a","a"], ["b","b"])` | &#10132; `0`
`commonTwo(["a","b"], ["a","b"])` | &#10132; `2`
