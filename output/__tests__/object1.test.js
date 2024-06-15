const object1 = require('../object1');

test('objBully should return {"a":"","b":"candy"} when given {"a":"","b":"candy"}', () => {
  expect(object1.objBully({"a":"","b":"candy"})).toEqual({"a":"","b":"candy"});
});

test('objBully should return {"a":"","b":"candy"} when given {"a":"","b":"candy"}', () => {
  expect(object1.objBully({"a":"","b":"candy"})).toEqual({"a":"","b":"candy"});
});

test('objBully should return {"a":"","b":"candy","c":"meh"} when given {"a":"","b":"candy","c":"meh"}', () => {
  expect(object1.objBully({"a":"","b":"candy","c":"meh"})).toEqual({"a":"","b":"candy","c":"meh"});
});

test('objBully should return {"b":"carrot"} when given {"b":"carrot"}', () => {
  expect(object1.objBully({"b":"carrot"})).toEqual({"b":"carrot"});
});

test('objBully should return {"c":"meh"} when given {"c":"meh"}', () => {
  expect(object1.objBully({"c":"meh"})).toEqual({"c":"meh"});
});

test('objBully should return {"a":"","c":"meh","b":"sparkle"} when given {"a":"","c":"meh","b":"sparkle"}', () => {
  expect(object1.objBully({"a":"","c":"meh","b":"sparkle"})).toEqual({"a":"","c":"meh","b":"sparkle"});
});

test('objShare should return {"a":"aaa","b":"aaa"} when given {"a":"aaa","b":"aaa"}', () => {
  expect(object1.objShare({"a":"aaa","b":"aaa"})).toEqual({"a":"aaa","b":"aaa"});
});

test('objShare should return {"b":"xyz"} when given {"b":"xyz"}', () => {
  expect(object1.objShare({"b":"xyz"})).toEqual({"b":"xyz"});
});

test('objShare should return {"a":"aaa","d":"hi","b":"aaa"} when given {"a":"aaa","d":"hi","b":"aaa"}', () => {
  expect(object1.objShare({"a":"aaa","d":"hi","b":"aaa"})).toEqual({"a":"aaa","d":"hi","b":"aaa"});
});

test('objShare should return {"a":"xyz","b":"xyz","z":"zzz"} when given {"a":"xyz","b":"xyz","z":"zzz"}', () => {
  expect(object1.objShare({"a":"xyz","b":"xyz","z":"zzz"})).toEqual({"a":"xyz","b":"xyz","z":"zzz"});
});

test('objShare should return {"a":"xyz","b":"xyz","d":"ddd","e":"everything"} when given {"a":"xyz","b":"xyz","d":"ddd","e":"everything"}', () => {
  expect(object1.objShare({"a":"xyz","b":"xyz","d":"ddd","e":"everything"})).toEqual({"a":"xyz","b":"xyz","d":"ddd","e":"everything"});
});

test('objAB should return {"a":"Hi","b":"There","ab":"HiThere"} when given {"a":"Hi","b":"There","ab":"HiThere"}', () => {
  expect(object1.objAB({"a":"Hi","b":"There","ab":"HiThere"})).toEqual({"a":"Hi","b":"There","ab":"HiThere"});
});

test('objAB should return {"a":"Hi"} when given {"a":"Hi"}', () => {
  expect(object1.objAB({"a":"Hi"})).toEqual({"a":"Hi"});
});

test('objAB should return {"b":"There"} when given {"b":"There"}', () => {
  expect(object1.objAB({"b":"There"})).toEqual({"b":"There"});
});

test('objAB should return {"c":"meh"} when given {"c":"meh"}', () => {
  expect(object1.objAB({"c":"meh"})).toEqual({"c":"meh"});
});

test('objAB should return {"a":"aaa","ab":"aaabbb","b":"bbb","c":"ccc"} when given {"a":"aaa","ab":"aaabbb","b":"bbb","c":"ccc"}', () => {
  expect(object1.objAB({"a":"aaa","ab":"aaabbb","b":"bbb","c":"ccc"})).toEqual({"a":"aaa","ab":"aaabbb","b":"bbb","c":"ccc"});
});

test('objAB should return {"ab":"nope","b":"bbb","c":"ccc"} when given {"ab":"nope","b":"bbb","c":"ccc"}', () => {
  expect(object1.objAB({"ab":"nope","b":"bbb","c":"ccc"})).toEqual({"ab":"nope","b":"bbb","c":"ccc"});
});

