function org() {
  // 투자 등급
  function rating(voyage, history) {
    const vpf = voyageProfitFactor(voyage, history);
    const vr = voyageRisk(voyage);
    const chr = captainHistoryRisk(voyage, history);

    if (vpf * 3 > vr + chr * 2) {
      return "A";
    } else {
      return "B";
    }
  }

  // 항해 경로 위험요소
  function voyageRisk(voyage) {
    let result = 1;

    if (voyage.length > 4) {
      result += 2;
    }

    if (voyage.length > 8) {
      result += voyage.length - 8;
    }

    if (["중국", "동인도"].includes(voyage.zone)) {
      result += 4;
    }

    return Math.max(result, 0);
  }

  // 선장의 항해 이력 위험요소
  function captainHistoryRisk(voyage, history) {
    let result = 1;

    if (history.length < 5) {
      result += 4;
    }

    result += history.filter((v) => v.profit < 0).length;

    if (voyage.zone === "중국" && hasChina(history)) {
      result -= 2;
    }

    return Math.max(result, 0);
  }

  // 중국을 경유하는가?
  function hasChina(history) {
    return history.some((v) => "중국" === v.zone);
  }

  // 수익 요인
  function voyageProfitFactor(voyage, history) {
    let result = 2;

    if (voyage.zone === "중국") {
      result += 1;
    }
    if (voyage.zone === "동인도") {
      result += 1;
    }
    if (voyage.zone === "중국" && hasChina(history)) {
      result += 3;
      if (history.length > 10) {
        result += 1;
      }
      if (voyage.length > 12) {
        result += 1;
      }
      if (voyage.length > 18) {
        result -= 1;
      }
    } else {
      if (history.length > 8) {
        result += 1;
      }
      if (voyage.length > 14) {
        result -= 1;
      }
    }

    return result;
  }

  const voyage = { zone: "서인도", length: 10 };

  const history = [
    { zone: "동인도", profit: 5 },
    { zone: "서인도", profit: 15 },
    { zone: "중국", profit: -2 },
    { zone: "서아프리카", profit: 7 },
  ];

  const myRating = rating(voyage, history); // 함수를 클래스 묶기로 Rating 클래스 생성
}

function refactor_01() {
  const voyage = { zone: "서인도", length: 10 };

  const history = [
    { zone: "동인도", profit: 5 },
    { zone: "서인도", profit: 15 },
    { zone: "중국", profit: -2 },
    { zone: "서아프리카", profit: 7 },
  ];

  const myRating = new Rating(voyage, history).value;

  class Rating {
    constructor(voyage, history) {
      this.voyage = voyage;
      this.history = history;
    }

    get value() {
      const vpf = this.voyageProfitFactor;
      const vr = this.voyageRisk;
      const chr = this.captainHistoryRisk;

      if (vpf * 3 > vr + chr * 2) {
        return "A";
      } else {
        return "B";
      }
    }

    get voyageRisk() {
      let result = 1;

      if (this.voyage.length > 4) {
        result += 2;
      }

      if (this.voyage.length > 8) {
        result += this.voyage.length - 8;
      }

      if (["중국", "동인도"].includes(this.voyage.zone)) {
        result += 4;
      }

      return Math.max(result, 0);
    }

    get captainHistoryRisk() {
      let result = 1;

      if (this.history.length < 5) {
        result += 4;
      }

      result += this.history.filter((v) => v.profit < 0).length;

      if (this.voyage.zone === "중국" && this.hasChina(history)) {
        result -= 2;
      }

      return Math.max(result, 0);
    }

    get voyageProfitFactor() {
      let result = 2;

      if (voyage.zone === "중국") {
        result += 1;
      }
      if (voyage.zone === "동인도") {
        result += 1;
      }
      if (voyage.zone === "중국" && this.hasChina(history)) {
        result += 3;
        if (history.length > 10) {
          result += 1;
        }
        if (voyage.length > 12) {
          result += 1;
        }
        if (voyage.length > 18) {
          result -= 1;
        }
      } else {
        if (history.length > 8) {
          result += 1;
        }
        if (voyage.length > 14) {
          result -= 1;
        }
      }

      return result;
    }

    get hasChina() {
      return this.history.some((v) => "중국" === v.zone);
    }
  }

  // 변형 동작용 서브클래스 생성 및 팩터리함수 추가
}

