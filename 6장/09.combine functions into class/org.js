const reading = { customer: "ivan", quantity: 10, month: 5, year: 2017 }; // 레코드 캡슐화

function org() {
  const func1 = () => {
    const aReading = acquireReading();
    const baseCharge = baseRate(aReading.month, aReading.year) * aReading.quantity;
  };

  const func2 = () => {
    const aReading = acquireReading();
    const base = baseRate(aReading.month, aReading.year) * aReading.quantity;
    const taxableCharge = Math.max(0, base - taxThreshold(aReading.year));
  };

  const func3 = () => {
    const aReading = acquireReading();
    const basicChargeAmount = calculateBaseChage(aReading);

    function calculateBaseChage(aReading) {
      return baseRate(aReading.month, aReading.year) * aReading.quantity;
    }
  };
}

function refactor_01() {
  class Reading {
    constructor(data) {
      this._customer = data.customer;
      this._quantity = data.quantity;
      this._month = data.month;
      this._year = data.year;
    }
    get customer() {
      return this._customer;
    }

    get quantity() {
      return this._quantity;
    }

    get month() {
      return this._month;
    }

    get year() {
      return this._year;
    }
  }

  const func1 = () => {
    const aReading = acquireReading();
    const baseCharge = baseRate(aReading.month, aReading.year) * aReading.quantity; // 2. 대치
  };

  const func2 = () => {
    const aReading = acquireReading();
    const base = baseRate(aReading.month, aReading.year) * aReading.quantity; // 2. 대치
    const taxableCharge = Math.max(0, base - taxThreshold(aReading.year));
  };

  const func3 = () => {
    const aReading = acquireReading(); // 1. 데이터 클래스 사용 및 함수 이동
    const basicChargeAmount = calculateBaseChage(aReading);

    function calculateBaseChage(aReading) {
      return baseRate(aReading.month, aReading.year) * aReading.quantity;
    }
  };
}

function refactor_02() {
  class Reading {
    constructor(data) {
      this._customer = data.customer;
      this._quantity = data.quantity;
      this._month = data.month;
      this._year = data.year;
    }
    get customer() {
      return this._customer;
    }

    get quantity() {
      return this._quantity;
    }

    get month() {
      return this._month;
    }

    get year() {
      return this._year;
    }

    get baseCharge() {
      return baseRate(this.month, this.year) * this.quantity;
    }
  }

  const func1 = () => {
    const rawReading = acquireReading();
    const aReading = new Reading(rawReading);
    const baseCharge = aReading.baseCharge;
  };

  const func2 = () => {
    const rawReading = acquireReading();
    const aReading = new Reading(rawReading);
    const base = aReading.baseCharge;
    const taxableCharge = Math.max(0, base - taxThreshold(aReading.year)); // 인라인 + 함수 추출
  };

  const func3 = () => {
    const rawReading = acquireReading();
    const aReading = new Reading(rawReading);
    const basicChargeAmount = aReading.baseCharge;
  };
}

function refactor_03() {
  class Reading {
    constructor(data) {
      this._customer = data.customer;
      this._quantity = data.quantity;
      this._month = data.month;
      this._year = data.year;
    }
    get customer() {
      return this._customer;
    }

    get quantity() {
      return this._quantity;
    }

    get month() {
      return this._month;
    }

    get year() {
      return this._year;
    }

    get baseCharge() {
      return baseRate(this.month, this.year) * this.quantity;
    }
  }

  const func1 = () => {
    const rawReading = acquireReading();
    const aReading = new Reading(rawReading);
    const baseCharge = aReading.baseCharge;
  };

  function taxableChargeFn(aReading) {
    // 클래스로 이동
    return Math.max(0, aReading.baseCharge - taxThreshold(aReading.year));
  }

  const func2 = () => {
    const rawReading = acquireReading();
    const aReading = new Reading(rawReading);
    const taxableCharge = taxableChargeFn(aReading);
  };

  const func3 = () => {
    const rawReading = acquireReading();
    const aReading = new Reading(rawReading);
    const basicChargeAmount = aReading.baseCharge;
  };
}

function refactor_03() {
  class Reading {
    constructor(data) {
      this._customer = data.customer;
      this._quantity = data.quantity;
      this._month = data.month;
      this._year = data.year;
    }
    get customer() {
      return this._customer;
    }

    get quantity() {
      return this._quantity;
    }

    get month() {
      return this._month;
    }

    get year() {
      return this._year;
    }

    get baseCharge() {
      return baseRate(this.month, this.year) * this.quantity;
    }

    get taxableCharge() {
      return Math.max(0, this.baseCharge - taxThreshold(this.year));
    }
  }

  const func1 = () => {
    const rawReading = acquireReading();
    const aReading = new Reading(rawReading);
    const baseCharge = aReading.baseCharge;
  };

  const func2 = () => {
    const rawReading = acquireReading();
    const aReading = new Reading(rawReading);
    const taxableCharge = aReading.taxableCharge;
  };

  const func3 = () => {
    const rawReading = acquireReading();
    const aReading = new Reading(rawReading);
    const basicChargeAmount = aReading.baseCharge;
  };
}
