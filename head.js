const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`👍🏻👍🏻👍🏻Assertion passed: ${actual} === ${expected}`);
  } else {
    console.log(`👎🏻👎🏻👎🏻Assertion failed: ${actual} !== ${expected}`);
  }
};

const head = function(array1) {
  return array1[0];
};

assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Lighthouse");
assertEqual(head([7, 9, 1, 5, 6, 7]), 7);