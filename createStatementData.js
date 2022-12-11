const _ = require("ramda");

function createStatementData(invoice, plays) {
  const statementData = {};
  statementData.customer = invoice.customer;
  statementData.performances = invoice.performances.map(enrichPerformance);
  statementData.totalAmount = totalAmount(statementData);
  statementData.totalVolumeCredits = totalVolumeCredits(statementData);

  function enrichPerformance(aPerformance) {
    const result = { ...aPerformance };
    result.play = plays[aPerformance.playID];
    result.amount = amountFor(result);
    result.volumeCredits = volumeCreditsFor(result);
    return result;

    function amountFor(aPerformance) {
      let result = 0;
      switch (aPerformance.play.type) {
        case "tragedy":
          result = 40000;
          if (aPerformance.audience > 30) {
            result += 1000 * (aPerformance.audience - 30);
          }
          break;
        case "comedy":
          result = 30000;
          if (aPerformance.audience > 20) {
            result += 10000 + 500 * (aPerformance.audience - 20);
          }
          result += 300 * aPerformance.audience;
          break;
        default:
          throw new Error(`알 수 없는 장르: ${aPerformance.play.type}`);
      }
      return result;
    }

    function volumeCreditsFor(aPerformance) {
      let result = Math.max(aPerformance.audience - 30, 0);
      if ("comedy" === aPerformance.play.type) {
        result += Math.floor(aPerformance.audience / 5);
      }
      return result;
    }
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
