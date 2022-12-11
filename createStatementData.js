const _ = require("ramda");
const TragedyCalculator = require("./TragedyCalculator");
const ComedyCalculator = require("./ComedyCalculator");

function createStatementData(invoice, plays) {
  const statementData = {};
  statementData.customer = invoice.customer;
  statementData.performances = invoice.performances.map(enrichPerformance);
  statementData.totalAmount = totalAmount(statementData);
  statementData.totalVolumeCredits = totalVolumeCredits(statementData);

  function enrichPerformance(aPerformance) {
    const calculator = createPerformanceCalculator(aPerformance, plays[aPerformance.playID]);
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

function createPerformanceCalculator(aPerformance, aPlay) {
  switch (aPlay.type) {
    case "tragedy":
      return new TragedyCalculator(aPerformance, aPlay);
    case "comedy":
      return new ComedyCalculator(aPerformance, aPlay);
    default:
      throw new Error(`알 수 없는 장르: ${aPlay.type}`);
  }
}

module.exports = createStatementData;