function refactor_02() {
  const voyage = { zone: "서인도", length: 10 };

  const history = [
    { zone: "동인도", profit: 5 },
    { zone: "서인도", profit: 15 },
    { zone: "중국", profit: -2 },
    { zone: "서아프리카", profit: 7 },
  ];

  const myRating = createRating(voyage, history).value;

  class Rating {
    constructor(voyage, history) {
      this.voyage = voyage;
      this.history = history;
    }

    get value() {
      const vpf = this.voyageProfitFactor;
      const vr = this.voyageRisk;
      const chr = this.captainHistoryRisk;

      if (vpf * 3 > vr + chr * 2) {
        return "A";
      } else {
        return "B";
      }
    }

    get voyageRisk() {
      let result = 1;

      if (this.voyage.length > 4) {
        result += 2;
      }

      if (this.voyage.length > 8) {
        result += this.voyage.length - 8;
      }

      if (["중국", "동인도"].includes(this.voyage.zone)) {
        result += 4;
      }

      return Math.max(result, 0);
    }

    get captainHistoryRisk() {
      let result = 1;

      if (this.history.length < 5) {
        result += 4;
      }

      result += this.history.filter((v) => v.profit < 0).length;

      if (this.voyage.zone === "중국" && this.hasChina(history)) {
        // 서브클래스 로직으로 이동
        result -= 2;
      }

      return Math.max(result, 0);
    }

    get voyageProfitFactor() {
      let result = 2;

      if (voyage.zone === "중국") {
        result += 1;
      }
      if (voyage.zone === "동인도") {
        result += 1;
      }
      if (voyage.zone === "중국" && this.hasChina(history)) {
        result += 3;
        if (history.length > 10) {
          result += 1;
        }
        if (voyage.length > 12) {
          result += 1;
        }
        if (voyage.length > 18) {
          result -= 1;
        }
      } else {
        if (history.length > 8) {
          result += 1;
        }
        if (voyage.length > 14) {
          result -= 1;
        }
      }

      return result;
    }

    get hasChina() {
      return this.history.some((v) => "중국" === v.zone);
    }
  }

  class ExperienceChinaRating extends Rating {}

  function createRating(voyage, history) {
    if (voyage.zone === "중국" && history.some((v) => "중국" === v.zone)) {
      return new ExperienceChinaRating(voyage, history);
    }
    return new Rating(voyage, history);
  }
}

