const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`\u{1f605} \u{1f605} \u{1f605} Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKey = function (object, callback) {
  // ...
  const result = undefined;
  const valueArray = Object.values(object);
  const keyArray = Object.keys(object);
  let i = 0;
  for (let item of valueArray) {
    if (callback(item)) {
      return keyArray[i];
    }
    i++;
  }
  return result;
}

module.exports = findKey;

const test1 = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri": { stars: 3 },
  "noma": { stars: 2 },
  "elBulli": { stars: 3 },
  "Ora": { stars: 2 },
  "Akelarre": { stars: 3 }
}, x => x.stars === 2) // => "noma"

assertEqual(test1, "noma");
