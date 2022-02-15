const assert = require('chai').assert;
const countLetters = require('../countletters');

describe("#countLetters", () => {
  it("returns { h: 2, e: 3, l: 2, o: 1, t: 1, r: 1 } for '/hello there'/", () => {
    assert.deepEqual(countLetters("hello there"), { h: 2, e: 3, l: 2, o: 1, t: 1, r: 1 });
  });
  it("returns { l: 1, i: 2, g: 1, h: 4, t: 2, o: 2, u: 2, s: 2, e: 3, n: 1 } of '/lighthouse in the house'/", () => {
    assert.deepEqual(countLetters("lighthouse in the house"), { l: 1, i: 2, g: 1, h: 4, t: 2, o: 2, u: 2, s: 2, e: 3, n: 1 });
  });
});
