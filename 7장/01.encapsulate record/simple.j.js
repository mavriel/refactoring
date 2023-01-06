function org() {
  const organization = { name: "애크미 구스베리", country: "GB" };

  result += `<h1>${organization.name}</h1>`;
  organization.name = newName;
}

function _01_상수캡슐화() {
  const organization = { name: "애크미 구스베리", country: "GB" };

  function getRawDataOfOrganization() {
    return organization;
  }

  result += `<h1>${getRawDataOfOrganization().name}</h1>`;
  getRawDataOfOrganization().name = newName;
}

function _02_클래스생성_04_인스턴스반환() {
  class Organization {
    constructor(data) {
      this._data = data;
    }
  }

  const organization = new Organization({ name: "애크미 구스베리", country: "GB" });

  function getRawDataOfOrganization() {
    return organization._data;
  }
  function getOrganization() {
    return organization;
  }

  result += `<h1>${getRawDataOfOrganization().name}</h1>`;
  getRawDataOfOrganization().name = newName;
}

function _05_세터_게터적용() {
  class Organization {
    constructor(data) {
      this._data = data;
    }
    set name(aString) {
      this._data.name = aString;
    }
    get name() {
      return this._data.name;
    }
  }

  const organization = new Organization({ name: "애크미 구스베리", country: "GB" });

  function getRawDataOfOrganization() {
    return organization._data;
  }
  function getOrganization() {
    return organization;
  }

  result += `<h1>${getOrganization().name}</h1>`;
  getOrganization().name = newName;
}

function _06_임시함수제거() {
  class Organization {
    constructor(data) {
      this._data = data;
    }
    set name(aString) {
      this._data.name = aString;
    }
    get name() {
      return this._data.name;
    }
  }

  const organization = new Organization({ name: "애크미 구스베리", country: "GB" });

  function getOrganization() {
    return organization;
  }

  result += `<h1>${getOrganization().name}</h1>`;
  getOrganization().name = newName;
}

function 클래스정리() {
  class Organization {
    constructor(data) {
      this._name = data.name;
      this._country = data.country;
    }
    set name(aString) {
      this._name = aString;
    }
    get name() {
      return this._name;
    }
    set country(aString) {
      this._country = aString;
    }
    get country() {
      return this._country;
    }
  }

  const organization = new Organization({ name: "애크미 구스베리", country: "GB" });

  function getOrganization() {
    return organization;
  }

  result += `<h1>${getOrganization().name}</h1>`;
  getOrganization().name = newName;
}
