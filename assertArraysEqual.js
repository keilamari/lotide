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