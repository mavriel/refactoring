function org() {
  // 최상위 예외 핸들러 추가
  const status = calculateShippingCosts(orderData);
  if (status < 0) errorList.push({ order: orderData, errorCode: status });

  function calculateShippingCosts(anOrder) {
    const shippingRules = localShippingRules(anOrder.country);

    if (shippingRules < 0) return shippingRules; // 오류 전파
  }

  function localShippingRules(country) {
    const data = countryData.shippingRules[country];

    if (data) return new ShippingRules(data);
    else return -23;
  }
}

function refactor_01() {
  let status;
  try {
    status = calculateShippingCosts(orderData);
  } catch (e) {
    throw e;
  }
  if (status < 0) errorList.push({ order: orderData, errorCode: status });

  function calculateShippingCosts(anOrder) {
    const shippingRules = localShippingRules(anOrder.country);

    if (shippingRules < 0) return shippingRules; // 오류 전파
  }

  function localShippingRules(country) {
    const data = countryData.shippingRules[country];

    if (data) return new ShippingRules(data);
    else return -23;
  }

  // 오류 클래스 생성
}

function refactor_02() {
  let status;
  try {
    status = calculateShippingCosts(orderData);
  } catch (e) {
    // 예외 처리 클래스 사용하도록 변경
    throw e;
  }
  if (status < 0) errorList.push({ order: orderData, errorCode: status });

  function calculateShippingCosts(anOrder) {
    const shippingRules = localShippingRules(anOrder.country);

    if (shippingRules < 0) return shippingRules; // 오류 전파
  }

  function localShippingRules(country) {
    const data = countryData.shippingRules[country];

    if (data) return new ShippingRules(data);
    else return -23;
  }

  class OrderProcessingError extends Error {
    constructor(errorCode) {
      super(`주문 처리 오류 ${errorCode}`);
      this.code = errorCode;
    }
    get name() {
      return "OrderProcessingError";
    }
  }
}

function refactor_03() {
  let status;
  try {
    status = calculateShippingCosts(orderData);
  } catch (e) {
    if (e instanceof OrderProcessingError) errorList.push({ order: orderData, errorCode: status });
    else throw e;
  }
  if (status < 0) errorList.push({ order: orderData, errorCode: status });

  function calculateShippingCosts(anOrder) {
    const shippingRules = localShippingRules(anOrder.country);

    if (shippingRules < 0) return shippingRules; // 오류 전파
  }

  function localShippingRules(country) {
    const data = countryData.shippingRules[country];

    if (data) return new ShippingRules(data);
    // 예외 처리 클래스 사용하도록 변경
    else return -23;
  }

  class OrderProcessingError extends Error {
    constructor(errorCode) {
      super(`주문 처리 오류 ${errorCode}`);
      this.code = errorCode;
    }
    get name() {
      return "OrderProcessingError";
    }
  }
}

function refactor_04() {
  let status;
  try {
    status = calculateShippingCosts(orderData);
  } catch (e) {
    if (e instanceof OrderProcessingError) errorList.push({ order: orderData, errorCode: status });
    else throw e;
  }
  if (status < 0) errorList.push({ order: orderData, errorCode: status });

  function calculateShippingCosts(anOrder) {
    const shippingRules = localShippingRules(anOrder.country);

    // 오류 전파 로직 제거
    if (shippingRules < 0) return shippingRules; // 오류 전파
  }

  function localShippingRules(country) {
    const data = countryData.shippingRules[country];

    if (data) return new ShippingRules(data);
    else throw new OrderProcessingError(-23);
  }

  class OrderProcessingError extends Error {
    constructor(errorCode) {
      super(`주문 처리 오류 ${errorCode}`);
      this.code = errorCode;
    }
    get name() {
      return "OrderProcessingError";
    }
  }
}

function refactor_05() {
  try {
    calculateShippingCosts(orderData);
  } catch (e) {
    if (e instanceof OrderProcessingError) errorList.push({ order: orderData, errorCode: status });
    else throw e;
  }

  function calculateShippingCosts(anOrder) {
    const shippingRules = localShippingRules(anOrder.country);
  }

  function localShippingRules(country) {
    const data = countryData.shippingRules[country];

    if (data) return new ShippingRules(data);
    else throw new OrderProcessingError(-23);
  }

  class OrderProcessingError extends Error {
    constructor(errorCode) {
      super(`주문 처리 오류 ${errorCode}`);
      this.code = errorCode;
    }
    get name() {
      return "OrderProcessingError";
    }
  }
}
