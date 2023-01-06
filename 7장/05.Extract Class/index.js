function org() {
  class Person {
    get name() {
      return this._name;
    }
    set name(arg) {
      this._name = arg;
    }
    get telephoneNumber() {
      return `${this.officeAreaCode} ${this.officeNumber}`;
    }
    get officeAreaCode() {
      return this._officeAreaCode;
    }
    set officeAreaCode(arg) {
      this._officeAreaCode = arg;
    }
    get officeNumber() {
      return this._officeNumber;
    }
    set officeNumber(arg) {
      this._officeNumber = arg;
    }
  }
}

function 전화번호_클래스_정의_및_인스턴스생성() {
  class TelephoneNumber {}

  class Person {
    constructor() {
      this._telephoneNumber = new TelephoneNumber();
    }
    get name() {
      return this._name;
    }
    set name(arg) {
      this._name = arg;
    }
    get telephoneNumber() {
      return `${this.officeAreaCode} ${this.officeNumber}`;
    }
    get officeAreaCode() {
      return this._officeAreaCode;
    }
    set officeAreaCode(arg) {
      this._officeAreaCode = arg;
    }
    get officeNumber() {
      return this._officeNumber;
    }
    set officeNumber(arg) {
      this._officeNumber = arg;
    }
  }
}

function officeAreaCode_이동() {
  class TelephoneNumber {
    get officeAreaCode() {
      return this._officeAreaCode;
    }
    set officeAreaCode(arg) {
      this._officeAreaCode = arg;
    }
  }

  class Person {
    constructor() {
      this._telephoneNumber = new TelephoneNumber();
    }
    get name() {
      return this._name;
    }
    set name(arg) {
      this._name = arg;
    }
    get telephoneNumber() {
      return `${this.officeAreaCode} ${this.officeNumber}`;
    }
    get officeAreaCode() {
      return this._telephoneNumber.officeAreaCode;
    }
    set officeAreaCode(arg) {
      this._telephoneNumber.officeAreaCode = arg;
    }
    get officeNumber() {
      return this._officeNumber;
    }
    set officeNumber(arg) {
      this._officeNumber = arg;
    }
  }
}

function officeNumber_이동() {
  class TelephoneNumber {
    get officeAreaCode() {
      return this._officeAreaCode;
    }
    set officeAreaCode(arg) {
      this._officeAreaCode = arg;
    }
    get officeNumber() {
      return this._officeNumber;
    }
    set officeNumber(arg) {
      this._officeNumber = arg;
    }
  }

  class Person {
    constructor() {
      this._telephoneNumber = new TelephoneNumber();
    }
    get name() {
      return this._name;
    }
    set name(arg) {
      this._name = arg;
    }
    get telephoneNumber() {
      return `${this.officeAreaCode} ${this.officeNumber}`;
    }
    get officeAreaCode() {
      return this._telephoneNumber.officeAreaCode;
    }
    set officeAreaCode(arg) {
      this._telephoneNumber.officeAreaCode = arg;
    }
    get officeNumber() {
      return this._telephoneNumber.officeNumber;
    }
    set officeNumber(arg) {
      this._telephoneNumber.officeNumber = arg;
    }
  }
}

function telephoneNumber_이동() {
  class TelephoneNumber {
    get telephoneNumber() {
      return `${this.officeAreaCode} ${this.officeNumber}`;
    }
    get officeAreaCode() {
      return this._officeAreaCode;
    }
    set officeAreaCode(arg) {
      this._officeAreaCode = arg;
    }
    get officeNumber() {
      return this._officeNumber;
    }
    set officeNumber(arg) {
      this._officeNumber = arg;
    }
  }

  class Person {
    constructor() {
      this._telephoneNumber = new TelephoneNumber();
    }
    get name() {
      return this._name;
    }
    set name(arg) {
      this._name = arg;
    }
    get telephoneNumber() {
      return this._telephoneNumber.telephoneNumber;
    }
    get officeAreaCode() {
      return this._telephoneNumber.officeAreaCode;
    }
    set officeAreaCode(arg) {
      this._telephoneNumber.officeAreaCode = arg;
    }
    get officeNumber() {
      return this._telephoneNumber.officeNumber;
    }
    set officeNumber(arg) {
      this._telephoneNumber.officeNumber = arg;
    }
  }
}

function 메서드_이름_변경() {
  class TelephoneNumber {
    toString() {
      return `${this.areaCode} ${this.number}`;
    }
    get areaCode() {
      return this._officeAreaCode;
    }
    set areaCode(arg) {
      this._officeAreaCode = arg;
    }
    get number() {
      return this._officeNumber;
    }
    set number(arg) {
      this._officeNumber = arg;
    }
  }

  class Person {
    constructor() {
      this._telephoneNumber = new TelephoneNumber();
    }
    get name() {
      return this._name;
    }
    set name(arg) {
      this._name = arg;
    }
    get telephoneNumber() {
      return this._telephoneNumber.toString();
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
}
