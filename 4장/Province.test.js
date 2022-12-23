const Province = require("./Province");
const data = require("./testData");
const assert = require("assert");

describe("province", () => {
  it("shortfall", () => {
    const asia = new Province(data);
    expect(asia.shortfall).toEqual(5);
    assert.equal(asia.shortfall, 5);
  });
});
