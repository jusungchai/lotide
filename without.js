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

const without = function (source, itemsToRemove){
  let withoutArray = source;
  for (let i = 0; i < itemsToRemove.length; i++){
    if (withoutArray.indexOf(itemsToRemove[i]) !== -1){
      withoutArray.splice(withoutArray.indexOf(itemsToRemove[i]), 1);
    }
  }
  return withoutArray;
};

module.exports = without;

assertArraysEqual(without([1, 2, 3], [1]), [2, 3]);
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);
assertArraysEqual(without([1, 2, 3], []), [1, 2, 3]);
assertArraysEqual(without([1, 2, 3], [1, 2, 3]), []);
assertArraysEqual(without([], [1]), []);
assertArraysEqual(without(["1", 2, 3], [1]), ["1", 2, 3]);

const words = ["hello", "world", "lighthouse"];
without(["hello", "world", "lighthouse"], ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);