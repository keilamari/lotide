const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  } else {
    for (let i = 0; i < array1.length; i++) {
      if (array1[i] !== array2[i]) {
        return false;
      }
    }
  } return true;
};

const assertArraysEqual = function(arr1, arr2) {
  let assertion = "";
  let comparison = eqArrays(arr1, arr2);
  if (comparison === true) {
    assertion = true;
  } else {
    assertion = false;
  }
  console.log(assertion);
};

const words = ["ground", "control", "to", "major", "tom"];
const nums = ["one", "two", "three", "four", "five"];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

const results1 = map(words, word => word[0]);
console.log(results1);

const results2 = map(nums, num => num[0]);
console.log(results2);

assertArraysEqual(results1, ["g", "c", "t", "m", "t"]);
assertArraysEqual(results2, ["o", "t", "t", "f", "f"]);