function payAmount(employee) {
  let result;
  if (employee.isSeparated) {
    result = { amount: 0, reasonCode: "SEP" }; // 보호 구문으로 변경
  } else {
    if (employee.isRetired) {
      result = { amount: 0, reasonCode: "RET" };
    } else {
      result = someFinalComputation();
    }
  }
  return result;
}

function payAmount_01(employee) {
  let result;
  if (employee.isSeparated) {
    return { amount: 0, reasonCode: "SEP" };
  }
  if (employee.isRetired) {
    result = { amount: 0, reasonCode: "RET" }; // 보호 구문으로 변경
  } else {
    result = someFinalComputation();
  }

  return result;
}

function payAmount_02(employee) {
  let result;
  if (employee.isSeparated) {
    return { amount: 0, reasonCode: "SEP" };
  }
  if (employee.isRetired) {
    return { amount: 0, reasonCode: "RET" };
  }
  result = someFinalComputation(); // 인라인
  return result;
}

function payAmount_03(employee) {
  if (employee.isSeparated) {
    return { amount: 0, reasonCode: "SEP" };
  }
  if (employee.isRetired) {
    return { amount: 0, reasonCode: "RET" };
  }
  return someFinalComputation();
}
