/* const eqArrays = function (a1, a2) {
  if (a1.length !== a2.length) return false;
  else {
    for (let i = 0; i < a1.length; i++){
      if (a1[i] !== a2[i]) return false;
    }
    return true;
  }
}; */

const eqArrays = require('./eqArrays');

const assertArraysEqual = function (a1, a2){
  if (eqArrays(a1, a2)) {
    console.log(`Assertion Passed: ${a1} === ${a2}`);
  } else {
    console.log(`\u{1f605} \u{1f605} \u{1f605} Assertion Failed: ${a1} !== ${a2}`);
  }
};

module.exports = assertArraysEqual;

/* assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual([1, 2, 3], [3, 2, 1]);
assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]);
assertArraysEqual(["1", "2", "3"], ["1", "2", 3]); */