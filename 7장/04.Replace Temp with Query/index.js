function org() {
  class Order {
    constructor(quantity, item) {
      this._quantity = quantity;
      this._item = item;
    }
    get price() {
      var basePrice = this._quantity * this._item.price;
      var discountFactor = 0.98;
      if (basePrice > 1000) {
        discountFactor -= 0.03;
      }
      return basePrice * discountFactor;
    }
  }
}

function 읽기전용만들기() {
  class Order {
    constructor(quantity, item) {
      this._quantity = quantity;
      this._item = item;
    }
    get price() {
      const basePrice = this._quantity * this._item.price;
      var discountFactor = 0.98;
      if (basePrice > 1000) {
        discountFactor -= 0.03;
      }
      return basePrice * discountFactor;
    }
  }
}

function 게터추출() {
  class Order {
    constructor(quantity, item) {
      this._quantity = quantity;
      this._item = item;
    }
    get price() {
      const basePrice = this.basePrice;
      var discountFactor = 0.98;
      if (basePrice > 1000) {
        discountFactor -= 0.03;
      }
      return basePrice * discountFactor;
    }
    get basePrice() {
      return this._quantity * this._item.price;
    }
  }
}

function 인라인() {
  class Order {
    constructor(quantity, item) {
      this._quantity = quantity;
      this._item = item;
    }
    get price() {
      var discountFactor = 0.98;
      if (this.basePrice > 1000) {
        discountFactor -= 0.03;
      }
      return this.basePrice * discountFactor;
    }
    get basePrice() {
      return this._quantity * this._item.price;
    }
  }
}

function 함수추출() {
  class Order {
    constructor(quantity, item) {
      this._quantity = quantity;
      this._item = item;
    }
    get price() {
      const discountFactor = this.discountFactor;
      return this.basePrice * discountFactor;
    }
    get discountFactor() {
      var discountFactor = 0.98;
      if (this.basePrice > 1000) {
        discountFactor -= 0.03;
      }
      return discountFactor;
    }
    get basePrice() {
      return this._quantity * this._item.price;
    }
  }
}

function 인라인() {
  class Order {
    constructor(quantity, item) {
      this._quantity = quantity;
      this._item = item;
    }
    get price() {
      return this.basePrice * this.discountFactor;
    }
    get discountFactor() {
      var discountFactor = 0.98;
      if (this.basePrice > 1000) {
        discountFactor -= 0.03;
      }
      return discountFactor;
    }
    get basePrice() {
      return this._quantity * this._item.price;
    }
  }
}
