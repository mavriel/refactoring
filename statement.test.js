const invoices = require("./invoices.json");
const plays = require("./plays.json");
const { statement, htmlStatement } = require("./statement");

test("invoices", () => {
  expect(statement(invoices[0], plays)).toEqual(
    "청구 내역 (고객명: BigCo)\n Hamlet: $650.00 (55석)\n As You Like It: $580.00 (35석)\n Othello: $500.00 (40석)\n총액: $1,730.00\n적립 포인트: 47점\n"
  );
  expect(htmlStatement(invoices[0], plays)).toEqual(
    "<h1>청구 내역 (고객명: BigCo)</h1><table><tr><th>연극</th><th>좌석 수</th><th>금액</th></tr><tr><td>Hamlet</td><td>undefined석</td><td>$650.00</td></tr><tr><td>As You Like It</td><td>undefined석</td><td>$580.00</td></tr><tr><td>Othello</td><td>undefined석</td><td>$500.00</td></tr></table><p>총액: <em>$1,730.00</em></p><p>적립 포인트: <em>47</em>점</p>"
  );
});
