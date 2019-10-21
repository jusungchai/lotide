const eqArrays = function (a1, a2) {
  if (a1.length !== a2.length) return false;
  else {
    for (let i = 0; i < a1.length; i++){
      if (a1[i] !== a2[i]) return false;
    }
    return true;
  }
};

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  let keyArr1 = Object.keys(object1);
  let keyArr2 = Object.keys(object2);
  if (keyArr1.length != keyArr2.length) return false;
  for (key of keyArr1){    
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])){
      if (!eqArrays(object1[key], object2[key])) return false;
      else continue;
    }
    if (object1[key] !== object2[key]) return false;
  }
  return true;
};

// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(actual, expected) {
  // Implement me!
  const inspect = require('util').inspect;  
  if (eqObjects(actual, expected)) {
    console.log(`✅ ✅ ✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🛑 🛑 🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

module.exports = assertObjectsEqual;

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertObjectsEqual(ab, ba);