test('topping1 should return {"ice cream":"cherry","bread":"butter"} when given {"ice cream":"cherry","bread":"butter"}', () => {
  expect(object1.topping1({"ice cream":"cherry","bread":"butter"})).toEqual({"ice cream":"cherry","bread":"butter"});
});

test('topping1 should return {"bread":"butter"} when given {"bread":"butter"}', () => {
  expect(object1.topping1({"bread":"butter"})).toEqual({"bread":"butter"});
});

test('topping1 should return {"pancake":"syrup","bread":"butter"} when given {"pancake":"syrup","bread":"butter"}', () => {
  expect(object1.topping1({"pancake":"syrup","bread":"butter"})).toEqual({"pancake":"syrup","bread":"butter"});
});

test('topping1 should return {"bread":"butter","ice cream":"cherry"} when given {"bread":"butter","ice cream":"cherry"}', () => {
  expect(object1.topping1({"bread":"butter","ice cream":"cherry"})).toEqual({"bread":"butter","ice cream":"cherry"});
});

test('topping1 should return {"bread":"butter","ice cream":"cherry","salad":"oil"} when given {"bread":"butter","ice cream":"cherry","salad":"oil"}', () => {
  expect(object1.topping1({"bread":"butter","ice cream":"cherry","salad":"oil"})).toEqual({"bread":"butter","ice cream":"cherry","salad":"oil"});
});

test('topping1 should return {"bread":"butter"} when given {"bread":"butter"}', () => {
  expect(object1.topping1({"bread":"butter"})).toEqual({"bread":"butter"});
});

test('topping2 should return {"ice cream":"cherry","yogurt":"cherry"} when given {"ice cream":"cherry","yogurt":"cherry"}', () => {
  expect(object1.topping2({"ice cream":"cherry","yogurt":"cherry"})).toEqual({"ice cream":"cherry","yogurt":"cherry"});
});

test('topping2 should return {"spinach":"nuts","ice cream":"cherry","yogurt":"cherry"} when given {"spinach":"nuts","ice cream":"cherry","yogurt":"cherry"}', () => {
  expect(object1.topping2({"spinach":"nuts","ice cream":"cherry","yogurt":"cherry"})).toEqual({"spinach":"nuts","ice cream":"cherry","yogurt":"cherry"});
});

test('topping2 should return {"yogurt":"salt"} when given {"yogurt":"salt"}', () => {
  expect(object1.topping2({"yogurt":"salt"})).toEqual({"yogurt":"salt"});
});

test('topping2 should return {"yogurt":"salt","bread":"butter"} when given {"yogurt":"salt","bread":"butter"}', () => {
  expect(object1.topping2({"yogurt":"salt","bread":"butter"})).toEqual({"yogurt":"salt","bread":"butter"});
});

test('topping2 should return {} when given {}', () => {
  expect(object1.topping2({})).toEqual({});
});

test('topping2 should return {"ice cream":"air","salad":"oil","yogurt":"air"} when given {"ice cream":"air","salad":"oil","yogurt":"air"}', () => {
  expect(object1.topping2({"ice cream":"air","salad":"oil","yogurt":"air"})).toEqual({"ice cream":"air","salad":"oil","yogurt":"air"});
});

test('topping3 should return {"potato":"ketchup","fries":"ketchup"} when given {"potato":"ketchup","fries":"ketchup"}', () => {
  expect(object1.topping3({"potato":"ketchup","fries":"ketchup"})).toEqual({"potato":"ketchup","fries":"ketchup"});
});

test('topping3 should return {"potato":"butter","fries":"butter"} when given {"potato":"butter","fries":"butter"}', () => {
  expect(object1.topping3({"potato":"butter","fries":"butter"})).toEqual({"potato":"butter","fries":"butter"});
});

test('topping3 should return {"salad":"oil","potato":"ketchup","fries":"ketchup","spinach":"oil"} when given {"salad":"oil","potato":"ketchup","fries":"ketchup","spinach":"oil"}', () => {
  expect(object1.topping3({"salad":"oil","potato":"ketchup","fries":"ketchup","spinach":"oil"})).toEqual({"salad":"oil","potato":"ketchup","fries":"ketchup","spinach":"oil"});
});

