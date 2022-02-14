const eqArrays = require('../eqArrays');
const assertArraysEqual = require('../assertArraysEqual');



assertArraysEqual([1, 2, 3, 4], [1, 2, "3", 4]);
assertArraysEqual(["Loopy", "Lighthouse", "refactor"], ["Loopy", "Lighthouse", "refactor"]);
assertArraysEqual(["6", "2", 5, 4], ["6", "2", 5, 4]);