const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`👍👍👍Assertion passed: ${actual} === ${expected}`);
  } else {
    console.log(`👎👎👎Assertion failed: ${actual} !== ${expected}`);
  }
};

const eqObjects = function(object1, object2) {
  let ob1 = Object.keys(object1); 
  let ob2 = Object.keys(object2);
  let result = '';
  if (ob1.length !== ob2.length){
    result = false;
  }
  else if (ob1.length === ob2.length) { 
    for (let value in object1) {
      let number1 = object1[value]; 
      let number2 = object2[value] 
    if (number1.length !== number2.length) {
      result = false;
    }
    else if (number1 === number2) {
      result = true;
    }
    }
  } return result;
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
eqObjects(ab, ba); // => true
assertEqual(eqObjects(ab, ba), true);

const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc), false); // => false

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false); // => false
