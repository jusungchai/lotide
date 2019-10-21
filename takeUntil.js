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

const takeUntil = function (array, callback) {
  // ...
  const results = [];
  for (let item of array) {
    if (callback(item)) {
      break;
    }
    results.push(item);
  }
  return results;
}

module.exports = takeUntil;

/* const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
assertArraysEqual(results1, [1, 2, 5, 7, 2]);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
assertArraysEqual(results2, ['I\'ve', 'been', 'to', 'Hollywood']); */