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
