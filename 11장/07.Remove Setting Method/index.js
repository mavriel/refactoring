function org() {
  // 생성자에서 ID 받도록 변경
  class Person {
    get name() {
      return this._name;
    }
    set name(arg) {
      this._name = arg;
    }
    get id() {
      return this._id;
    }
    set id(arg) {
      this._id = arg;
    }
  }

  const martin = new Person();
  martin.name = "마틴";
  martin.id = "1234";
}

function refactor_01() {
  class Person {
    constructor(id) {
      this.id = id;
    }

    get name() {
      return this._name;
    }
    set name(arg) {
      this._name = arg;
    }
    get id() {
      return this._id;
    }
    set id(arg) {
      this._id = arg;
    }
  }

  const martin = new Person();
  martin.name = "마틴";
  martin.id = "1234"; // 생성자로 사용
}

function refactor_02() {
  class Person {
    constructor(id) {
      this.id = id;
    }

    get name() {
      return this._name;
    }
    set name(arg) {
      this._name = arg;
    }
    get id() {
      return this._id;
    }
    // 세터 인라인
    set id(arg) {
      this._id = arg;
    }
  }

  const martin = new Person("1234");
  martin.name = "마틴";
}

function refactor_03() {
  class Person {
    constructor(id) {
      this._id = id;
    }

    get name() {
      return this._name;
    }
    set name(arg) {
      this._name = arg;
    }
    get id() {
      return this._id;
    }
  }

  const martin = new Person("1234");
  martin.name = "마틴";
}
