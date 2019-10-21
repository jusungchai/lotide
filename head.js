// FUNCTION IMPLEMENTATION
/* const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`\u{1f605} \u{1f605} \u{1f605} Assertion Failed: ${actual} !== ${expected}`);
  }
}; */

const assertEqual = require('./assertEqual');

const head = function (arr) {
  if (arr.length > 0) {
    return arr[0];
  } else {
    return undefined;
  }
}

module.exports = head;

/* assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([]), 5); */