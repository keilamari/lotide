const assert = require('chai').assert;
const assertObjectsEqual = require('../assertObjectsEqual');

describe("#assertObjectsEqual", () => {
  it("returns 'Assertion passed' statement", () => {
    assert.deepEqual(assertObjectsEqual({ a: "1", b: "2" }, { b: "2", a: "1" }), "👍👍👍 Assertion passed: { a: '1', b: '2' } === { b: '2', a: '1' }");
  });
  it("returns 'Assertion failed' statement", () => {
    assert.deepEqual(assertObjectsEqual({ a: "1", b: "1" }, { b: 1, a: "1" }), "👎👎👎 Assertion failed: { a: '1', b: '1' } !== { b: 1, a: '1' }");
  });
});

