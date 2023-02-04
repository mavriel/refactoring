function org() {
  function plumages(birds) {
    return new Map(birds.map((b) => [b.name, plumage(b)]));
  }

  function speed(birds) {
    return new Map(birds.map((b) => [b.name, airSpeedVelocity(b)]));
  }

  function plumage(bird) {
    // Bird 클래스에 묶기
    switch (bird.type) {
      case "EuropeanSwallow":
        return "보통이다";
      case "AfricanSwallow":
        return bird.numberOfCoconuts > 2 ? "지쳤다" : "보통이다";
      case "NorwegianBlueParrot":
        return bird.voltage > 100 ? "그을렸다" : "예쁘다";
      default:
        return "알 수 없다";
    }
  }

  function airSpeedVelocity(bird) {
    // Bird 클래스에 묶기
    switch (bird.type) {
      case "EuropeanSwallow":
        return 35;
      case "AfricanSwallow":
        return 40 - 2 * bird.numberOfCoconuts;
      case "NorwegianBlueParrot":
        return bird.isNailed ? 0 : 10 + bird.voltage / 10;
      default:
        return null;
    }
  }
}

function refactor_01() {
  function plumages(birds) {
    return new Map(birds.map((b) => [b.name, plumage(b)]));
  }

  function speed(birds) {
    return new Map(birds.map((b) => [b.name, airSpeedVelocity(b)]));
  }

  function plumage(bird) {
    return new Bird(bird).plumage; // 팩토리 함수 사용으로 변경
  }

  function airSpeedVelocity(bird) {
    return new Bird(bird).airSpeedVelocity; // 팩토리 함수 사용으로 변경
  }

  class Bird {
    constructor(birdObject) {
      Object.assign(this, birdObject);
    }

    get plumage() {
      switch (this.type) {
        case "EuropeanSwallow":
          return "보통이다";
        case "AfricanSwallow":
          return this.numberOfCoconuts > 2 ? "지쳤다" : "보통이다";
        case "NorwegianBlueParrot":
          return this.voltage > 100 ? "그을렸다" : "예쁘다";
        default:
          return "알 수 없다";
      }
    }

    get airSpeedVelocity() {
      switch (this.type) {
        case "EuropeanSwallow":
          return 35;
        case "AfricanSwallow":
          return 40 - 2 * this.numberOfCoconuts;
        case "NorwegianBlueParrot":
          return this.isNailed ? 0 : 10 + this.voltage / 10;
        default:
          return null;
      }
    }
  }
}

function refactor_02() {
  function plumages(birds) {
    return new Map(birds.map((b) => [b.name, plumage(b)]));
  }

  function speed(birds) {
    return new Map(birds.map((b) => [b.name, airSpeedVelocity(b)]));
  }

  function plumage(bird) {
    return createBird(bird).plumage;
  }

  function airSpeedVelocity(bird) {
    return createBird(bird).airSpeedVelocity;
  }

  function createBird(bird) {
    switch (bird.type) {
      case "EuropeanSwallow":
        return new EuropeanSwallow(bird);
      case "AfricanSwallow":
        return new AfricanSwallow(bird);
      case "NorwegianBlueParrot":
        return new NorwegianBlueParrot(bird);
      default:
        return new Bird(bird);
    }
  }
  class EuropeanSwallow extends Bird {}
  class AfricanSwallow extends Bird {}
  class NorwegianBlueParrot extends Bird {}

  class Bird {
    constructor(birdObject) {
      Object.assign(this, birdObject);
    }

    // 서브클래스로 이동
    get plumage() {
      switch (this.type) {
        case "EuropeanSwallow":
          return "보통이다";
        case "AfricanSwallow":
          return this.numberOfCoconuts > 2 ? "지쳤다" : "보통이다";
        case "NorwegianBlueParrot":
          return this.voltage > 100 ? "그을렸다" : "예쁘다";
        default:
          return "알 수 없다";
      }
    }

    get airSpeedVelocity() {
      switch (this.type) {
        case "EuropeanSwallow":
          return 35;
        case "AfricanSwallow":
          return 40 - 2 * this.numberOfCoconuts;
        case "NorwegianBlueParrot":
          return this.isNailed ? 0 : 10 + this.voltage / 10;
        default:
          return null;
      }
    }
  }
}

