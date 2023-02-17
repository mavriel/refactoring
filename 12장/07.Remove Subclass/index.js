function org() {
  class Person {
    constructor(name) {
      this._name = name;
    }
    get name() {
      return this._name;
    }
    get genderCode() {
      return "X";
    }
  }

  class Male extends Person {
    get genderCode() {
      return "M";
    }
  }

  class Female extends Person {
    get genderCode() {
      return "F";
    }
  }

  const numberOfMales = people.filter((p) => p instanceof Male).length;

  function loadFromInput(data) {
    const result = [];
    data.forEach((aRecord) => {
      let p;
      switch (aRecord.gender) {
        case "M":
          p = new Male(aRecord.name);
          break;
        case "F":
          p = new Female(aRecord.name);
          break;
        default:
          p = new Person(aRecord.anme);
      }
      result.push(p);
    });
    return result;
  }

  // 팩토리 메서드 생성
}

function refactor_01() {
  class Person {
    constructor(name) {
      this._name = name;
    }
    get name() {
      return this._name;
    }
    get genderCode() {
      return "X";
    }
  }

  class Male extends Person {
    get genderCode() {
      return "M";
    }
  }

  class Female extends Person {
    get genderCode() {
      return "F";
    }
  }

  // 타입검사 코드 함수 추출
  const numberOfMales = people.filter((p) => p instanceof Male).length;

  function loadFromInput(data) {
    const result = [];
    data.map((aRecord) => createPerson(aRecord));
    return result;
  }

  function createPerson(aRecord) {
    let p;
    switch (aRecord.gender) {
      case "M":
        p = new Male(aRecord.name);
        break;
      case "F":
        p = new Female(aRecord.name);
        break;
      default:
        p = new Person(aRecord.name);
    }
    return p;
  }

  function createMale(name) {
    return new Male(name);
  }
  function createFemale(name) {
    return new Female(name);
  }
}

function refactor_02() {
  class Person {
    // 타입필드 생성자에 추가
    constructor(name) {
      this._name = name;
    }
    get name() {
      return this._name;
    }
    get genderCode() {
      return "X";
    }

    get isMale() {
      return this instanceof Male;
    }
  }

  class Male extends Person {
    get genderCode() {
      return "M";
    }
  }

  class Female extends Person {
    get genderCode() {
      return "F";
    }
  }

  const numberOfMales = people.filter((p) => p.isMale).length;

  function loadFromInput(data) {
    const result = [];
    data.map((aRecord) => createPerson(aRecord));
    return result;
  }

  function createPerson(aRecord) {
    let p;
    switch (aRecord.gender) {
      case "M":
        p = new Male(aRecord.name);
        break;
      case "F":
        p = new Female(aRecord.name);
        break;
      default:
        p = new Person(aRecord.name);
    }
    return p;
  }

  function createMale(name) {
    return new Male(name);
  }
  function createFemale(name) {
    return new Female(name);
  }
}

function refactor_03() {
  class Person {
    constructor(name, genderCode) {
      this._name = name;
      this._genderCode = genderCode || "X";
    }
    get name() {
      return this._name;
    }
    get genderCode() {
      return this._genderCode;
    }

    get isMale() {
      return this instanceof Male;
    }
  }

  class Male extends Person {
    get genderCode() {
      return "M";
    }
  }

  class Female extends Person {
    get genderCode() {
      return "F";
    }
  }

  const numberOfMales = people.filter((p) => p.isMale).length;

  function loadFromInput(data) {
    const result = [];
    data.map((aRecord) => createPerson(aRecord));
    return result;
  }

  function createPerson(aRecord) {
    let p;
    switch (aRecord.gender) {
      case "M":
        // 남성을 슈퍼 클래스로 이동
        p = new Male(aRecord.name);
        break;
      case "F":
        p = new Female(aRecord.name);
        break;
      default:
        p = new Person(aRecord.name);
    }
    return p;
  }

  function createMale(name) {
    return new Male(name);
  }
  function createFemale(name) {
    return new Female(name);
  }
}

function refactor_04() {
  // 나머지도 수정 후 일관되게 코드 수정
  class Person {
    constructor(name, genderCode) {
      this._name = name;
      this._genderCode = genderCode || "X";
    }
    get name() {
      return this._name;
    }
    get genderCode() {
      return this._genderCode;
    }

    get isMale() {
      return "M" === this._genderCode;
    }
  }

  class Female extends Person {
    get genderCode() {
      return "F";
    }
  }

  const numberOfMales = people.filter((p) => p.isMale).length;

  function loadFromInput(data) {
    const result = [];
    data.map((aRecord) => createPerson(aRecord));
    return result;
  }

  function createPerson(aRecord) {
    let p;
    switch (aRecord.gender) {
      case "M":
        p = new Person(aRecord.name, "M");
        break;
      case "F":
        p = new Female(aRecord.name);
        break;
      default:
        p = new Person(aRecord.name);
    }
    return p;
  }
}

function refactor_05() {
  class Person {
    constructor(name, genderCode) {
      this._name = name;
      this._genderCode = genderCode;
    }
    get name() {
      return this._name;
    }
    get genderCode() {
      return this._genderCode;
    }

    get isMale() {
      return "M" === this._genderCode;
    }
  }

  const numberOfMales = people.filter((p) => p.isMale).length;

  function loadFromInput(data) {
    const result = [];
    data.map((aRecord) => createPerson(aRecord));
    return result;
  }

  function createPerson(aRecord) {
    let p;
    switch (aRecord.gender) {
      case "M":
        p = new Person(aRecord.name, "M");
        break;
      case "F":
        p = new Person(aRecord.name, "F");
        break;
      default:
        p = new Person(aRecord.name, "X");
    }
    return p;
  }
}
