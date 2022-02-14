const assertEqual = require('../assertEqual');
const tail = require('../tail')

let testing = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(tail(testing));
console.log(testing);

// Test Case: Check the original array
const words = ["Hello", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!
