function org() {
  class Person {
    get manager() {
      return this._department.manager;
    }
  }

  class Department {
    get manager() {
      return this._manager;
    }
  }

  manager = aPerson.manager;
}

function _01_게터생성() {
  class Person {
    get manager() {
      return this._department.manager;
    }
    get deparment() {
      return this._department;
    }
  }

  class Department {
    get manager() {
      return this._manager;
    }
  }

  manager = aPerson.manager;
}

function _02_클라이언트가_게터사용() {
  class Person {
    get manager() {
      return this._department.manager;
    }
    get deparment() {
      return this._department;
    }
  }

  class Department {
    get manager() {
      return this._manager;
    }
  }

  manager = aPerson.deparment.manager;
}

function _03_위임메서드_삭제() {
  class Person {
    get deparment() {
      return this._department;
    }
  }

  class Department {
    get manager() {
      return this._manager;
    }
  }

  manager = aPerson.deparment.manager;
}
