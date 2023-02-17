function org() {
  class Employee {
    constructor(name, type) {
      this.validateType(type);
      this._name = name;
      this._type = type;
    }
    // 타입코드 변수를 자가 캡슐화
    validateType(arg) {
      if (!["engineer", "manager", "salesperson"].includes(arg)) {
        throw new Error(`${arg}라는 직원유형은 없습니다.`);
      }
    }
    toString() {
      return `${this._name} (${this._type})`;
    }
  }
}

function refactor_01() {
  class Employee {
    constructor(name, type) {
      this.validateType(type);
      this._name = name;
      this._type = type;
    }
    get type() {
      return this._type;
    }
    validateType(arg) {
      if (!["engineer", "manager", "salesperson"].includes(arg)) {
        throw new Error(`${arg}라는 직원유형은 없습니다.`);
      }
    }
    toString() {
      return `${this._name} (${this.type})`;
    }
  }
  // Engineer 클래스 추가
}

function refactor_02() {
  // 팩토리함수 추가
  class Employee {
    constructor(name, type) {
      this.validateType(type);
      this._name = name;
      this._type = type;
    }
    get type() {
      return this._type;
    }
    validateType(arg) {
      if (!["engineer", "manager", "salesperson"].includes(arg)) {
        throw new Error(`${arg}라는 직원유형은 없습니다.`);
      }
    }
    toString() {
      return `${this._name} (${this.type})`;
    }
  }

  class Engineer extends Employee {
    get type() {
      return "engineer";
    }
  }
}

function refactor_03() {
  // 서브클래스 선택 로직 추가
  function createEmployee(name, type) {
    return new Employee(name, type);
  }
  class Employee {
    constructor(name, type) {
      this.validateType(type);
      this._name = name;
      this._type = type;
    }
    get type() {
      return this._type;
    }
    validateType(arg) {
      if (!["engineer", "manager", "salesperson"].includes(arg)) {
        throw new Error(`${arg}라는 직원유형은 없습니다.`);
      }
    }
    toString() {
      return `${this._name} (${this.type})`;
    }
  }

  class Engineer extends Employee {
    get type() {
      return "engineer";
    }
  }
}

function refactor_04() {
  // 나머지 클래스 추가 및 팩토리 수정
  function createEmployee(name, type) {
    switch (type) {
      case "engineer":
        return new Engineer(name, type);
    }
    return new Employee(name, type);
  }
  class Employee {
    constructor(name, type) {
      this.validateType(type);
      this._name = name;
      this._type = type;
    }
    get type() {
      return this._type;
    }
    validateType(arg) {
      if (!["engineer", "manager", "salesperson"].includes(arg)) {
        throw new Error(`${arg}라는 직원유형은 없습니다.`);
      }
    }
    toString() {
      return `${this._name} (${this.type})`;
    }
  }

  class Engineer extends Employee {
    get type() {
      return "engineer";
    }
  }
}

function refactor_05() {
  function createEmployee(name, type) {
    switch (type) {
      case "engineer":
        return new Engineer(name, type);
      case "manager":
        return new Manager(name, type);
      case "salesperson":
        return new Salesperson(name, type);
    }
    return new Employee(name, type);
  }
  // 슈퍼클래스의 타입코드 제거
  class Employee {
    constructor(name, type) {
      this.validateType(type);
      this._name = name;
      this._type = type;
    }
    get type() {
      return this._type;
    }
    validateType(arg) {
      if (!["engineer", "manager", "salesperson"].includes(arg)) {
        throw new Error(`${arg}라는 직원유형은 없습니다.`);
      }
    }
    toString() {
      return `${this._name} (${this.type})`;
    }
  }

  class Engineer extends Employee {
    get type() {
      return "engineer";
    }
  }

  class Manager extends Employee {
    get type() {
      return "manager";
    }
  }

  class Salesperson extends Employee {
    get type() {
      return "salesperson";
    }
  }
}

function refactor_06() {
  // 검증 로직 제거 및 불필요 필드 제거
  function createEmployee(name, type) {
    switch (type) {
      case "engineer":
        return new Engineer(name, type);
      case "manager":
        return new Manager(name, type);
      case "salesperson":
        return new Salesperson(name, type);
    }
    return new Employee(name, type);
  }
  class Employee {
    constructor(name, type) {
      this.validateType(type);
      this._name = name;
    }
    validateType(arg) {
      if (!["engineer", "manager", "salesperson"].includes(arg)) {
        throw new Error(`${arg}라는 직원유형은 없습니다.`);
      }
    }
    toString() {
      return `${this._name} (${this.type})`;
    }
  }

  class Engineer extends Employee {
    get type() {
      return "engineer";
    }
  }

  class Manager extends Employee {
    get type() {
      return "manager";
    }
  }

  class Salesperson extends Employee {
    get type() {
      return "salesperson";
    }
  }
}

function refactor_07() {
  function createEmployee(name, type) {
    switch (type) {
      case "engineer":
        return new Engineer(name);
      case "manager":
        return new Manager(name);
      case "salesperson":
        return new Salesperson(name);
      default:
        throw new Error(`${arg}라는 직원유형은 없습니다.`);
    }
  }
  class Employee {
    constructor(name) {
      this._name = name;
    }
    toString() {
      return `${this._name} (${this.type})`;
    }
  }

  class Engineer extends Employee {
    get type() {
      return "engineer";
    }
  }

  class Manager extends Employee {
    get type() {
      return "manager";
    }
  }

  class Salesperson extends Employee {
    get type() {
      return "salesperson";
    }
  }
}
