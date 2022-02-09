const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`👍🏻👍🏻👍🏻Assertion passed: ${actual} === ${expected}`);
  } else {
    console.log(`👎🏻👎🏻👎🏻Assertion failed: ${actual} !== ${expected}`);
  }
};

const findKeyByValue = function(object, value) {
  for (const key in object) {
    if (value === object[key]) {
      return key;
    }
  }
};

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

console.log(findKeyByValue(bestTVShowsByGenre, "The Expanse"));

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);