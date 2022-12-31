function priceOrder() {
  function priceOrder(product, quantity, shippingMethod) {
    const basePrice = product.basePrice * quantity;
    const discount = Math.max(quantity - product.discountThreshold, 0) * product.basePrice * product.discountRate;

    // price 계산까지 함수 추출 ⌥⌘M
    const shippingPerCase =
      basePrice > shippingMethod.discountThreshold ? shippingMethod.discountedFee : shippingMethod.feePerCase;
    const shippingCost = quantity * shippingPerCase;
    const price = basePrice - discount + shippingCost;
    return price;
  }
}

function refactor_01() {
  function priceOrder(product, quantity, shippingMethod) {
    const basePrice = product.basePrice * quantity;
    const discount = Math.max(quantity - product.discountThreshold, 0) * product.basePrice * product.discountRate;
    // 중간 데이터 구조 추가
    const price = applyShipping(basePrice, shippingMethod, quantity, discount);
    return price;
  }

  function applyShipping(basePrice, shippingMethod, quantity, discount) {
    const shippingPerCase =
      basePrice > shippingMethod.discountThreshold ? shippingMethod.discountedFee : shippingMethod.feePerCase;
    const shippingCost = quantity * shippingPerCase;
    const price = basePrice - discount + shippingCost;
    return price;
  }
}

function refactor_02() {
  function priceOrder(product, quantity, shippingMethod) {
    const basePrice = product.basePrice * quantity;
    const discount = Math.max(quantity - product.discountThreshold, 0) * product.basePrice * product.discountRate;
    const priceData = {};
    const price = applyShipping(priceData, basePrice, shippingMethod, quantity, discount);
    return price;
  }

  // 첫번째 단계에서 처리하는 변수를 중간 데이터로 이동
  function applyShipping(priceData, basePrice, shippingMethod, quantity, discount) {
    const shippingPerCase =
      basePrice > shippingMethod.discountThreshold ? shippingMethod.discountedFee : shippingMethod.feePerCase;
    const shippingCost = quantity * shippingPerCase;
    const price = basePrice - discount + shippingCost;
    return price;
  }
}

function refactor_03() {
  function priceOrder(product, quantity, shippingMethod) {
    const basePrice = product.basePrice * quantity;
    const discount = Math.max(quantity - product.discountThreshold, 0) * product.basePrice * product.discountRate;
    const priceData = { basePrice };
    const price = applyShipping(priceData, shippingMethod, quantity, discount);
    return price;
  }
  // shippingMethod는 1단계에서 안 쓰므로 무시, quantity는 1단계에서 사용하므로 이동
  function applyShipping(priceData, shippingMethod, quantity, discount) {
    const shippingPerCase =
      priceData.basePrice > shippingMethod.discountThreshold ? shippingMethod.discountedFee : shippingMethod.feePerCase;
    const shippingCost = quantity * shippingPerCase;
    const price = priceData.basePrice - discount + shippingCost;
    return price;
  }
}

function refactor_04() {
  function priceOrder(product, quantity, shippingMethod) {
    const basePrice = product.basePrice * quantity;
    const discount = Math.max(quantity - product.discountThreshold, 0) * product.basePrice * product.discountRate;
    const priceData = { basePrice, quantity };
    const price = applyShipping(priceData, shippingMethod, discount);
    return price;
  }
  // discount 이동
  function applyShipping(priceData, shippingMethod, discount) {
    const shippingPerCase =
      priceData.basePrice > shippingMethod.discountThreshold ? shippingMethod.discountedFee : shippingMethod.feePerCase;
    const shippingCost = priceData.quantity * shippingPerCase;
    const price = priceData.basePrice - discount + shippingCost;
    return price;
  }
}

function refactor_05() {
  function priceOrder(product, quantity, shippingMethod) {
    const basePrice = product.basePrice * quantity; // 1단계 함수로 추출
    const discount = Math.max(quantity - product.discountThreshold, 0) * product.basePrice * product.discountRate;
    const priceData = { basePrice, quantity, discount };
    const price = applyShipping(priceData, shippingMethod);
    return price;
  }

  function applyShipping(priceData, shippingMethod) {
    const shippingPerCase =
      priceData.basePrice > shippingMethod.discountThreshold ? shippingMethod.discountedFee : shippingMethod.feePerCase;
    const shippingCost = priceData.quantity * shippingPerCase;
    const price = priceData.basePrice - priceData.discount + shippingCost;
    return price;
  }
}

function refactor_06() {
  function priceOrder(product, quantity, shippingMethod) {
    const priceData = calculatePriceData(product, quantity);
    const price = applyShipping(priceData, shippingMethod);
    return price; // 인라인
  }

  function calculatePriceData(product, quantity) {
    const basePrice = product.basePrice * quantity;
    const discount = Math.max(quantity - product.discountThreshold, 0) * product.basePrice * product.discountRate;
    const priceData = { basePrice, quantity, discount };
    return priceData; // 인라인
  }

  function applyShipping(priceData, shippingMethod) {
    const shippingPerCase =
      priceData.basePrice > shippingMethod.discountThreshold ? shippingMethod.discountedFee : shippingMethod.feePerCase;
    const shippingCost = priceData.quantity * shippingPerCase;
    const price = priceData.basePrice - priceData.discount + shippingCost;
    return price; // 인라인
  }
}

function refactor_07() {
  function priceOrder(product, quantity, shippingMethod) {
    const priceData = calculatePriceData(product, quantity);
    return applyShipping(priceData, shippingMethod);
  }

  function calculatePriceData(product, quantity) {
    const basePrice = product.basePrice * quantity;
    const discount = Math.max(quantity - product.discountThreshold, 0) * product.basePrice * product.discountRate;
    return { basePrice, quantity, discount };
  }

  function applyShipping(priceData, shippingMethod) {
    const shippingPerCase =
      priceData.basePrice > shippingMethod.discountThreshold ? shippingMethod.discountedFee : shippingMethod.feePerCase;
    const shippingCost = priceData.quantity * shippingPerCase;
    return priceData.basePrice - priceData.discount + shippingCost;
  }
}
