const assert = require('chai').assert;
const countOnly = require('../countOnly');

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

describe("#countOnly", () => {
  it("returns { Fang: 2, Jason: 1 } from given parameters", () => {
    assert.deepEqual(countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false }), { Fang: 2, Jason: 1 });
  });
  it("returns { Salima: 2, Agouhanna: 1, Kavith: 1 } from given parameters", () => {
    assert.deepEqual(countOnly(firstNames, { "Kavith": true, "Agouhanna": true, "Salima": true, "Jason": false }), { Salima: 2, Agouhanna: 1, Kavith: 1 });
  });
});