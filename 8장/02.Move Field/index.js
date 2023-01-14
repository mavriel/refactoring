function org() {
  class Customer {
    constructor(name, discountRate) {
      this._name = name;
      this._discountRate = discountRate; // 캡슐화
      this._contract = new CustomerContract(dateToday());
    }
    get discountRate() {
      return this._discountRate;
    }
    becomePreferred() {
      this._discountRate += 0.03; // 캡슐화
    }
    applyDiscount(amount) {
      return amount.subtract(amount.multiply(this._discountRate)); // 캡슐화
    }
  }

  class CustomerContract {
    constructor(startDate) {
      this._startDate = startDate;
    }
  }
}

function refactor_01() {
  class Customer {
    constructor(name, discountRate) {
      this._name = name;
      this._setDiscountRate(discountRate);
      this._contract = new CustomerContract(dateToday());
    }

    _setDiscountRate(aNumber) {
      this._discountRate = aNumber;
    }
    get discountRate() {
      return this._discountRate;
    }
    becomePreferred() {
      this._setDiscountRate(this.discountRate + 0.03);
    }
    applyDiscount(amount) {
      return amount.subtract(amount.multiply(this.discountRate));
    }
  }

  class CustomerContract {
    constructor(startDate) {
      // 필드 추가
      this._startDate = startDate;
    }
  }
}

function refactor_02() {
  class Customer {
    constructor(name, discountRate) {
      this._name = name;
      this._contract = new CustomerContract(dateToday(), discountRate);
      this._setDiscountRate(discountRate);
    }

    _setDiscountRate(aNumber) {
      this._discountRate = aNumber; // 접근자수정
    }
    get discountRate() {
      return this._discountRate; // 접근자수정
    }
    becomePreferred() {
      this._setDiscountRate(this.discountRate + 0.03);
    }
    applyDiscount(amount) {
      return amount.subtract(amount.multiply(this.discountRate));
    }
  }

  class CustomerContract {
    constructor(startDate, discountRate) {
      this._startDate = startDate;
      this._discountRate = discountRate;
    }

    get discountRate() {
      return this._discountRate;
    }
    set discountRate(arg) {
      this._discountRate = arg;
    }
  }
}

function refactor_03() {
  class Customer {
    constructor(name, discountRate) {
      this._name = name;
      this._contract = new CustomerContract(dateToday(), discountRate);
      this._setDiscountRate(discountRate);
    }

    _setDiscountRate(aNumber) {
      this._contract.discountRate = aNumber;
    }
    get discountRate() {
      return this._contract.discountRate;
    }
    becomePreferred() {
      this._setDiscountRate(this.discountRate + 0.03);
    }
    applyDiscount(amount) {
      return amount.subtract(amount.multiply(this.discountRate));
    }
  }

  class CustomerContract {
    constructor(startDate, discountRate) {
      this._startDate = startDate;
      this._discountRate = discountRate;
    }

    get discountRate() {
      return this._discountRate;
    }
    set discountRate(arg) {
      this._discountRate = arg;
    }
  }
}