function refactor_03() {
  const voyage = { zone: "서인도", length: 10 };

  const history = [
    { zone: "동인도", profit: 5 },
    { zone: "서인도", profit: 15 },
    { zone: "중국", profit: -2 },
    { zone: "서아프리카", profit: 7 },
  ];

  const myRating = createRating(voyage, history).value;

  class Rating {
    constructor(voyage, history) {
      this.voyage = voyage;
      this.history = history;
    }

    get value() {
      const vpf = this.voyageProfitFactor;
      const vr = this.voyageRisk;
      const chr = this.captainHistoryRisk;

      if (vpf * 3 > vr + chr * 2) {
        return "A";
      } else {
        return "B";
      }
    }

    get voyageRisk() {
      let result = 1;

      if (this.voyage.length > 4) {
        result += 2;
      }

      if (this.voyage.length > 8) {
        result += this.voyage.length - 8;
      }

      if (["중국", "동인도"].includes(this.voyage.zone)) {
        result += 4;
      }

      return Math.max(result, 0);
    }

    get captainHistoryRisk() {
      let result = 1;

      if (this.history.length < 5) {
        result += 4;
      }
      result += this.history.filter((v) => v.profit < 0).length;

      return Math.max(result, 0);
    }

    get voyageProfitFactor() {
      let result = 2;

      if (voyage.zone === "중국") {
        result += 1;
      }
      if (voyage.zone === "동인도") {
        result += 1;
      }
      // if/else 전체 함수로 추출
      if (voyage.zone === "중국" && this.hasChina) {
        result += 3;
        if (history.length > 10) {
          result += 1;
        }
        if (voyage.length > 12) {
          result += 1;
        }
        if (voyage.length > 18) {
          result -= 1;
        }
      } else {
        if (history.length > 8) {
          result += 1;
        }
        if (voyage.length > 14) {
          result -= 1;
        }
      }

      return result;
    }

    get hasChina() {
      return this.history.some((v) => "중국" === v.zone);
    }
  }

  class ExperienceChinaRating extends Rating {
    get captainHistoryRisk() {
      const result = super.captainHistoryRisk - 2;
      return Math.max(result, 0);
    }
  }

  function createRating(voyage, history) {
    if (voyage.zone === "중국" && history.some((v) => "중국" === v.zone)) {
      return new ExperienceChinaRating(voyage, history);
    }
    return new Rating(voyage, history);
  }
}

function refactor_04() {
  const voyage = { zone: "서인도", length: 10 };

  const history = [
    { zone: "동인도", profit: 5 },
    { zone: "서인도", profit: 15 },
    { zone: "중국", profit: -2 },
    { zone: "서아프리카", profit: 7 },
  ];

  const myRating = createRating(voyage, history).value;

  class Rating {
    constructor(voyage, history) {
      this.voyage = voyage;
      this.history = history;
    }

    get value() {
      const vpf = this.voyageProfitFactor;
      const vr = this.voyageRisk;
      const chr = this.captainHistoryRisk;

      if (vpf * 3 > vr + chr * 2) {
        return "A";
      } else {
        return "B";
      }
    }

    get voyageRisk() {
      let result = 1;

      if (this.voyage.length > 4) {
        result += 2;
      }

      if (this.voyage.length > 8) {
        result += this.voyage.length - 8;
      }

      if (["중국", "동인도"].includes(this.voyage.zone)) {
        result += 4;
      }

      return Math.max(result, 0);
    }

    get captainHistoryRisk() {
      let result = 1;

      if (this.history.length < 5) {
        result += 4;
      }
      result += this.history.filter((v) => v.profit < 0).length;

      return Math.max(result, 0);
    }

    get voyageProfitFactor() {
      let result = 2;

      if (voyage.zone === "중국") {
        result += 1;
      }
      if (voyage.zone === "동인도") {
        result += 1;
      }
      result = this.voyageAndHistoryLengthFactor;

      return result;
    }

    // 서브클래스에 구현
    get voyageAndHistoryLengthFactor() {
      let result = 0;
      if (voyage.zone === "중국" && this.hasChina) {
        result += 3;
        if (history.length > 10) {
          result += 1;
        }
        if (voyage.length > 12) {
          result += 1;
        }
        if (voyage.length > 18) {
          result -= 1;
        }
      } else {
        if (history.length > 8) {
          result += 1;
        }
        if (voyage.length > 14) {
          result -= 1;
        }
      }
      return result;
    }

    get hasChina() {
      return this.history.some((v) => "중국" === v.zone);
    }
  }

  class ExperienceChinaRating extends Rating {
    get captainHistoryRisk() {
      const result = super.captainHistoryRisk - 2;
      return Math.max(result, 0);
    }
  }

  function createRating(voyage, history) {
    if (voyage.zone === "중국" && history.some((v) => "중국" === v.zone)) {
      return new ExperienceChinaRating(voyage, history);
    }
    return new Rating(voyage, history);
  }
}

