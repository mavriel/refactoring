const invoices = require("./invoices.json");
const plays = require("./plays.json");
const statement = require("./statement");

test("invoices", () => {
  expect(statement(invoices[0], plays)).toEqual(
    "청구 내역 (고객명: BigCo)\n Hamlet: $650.00 (55석)\n As You Like It: $580.00 (35석)\n Othello: $500.00 (40석)\n총액: $1,730.00\n적립 포인트: 47점\n"
  );
});
