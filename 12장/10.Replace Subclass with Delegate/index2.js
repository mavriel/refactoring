function org() {
  // EuropeanSwallow 위임 클래스 생성 및 윔임 세팅 함수 추가

  function createBird(bird) {
    switch (bird.type) {
      case "유럽 제비":
        return new EuropeanSwallow(bird);
      case "아프리카 제비":
        return new AfricanSwallow(bird);
      case "노르웨이 파랑 앵무":
        return new NorwegianBlueParrot(bird);
      default:
        return new Bird(bird);
    }
  }

  class Bird {
    constructor(data) {
      this._name = data.name;
      this._plumage = data.plumage;
    }
    get name() {
      return this._name;
    }
    get plumage() {
      return this._plumage || "보통이다";
    }
    get airSpeedVelocity() {
      return null;
    }
  }

  class EuropeanSwallow extends Bird {
    get airSpeedVelocity() {
      return 35;
    }
  }

  class AfricanSwallow extends Bird {
    constructor(data) {
      super(data);
      this._numberOfCoconuts = data.numberOfCoconuts;
    }
    get airSpeedVelocity() {
      return 40 - 2 * this._numberOfCoconuts;
    }
  }

  class NorwegianBlueParrot extends Bird {
    constructor(data) {
      super(data);
      this._voltage = data.voltage;
      this._isNailed = data.isNailed;
    }
    get plumage() {
      if (this._voltage > 100) {
        return "그을렸다";
      } else {
        return this._plumage || "예쁘다";
      }
    }
    get airSpeedVelocity() {
      return this._isNailed ? 0 : 10 + this._voltage / 10;
    }
  }
}

function refactor_01() {
  // EuropeanSwallowDelegate 함수 구현 및 EuropeanSwallow 제거
  class EuropeanSwallowDelegate {}

  function createBird(bird) {
    switch (bird.type) {
      case "유럽 제비":
        return new EuropeanSwallow(bird);
      case "아프리카 제비":
        return new AfricanSwallow(bird);
      case "노르웨이 파랑 앵무":
        return new NorwegianBlueParrot(bird);
      default:
        return new Bird(bird);
    }
  }

  class Bird {
    constructor(data) {
      this._name = data.name;
      this._plumage = data.plumage;
      this._speciesDelegate = this.selectSpeciesDelegate(data);
    }
    selectSpeciesDelegate(data) {
      switch (data.type) {
        case "유럽 제비":
          return new EuropeanSwallowDelegate();
        default:
          return null;
      }
    }
    get name() {
      return this._name;
    }
    get plumage() {
      return this._plumage || "보통이다";
    }
    get airSpeedVelocity() {
      return null;
    }
  }

  class EuropeanSwallow extends Bird {
    get airSpeedVelocity() {
      return 35;
    }
  }

  class AfricanSwallow extends Bird {
    constructor(data) {
      super(data);
      this._numberOfCoconuts = data.numberOfCoconuts;
    }
    get airSpeedVelocity() {
      return 40 - 2 * this._numberOfCoconuts;
    }
  }

  class NorwegianBlueParrot extends Bird {
    constructor(data) {
      super(data);
      this._voltage = data.voltage;
      this._isNailed = data.isNailed;
    }
    get plumage() {
      if (this._voltage > 100) {
        return "그을렸다";
      } else {
        return this._plumage || "예쁘다";
      }
    }
    get airSpeedVelocity() {
      return this._isNailed ? 0 : 10 + this._voltage / 10;
    }
  }
}

function refactor_02() {
  // 아프리카 제비 위임 클래스 생성 및 함수 이동
  class EuropeanSwallowDelegate {
    get airSpeedVelocity() {
      return 35;
    }
  }

  function createBird(bird) {
    switch (bird.type) {
      case "아프리카 제비":
        return new AfricanSwallow(bird);
      case "노르웨이 파랑 앵무":
        return new NorwegianBlueParrot(bird);
      default:
        return new Bird(bird);
    }
  }

  class Bird {
    constructor(data) {
      this._name = data.name;
      this._plumage = data.plumage;
      this._speciesDelegate = this.selectSpeciesDelegate(data);
    }
    selectSpeciesDelegate(data) {
      switch (data.type) {
        case "유럽 제비":
          return new EuropeanSwallowDelegate();
        default:
          return null;
      }
    }
    get name() {
      return this._name;
    }
    get plumage() {
      return this._plumage || "보통이다";
    }
    get airSpeedVelocity() {
      return this._speciesDelegate ? this._speciesDelegate.airSpeedVelocity : null;
    }
  }

  class AfricanSwallow extends Bird {
    constructor(data) {
      super(data);
      this._numberOfCoconuts = data.numberOfCoconuts;
    }
    get airSpeedVelocity() {
      return 40 - 2 * this._numberOfCoconuts;
    }
  }

  class NorwegianBlueParrot extends Bird {
    constructor(data) {
      super(data);
      this._voltage = data.voltage;
      this._isNailed = data.isNailed;
    }
    get plumage() {
      if (this._voltage > 100) {
        return "그을렸다";
      } else {
        return this._plumage || "예쁘다";
      }
    }
    get airSpeedVelocity() {
      return this._isNailed ? 0 : 10 + this._voltage / 10;
    }
  }
}

