const assert = require('chai').assert;

const eqArrays = function (a1, a2) {
  if (a1.length !== a2.length) return false;
  else {
    for (let i = 0; i < a1.length; i++) {
      if (a1[i] !== a2[i]) return false;
    }
    return true;
  }
};

const assertArraysEqual = function (a1, a2) {
  if (eqArrays(a1, a2)) {
    console.log(`Assertion Passed: ${a1} === ${a2}`);
  } else {
    console.log(`\u{1f605} \u{1f605} \u{1f605} Assertion Failed: ${a1} !== ${a2}`);
  }
};

const letterPositions = function (sentence) {
  const results = {};
  let i = 0;
  // logic to update results here
  for (char of sentence) {
    if (char !== " ") {
      if (results[char]) {
        results[char].push(i);
      }
      else {
        results[char] = [i];
      }
    }
    i++;
  }
  return results;
};

module.exports = letterPositions;

//console.log(letterPositions("hello").a);

/* assertArraysEqual(letterPositions("hello").e, [1]); */