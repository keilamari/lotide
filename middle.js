

const middle = function(array) {
  let result = [];
  let mid1 = Math.floor((array.length - 1) / 2);
  let mid2 = Math.floor(array.length / 2);
  if (array.length <= 2) {
    result = [];
  } else if (array.length % 2 === 0) {
    result.push(array[mid1], array[mid2]);
  } else {
    result.push(array[mid1]);
  }
  return result;
};

module.exports = middle;
