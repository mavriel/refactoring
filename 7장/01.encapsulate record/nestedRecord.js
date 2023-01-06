const customerData = {
  1920: {
    name: "마틴 파울러",
    id: "1920",
    usages: { 2016: { 1: 50, 2: 55 /* 나머지 달(month) 생략 */ }, 2015: { 1: 70, 2: 63 /* 나머지 달(month) 생략 */ } },
    38673: { name: "닐 포드", id: "38673" /* 다른 고객 정보도 같은 포맷 */ },
  },
};

function org() {
  customerData[customID].usages[year][month] = amount;
  function compareUsage(customerID, lateYear, month) {
    const later = customerData[customerID].usages[lateYear][month];
    const earlier = customerData[customerID].usages[lateYear - 1][month];
    return { laterAmount: later, change: later - earlier };
  }
}

function 변수캡슐화() {
  function getRawDataOfCustomers() {
    return customerData;
  }
  function setRawDataOfCustomers(arg) {
    customerData = arg;
  }

  getRawDataOfCustomers()[customID].usages[year][month] = amount;
  function compareUsage(customerID, lateYear, month) {
    const later = getRawDataOfCustomers()[customerID].usages[lateYear][month];
    const earlier = getRawDataOfCustomers()[customerID].usages[lateYear - 1][month];
    return { laterAmount: later, change: later - earlier };
  }
}

function 클래스생성() {
  class CustomerData {
    constructor(data) {
      this._data = data;
    }
  }
  function getCustomerData() {
    return customerData;
  }
  function getRawDataOfCustomers() {
    return customerData;
  }
  function setRawDataOfCustomers(arg) {
    customerData = new CustomerData(arg);
  }

  getRawDataOfCustomers()[customID].usages[year][month] = amount;
  function compareUsage(customerID, lateYear, month) {
    const later = getRawDataOfCustomers()[customerID].usages[lateYear][month];
    const earlier = getRawDataOfCustomers()[customerID].usages[lateYear - 1][month];
    return { laterAmount: later, change: later - earlier };
  }
}

function 쓰기부분함수추출() {
  class CustomerData {
    constructor(data) {
      this._data = data;
    }
  }
  function getCustomerData() {
    return customerData;
  }
  function getRawDataOfCustomers() {
    return customerData;
  }
  function setRawDataOfCustomers(arg) {
    customerData = new CustomerData(arg);
  }

  function setUsage(customerID, year, month, amount) {
    getRawDataOfCustomers()[customerID].usages[year][month] = amount;
  }

  setUsage(customerID, year, month, amount);
  function compareUsage(customerID, lateYear, month) {
    const later = getRawDataOfCustomers()[customerID].usages[lateYear][month];
    const earlier = getRawDataOfCustomers()[customerID].usages[lateYear - 1][month];
    return { laterAmount: later, change: later - earlier };
  }
}

function 추출한함수_클래스로_이동() {
  class CustomerData {
    constructor(data) {
      this._data = data;
    }
    setUsage(customerID, year, month, amount) {
      this._data[customerID].usages[year][month] = amount;
    }
  }
  function getCustomerData() {
    return customerData;
  }
  function getRawDataOfCustomers() {
    return customerData._data;
  }
  function setRawDataOfCustomers(arg) {
    customerData = new CustomerData(arg);
  }

  getCustomerData().setUsage(customerID, year, month, amount);
  function compareUsage(customerID, lateYear, month) {
    const later = getRawDataOfCustomers()[customerID].usages[lateYear][month];
    const earlier = getRawDataOfCustomers()[customerID].usages[lateYear - 1][month];
    return { laterAmount: later, change: later - earlier };
  }
}

function 깊은복사() {
  class CustomerData {
    constructor(data) {
      this._data = data;
    }
    setUsage(customerID, year, month, amount) {
      this._data[customerID].usages[year][month] = amount;
    }
    get rawData() {
      return _.cloneDeep(this._data);
    }
  }
  function getCustomerData() {
    return customerData;
  }
  function getRawDataOfCustomers() {
    return customerData.rawData;
  }
  function setRawDataOfCustomers(arg) {
    customerData = new CustomerData(arg);
  }

  getCustomerData().setUsage(customerID, year, month, amount);
  function compareUsage(customerID, lateYear, month) {
    const later = getRawDataOfCustomers()[customerID].usages[lateYear][month];
    const earlier = getRawDataOfCustomers()[customerID].usages[lateYear - 1][month];
    return { laterAmount: later, change: later - earlier };
  }
}

function 읽기부분_함수_추출() {
  class CustomerData {
    constructor(data) {
      this._data = data;
    }
    setUsage(customerID, year, month, amount) {
      this._data[customerID].usages[year][month] = amount;
    }
    usage(customerID, year, month) {
      return this._data[customerID].usages[year][month];
    }
    get rawData() {
      return _.cloneDeep(this._data);
    }
  }
  function getCustomerData() {
    return customerData;
  }
  function getRawDataOfCustomers() {
    return customerData.rawData;
  }
  function setRawDataOfCustomers(arg) {
    customerData = new CustomerData(arg);
  }

  getCustomerData().setUsage(customerID, year, month, amount);
  function compareUsage(customerID, lateYear, month) {
    const later = getCustomerData().usage(customerID, lateYear, month);
    const earlier = getRawDataOfCustomers()[customerID].usages[lateYear - 1][month];
    return { laterAmount: later, change: later - earlier };
  }
}
