# Warmup 2
## stringTimes
Given a string and a non-negative int n, return a larger string that is n copies of the original string.
Example|Expected
-|-
`stringTimes("Hi", 2)` | &#10132; `"HiHi"`
`stringTimes("Hi", 3)` | &#10132; `"HiHiHi"`
`stringTimes("Hi", 1)` | &#10132; `"Hi"`
`stringTimes("Hi", 0)` | &#10132; `""`
`stringTimes("Hi", 5)` | &#10132; `"HiHiHiHiHi"`
`stringTimes("Oh Boy!", 2)` | &#10132; `"Oh Boy!Oh Boy!"`
`stringTimes("x", 4)` | &#10132; `"xxxx"`
`stringTimes("", 4)` | &#10132; `""`
`stringTimes("code", 2)` | &#10132; `"codecode"`
`stringTimes("code", 3)` | &#10132; `"codecodecode"`
## frontTimes
Given a string and a non-negative int n, we'll say that the front of the string is the first 3 chars, or whatever is there if the string is less than length 3. Return n copies of the front.
Example|Expected
-|-
`frontTimes("Chocolate", 2)` | &#10132; `"ChoCho"`
`frontTimes("Chocolate", 3)` | &#10132; `"ChoChoCho"`
`frontTimes("Abc", 3)` | &#10132; `"AbcAbcAbc"`
`frontTimes("Ab", 4)` | &#10132; `"AbAbAbAb"`
`frontTimes("A", 4)` | &#10132; `"AAAA"`
`frontTimes("", 4)` | &#10132; `""`
`frontTimes("Abc", 0)` | &#10132; `""`
## countXX
Count the number of 'xx' in the given string. We'll say that overlapping is allowed, so 'xxx' contains 2 'xx'.
Example|Expected
-|-
`countXX("abcxx")` | &#10132; `1`
`countXX("xxx")` | &#10132; `2`
`countXX("xxxx")` | &#10132; `3`
`countXX("abc")` | &#10132; `0`
`countXX("Hello There")` | &#10132; `0`
`countXX("Hexxo Thxxe")` | &#10132; `2`
`countXX("")` | &#10132; `0`
`countXX("Kittens")` | &#10132; `0`
`countXX("Kittensxxx")` | &#10132; `2`
## doubleX
Given a string, return true if the first instance of "x" in the string is immediately followed by another "x".
Example|Expected
-|-
`doubleX("axxbb")` | &#10132; `true`
`doubleX("axaxax")` | &#10132; `false`
`doubleX("xxxxx")` | &#10132; `true`
`doubleX("xaxxx")` | &#10132; `false`
`doubleX("aaaax")` | &#10132; `false`
`doubleX("")` | &#10132; `false`
`doubleX("abc")` | &#10132; `false`
`doubleX("x")` | &#10132; `false`
`doubleX("xx")` | &#10132; `true`
`doubleX("xaxx")` | &#10132; `false`
## stringBits
Given a string, return a new string made of every other char starting with the first, so "Hello" yields "Hlo".
Example|Expected
-|-
`stringBits("Hello")` | &#10132; `"Hlo"`
`stringBits("Hi")` | &#10132; `"H"`
`stringBits("Heeololeo")` | &#10132; `"Hello"`
`stringBits("HiHiHi")` | &#10132; `"HHH"`
`stringBits("")` | &#10132; `""`
`stringBits("Greetings")` | &#10132; `"Getns"`
`stringBits("Chocolate")` | &#10132; `"Cooae"`
`stringBits("pi")` | &#10132; `"p"`
`stringBits("Hello Kitten")` | &#10132; `"HloKte"`
`stringBits("hxaxpxpxy")` | &#10132; `"happy"`
## stringSplosion
Given a non-empty string like "Code" return a string like "CCoCodCode".
Example|Expected
-|-
## last2
Given a string, return the count of the number of times that a substring length 2 appears in the string and also as the last 2 chars of the string, so "hixxxhi" yields 1 (we won't count the end substring).
Example|Expected
-|-
`last2("hixxhi")` | &#10132; `1`
`last2("xaxxaxaxx")` | &#10132; `1`
`last2("axxaaxx")` | &#10132; `1`
`last2("xxaxxaxxaxx")` | &#10132; `3`
`last2("xaxaxaa")` | &#10132; `0`
`last2("xxxx")` | &#10132; `2`
`last2("13121312")` | &#10132; `1`
`last2("11212")` | &#10132; `1`
`last2("13121311")` | &#10132; `0`
`last2("hi")` | &#10132; `0`
`last2("h")` | &#10132; `0`
`last2("")` | &#10132; `0`
## arrayCount9
Given an array of ints, return the number of 9's in the array.
Example|Expected
-|-
`arrayCount9([1,2,9])` | &#10132; `1`
`arrayCount9([1,9,9])` | &#10132; `2`
`arrayCount9([1,9,9,3,9])` | &#10132; `3`
`arrayCount9([1,2,3])` | &#10132; `0`
`arrayCount9([])` | &#10132; `0`
`arrayCount9([4,2,4,3,1])` | &#10132; `0`
`arrayCount9([9,2,4,3,1])` | &#10132; `1`
## arrayFront9
Given an array of ints, return true if one of the first 4 elements in the array is a 9. The array length may be less than 4.
Example|Expected
-|-
`arrayFront9([1,2,9,3,4])` | &#10132; `true`
`arrayFront9([1,2,3,4,9])` | &#10132; `false`
`arrayFront9([1,2,3,4,5])` | &#10132; `false`
`arrayFront9([9,2,3])` | &#10132; `true`
`arrayFront9([1,9,9])` | &#10132; `true`
`arrayFront9([1,2,3])` | &#10132; `false`
`arrayFront9([1,9])` | &#10132; `true`
`arrayFront9([5,5])` | &#10132; `false`
`arrayFront9([2])` | &#10132; `false`
`arrayFront9([9])` | &#10132; `true`
`arrayFront9([])` | &#10132; `false`
`arrayFront9([3,9,2,3,3])` | &#10132; `true`
## array123
Given an array of ints, return true if the sequence of numbers 1, 2, 3 appears in the array somewhere.
Example|Expected
-|-
## stringMatch
Given 2 strings, a and b, return the number of the positions where they contain the same length 2 substring. So "xxcaazz" and "xxbaaz" yields 3, since the "xx" "xx", "aa", and "az" substrings appear in the same place in both strings.
Example|Expected
-|-
`stringMatch("xxcaazz", "xxbaaz")` | &#10132; `3`
`stringMatch("abc", "abc")` | &#10132; `2`
`stringMatch("abc", "axc")` | &#10132; `0`
`stringMatch("hello", "he")` | &#10132; `1`
`stringMatch("he", "hello")` | &#10132; `1`
`stringMatch("", "hello")` | &#10132; `0`
`stringMatch("aabbccdd", "abbbxxd")` | &#10132; `1`
`stringMatch("aaxxaaxx", "iaxxai")` | &#10132; `3`
`stringMatch("iaxxai", "aaxxaaxx")` | &#10132; `3`
## stringX
Given a string, return a version where all the "x" have been removed. Except an "x" at the very start or end should not be removed.
Example|Expected
-|-
`stringX("xxHxix")` | &#10132; `"xHix"`
`stringX("abxxxcd")` | &#10132; `"abcd"`
`stringX("xabxxxcdx")` | &#10132; `"xabcdx"`
`stringX("xKittenx")` | &#10132; `"xKittenx"`
`stringX("Hello")` | &#10132; `"Hello"`
`stringX("xx")` | &#10132; `"xx"`
`stringX("x")` | &#10132; `"xx"`
`stringX("")` | &#10132; `""`
## altPairs
Given a string, return a string made of the chars at indexes 0,1, 4,5, 8,9 ... so "kittens" yields "kien".
Example|Expected
-|-
`altPairs("kitten")` | &#10132; `"kien"`
`altPairs("Chocolate")` | &#10132; `"Chole"`
`altPairs("CodingHorror")` | &#10132; `"Congrr"`
`altPairs("yak")` | &#10132; `"ya"`
`altPairs("ya")` | &#10132; `"ya"`
`altPairs("y")` | &#10132; `"y"`
`altPairs("")` | &#10132; `""`
`altPairs("ThisThatTheOther")` | &#10132; `"ThThThth"`
## stringYak
Suppose the string "yak" is unlucky. Given a string, return a version where all the "yak" are removed, but the "a" can be any char. The "yak" strings will not overlap.
Example|Expected
-|-
`stringYak("yakpak")` | &#10132; `"pak"`
`stringYak("pakyak")` | &#10132; `"pak"`
`stringYak("yak123ya")` | &#10132; `"123ya"`
`stringYak("yak")` | &#10132; `""`
`stringYak("yakxxxyak")` | &#10132; `"xxx"`
`stringYak("xxcaazz", "hiyakHi")` | &#10132; `"xxcaazz"`
`stringYak("xxxyakyyyakzzz")` | &#10132; `"xxxyyzzz"`
## array667
Given an array of ints, return the number of times that two 6's are next to each other in the array. Also count instances where the second "6" is actually a 7.
Example|Expected
-|-
`array667([6,6,2])` | &#10132; `1`
`array667([6,6,2,6])` | &#10132; `1`
`array667([6,7,2,6])` | &#10132; `1`
`array667([6,6,2,7,6,7])` | &#10132; `2`
`array667([1,6,3])` | &#10132; `0`
`array667([6,1])` | &#10132; `0`
`array667([])` | &#10132; `0`
`array667([3,6,7,6])` | &#10132; `1`
`array667([3,6,6,7])` | &#10132; `2`
`array667([6,3,6,6])` | &#10132; `1`
`array667([6,7,6,6])` | &#10132; `2`
`array667([1,2,3,5,6])` | &#10132; `0`
`array667([1,2,3,6,6])` | &#10132; `1`
## noTriples
Given an array of ints, we'll say that a triple is a value appearing 3 times in a row in the array. Return true if the array does not contain any triples.
Example|Expected
-|-
`noTriples([1,1,2,2,1])` | &#10132; `true`
`noTriples([1,1,2,2,2,1])` | &#10132; `false`
`noTriples([1,1,2,2,2,1])` | &#10132; `false`
`noTriples([1,2,1])` | &#10132; `true`
`noTriples([1,1,1])` | &#10132; `false`
`noTriples([1,1])` | &#10132; `true`
`noTriples([1])` | &#10132; `true`
`noTriples([1])` | &#10132; `true`
`noTriples([])` | &#10132; `true`
## has271
Given an array of ints, return true if it contains a 2, 7, 1 pattern -- a value, followed by the value plus 5, followed by the value minus 1. Additionally the 271 counts even if the "1" differs by 2 or less from the correct value.
Example|Expected
-|-
`has271([1,2,7,1])` | &#10132; `true`
`has271([1,2,8,1])` | &#10132; `false`
`has271([2,7,1])` | &#10132; `true`
`has271([3,8,2])` | &#10132; `false`
`has271([2,7,3])` | &#10132; `false`
`has271([2,7,4])` | &#10132; `false`
`has271([2,7,-1])` | &#10132; `false`
`has271([2,7,-2])` | &#10132; `false`
`has271([4,5,3,8,0])` | &#10132; `false`
`has271([2,7,5,10,4])` | &#10132; `false`
`has271([2,7,-2,4,9,3])` | &#10132; `false`
`has271([2,7,5,10,1])` | &#10132; `false`
`has271([2,7,-2,10,2])` | &#10132; `false`
