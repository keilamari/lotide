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


const takeUntil = function(data, callback) {
  let data1 = data.filter(callback);
  let firstElement = data1.shift();
  let hello = [];
  for (let item of data) {
    hello.push(item);
    if(item === firstElement) {
      hello.pop();
      break;
    }
  } return hello;
}


const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);
assertArraysEqual(results1, [ 1, 2, 5, 7, 2 ])

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);
assertArraysEqual(results2, [ 'I\'ve', 'been', 'to', 'Hollywood' ])