function refactor_03() {
  // 노르웨이 파랑 앵무 위임 클래스 생성 및 함수 이동
  class EuropeanSwallowDelegate {
    get airSpeedVelocity() {
      return 35;
    }
  }

  class AfricanSwallowDelegate {
    constructor(data) {
      this._numberOfCoconuts = data.numberOfCoconuts;
    }
    get airSpeedVelocity() {
      return 40 - 2 * this._numberOfCoconuts;
    }
  }

  function createBird(bird) {
    switch (bird.type) {
      case "노르웨이 파랑 앵무":
        return new NorwegianBlueParrot(bird);
      default:
        return new Bird(bird);
    }
  }

  class Bird {
    constructor(data) {
      this._name = data.name;
      this._plumage = data.plumage;
      this._speciesDelegate = this.selectSpeciesDelegate(data);
    }
    selectSpeciesDelegate(data) {
      switch (data.type) {
        case "유럽 제비":
          return new EuropeanSwallowDelegate();
        case "아프리카 제비":
          return new AfricanSwallowDelegate(data);
        default:
          return null;
      }
    }
    get name() {
      return this._name;
    }
    get plumage() {
      return this._plumage || "보통이다";
    }
    get airSpeedVelocity() {
      return this._speciesDelegate ? this._speciesDelegate.airSpeedVelocity : null;
    }
  }

  class NorwegianBlueParrot extends Bird {
    constructor(data) {
      super(data);
      this._voltage = data.voltage;
      this._isNailed = data.isNailed;
    }
    get plumage() {
      if (this._voltage > 100) {
        return "그을렸다";
      } else {
        return this._plumage || "예쁘다";
      }
    }
    get airSpeedVelocity() {
      return this._isNailed ? 0 : 10 + this._voltage / 10;
    }
  }
}

function refactor_04() {
  // 위임 클래스 그룹핑
  class EuropeanSwallowDelegate {
    get airSpeedVelocity() {
      return 35;
    }
  }
  class AfricanSwallowDelegate {
    constructor(data) {
      this._numberOfCoconuts = data.numberOfCoconuts;
    }
    get airSpeedVelocity() {
      return 40 - 2 * this._numberOfCoconuts;
    }
  }
  class NorwegianBlueParrotDelegate {
    constructor(data, bird) {
      this._voltage = data.voltage;
      this._isNailed = data.isNailed;
      this._bird = bird;
    }
    get plumage() {
      if (this._voltage > 100) {
        return "그을렸다";
      } else {
        return this._bird._plumage || "예쁘다";
      }
    }
    get airSpeedVelocity() {
      return this._isNailed ? 0 : 10 + this._voltage / 10;
    }
  }

  function createBird(bird) {
    switch (bird.type) {
      case "노르웨이 파랑 앵무":
        return new NorwegianBlueParrot(bird);
      default:
        return new Bird(bird);
    }
  }

  class Bird {
    constructor(data) {
      this._name = data.name;
      this._plumage = data.plumage;
      this._speciesDelegate = this.selectSpeciesDelegate(data);
    }
    selectSpeciesDelegate(data) {
      switch (data.type) {
        case "유럽 제비":
          return new EuropeanSwallowDelegate();
        case "아프리카 제비":
          return new AfricanSwallowDelegate(data);
        case "노르웨이 파랑 앵무":
          return new NorwegianBlueParrotDelegate(data, this);
        default:
          return null;
      }
    }
    get name() {
      return this._name;
    }
    get plumage() {
      if (this._speciesDelegate && this._speciesDelegate.plumage) {
        return this._speciesDelegate.plumage;
      }
      return this._plumage || "보통이다";
    }
    get airSpeedVelocity() {
      return this._speciesDelegate ? this._speciesDelegate.airSpeedVelocity : null;
    }
  }

  class NorwegianBlueParrot extends Bird {
    constructor(data) {
      super(data);
      this._voltage = data.voltage;
      this._isNailed = data.isNailed;
    }
    get plumage() {
      if (this._voltage > 100) {
        return "그을렸다";
      } else {
        return this._plumage || "예쁘다";
      }
    }
    get airSpeedVelocity() {
      return this._isNailed ? 0 : 10 + this._voltage / 10;
    }
  }
}

function refactor_05() {
  class SpeciesDelegate {
    constructor(data, bird) {
      this._bird = bird;
    }
    get plumage() {
      return this._bird._plumage || "보통이다";
    }
    get airSpeedVelocity() {
      return null;
    }
  }
  class EuropeanSwallowDelegate extends SpeciesDelegate {
    get airSpeedVelocity() {
      return 35;
    }
  }
  class AfricanSwallowDelegate extends SpeciesDelegate {
    constructor(data, bird) {
      super(data, bird);
      this._numberOfCoconuts = data.numberOfCoconuts;
    }
    get airSpeedVelocity() {
      return 40 - 2 * this._numberOfCoconuts;
    }
  }
  class NorwegianBlueParrotDelegate extends SpeciesDelegate {
    constructor(data, bird) {
      super(data, bird);
      this._voltage = data.voltage;
      this._isNailed = data.isNailed;
    }
    get plumage() {
      if (this._voltage > 100) {
        return "그을렸다";
      } else {
        return this._bird._plumage || "예쁘다";
      }
    }
    get airSpeedVelocity() {
      return this._isNailed ? 0 : 10 + this._voltage / 10;
    }
  }

  function createBird(bird) {
    return new Bird(bird);
  }

  class Bird {
    constructor(data) {
      this._name = data.name;
      this._plumage = data.plumage;
      this._speciesDelegate = this.selectSpeciesDelegate(data);
    }
    selectSpeciesDelegate(data) {
      switch (data.type) {
        case "유럽 제비":
          return new EuropeanSwallowDelegate(data, this);
        case "아프리카 제비":
          return new AfricanSwallowDelegate(data, this);
        case "노르웨이 파랑 앵무":
          return new NorwegianBlueParrotDelegate(data, this);
        default:
          return new SpeciesDelegate(data, this);
      }
    }
    get name() {
      return this._name;
    }
    get plumage() {
      return this._speciesDelegate.plumage;
    }
    get airSpeedVelocity() {
      return this._speciesDelegate.airSpeedVelocity;
    }
  }
}
