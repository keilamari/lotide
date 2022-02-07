const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`👍🏻👍🏻👍🏻Assertion passed: ${actual} === ${expected}`);
  } else {
    console.log(`👎🏻👎🏻👎🏻Assertion failed: ${actual} !== ${expected}`);
  }
};

const tail = function(array1) {
  return array1.slice(1);
};

let testing = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(tail(testing));
console.log(testing);

// Test Case: Check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!
