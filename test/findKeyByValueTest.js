const assert = require('chai').assert;
const findKeyByValue = require('../findKeyByValue');

const bestTVShowsByGenre = {
  sciFi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

describe("#findKeyByValue", () => {
  it("returns 'sciFi'", () => {
    assert.deepEqual(findKeyByValue(bestTVShowsByGenre, "The Expanse"), 'sciFi');
  });
  it("returns 'drama'", () => {
    assert.deepEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), 'drama');
  });
  it("returns 'undefined", () => {
    assert.deepEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
  });
});