function refactor_03() {
  function plumages(birds) {
    return new Map(birds.map((b) => [b.name, plumage(b)]));
  }

  function speed(birds) {
    return new Map(birds.map((b) => [b.name, airSpeedVelocity(b)]));
  }

  function plumage(bird) {
    return createBird(bird).plumage;
  }

  function airSpeedVelocity(bird) {
    return createBird(bird).airSpeedVelocity;
  }

  function createBird(bird) {
    switch (bird.type) {
      case "EuropeanSwallow":
        return new EuropeanSwallow(bird);
      case "AfricanSwallow":
        return new AfricanSwallow(bird);
      case "NorwegianBlueParrot":
        return new NorwegianBlueParrot(bird);
      default:
        return new Bird(bird);
    }
  }
  class EuropeanSwallow extends Bird {
    get plumage() {
      return "보통이다";
    }
  }
  class AfricanSwallow extends Bird {
    get plumage() {
      return this.numberOfCoconuts > 2 ? "지쳤다" : "보통이다";
    }
  }
  class NorwegianBlueParrot extends Bird {
    get plumage() {
      return this.voltage > 100 ? "그을렸다" : "예쁘다";
    }
  }

  class Bird {
    constructor(birdObject) {
      Object.assign(this, birdObject);
    }

    get plumage() {
      return "알 수 없다";
    }

    // 서브클래스 구현
    get airSpeedVelocity() {
      switch (this.type) {
        case "EuropeanSwallow":
          return 35;
        case "AfricanSwallow":
          return 40 - 2 * this.numberOfCoconuts;
        case "NorwegianBlueParrot":
          return this.isNailed ? 0 : 10 + this.voltage / 10;
        default:
          return null;
      }
    }
  }
}

function refactor_04() {
  function plumages(birds) {
    return new Map(birds.map((b) => [b.name, plumage(b)])); // 인라인
  }

  function speed(birds) {
    return new Map(birds.map((b) => [b.name, airSpeedVelocity(b)])); // 인라인
  }

  function plumage(bird) {
    return createBird(bird).plumage;
  }

  function airSpeedVelocity(bird) {
    return createBird(bird).airSpeedVelocity;
  }

  function createBird(bird) {
    switch (bird.type) {
      case "EuropeanSwallow":
        return new EuropeanSwallow(bird);
      case "AfricanSwallow":
        return new AfricanSwallow(bird);
      case "NorwegianBlueParrot":
        return new NorwegianBlueParrot(bird);
      default:
        return new Bird(bird);
    }
  }
  class EuropeanSwallow extends Bird {
    get plumage() {
      return "보통이다";
    }
    get airSpeedVelocity() {
      return 35;
    }
  }
  class AfricanSwallow extends Bird {
    get plumage() {
      return this.numberOfCoconuts > 2 ? "지쳤다" : "보통이다";
    }
    get airSpeedVelocity() {
      return 40 - 2 * this.numberOfCoconuts;
    }
  }
  class NorwegianBlueParrot extends Bird {
    get plumage() {
      return this.voltage > 100 ? "그을렸다" : "예쁘다";
    }
    get airSpeedVelocity() {
      return this.isNailed ? 0 : 10 + this.voltage / 10;
    }
  }

  class Bird {
    constructor(birdObject) {
      Object.assign(this, birdObject);
    }
    get plumage() {
      return "알 수 없다";
    }
    get airSpeedVelocity() {
      return null;
    }
  }
}

function refactor_04() {
  function plumages(birds) {
    return new Map(birds.map((b) => createBird(b)).map((b) => [b.name, b.plumage]));
  }

  function speed(birds) {
    return new Map(birds.map((b) => createBird(b)).map((b) => [b.name, b.airSpeedVelocity]));
  }

  function createBird(bird) {
    switch (bird.type) {
      case "EuropeanSwallow":
        return new EuropeanSwallow(bird);
      case "AfricanSwallow":
        return new AfricanSwallow(bird);
      case "NorwegianBlueParrot":
        return new NorwegianBlueParrot(bird);
      default:
        return new Bird(bird);
    }
  }
  class EuropeanSwallow extends Bird {
    get plumage() {
      return "보통이다";
    }
    get airSpeedVelocity() {
      return 35;
    }
  }
  class AfricanSwallow extends Bird {
    get plumage() {
      return this.numberOfCoconuts > 2 ? "지쳤다" : "보통이다";
    }
    get airSpeedVelocity() {
      return 40 - 2 * this.numberOfCoconuts;
    }
  }
  class NorwegianBlueParrot extends Bird {
    get plumage() {
      return this.voltage > 100 ? "그을렸다" : "예쁘다";
    }
    get airSpeedVelocity() {
      return this.isNailed ? 0 : 10 + this.voltage / 10;
    }
  }

  class Bird {
    constructor(birdObject) {
      Object.assign(this, birdObject);
    }
    get plumage() {
      return "알 수 없다";
    }
    get airSpeedVelocity() {
      return null;
    }
  }
}
