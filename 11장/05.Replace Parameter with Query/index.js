function org() {
  class Order {
    get finalPrice() {
      const basePrice = this.quantity * this.itemPrice;
      // 임시변수를 질의함수로 바꾸기
      let discountLevel;

      if (this.quantity > 100) discountLevel = 2;
      else discountLevel = 1;

      return this.discountPrice(basePrice, discountLevel);
    }

    discountPrice(basePrice, discountLevel) {
      switch (discountLevel) {
        case 1:
          return basePrice * 0.95;
        case 2:
          return basePrice * 0.9;
      }
    }
  }
}

function refactor_01() {
  class Order {
    get finalPrice() {
      const basePrice = this.quantity * this.itemPrice;
      return this.discountPrice(basePrice, this.discountLevel);
    }

    // 함수 바꾸기
    discountPrice(basePrice, discountLevel) {
      switch (discountLevel) {
        case 1:
          return basePrice * 0.95;
        case 2:
          return basePrice * 0.9;
      }
    }

    get discountLevel() {
      if (this.quantity > 100) return 2;
      else return 1;
    }
  }
}

function refactor_01() {
  class Order {
    get finalPrice() {
      const basePrice = this.quantity * this.itemPrice;
      return this.discountPrice(basePrice);
    }

    discountPrice(basePrice) {
      switch (this.discountLevel) {
        case 1:
          return basePrice * 0.95;
        case 2:
          return basePrice * 0.9;
      }
    }

    get discountLevel() {
      if (this.quantity > 100) return 2;
      else return 1;
    }
  }
}
