const assert = require('chai').assert;
const tail = require('../tail');

describe("#tail", () => {
  it("returns [ 2, 3, 4, 5, 6, 7, 8 ] for [1, 2, 3, 4, 5, 6, 7, 8]", () => {
    assert.deepEqual(tail([1, 2, 3, 4, 5, 6, 7, 8]), [ 2, 3, 4, 5, 6, 7, 8 ]);
  });
  it("returns [ 'Lighthouse', 'Labs' ] for ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.deepEqual(tail(["Hello", "Lighthouse", "Labs"]), ([ 'Lighthouse', 'Labs' ]));
  });
});