function refactor_05() {
  const voyage = { zone: "서인도", length: 10 };

  const history = [
    { zone: "동인도", profit: 5 },
    { zone: "서인도", profit: 15 },
    { zone: "중국", profit: -2 },
    { zone: "서아프리카", profit: 7 },
  ];

  const myRating = createRating(voyage, history).value;

  class Rating {
    constructor(voyage, history) {
      this.voyage = voyage;
      this.history = history;
    }

    get value() {
      const vpf = this.voyageProfitFactor;
      const vr = this.voyageRisk;
      const chr = this.captainHistoryRisk;

      if (vpf * 3 > vr + chr * 2) {
        return "A";
      } else {
        return "B";
      }
    }

    get voyageRisk() {
      let result = 1;

      if (this.voyage.length > 4) {
        result += 2;
      }

      if (this.voyage.length > 8) {
        result += this.voyage.length - 8;
      }

      if (["중국", "동인도"].includes(this.voyage.zone)) {
        result += 4;
      }

      return Math.max(result, 0);
    }

    get captainHistoryRisk() {
      let result = 1;

      if (this.history.length < 5) {
        result += 4;
      }
      result += this.history.filter((v) => v.profit < 0).length;

      return Math.max(result, 0);
    }

    get voyageProfitFactor() {
      let result = 2;

      if (voyage.zone === "중국") {
        result += 1;
      }
      if (voyage.zone === "동인도") {
        result += 1;
      }
      result = this.voyageAndHistoryLengthFactor;

      return result;
    }

    get voyageAndHistoryLengthFactor() {
      let result = 0;
      if (history.length > 8) {
        // historyLengthFactor적용
        result += 1;
      }
      if (voyage.length > 14) {
        result -= 1;
      }
      return result;
    }

    get hasChina() {
      return this.history.some((v) => "중국" === v.zone);
    }
  }

  class ExperienceChinaRating extends Rating {
    get captainHistoryRisk() {
      const result = super.captainHistoryRisk - 2;
      return Math.max(result, 0);
    }

    get voyageAndHistoryLengthFactor() {
      let result = 0;
      result += 3;
      if (history.length > 10) {
        // historyLengthFactor적용
        result += 1;
      }
      if (voyage.length > 12) {
        result += 1;
      }
      if (voyage.length > 18) {
        result -= 1;
      }
      return result;
    }
  }

  function createRating(voyage, history) {
    if (voyage.zone === "중국" && history.some((v) => "중국" === v.zone)) {
      return new ExperienceChinaRating(voyage, history);
    }
    return new Rating(voyage, history);
  }
}

function refactor_06() {
  const voyage = { zone: "서인도", length: 10 };

  const history = [
    { zone: "동인도", profit: 5 },
    { zone: "서인도", profit: 15 },
    { zone: "중국", profit: -2 },
    { zone: "서아프리카", profit: 7 },
  ];

  const myRating = createRating(voyage, history).value;

  class Rating {
    constructor(voyage, history) {
      this.voyage = voyage;
      this.history = history;
    }

    get value() {
      const vpf = this.voyageProfitFactor;
      const vr = this.voyageRisk;
      const chr = this.captainHistoryRisk;

      if (vpf * 3 > vr + chr * 2) {
        return "A";
      } else {
        return "B";
      }
    }

    get voyageRisk() {
      let result = 1;

      if (this.voyage.length > 4) {
        result += 2;
      }

      if (this.voyage.length > 8) {
        result += this.voyage.length - 8;
      }

      if (["중국", "동인도"].includes(this.voyage.zone)) {
        result += 4;
      }

      return Math.max(result, 0);
    }

    get captainHistoryRisk() {
      let result = 1;

      if (this.history.length < 5) {
        result += 4;
      }
      result += this.history.filter((v) => v.profit < 0).length;

      return Math.max(result, 0);
    }

    get voyageProfitFactor() {
      let result = 2;

      if (voyage.zone === "중국") {
        result += 1;
      }
      if (voyage.zone === "동인도") {
        result += 1;
      }
      result = this.voyageAndHistoryLengthFactor;

      return result;
    }

    get voyageAndHistoryLengthFactor() {
      let result = 0;
      result += this.historyLengthFactor; // 문장 호출한 곳으로 옮기기 및 이름 변경
      if (voyage.length > 14) {
        result -= 1;
      }
      return result;
    }

    get historyLengthFactor() {
      return history.length > 8 ? 1 : 0;
    }

    get hasChina() {
      return this.history.some((v) => "중국" === v.zone);
    }
  }

  class ExperienceChinaRating extends Rating {
    get captainHistoryRisk() {
      const result = super.captainHistoryRisk - 2;
      return Math.max(result, 0);
    }

    get voyageAndHistoryLengthFactor() {
      let result = 0;
      result += 3;
      result += this.historyLengthFactor; // 문장 호출한 곳으로 옮기기 및 이름 변경
      if (voyage.length > 12) {
        result += 1;
      }
      if (voyage.length > 18) {
        result -= 1;
      }
      return result;
    }

    get historyLengthFactor() {
      return history.length > 10 ? 1 : 0;
    }
  }

  function createRating(voyage, history) {
    if (voyage.zone === "중국" && history.some((v) => "중국" === v.zone)) {
      return new ExperienceChinaRating(voyage, history);
    }
    return new Rating(voyage, history);
  }
}

