const assert = require('chai').assert;
const tail = require('../tail');

describe("#head", () => {
  it("returns 1 for [1, 2, 3]", () => {
    assert.deepEqual(tail([1, 2, 3, 4, 5, 6, 7, 8]), [ 2, 3, 4, 5, 6, 7, 8 ]);
  });
  it("returns '5' for ['5']", () => {
    assert.deepEqual(tail(["Hello", "Lighthouse", "Labs"]), ([ 'Lighthouse', 'Labs' ]));
  });
  it("returns [] for [1]", () => {
    assert.deepEqual(tail([1]), []);
  });
  it("returns [] for []", () => {
    assert.deepEqual(tail([]), []);
  });
});
