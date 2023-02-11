function org() {
  // 함수 호출
  const monthCharge = new ChargeCalculator(customer, usage, provider).charge;

  class ChargeCalculator {
    constructor(customer, usage, provider) {
      this._customer = customer;
      this._usage = usage;
      this._provider = provider;
    }
    get baseCharge() {
      return this._customer.baseRate * this._usage;
    }
    get charge() {
      return this.baseCharge + this._provider.connectionCharge;
    }
  }
}

function refactor_01() {
  const monthCharge = charge(customer, usage, provider);

  function charge(customer, usage, provider) {
    return new ChargeCalculator(customer, usage, provider).charge;
  }

  class ChargeCalculator {
    constructor(customer, usage, provider) {
      this._customer = customer;
      this._usage = usage;
      this._provider = provider;
    }
    get baseCharge() {
      return this._customer.baseRate * this._usage;
    }
    get charge() {
      // 변수 추출
      return this.baseCharge + this._provider.connectionCharge;
    }
  }
}

function refactor_01() {
  const monthCharge = charge(customer, usage, provider);

  function charge(customer, usage, provider) {
    return new ChargeCalculator(customer, usage, provider).charge;
  }

  class ChargeCalculator {
    constructor(customer, usage, provider) {
      this._customer = customer;
      this._usage = usage;
      this._provider = provider;
    }
    get baseCharge() {
      return this._customer.baseRate * this._usage;
    }
    get charge() {
      // 인라인
      const baseCharge = this.baseCharge;
      return baseCharge + this._provider.connectionCharge;
    }
  }
}

function refactor_02() {
  const monthCharge = charge(customer, usage, provider);

  function charge(customer, usage, provider) {
    return new ChargeCalculator(customer, usage, provider).charge;
  }

  class ChargeCalculator {
    constructor(customer, usage, provider) {
      this._customer = customer;
      this._usage = usage;
      this._provider = provider;
    }
    // 함수선언 바꾸기
    get charge() {
      const baseCharge = this._customer.baseRate * this._usage;
      return baseCharge + this._provider.connectionCharge;
    }
  }
}

function refactor_03() {
  const monthCharge = charge(customer, usage, provider);

  function charge(customer, usage, provider) {
    return new ChargeCalculator(customer, usage, provider).charge(customer, usage, provider);
  }

  class ChargeCalculator {
    // 하나씩 매개변수 제거
    constructor(customer, usage, provider) {
      this._customer = customer;
      this._usage = usage;
      this._provider = provider;
    }
    charge(customer, usage, provider) {
      const baseCharge = this._customer.baseRate * this._usage;
      return baseCharge + this._provider.connectionCharge;
    }
  }
}

function refactor_04() {
  const monthCharge = charge(customer, usage, provider);

  function charge(customer, usage, provider) {
    return new ChargeCalculator(usage, provider).charge(customer, usage, provider);
  }

  class ChargeCalculator {
    // 모두 매개변수 제거
    constructor(usage, provider) {
      this._usage = usage;
      this._provider = provider;
    }
    charge(customer, usage, provider) {
      const baseCharge = customer.baseRate * this._usage;
      return baseCharge + this._provider.connectionCharge;
    }
  }
}

function refactor_05() {
  const monthCharge = charge(customer, usage, provider);

  function charge(customer, usage, provider) {
    // 인라인
    return new ChargeCalculator().charge(customer, usage, provider);
  }

  class ChargeCalculator {
    charge(customer, usage, provider) {
      const baseCharge = customer.baseRate * usage;
      return baseCharge + provider.connectionCharge;
    }
  }
}

function refactor_06() {
  const monthCharge = charge(customer, usage, provider);

  function charge(customer, usage, provider) {
    const baseCharge = customer.baseRate * usage;
    return baseCharge + provider.connectionCharge;
  }
}
