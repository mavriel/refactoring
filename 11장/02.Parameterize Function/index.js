function org() {
  function baseCharge(usage) {
    if (usage < 0) return usd(0);
    const amount = bottomBand(usage) * 0.03 + middleBand(usage) * 0.05 + topBand(usage) * 0.07;
    return usd(amount);
  }

  function bottomBand(usage) {
    return Math.min(usage, 100);
  }

  // 중간단계에 해당하는 함수를 골라 매개변수 호출하도록 변경
  function middleBand(usage) {
    return usage > 100 ? Math.min(usage, 200) - 100 : 0;
  }

  function topBand(usage) {
    return usage > 200 ? usage - 200 : 0;
  }
}

function refactor_01() {
  function baseCharge(usage) {
    if (usage < 0) return usd(0);
    const amount = bottomBand(usage) * 0.03 + withinBand(usage, 100, 200) * 0.05 + topBand(usage) * 0.07;
    return usd(amount);
  }

  function bottomBand(usage) {
    return Math.min(usage, 100);
  }

  // 함수내 리터럴들 적당하게 변경
  function withinBand(usage, bottom, top) {
    return usage > 100 ? Math.min(usage, 200) - 100 : 0;
  }

  function topBand(usage) {
    return usage > 200 ? usage - 200 : 0;
  }
}

function refactor_02() {
  function baseCharge(usage) {
    if (usage < 0) return usd(0);
    const amount = bottomBand(usage) * 0.03 + withinBand(usage, 100, 200) * 0.05 + topBand(usage) * 0.07;
    return usd(amount);
  }

  // 신규함수로 교체
  function bottomBand(usage) {
    return Math.min(usage, 100);
  }

  function withinBand(usage, bottom, top) {
    return usage > bottom ? Math.min(usage, top) - bottom : 0;
  }

  function topBand(usage) {
    return usage > 200 ? usage - 200 : 0;
  }
}

function refactor_03() {
  function baseCharge(usage) {
    if (usage < 0) return usd(0);
    const amount = withinBand(usage, 0, 100) * 0.03 + withinBand(usage, 100, 200) * 0.05 + topBand(usage) * 0.07;
    return usd(amount);
  }

  function withinBand(usage, bottom, top) {
    return usage > bottom ? Math.min(usage, top) - bottom : 0;
  }

  // 신규함수로 교체
  function topBand(usage) {
    return usage > 200 ? usage - 200 : 0;
  }
}

function refactor_04() {
  function baseCharge(usage) {
    if (usage < 0) return usd(0);
    const amount =
      withinBand(usage, 0, 100) * 0.03 + withinBand(usage, 100, 200) * 0.05 + withinBand(usage, 200, Infinity) * 0.07;
    return usd(amount);
  }

  function withinBand(usage, bottom, top) {
    return usage > bottom ? Math.min(usage, top) - bottom : 0;
  }
}