function refactor_07() {
  const voyage = { zone: "서인도", length: 10 };

  const history = [
    { zone: "동인도", profit: 5 },
    { zone: "서인도", profit: 15 },
    { zone: "중국", profit: -2 },
    { zone: "서아프리카", profit: 7 },
  ];

  const myRating = createRating(voyage, history).value;

  class Rating {
    constructor(voyage, history) {
      this.voyage = voyage;
      this.history = history;
    }

    get value() {
      const vpf = this.voyageProfitFactor;
      const vr = this.voyageRisk;
      const chr = this.captainHistoryRisk;

      if (vpf * 3 > vr + chr * 2) {
        return "A";
      } else {
        return "B";
      }
    }

    get voyageRisk() {
      let result = 1;

      if (this.voyage.length > 4) {
        result += 2;
      }

      if (this.voyage.length > 8) {
        result += this.voyage.length - 8;
      }

      if (["중국", "동인도"].includes(this.voyage.zone)) {
        result += 4;
      }

      return Math.max(result, 0);
    }

    get captainHistoryRisk() {
      let result = 1;

      if (this.history.length < 5) {
        result += 4;
      }
      result += this.history.filter((v) => v.profit < 0).length;

      return Math.max(result, 0);
    }

    get voyageProfitFactor() {
      let result = 2;

      if (voyage.zone === "중국") {
        result += 1;
      }
      if (voyage.zone === "동인도") {
        result += 1;
      }
      result += this.historyLengthFactor;
      result += this.voyageFactor;

      return result;
    }

    get voyageFactor() {
      let result = 0;
      if (voyage.length > 14) {
        result -= 1;
      }
      return result;
    }

    get historyLengthFactor() {
      return history.length > 8 ? 1 : 0;
    }

    get hasChina() {
      return this.history.some((v) => "중국" === v.zone);
    }
  }

  class ExperienceChinaRating extends Rating {
    get captainHistoryRisk() {
      const result = super.captainHistoryRisk - 2;
      return Math.max(result, 0);
    }

    get voyageFactor() {
      let result = 0;
      result += 3;
      if (voyage.length > 12) {
        result += 1;
      }
      if (voyage.length > 18) {
        result -= 1;
      }
      return result;
    }

    get historyLengthFactor() {
      return history.length > 10 ? 1 : 0;
    }
  }

  function createRating(voyage, history) {
    if (voyage.zone === "중국" && history.some((v) => "중국" === v.zone)) {
      return new ExperienceChinaRating(voyage, history);
    }
    return new Rating(voyage, history);
  }
}
