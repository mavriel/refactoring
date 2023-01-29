function org() {
  class Person {
    constructor() {
      this._telephoneNumber = new TelephoneNumber();
    }
    get officeAreaCode() {
      return this._telephoneNumber.areaCode;
    }
    set officeAreaCode(arg) {
      this._telephoneNumber.areaCode = arg;
    }
    get officeNumber() {
      return this._telephoneNumber.number;
    }
    set officeNumber(arg) {
      this._telephoneNumber.number = arg;
    }
  }

  class TelephoneNumber {
    // 생성자 추가
    get areaCode() {
      return this._areaCode;
    }
    set areaCode(arg) {
      this._areaCode = arg;
    }
    get number() {
      return this._number;
    }
    set number(arg) {
      this._number = arg;
    }
  }
}

function refactor_01() {
  class Person {
    constructor() {
      this._telephoneNumber = new TelephoneNumber();
    }
    get officeAreaCode() {
      return this._telephoneNumber.areaCode;
    }
    set officeAreaCode(arg) {
      this._telephoneNumber.areaCode = arg; // 세터 변경
    }
    get officeNumber() {
      return this._telephoneNumber.number;
    }
    set officeNumber(arg) {
      this._telephoneNumber.number = arg; // 세터 변경
    }
  }

  class TelephoneNumber {
    constructor(areaCode, number) {
      this._areaCode = areaCode;
      this._number = number;
    }
    get areaCode() {
      return this._areaCode;
    }
    set areaCode(arg) {
      this._areaCode = arg;
    }
    get number() {
      return this._number;
    }
    set number(arg) {
      this._number = arg;
    }
  }
}

function refactor_02() {
  class Person {
    constructor() {
      this._telephoneNumber = new TelephoneNumber();
    }
    get officeAreaCode() {
      return this._telephoneNumber.areaCode;
    }
    set officeAreaCode(arg) {
      this._telephoneNumber = new TelephoneNumber(arg, this.officeNumber);
    }
    get officeNumber() {
      return this._telephoneNumber.number;
    }
    set officeNumber(arg) {
      this._telephoneNumber = new TelephoneNumber(this.officeAreaCode, arg);
    }
  }

  class TelephoneNumber {
    constructor(areaCode, number) {
      this._areaCode = areaCode;
      this._number = number;
    }
    equals(other) {
      if (!(other instanceof TelephoneNumber)) return false;
      return this.areaCode === other.areaCode && this.number === other.number;
    }
    get areaCode() {
      return this._areaCode;
    }
    set areaCode(arg) {
      this._areaCode = arg;
    }
    get number() {
      return this._number;
    }
    set number(arg) {
      this._number = arg;
    }
  }
}
