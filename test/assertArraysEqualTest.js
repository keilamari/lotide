const assert = require('chai').assert;
const assertArraysEqual = require('../assertArraysEqual');

describe("#assertArraysEqual", () => {
  it("returns ", () => {
    assert.deepEqual(assertArraysEqual([1, 2, 3, 4], [1, 2, "3", 4]), '👎👎👎Assertion failed');
  });
  it("returns ", () => {
    assert.deepEqual(assertArraysEqual(["Loopy", "Lighthouse", "refactor"], ["Loopy", "Lighthouse", "refactor"]), '👍👍👍Assertion passed');
  });
});
