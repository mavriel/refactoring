function org() {
  class Party {}

  class Employee extends Party {
    constructor(name, id, monthlyCost) {
      super();
      this._id = id;
      this._name = name; // 문장슬라이드로 super바로 아래로 이동
      this._monthlyCost = monthlyCost;
    }
  }

  class Department extends Party {
    constructor(name, staff) {
      super();
      this._name = name;
      this._staff = staff;
    }
  }
}

function refactor_01() {
  class Party {}

  class Employee extends Party {
    constructor(name, id, monthlyCost) {
      super();
      this._name = name; // 슈퍼클래스로 이동
      this._id = id;
      this._monthlyCost = monthlyCost;
    }
  }

  class Department extends Party {
    constructor(name, staff) {
      super();
      this._name = name; // 슈퍼클래스로 이동
      this._staff = staff;
    }
  }
}

function refactor_02() {
  class Party {
    constructor(name) {
      this._name = name;
    }
  }

  class Employee extends Party {
    constructor(name, id, monthlyCost) {
      super(name);
      this._id = id;
      this._monthlyCost = monthlyCost;
    }
  }

  class Department extends Party {
    constructor(name, staff) {
      super(name);
      this._staff = staff;
    }
  }
}
