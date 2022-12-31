const reading = { customer: "ivan", quantity: 10, month: 5, year: 2017 };

const org = () => {
  function client1() {
    const aReading = acquireReading();
    const baseCharge = baseRate(aReading.month, aReading.year) * aReading.quantity;
  }

  function client2() {
    const aReading = acquireReading();
    const base = baseRate(aReading.month, aReading.year) * aReading.quantity;
    const taxableCharge = Math.max(0, base - taxThreshold(aReading.year));
  }

  function client3() {
    const aReading = acquireReading();
    const basicChargeAmount = calculateBaseChage(aReading); // 데이터 복제 및 transform 함수 추가

    function calculateBaseChage(aReading) {
      return baseRate(aReading.month, aReading.year) * aReading.quantity;
    }
  }
};

const refactor_01 = () => {
  function client1() {
    const aReading = acquireReading();
    const baseCharge = baseRate(aReading.month, aReading.year) * aReading.quantity; // 변환함수를 사용하도록 변경
  }

  function client2() {
    const aReading = acquireReading();
    const base = baseRate(aReading.month, aReading.year) * aReading.quantity; // 변환함수를 사용하도록 변경
    const taxableCharge = Math.max(0, base - taxThreshold(aReading.year));
  }

  function client3() {
    const rawReading = acquireReading();
    const aReading = enrichReading(rawReading);
    const basicChargeAmount = aReading.baseCharge;

    function enrichReading(org) {
      const result = _.cloneDeep(org);
      result.baseCharge = calculateBaseChage(result);
      return result;
    }
  }

  function calculateBaseChage(aReading) {
    return baseRate(aReading.month, aReading.year) * aReading.quantity;
  }
};

const refactor_02 = () => {
  function client1() {
    const rawReading = acquireReading();
    const aReading = enrichReading(rawReading);
    const baseCharge = aReading.baseCharge;
  }

  function client2() {
    const rawReading = acquireReading();
    const aReading = enrichReading(rawReading);
    const base = aReading.baseCharge;
    const taxableCharge = Math.max(0, base - taxThreshold(aReading.year)); // 인라인
  }

  function client3() {
    const rawReading = acquireReading();
    const aReading = enrichReading(rawReading);
    const basicChargeAmount = aReading.baseCharge;
  }

  function enrichReading(org) {
    const result = _.cloneDeep(org);
    result.baseCharge = calculateBaseChage(result);
    return result;
  }

  function calculateBaseChage(aReading) {
    return baseRate(aReading.month, aReading.year) * aReading.quantity;
  }
};

const refactor_03 = () => {
  function client1() {
    const rawReading = acquireReading();
    const aReading = enrichReading(rawReading);
    const baseCharge = aReading.baseCharge;
  }

  function client2() {
    const rawReading = acquireReading();
    const aReading = enrichReading(rawReading);
    const taxableCharge = Math.max(0, aReading.baseCharge - taxThreshold(aReading.year)); // 변환함수에 추가
  }

  function client3() {
    const rawReading = acquireReading();
    const aReading = enrichReading(rawReading);
    const basicChargeAmount = aReading.baseCharge;
  }

  function enrichReading(org) {
    const result = _.cloneDeep(org);
    result.baseCharge = calculateBaseChage(result);
    return result;
  }

  function calculateBaseChage(aReading) {
    return baseRate(aReading.month, aReading.year) * aReading.quantity;
  }
};

const refactor_04 = () => {
  function client1() {
    const rawReading = acquireReading();
    const aReading = enrichReading(rawReading);
    const baseCharge = aReading.baseCharge;
  }

  function client2() {
    const rawReading = acquireReading();
    const aReading = enrichReading(rawReading);
    const taxableCharge = aReading.taxableCharge;
  }

  function client3() {
    const rawReading = acquireReading();
    const aReading = enrichReading(rawReading);
    const basicChargeAmount = aReading.baseCharge;
  }

  function enrichReading(org) {
    const result = _.cloneDeep(org);
    result.baseCharge = calculateBaseChage(result);
    result.taxableCharge = Math.max(0, result.baseCharge - taxThreshold(result.year));
    return result;
  }

  function calculateBaseChage(aReading) {
    return baseRate(aReading.month, aReading.year) * aReading.quantity;
  }
};
