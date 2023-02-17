function org() {
  // 타입코드를 객체로 바꾸기
  class Employee {
    constructor(name, type) {
      this.validateType(type);
      this._name = name;
      this._type = type;
    }
    validateType(arg) {
      if (!["engineer", "manager", "salesperson"].includes(arg)) {
        throw new Error(`${arg}라는 직원유형은 없습니다.`);
      }
    }
    get type() {
      return this._type;
    }
    set type(arg) {
      this._type = arg;
    }
    get capitalizedType() {
      return this._type.charAt(0).toUpperCase() + this._type.substr(1).toLowerCase();
    }
    toString() {
      return `${this._name} (${this.capitalizedType})`;
    }
  }
}

function refactor_02() {
  class Employee {
    constructor(name, type) {
      this.validateType(type);
      this._name = name;
      this._type = type;
    }
    validateType(arg) {
      if (!["engineer", "manager", "salesperson"].includes(arg)) {
        throw new Error(`${arg}라는 직원유형은 없습니다.`);
      }
    }
    get typeString() {
      return this._type.toString();
    }
    get type() {
      return this._type;
    }
    set type(arg) {
      this._type = new EmployeeType(arg);
    }
    get capitalizedType() {
      return this.typeString.charAt(0).toUpperCase() + this.typeString.substr(1).toLowerCase();
    }
    toString() {
      return `${this._name} (${this.capitalizedType})`;
    }
  }

  // 직원유형 클래스 추가
  class EmployeeType {
    constructor(aString) {
      this._value = aString;
    }
    toString() {
      return this._value;
    }
  }
}

function refactor_03() {
  class Employee {
    constructor(name, type) {
      this.validateType(type);
      this._name = name;
      this._type = type;
    }

    static createEmployee(aString) {
      switch (aString) {
        case "engineer":
          return new Engineer();
        case "manager":
          return new Manager();
        case "salesperson":
          return new Salesperson();
        default:
          throw new Error(`${arg}라는 직원유형은 없습니다.`);
      }
    }

    get typeString() {
      return this._type.toString();
    }
    get type() {
      return this._type;
    }
    set type(arg) {
      this._type = Employee.createEmployee(arg);
    }
    get capitalizedType() {
      return this.typeString.charAt(0).toUpperCase() + this.typeString.substr(1).toLowerCase();
    }
    toString() {
      return `${this._name} (${this.capitalizedType})`;
    }
  }

  class EmployeeType {
    constructor(aString) {
      this._value = aString;
    }
    toString() {
      return this._value;
    }
  }

  class Engineer extends EmployeeType {
    toString() {
      return "engineer";
    }
  }
  class Manager extends EmployeeType {
    toString() {
      return "manager";
    }
  }
  class Salesperson extends EmployeeType {
    toString() {
      return "salesperson";
    }
  }
}
