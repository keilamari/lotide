const eqArrays = require('./eqArrays');

const assertArraysEqual = function(actual, expected) {
  let assertion = "";
  let comparison = eqArrays(actual, expected);
  if (comparison === true) {
    assertion = `👍👍👍Assertion passed`;
  } else {
    assertion = `👎👎👎Assertion failed`;
  }
  console.log(assertion);
};

module.exports = assertArraysEqual;