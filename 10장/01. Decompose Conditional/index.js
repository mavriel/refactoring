function org() {
  // 조건식 추출
  if (!aDate.isBefore(plan.summerStart) && !aDate.isAfter(plan.summerEnd)) {
    charge = quantity * plan.summerRate;
  } else {
    charge = quantity * plan.regularRate + plan.regularServiceCharge;
  }
}

function refactor_01() {
  if (summer()) {
    charge = quantity * plan.summerRate; // 로직 추출
  } else {
    charge = quantity * plan.regularRate + plan.regularServiceCharge; // 로직 추출
  }

  function summer() {
    return !aDate.isBefore(plan.summerStart) && !aDate.isAfter(plan.summerEnd);
  }
}

function refactor_02() {
  if (summer()) {
    // 나라면 이걸 함수로
    charge = summerCharge();
  } else {
    charge = regularCharge();
  }

  function summer() {
    return !aDate.isBefore(plan.summerStart) && !aDate.isAfter(plan.summerEnd);
  }

  function summerCharge() {
    return quantity * plan.summerRate;
  }

  function regularCharge() {
    return quantity * plan.regularRate + plan.regularServiceCharge;
  }
}

function refactor_03() {
  charge = getCharge();

  function getCharge() {
    if (summer()) {
      return summerCharge();
    } else {
      return regularCharge();
    }
  }

  function summer() {
    return !aDate.isBefore(plan.summerStart) && !aDate.isAfter(plan.summerEnd);
  }

  function summerCharge() {
    return quantity * plan.summerRate;
  }

  function regularCharge() {
    return quantity * plan.regularRate + plan.regularServiceCharge;
  }
}
