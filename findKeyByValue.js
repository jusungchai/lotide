// FUNCTION IMPLEMENTATION
const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`\u{1f605} \u{1f605} \u{1f605} Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKeyByValue = function (object, value){
  let keyArr = Object.keys(object);  
  let valueArr = Object.values(object);  
  let index = valueArr.indexOf(value);
  return index > -1 ? keyArr[index] : undefined;  
};

const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);