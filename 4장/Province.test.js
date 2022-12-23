const Province = require("./Province");
const data = require("./testData");

describe("province", () => {
  let asia;
  beforeEach(() => {
    asia = new Province(data);
  });

  it("shortfall", () => {
    expect(asia.shortfall).toEqual(5);
  });
  it("profit", () => {
    expect(asia.profit).toEqual(230);
  });
  it("change production", () => {
    asia.producers[0].production = 20;
    expect(asia.shortfall).toEqual(-6);
    expect(asia.profit).toEqual(292);
  });
  it("zero demand", () => {
    asia.demand = 0;
    expect(asia.shortfall).toEqual(-25);
    expect(asia.profit).toEqual(0);
  });
  it("negative demand", () => {
    asia.demand = -1;
    expect(asia.shortfall).toEqual(-26);
    expect(asia.profit).toEqual(-10);
  });
  it("empty string demand", () => {
    asia.demand = "";
    expect(asia.shortfall).toBeNaN();
    expect(asia.profit).toBeNaN();
  });
});

describe("no producers", () => {
  let noProducers;
  beforeEach(() => (noProducers = new Province({ name: "No producers", producers: [], demand: 30, price: 20 })));

  it("shortfall", () => expect(noProducers.shortfall).toEqual(30));
  it("profit", () => expect(noProducers.profit).toEqual(0));
});

describe("string for producers", () => {
  it("", () => {
    const prov = new Province({ name: "No producers", producers: "", demand: 30, price: 20 });
    expect(prov.shortfall).toEqual(0);
  });
});
