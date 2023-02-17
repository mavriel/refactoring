function org() {
  class Employee {
    constructor(name) {}
    get isPrivileged() {}
    assignCar() {}
  }

  class Manager extends Employee {
    constructor(name, grade) {
      super(name);
      this._grade = grade;
      // 공통코드 함수로 추출
      if (this.isPrivileged) this.assignCar(); // 모든 서브클래스가 수행
    }
    get isPrivileged() {
      return this._grade > 4;
    }
  }
}

function refactor_01() {
  class Employee {
    constructor(name) {}
    get isPrivileged() {}
    assignCar() {}
  }

  class Manager extends Employee {
    constructor(name, grade) {
      super(name);
      this._grade = grade;
      this.finishConstruction();
    }

    // 슈퍼클래스로 이동
    finishConstruction() {
      if (this.isPrivileged) this.assignCar();
    }

    get isPrivileged() {
      return this._grade > 4;
    }
  }
}

function refactor_02() {
  class Employee {
    constructor(name) {}
    get isPrivileged() {}
    assignCar() {}

    finishConstruction() {
      if (this.isPrivileged) this.assignCar();
    }
  }

  class Manager extends Employee {
    constructor(name, grade) {
      super(name);
      this._grade = grade;
      this.finishConstruction();
    }

    get isPrivileged() {
      return this._grade > 4;
    }
  }
}
