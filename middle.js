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

const middle = function(array) {
  let result = [];
  let mid1 = Math.floor((array.length - 1) / 2);
  let mid2 = Math.floor(array.length / 2);
  if (array.length <= 2) {
    return result;
  } else if (array.length % 2 === 0) {
    result.push(array[mid1], array[mid2]);
  } else {
    result.push(array[mid1]);
  }
  return result;
};
