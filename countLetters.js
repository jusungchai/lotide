// FUNCTION IMPLEMENTATION
const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`\u{1f605} \u{1f605} \u{1f605} Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function (str){
  let results = {};
  for (let char of str){
    if (char !== " "){
      if (results[char]){
        results[char]++;
      }
      else results[char] = 1;
    }    
  }
  return results;
};

module.exports = countLetters;

/* console.log(countLetters("yolo"));
console.log(countLetters("lighthouse in the house"));
console.log(countLetters("  lighthouse in the hou   se  "));
console.log(countLetters(" ")); */