test('topping3 should return {"toast":"butter","salad":"oil","potato":"ketchup","fries":"ketchup","spinach":"oil"} when given {"toast":"butter","salad":"oil","potato":"ketchup","fries":"ketchup","spinach":"oil"}', () => {
  expect(object1.topping3({"toast":"butter","salad":"oil","potato":"ketchup","fries":"ketchup","spinach":"oil"})).toEqual({"toast":"butter","salad":"oil","potato":"ketchup","fries":"ketchup","spinach":"oil"});
});

test('topping3 should return {} when given {}', () => {
  expect(object1.topping3({})).toEqual({});
});

test('topping3 should return {"salad":"pepper","fries":"salt","spinach":"pepper"} when given {"salad":"pepper","fries":"salt","spinach":"pepper"}', () => {
  expect(object1.topping3({"salad":"pepper","fries":"salt","spinach":"pepper"})).toEqual({"salad":"pepper","fries":"salt","spinach":"pepper"});
});

test('objAB2 should return {"c":"cake"} when given {"c":"cake"}', () => {
  expect(object1.objAB2({"c":"cake"})).toEqual({"c":"cake"});
});

test('objAB2 should return {"a":"aaa","b":"bbb"} when given {"a":"aaa","b":"bbb"}', () => {
  expect(object1.objAB2({"a":"aaa","b":"bbb"})).toEqual({"a":"aaa","b":"bbb"});
});

test('objAB2 should return {"a":"aaa","b":"bbb","c":"aaa"} when given {"a":"aaa","b":"bbb","c":"aaa"}', () => {
  expect(object1.objAB2({"a":"aaa","b":"bbb","c":"aaa"})).toEqual({"a":"aaa","b":"bbb","c":"aaa"});
});

test('objAB2 should return {"a":"aaa"} when given {"a":"aaa"}', () => {
  expect(object1.objAB2({"a":"aaa"})).toEqual({"a":"aaa"});
});

test('objAB2 should return {"b":"bbb"} when given {"b":"bbb"}', () => {
  expect(object1.objAB2({"b":"bbb"})).toEqual({"b":"bbb"});
});

test('objAB2 should return {"c":"ccc"} when given {"c":"ccc"}', () => {
  expect(object1.objAB2({"c":"ccc"})).toEqual({"c":"ccc"});
});

test('objAB2 should return {} when given {}', () => {
  expect(object1.objAB2({})).toEqual({});
});

test('objAB2 should return {"a":"a","b":"b","z":"zebra"} when given {"a":"a","b":"b","z":"zebra"}', () => {
  expect(object1.objAB2({"a":"a","b":"b","z":"zebra"})).toEqual({"a":"a","b":"b","z":"zebra"});
});

test('objAB3 should return {"a":"aaa","c":"cake","b":"aaa"} when given {"a":"aaa","c":"cake","b":"aaa"}', () => {
  expect(object1.objAB3({"a":"aaa","c":"cake","b":"aaa"})).toEqual({"a":"aaa","c":"cake","b":"aaa"});
});

test('objAB3 should return {"b":"bbb","c":"cake","a":"bbb"} when given {"b":"bbb","c":"cake","a":"bbb"}', () => {
  expect(object1.objAB3({"b":"bbb","c":"cake","a":"bbb"})).toEqual({"b":"bbb","c":"cake","a":"bbb"});
});

test('objAB3 should return {"a":"aaa","b":"bbb","c":"cake"} when given {"a":"aaa","b":"bbb","c":"cake"}', () => {
  expect(object1.objAB3({"a":"aaa","b":"bbb","c":"cake"})).toEqual({"a":"aaa","b":"bbb","c":"cake"});
});

test('objAB3 should return {"ccc":"ccc"} when given {"ccc":"ccc"}', () => {
  expect(object1.objAB3({"ccc":"ccc"})).toEqual({"ccc":"ccc"});
});

test('objAB3 should return {"c":"a","d":"b"} when given {"c":"a","d":"b"}', () => {
  expect(object1.objAB3({"c":"a","d":"b"})).toEqual({"c":"a","d":"b"});
});

test('objAB3 should return {} when given {}', () => {
  expect(object1.objAB3({})).toEqual({});
});

test('objAB3 should return {"a":"","b":""} when given {"a":"","b":""}', () => {
  expect(object1.objAB3({"a":"","b":""})).toEqual({"a":"","b":""});
});

