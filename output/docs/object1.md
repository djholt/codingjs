# Object 1
## objBully
Modify and return the given object as follows: if the key "a" has a value, set the key "b" to have that value, and set the key "a" to have the value "". Basically "b" is a bully, taking the value and replacing it with the empty string.
objBully(someObj)|Expected
-|-
`objBully({"a":"","b":"candy"})` | &#10132; `{"a":"","b":"candy"}`
`objBully({"a":"","b":"candy"})` | &#10132; `{"a":"","b":"candy"}`
`objBully({"a":"","b":"candy","c":"meh"})` | &#10132; `{"a":"","b":"candy","c":"meh"}`
`objBully({"b":"carrot"})` | &#10132; `{"b":"carrot"}`
`objBully({"c":"meh"})` | &#10132; `{"c":"meh"}`
`objBully({"a":"","c":"meh","b":"sparkle"})` | &#10132; `{"a":"","c":"meh","b":"sparkle"}`
## objShare
Modify and return the given object as follows: if the key "a" has a value, set the key "b" to have that same value. In all cases remove the key "c", leaving the rest of the object unchanged.
objShare(someObj)|Expected
-|-
`objShare({"a":"aaa","b":"aaa"})` | &#10132; `{"a":"aaa","b":"aaa"}`
`objShare({"b":"xyz"})` | &#10132; `{"b":"xyz"}`
`objShare({"a":"aaa","d":"hi","b":"aaa"})` | &#10132; `{"a":"aaa","d":"hi","b":"aaa"}`
`objShare({"a":"xyz","b":"xyz","z":"zzz"})` | &#10132; `{"a":"xyz","b":"xyz","z":"zzz"}`
`objShare({"a":"xyz","b":"xyz","d":"ddd","e":"everything"})` | &#10132; `{"a":"xyz","b":"xyz","d":"ddd","e":"everything"}`
## objAB
Modify and return the given object as follows: for this problem the object may or may not contain the "a" and "b" keys. If both keys are present, append their 2 string values together and store the result under the key "ab".
objAB(someObj)|Expected
-|-
`objAB({"a":"Hi","b":"There","ab":"HiThere"})` | &#10132; `{"a":"Hi","b":"There","ab":"HiThere"}`
`objAB({"a":"Hi"})` | &#10132; `{"a":"Hi"}`
`objAB({"b":"There"})` | &#10132; `{"b":"There"}`
`objAB({"c":"meh"})` | &#10132; `{"c":"meh"}`
`objAB({"a":"aaa","ab":"aaabbb","b":"bbb","c":"ccc"})` | &#10132; `{"a":"aaa","ab":"aaabbb","b":"bbb","c":"ccc"}`
`objAB({"ab":"nope","b":"bbb","c":"ccc"})` | &#10132; `{"ab":"nope","b":"bbb","c":"ccc"}`
## topping1
Given an object of food keys and topping values, modify and return the object as follows: if the key "ice cream" is present, set its value to "cherry". In all cases, set the key "bread" to have the value "butter".
topping1(someObj)|Expected
-|-
`topping1({"ice cream":"cherry","bread":"butter"})` | &#10132; `{"ice cream":"cherry","bread":"butter"}`
`topping1({"bread":"butter"})` | &#10132; `{"bread":"butter"}`
`topping1({"pancake":"syrup","bread":"butter"})` | &#10132; `{"pancake":"syrup","bread":"butter"}`
`topping1({"bread":"butter","ice cream":"cherry"})` | &#10132; `{"bread":"butter","ice cream":"cherry"}`
`topping1({"bread":"butter","ice cream":"cherry","salad":"oil"})` | &#10132; `{"bread":"butter","ice cream":"cherry","salad":"oil"}`
`topping1({"bread":"butter"})` | &#10132; `{"bread":"butter"}`
## topping2
Given an object of food keys and their topping values, modify and return the object as follows: if the key "ice cream" has a value, set that as the value for the key "yogurt" also. If the key "spinach" has a value, change that value to "nuts".
topping2(someObj)|Expected
-|-
`topping2({"ice cream":"cherry","yogurt":"cherry"})` | &#10132; `{"ice cream":"cherry","yogurt":"cherry"}`
`topping2({"spinach":"nuts","ice cream":"cherry","yogurt":"cherry"})` | &#10132; `{"spinach":"nuts","ice cream":"cherry","yogurt":"cherry"}`
`topping2({"yogurt":"salt"})` | &#10132; `{"yogurt":"salt"}`
`topping2({"yogurt":"salt","bread":"butter"})` | &#10132; `{"yogurt":"salt","bread":"butter"}`
`topping2({})` | &#10132; `{}`
`topping2({"ice cream":"air","salad":"oil","yogurt":"air"})` | &#10132; `{"ice cream":"air","salad":"oil","yogurt":"air"}`
## topping3
Given an object of food keys and topping values, modify and return the object as follows: if the key "potato" has a value, set that as the value for the key "fries". If the key "salad" has a value, set that as the value for the key "spinach".
topping3(someObj)|Expected
-|-
`topping3({"potato":"ketchup","fries":"ketchup"})` | &#10132; `{"potato":"ketchup","fries":"ketchup"}`
`topping3({"potato":"butter","fries":"butter"})` | &#10132; `{"potato":"butter","fries":"butter"}`
`topping3({"salad":"oil","potato":"ketchup","fries":"ketchup","spinach":"oil"})` | &#10132; `{"salad":"oil","potato":"ketchup","fries":"ketchup","spinach":"oil"}`
`topping3({"toast":"butter","salad":"oil","potato":"ketchup","fries":"ketchup","spinach":"oil"})` | &#10132; `{"toast":"butter","salad":"oil","potato":"ketchup","fries":"ketchup","spinach":"oil"}`
`topping3({})` | &#10132; `{}`
`topping3({"salad":"pepper","fries":"salt","spinach":"pepper"})` | &#10132; `{"salad":"pepper","fries":"salt","spinach":"pepper"}`
## objAB2
Modify and return the given object as follows: if the keys "a" and "b" are both in the object and have equal values, remove them both.
objAB2(someObj)|Expected
-|-
`objAB2({"c":"cake"})` | &#10132; `{"c":"cake"}`
`objAB2({"a":"aaa","b":"bbb"})` | &#10132; `{"a":"aaa","b":"bbb"}`
`objAB2({"a":"aaa","b":"bbb","c":"aaa"})` | &#10132; `{"a":"aaa","b":"bbb","c":"aaa"}`
`objAB2({"a":"aaa"})` | &#10132; `{"a":"aaa"}`
`objAB2({"b":"bbb"})` | &#10132; `{"b":"bbb"}`
`objAB2({"c":"ccc"})` | &#10132; `{"c":"ccc"}`
`objAB2({})` | &#10132; `{}`
`objAB2({"a":"a","b":"b","z":"zebra"})` | &#10132; `{"a":"a","b":"b","z":"zebra"}`
## objAB3
Modify and return the given object as follows: if exactly one of the keys "a" or "b" has a value in the object (but not both), set the other to have that same value in the object.
objAB3(someObj)|Expected
-|-
`objAB3({"a":"aaa","c":"cake","b":"aaa"})` | &#10132; `{"a":"aaa","c":"cake","b":"aaa"}`
`objAB3({"b":"bbb","c":"cake","a":"bbb"})` | &#10132; `{"b":"bbb","c":"cake","a":"bbb"}`
`objAB3({"a":"aaa","b":"bbb","c":"cake"})` | &#10132; `{"a":"aaa","b":"bbb","c":"cake"}`
`objAB3({"ccc":"ccc"})` | &#10132; `{"ccc":"ccc"}`
`objAB3({"c":"a","d":"b"})` | &#10132; `{"c":"a","d":"b"}`
`objAB3({})` | &#10132; `{}`
`objAB3({"a":"","b":""})` | &#10132; `{"a":"","b":""}`
`objAB3({"b":"","a":""})` | &#10132; `{"b":"","a":""}`
`objAB3({"a":"","b":""})` | &#10132; `{"a":"","b":""}`
`objAB3({"aa":"aa","a":"apple","z":"zzz","b":"apple"})` | &#10132; `{"aa":"aa","a":"apple","z":"zzz","b":"apple"}`
## objAB4
Modify and return the given object as follows: if the keys "a" and "b" have values that have different lengths, then set "c" to have the longer value. If the values exist and have the same length, change them both to the empty string in the object.
objAB4(someObj)|Expected
-|-
`objAB4({"a":"aaa","b":"bb","c":"aaa"})` | &#10132; `{"a":"aaa","b":"bb","c":"aaa"}`
`objAB4({"a":"aa","b":"bbb","c":"bbb"})` | &#10132; `{"a":"aa","b":"bbb","c":"bbb"}`
`objAB4({"a":"aa","b":"bbb","c":"bbb"})` | &#10132; `{"a":"aa","b":"bbb","c":"bbb"}`
`objAB4({"a":"aaa"})` | &#10132; `{"a":"aaa"}`
`objAB4({"b":"bbb"})` | &#10132; `{"b":"bbb"}`
`objAB4({"a":"","b":"","c":"cake"})` | &#10132; `{"a":"","b":"","c":"cake"}`
`objAB4({"a":"","b":"","c":"cake"})` | &#10132; `{"a":"","b":"","c":"cake"}`
`objAB4({"a":"","b":"b","c":"b"})` | &#10132; `{"a":"","b":"b","c":"b"}`
`objAB4({"a":"a","b":"","c":"a"})` | &#10132; `{"a":"a","b":"","c":"a"}`
`objAB4({"c":"cat","d":"dog"})` | &#10132; `{"c":"cat","d":"dog"}`
`objAB4({"ccc":"ccc"})` | &#10132; `{"ccc":"ccc"}`
`objAB4({"c":"a","d":"b"})` | &#10132; `{"c":"a","d":"b"}`
`objAB4({})` | &#10132; `{}`
`objAB4({"a":"","z":"z"})` | &#10132; `{"a":"","z":"z"}`
`objAB4({"b":"","z":"z"})` | &#10132; `{"b":"","z":"z"}`
