const eqArrays = function (a1, a2) {
  if (a1.length !== a2.length) return false;
  else {
    for (let i = 0; i < a1.length; i++){
      if (a1[i] !== a2[i]) return false;
    }
    return true;
  }
};

const assertArraysEqual = function (a1, a2){
  if (eqArrays(a1, a2)) {
    console.log(`Assertion Passed: ${a1} === ${a2}`);
  } else {
    console.log(`\u{1f605} \u{1f605} \u{1f605} Assertion Failed: ${a1} !== ${a2}`);
  }
};

const words = ["ground", "control", "to", "major", "tom"];
const words2 = [];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(item);
    results.push(callback(item));
  }
  return results;
}

module.exports = map;

const results1 = map(words, word => word[0]);
const results2 = map(words2, word => word[0]);

assertArraysEqual(results1, ["ground", "g", "control", "c", "to", "t", "major", "m", "tom", "t"]);
assertArraysEqual(results2, []);