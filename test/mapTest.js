const assert = require('chai').assert;
const map = require('../map');

describe("#map", () => {
  it("returns ['g', 'c', 't', 'm', 't']", () => {
    assert.deepEqual(map(["ground", "control", "to", "major", "tom"], word => word[0]), ["g", "c", "t", "m", "t"]);
  });
  it("returns ['o', 't', 't', 'f', 'f']", () => {
    assert.deepEqual(map(["one", "two", "three", "four", "five"], num => num[0]), ["o", "t", "t", "f", "f"]);
  });
});