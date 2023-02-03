function org() {
  function disabilityAmount(anEmployee) {
    if (anEmployee.seniority < 2) return 0; // 통합
    if (anEmployee.monthsDisabled > 12) return 0; // 통합
    if (anEmployee.isPartTime) return 0;
  }
}

function refactor_01() {
  function disabilityAmount(anEmployee) {
    if (anEmployee.seniority < 2 || anEmployee.monthsDisabled > 12) return 0; // 통합
    if (anEmployee.isPartTime) return 0; // 통합
  }
}

function refactor_02() {
  function disabilityAmount(anEmployee) {
    if (anEmployee.seniority < 2 || anEmployee.monthsDisabled > 12 || anEmployee.isPartTime) return 0; // 함수추출
  }
}

function refactor_03() {
  function disabilityAmount(anEmployee) {
    if (isNotEligibleForDisability()) return 0; // 함수추출

    function isNotEligibleForDisability() {
      return anEmployee.seniority < 2 || anEmployee.monthsDisabled > 12 || anEmployee.isPartTime;
    }
  }
}
