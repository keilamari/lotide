const assertEqual = function(actual, expected) {
  if (actual === expected) {
    // FUNCTION IMPLEMENTATION
    console.log(`👍🏻👍🏻👍🏻Assertion passed: ${actual} === ${expected}`);
  } else {
    console.log(`👎🏻👎🏻👎🏻Assertion failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function(array1, array2) {
  let match = "";
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] === array2[i]) {
      match = true;
    } else {
      match = false;
    }
  }
  return match;
}

// write code for eqArrays function
// takes two arrays and returns true or false based on perfect match
// test with assertEqual
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);