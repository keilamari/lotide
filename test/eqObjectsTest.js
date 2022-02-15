const assert = require('chai').assert;
const eqObjects = require('../eqObjects');

describe("#eqObjects", () => {
  it("returns 'true'", () => {
    assert.deepEqual(eqObjects({ a: "1", b: "1" }, { b: 1, a: "1" }), false);
  });
  it("returns 'false", () => {
    assert.deepEqual(eqObjects({ a: "1", b: "2" }, { b: "2", a: "1" }), true);
  });
});
