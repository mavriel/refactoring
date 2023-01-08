function org() {
  class Person {
    constructor(name) {
      this._name = name;
    }

    get name() {
      return this._name;
    }

    get department() {
      return this._department;
    }

    set department(arg) {
      this._department = arg;
    }
  }
  class Department {
    get chargeCode() {
      return this._chargeCode;
    }

    set chargeCode(arg) {
      this._chargeCode = arg;
    }

    get manager() {
      return this._manager;
    }

    set manager(arg) {
      this._manager = arg;
    }
  }

  manager = aPerson.department.manager;
}

function 위임메서드생성_01() {
  class Person {
    constructor(name) {
      this._name = name;
    }

    get name() {
      return this._name;
    }

    get department() {
      return this._department;
    }

    set department(arg) {
      this._department = arg;
    }

    get manager() {
      return this._department.manager;
    }
  }
  class Department {
    get chargeCode() {
      return this._chargeCode;
    }

    set chargeCode(arg) {
      this._chargeCode = arg;
    }

    get manager() {
      return this._manager;
    }

    set manager(arg) {
      this._manager = arg;
    }
  }

  manager = aPerson.department.manager;
}

function 클라이언트가위임메서드사용_02() {
  class Person {
    constructor(name) {
      this._name = name;
    }

    get name() {
      return this._name;
    }

    get department() {
      return this._department;
    }

    set department(arg) {
      this._department = arg;
    }

    get manager() {
      return this._department.manager;
    }
  }
  class Department {
    get chargeCode() {
      return this._chargeCode;
    }

    set chargeCode(arg) {
      this._chargeCode = arg;
    }

    get manager() {
      return this._manager;
    }

    set manager(arg) {
      this._manager = arg;
    }
  }

  manager = aPerson.manager;
}

function department접근자삭제_03() {
  class Person {
    constructor(name) {
      this._name = name;
    }

    get name() {
      return this._name;
    }

    set department(arg) {
      this._department = arg;
    }

    get manager() {
      return this._department.manager;
    }
  }
  class Department {
    get chargeCode() {
      return this._chargeCode;
    }

    set chargeCode(arg) {
      this._chargeCode = arg;
    }

    get manager() {
      return this._manager;
    }

    set manager(arg) {
      this._manager = arg;
    }
  }

  manager = aPerson.manager;
}
