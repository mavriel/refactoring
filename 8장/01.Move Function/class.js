function org() {
  class Account {
    get bankCharge() {
      let result = 4.5;
      if (this.daysOverdrawn > 0) {
        result += this.overdraftCharge;
      }
      return result;
    }

    // 신규 클래스로 이동
    get overdraftCharge() {
      if (this.type.isPremium) {
        const baseCharge = 10;
        if (this.daysOverdrawn <= 7) {
          return baseCharge;
        } else {
          return baseCharge + (this.daysOverdrawn - 7) * 0.85;
        }
      } else {
        return this.daysOverdrawn * 1.75;
      }
    }
  }
}

function refactor_01() {
  class Account {
    get bankCharge() {
      let result = 4.5;
      if (this.daysOverdrawn > 0) {
        result += this.overdraftCharge;
      }
      return result;
    }

    // 위임 시킨다
    get overdraftCharge() {
      if (this.type.isPremium) {
        const baseCharge = 10;
        if (this.daysOverdrawn <= 7) {
          return baseCharge;
        } else {
          return baseCharge + (this.daysOverdrawn - 7) * 0.85;
        }
      } else {
        return this.daysOverdrawn * 1.75;
      }
    }
  }

  class AccountType {
    overdraftCharge(daysOverdrawn) {
      if (this.isPremium) {
        const baseCharge = 10;
        if (daysOverdrawn <= 7) {
          return baseCharge;
        } else {
          return baseCharge + (daysOverdrawn - 7) * 0.85;
        }
      } else {
        return daysOverdrawn * 1.75;
      }
    }
  }
}

function refactor_02() {
  class Account {
    get bankCharge() {
      let result = 4.5;
      if (this.daysOverdrawn > 0) {
        result += this.overdraftCharge; // 인라인
      }
      return result;
    }

    get overdraftCharge() {
      return this.type.overdraftCharge(this.daysOverdrawn);
    }
  }

  class AccountType {
    overdraftCharge(daysOverdrawn) {
      if (this.isPremium) {
        const baseCharge = 10;
        if (daysOverdrawn <= 7) {
          return baseCharge;
        } else {
          return baseCharge + (daysOverdrawn - 7) * 0.85;
        }
      } else {
        return daysOverdrawn * 1.75;
      }
    }
  }
}

function refactor_03() {
  class Account {
    get bankCharge() {
      let result = 4.5;
      if (this.daysOverdrawn > 0) {
        result += this.type.overdraftCharge(this.daysOverdrawn);
      }
      return result;
    }
  }

  class AccountType {
    overdraftCharge(daysOverdrawn) {
      if (this.isPremium) {
        const baseCharge = 10;
        if (daysOverdrawn <= 7) {
          return baseCharge;
        } else {
          return baseCharge + (daysOverdrawn - 7) * 0.85;
        }
      } else {
        return daysOverdrawn * 1.75;
      }
    }
  }
}
