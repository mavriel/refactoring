function org() {
  class Party {}

  class Employee extends Party {
    get annualCost() {
      return this.monthlyCost * 12;
    }
  }

  class Department extends Party {
    // 함수선언 바꾸기
    get totalAnnualCost() {
      return this.monthlyCost * 12;
    }
  }
}

function refactor_01() {
  // 메서드 복사
  class Party {}

  class Employee extends Party {
    get annualCost() {
      return this.monthlyCost * 12;
    }
  }

  class Department extends Party {
    get annualCost() {
      return this.monthlyCost * 12;
    }
  }
}

function refactor_02() {
  class Party {
    get annualCost() {
      return this.monthlyCost * 12;
    }
  }

  // 서브클래스에서 함수 제거
  class Employee extends Party {
    get annualCost() {
      return this.monthlyCost * 12;
    }
  }

  class Department extends Party {
    get annualCost() {
      return this.monthlyCost * 12;
    }
  }
}

function refactor_03() {
  class Party {
    get annualCost() {
      return this.monthlyCost * 12;
    }
  }

  class Employee extends Party {}

  class Department extends Party {}
}
