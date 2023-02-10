function org() {
  const candidate = new Employee(document.name, document.empType);
  const leadEngineer = new Employee(document.leadEngineer, "E");

  // 팩토리 함수 생성

  class Employee {
    constructor(name, typeCode) {
      this._name = name;
      this._typeCode = typeCode;
    }

    get name() {
      return this._name;
    }
    get type() {
      return Employee.legalTypeCodes[this._typeCode];
    }
    static get legalTypeCodes() {
      return {
        E: "Engineer",
        M: "Manager",
        S: "Salesperson",
      };
    }
  }
}

function refactor_01() {
  // 호출자 변경
  const candidate = new Employee(document.name, document.empType);
  const leadEngineer = new Employee(document.leadEngineer, "E");

  function createEmployee(name, typeCode) {
    return new Employee(name, typeCode);
  }

  class Employee {
    constructor(name, typeCode) {
      this._name = name;
      this._typeCode = typeCode;
    }

    get name() {
      return this._name;
    }
    get type() {
      return Employee.legalTypeCodes[this._typeCode];
    }
    static get legalTypeCodes() {
      return {
        E: "Engineer",
        M: "Manager",
        S: "Salesperson",
      };
    }
  }
}

function refactor_02() {
  const candidate = createEmployee(document.name, document.empType);
  // E의 의미를 알수 없으니깐 좀더 강화
  const leadEngineer = createEmployee(document.leadEngineer, "E");

  function createEmployee(name, typeCode) {
    return new Employee(name, typeCode);
  }

  class Employee {
    constructor(name, typeCode) {
      this._name = name;
      this._typeCode = typeCode;
    }

    get name() {
      return this._name;
    }
    get type() {
      return Employee.legalTypeCodes[this._typeCode];
    }
    static get legalTypeCodes() {
      return {
        E: "Engineer",
        M: "Manager",
        S: "Salesperson",
      };
    }
  }
}

function refactor_03() {
  const candidate = createEmployee(document.name, document.empType);
  const leadEngineer = createEngineer(document.leadEngineer);

  function createEngineer(name) {
    return createEmployee(name, "E");
  }

  function createEmployee(name, typeCode) {
    return new Employee(name, typeCode);
  }

  class Employee {
    constructor(name, typeCode) {
      this._name = name;
      this._typeCode = typeCode;
    }

    get name() {
      return this._name;
    }
    get type() {
      return Employee.legalTypeCodes[this._typeCode];
    }
    static get legalTypeCodes() {
      return {
        E: "Engineer",
        M: "Manager",
        S: "Salesperson",
      };
    }
  }
}
