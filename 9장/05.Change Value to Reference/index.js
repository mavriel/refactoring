function org() {
  class Order {
    constructor(data) {
      this._number = data.number;
      this._customer = new Customer(data.customer);
    }
    get customer() {
      return this._customer;
    }
  }

  class Customer {
    constructor(id) {
      this._id = id;
    }
    get id() {
      return this._id;
    }
  }
  // 저장소 추가
}

function refactor_01() {
  class Order {
    constructor(data) {
      this._number = data.number;
      this._customer = new Customer(data.customer); // 저장소 사용
    }
    get customer() {
      return this._customer;
    }
  }

  class Customer {
    constructor(id) {
      this._id = id;
    }
    get id() {
      return this._id;
    }
  }

  function repository() {
    let data;

    function initialize() {
      data = {};
      data.customers = new Map();
    }

    function registerCustomer(id) {
      if (!data.customers.has(id)) {
        data.customers.set(id, new Customer(id));
      }
      return findCustomer(id);
    }
    function findCustomer(id) {
      return data.customers.get(id);
    }

    return {
      initialize,
      registerCustomer,
      findCustomer,
    };
  }
}

function refactor_02() {
  const repository = getRepository();
  repository.initialize();

  class Order {
    constructor(data) {
      this._number = data.number;
      this._customer = repository.registerCustomer(data.customer);
      // 이렇게 쓰면, 나중에 유지보수 어려울수 있음
      // 생성자에서 매개변수로 customer를 전달하는게 더 좋을 듯
    }
    get customer() {
      return this._customer;
    }
  }

  class Customer {
    constructor(id) {
      this._id = id;
    }
    get id() {
      return this._id;
    }
  }

  function getRepository() {
    let data;

    function initialize() {
      data = {};
      data.customers = new Map();
    }

    function registerCustomer(id) {
      if (!data.customers.has(id)) {
        data.customers.set(id, new Customer(id));
      }
      return findCustomer(id);
    }
    function findCustomer(id) {
      return data.customers.get(id);
    }

    return {
      initialize,
      registerCustomer,
      findCustomer,
    };
  }
}
