const _ = require("ramda");
const PerformanceCalculator = require("./PerformanceCalculator");

function createStatementData(invoice, plays) {
  const statementData = {};
  statementData.customer = invoice.customer;
  statementData.performances = invoice.performances.map(enrichPerformance);
  statementData.totalAmount = totalAmount(statementData);
  statementData.totalVolumeCredits = totalVolumeCredits(statementData);

  function enrichPerformance(aPerformance) {
    const calculator = new PerformanceCalculator(aPerformance, plays[aPerformance.playID]);
    const result = { ...aPerformance };
    result.play = calculator.play;
    result.amount = calculator.amount;
    result.volumeCredits = calculator.volumeCredits;
    return result;
  }

  function totalAmount(data) {
    return _.pipe(_.path(["performances"]), _.pluck("amount"), _.sum)(data);
  }

  function totalVolumeCredits(data) {
    return _.pipe(_.path(["performances"]), _.pluck("volumeCredits"), _.sum)(data);
  }

  return statementData;
}

module.exports = createStatementData;