test('objAB3 should return {"b":"","a":""} when given {"b":"","a":""}', () => {
  expect(object1.objAB3({"b":"","a":""})).toEqual({"b":"","a":""});
});

test('objAB3 should return {"a":"","b":""} when given {"a":"","b":""}', () => {
  expect(object1.objAB3({"a":"","b":""})).toEqual({"a":"","b":""});
});

test('objAB3 should return {"aa":"aa","a":"apple","z":"zzz","b":"apple"} when given {"aa":"aa","a":"apple","z":"zzz","b":"apple"}', () => {
  expect(object1.objAB3({"aa":"aa","a":"apple","z":"zzz","b":"apple"})).toEqual({"aa":"aa","a":"apple","z":"zzz","b":"apple"});
});

test('objAB4 should return {"a":"aaa","b":"bb","c":"aaa"} when given {"a":"aaa","b":"bb","c":"aaa"}', () => {
  expect(object1.objAB4({"a":"aaa","b":"bb","c":"aaa"})).toEqual({"a":"aaa","b":"bb","c":"aaa"});
});

test('objAB4 should return {"a":"aa","b":"bbb","c":"bbb"} when given {"a":"aa","b":"bbb","c":"bbb"}', () => {
  expect(object1.objAB4({"a":"aa","b":"bbb","c":"bbb"})).toEqual({"a":"aa","b":"bbb","c":"bbb"});
});

test('objAB4 should return {"a":"aa","b":"bbb","c":"bbb"} when given {"a":"aa","b":"bbb","c":"bbb"}', () => {
  expect(object1.objAB4({"a":"aa","b":"bbb","c":"bbb"})).toEqual({"a":"aa","b":"bbb","c":"bbb"});
});

test('objAB4 should return {"a":"aaa"} when given {"a":"aaa"}', () => {
  expect(object1.objAB4({"a":"aaa"})).toEqual({"a":"aaa"});
});

test('objAB4 should return {"b":"bbb"} when given {"b":"bbb"}', () => {
  expect(object1.objAB4({"b":"bbb"})).toEqual({"b":"bbb"});
});

test('objAB4 should return {"a":"","b":"","c":"cake"} when given {"a":"","b":"","c":"cake"}', () => {
  expect(object1.objAB4({"a":"","b":"","c":"cake"})).toEqual({"a":"","b":"","c":"cake"});
});

test('objAB4 should return {"a":"","b":"","c":"cake"} when given {"a":"","b":"","c":"cake"}', () => {
  expect(object1.objAB4({"a":"","b":"","c":"cake"})).toEqual({"a":"","b":"","c":"cake"});
});

test('objAB4 should return {"a":"","b":"b","c":"b"} when given {"a":"","b":"b","c":"b"}', () => {
  expect(object1.objAB4({"a":"","b":"b","c":"b"})).toEqual({"a":"","b":"b","c":"b"});
});

test('objAB4 should return {"a":"a","b":"","c":"a"} when given {"a":"a","b":"","c":"a"}', () => {
  expect(object1.objAB4({"a":"a","b":"","c":"a"})).toEqual({"a":"a","b":"","c":"a"});
});

test('objAB4 should return {"c":"cat","d":"dog"} when given {"c":"cat","d":"dog"}', () => {
  expect(object1.objAB4({"c":"cat","d":"dog"})).toEqual({"c":"cat","d":"dog"});
});

test('objAB4 should return {"ccc":"ccc"} when given {"ccc":"ccc"}', () => {
  expect(object1.objAB4({"ccc":"ccc"})).toEqual({"ccc":"ccc"});
});

test('objAB4 should return {"c":"a","d":"b"} when given {"c":"a","d":"b"}', () => {
  expect(object1.objAB4({"c":"a","d":"b"})).toEqual({"c":"a","d":"b"});
});

test('objAB4 should return {} when given {}', () => {
  expect(object1.objAB4({})).toEqual({});
});

test('objAB4 should return {"a":"","z":"z"} when given {"a":"","z":"z"}', () => {
  expect(object1.objAB4({"a":"","z":"z"})).toEqual({"a":"","z":"z"});
});

test('objAB4 should return {"b":"","z":"z"} when given {"b":"","z":"z"}', () => {
  expect(object1.objAB4({"b":"","z":"z"})).toEqual({"b":"","z":"z"});
});
