class Customer {
  applyDiscount(aNumber) {
    // 할인율이 항상 양수라는 가정이 되어 있음
    // 3항 표현식을 if문으로 변경
    return this.discountRate ? aNumber - this.discountRate * aNumber : aNumber;
  }
}

class Customer_01 {
  applyDiscount(aNumber) {
    if (!this.discountRate) {
      return aNumber;
    } else {
      // 어서션 추가
      return aNumber - this.discountRate * aNumber;
    }
  }
}

class Customer_02 {
  applyDiscount(aNumber) {
    if (!this.discountRate) {
      return aNumber;
    } else {
      assert(this.discountRate >= 0); // 어서션을 세터 메서드로 이동
      return aNumber - this.discountRate * aNumber;
    }
  }
}

class Customer_03 {
  set discountRate(aNumber) {
    assert(null === aNumber || aNumber >= 0);
    this._discountRate = aNumber;
  }

  applyDiscount(aNumber) {
    if (!this.discountRate) {
      return aNumber;
    } else {
      return aNumber - this.discountRate * aNumber;
    }
  }
}
