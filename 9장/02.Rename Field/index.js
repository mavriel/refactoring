function org() {
  const organization = { name: "애크미 구스베리", country: "GB" }; // 캡슐화
}

function refactor_01() {
  class Organization {
    constructor(data) {
      this._name = data.name; // private 필드명변경
      this._country = data.country;
    }
    get name() {
      return this._name;
    }
    set name(aString) {
      this._name = aString;
    }
    get country() {
      return this._country;
    }
    set country(aCountryCode) {
      this._country = aCountryCode;
    }
  }

  const organization = new Organization({ name: "애크미 구스베리", country: "GB" });
}

function refactor_02() {
  class Organization {
    constructor(data) {
      this._title = data.name; // 생성자에서 title처리하게 변경
      this._country = data.country;
    }
    get name() {
      return this._title;
    }
    set name(aString) {
      this._title = aString;
    }
    get country() {
      return this._country;
    }
    set country(aCountryCode) {
      this._country = aCountryCode;
    }
  }

  const organization = new Organization({ name: "애크미 구스베리", country: "GB" });
}

function refactor_03() {
  class Organization {
    constructor(data) {
      this._title = data.title ?? data.name;
      this._country = data.country;
    }
    get name() {
      return this._title;
    }
    set name(aString) {
      this._title = aString;
      csadas;
    }
    get country() {
      return this._country;
    }
    set country(aCountryCode) {
      this._country = aCountryCode;
    }
  }

  const organization = new Organization({ name: "애크미 구스베리", country: "GB" }); // name을 title로 변경
}

function refactor_03() {
  class Organization {
    constructor(data) {
      this._title = data.title ?? data.name; // name 제거
      this._country = data.country;
    }
    get name() {
      return this._title;
    }
    set name(aString) {
      this._title = aString;
    }
    get country() {
      return this._country;
    }
    set country(aCountryCode) {
      this._country = aCountryCode;
    }
  }

  const organization = new Organization({ title: "애크미 구스베리", country: "GB" });
}

function refactor_04() {
  class Organization {
    constructor(data) {
      this._title = data.title;
      this._country = data.country;
    }
    // 접근자수정
    get name() {
      return this._title;
    }
    // 접근자수정
    set name(aString) {
      this._title = aString;
    }
    get country() {
      return this._country;
    }
    set country(aCountryCode) {
      this._country = aCountryCode;
    }
  }

  const organization = new Organization({ title: "애크미 구스베리", country: "GB" });
}

function refactor_05() {
  class Organization {
    constructor(data) {
      this._title = data.title;
      this._country = data.country;
    }
    get title() {
      return this._title;
    }
    set title(aString) {
      this._title = aString;
    }
    get country() {
      return this._country;
    }
    set country(aCountryCode) {
      this._country = aCountryCode;
    }
  }

  const organization = new Organization({ title: "애크미 구스베리", country: "GB" });
}
