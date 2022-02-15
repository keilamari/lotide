const eqObjects = function(object1, object2) {
  let ob1 = Object.keys(object1);
  let ob2 = Object.keys(object2);
  let result = '';
  if (ob1.length !== ob2.length) {
    result = false;
  } else if (ob1.length === ob2.length) {
    for (let value in object1) {
      let number1 = object1[value];
      let number2 = object2[value];
      if (number1.length !== number2.length) {
        result = false;
      } else if (number1 === number2) {
        result = true;
      }
    }
  } return result;
};

const assertObjectsEqual = function(object1, object2) {
  const inspect = require('util').inspect;
  let assertion = "";
  let comparison = eqObjects(object1, object2);
  if (comparison) {
    assertion = `👍👍👍 Assertion passed: ${inspect(object1)} === ${inspect(object2)}`;
  } else {
    assertion = `👎👎👎 Assertion failed: ${inspect(object1)} !== ${inspect(object2)}`;
  }
  console.log(assertion);
  return assertion;
};

module.exports = assertObjectsEqual;