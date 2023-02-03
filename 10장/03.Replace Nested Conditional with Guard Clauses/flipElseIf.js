function adjustedCapital(anInstrument) {
  let result = 0;

  // 조건 반대로
  if (anInstrument.capital > 0) {
    if (anInstrument.interestRate > 0 && anInstrument.duration > 0) {
      result = (anInstrument.income / anInstrument.duration) * anInstrument.adjustmentFactor;
    }
  }
  return result;
}

function adjustedCapital_01(anInstrument) {
  let result = 0;

  if (anInstrument.capital <= 0) {
    return result;
  }
  // 조건 반대로
  if (anInstrument.interestRate > 0 && anInstrument.duration > 0) {
    result = (anInstrument.income / anInstrument.duration) * anInstrument.adjustmentFactor;
  }

  return result;
}

function adjustedCapital_02(anInstrument) {
  let result = 0;

  if (anInstrument.capital <= 0) {
    return result;
  }
  // ! 제거
  if (!(anInstrument.interestRate > 0 && anInstrument.duration > 0)) {
    return result;
  }
  result = (anInstrument.income / anInstrument.duration) * anInstrument.adjustmentFactor;

  return result;
}

function adjustedCapital_03(anInstrument) {
  let result = 0;

  if (anInstrument.capital <= 0) {
    // 통합
    return result;
  }
  if (anInstrument.interestRate <= 0 && anInstrument.duration > 0) {
    // 통합
    return result;
  }
  result = (anInstrument.income / anInstrument.duration) * anInstrument.adjustmentFactor;

  return result;
}

function adjustedCapital_04(anInstrument) {
  let result = 0; // 변수 쪼개기

  if (anInstrument.capital <= 0 || (anInstrument.interestRate <= 0 && anInstrument.duration > 0)) {
    return result;
  }
  result = (anInstrument.income / anInstrument.duration) * anInstrument.adjustmentFactor;

  return result;
}

function adjustedCapital_05(anInstrument) {
  if (anInstrument.capital <= 0 || (anInstrument.interestRate <= 0 && anInstrument.duration > 0)) {
    return 0;
  }
  return (anInstrument.income / anInstrument.duration) * anInstrument.adjustmentFactor;
}
