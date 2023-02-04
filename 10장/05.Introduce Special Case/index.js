function org() {
  class Site {
    get customer() {}
  }

  class Customer {
    get name() {}
    get billingPlan() {}
    set billingPlan(arg) {}
    get paymentHistory() {}
    // 미확인 고객 확인 메서드 추가
  }

  function client1() {
    const aCustomer = site.customer;
    let customerName;
    if (aCustomer === "미확인 고객") customerName = "거주자";
    else customerName = aCustomer.name;
  }

  function client2() {
    const plan = aCustomer === "미확인 고객" ? registry.billingPlans.basic : aCustomer.billingPlan;
  }

  function client3() {
    if (aCustomer !== "미확인 고객") aCustomer.billingPlan = newPlan;
  }

  function client4() {
    const weeksDelinquent = aCustomer === "미확인 고객" ? 0 : aCustomer.paymentHistory.weeksDelinquentInLastYear;
  }
}

function refactor_01() {
  class Site {
    get customer() {}
  }

  class Customer {
    get name() {}
    get billingPlan() {}
    set billingPlan(arg) {}
    get paymentHistory() {}
    get isUnknown() {
      return false;
    }
  }

  // 미확인 고객 클래스 생성

  function client1() {
    const aCustomer = site.customer;
    let customerName;
    if (aCustomer === "미확인 고객") customerName = "거주자";
    else customerName = aCustomer.name;
  }

  function client2() {
    const plan = aCustomer === "미확인 고객" ? registry.billingPlans.basic : aCustomer.billingPlan;
  }

  function client3() {
    if (aCustomer !== "미확인 고객") aCustomer.billingPlan = newPlan;
  }

  function client4() {
    const weeksDelinquent = aCustomer === "미확인 고객" ? 0 : aCustomer.paymentHistory.weeksDelinquentInLastYear;
  }
}

function refactor_02() {
  class Site {
    get customer() {}
  }

  class Customer {
    get name() {}
    get billingPlan() {}
    set billingPlan(arg) {}
    get paymentHistory() {}
    get isUnknown() {
      return false;
    }
  }

  // JAVA같은 언어라면 Customer의 서브클래스를 생성했겠지만, javascript의 덕타이핑이 가능한 특성상 서브클래스 생성하지 않음
  // ts에서도 서브클래스로 했을듯
  class UnknownCustomer {
    get isUnknown() {
      return true;
    }
  }

  const aCustomer = site.customer;

  function client1() {
    let customerName;
    if (aCustomer === "미확인 고객") customerName = "거주자";
    else customerName = aCustomer.name;
  }

  function client2() {
    const plan = aCustomer === "미확인 고객" ? registry.billingPlans.basic : aCustomer.billingPlan;
  }

  function client3() {
    if (aCustomer !== "미확인 고객") aCustomer.billingPlan = newPlan;
  }

  function client4() {
    const weeksDelinquent = aCustomer === "미확인 고객" ? 0 : aCustomer.paymentHistory.weeksDelinquentInLastYear;
  }

  // aCustomer === "미확인 고객" 함수 추출
}

function refactor_01() {
  class Site {
    get customer() {}
  }

  class Customer {
    get name() {}
    get billingPlan() {}
    set billingPlan(arg) {}
    get paymentHistory() {}
    get isUnknown() {
      return false;
    }
  }

  // 미확인 고객 클래스 생성

  function client1() {
    const aCustomer = site.customer;
    let customerName;
    if (aCustomer === "미확인 고객") customerName = "거주자";
    else customerName = aCustomer.name;
  }

  function client2() {
    const plan = aCustomer === "미확인 고객" ? registry.billingPlans.basic : aCustomer.billingPlan;
  }

  function client3() {
    if (aCustomer !== "미확인 고객") aCustomer.billingPlan = newPlan;
  }

  function client4() {
    const weeksDelinquent = aCustomer === "미확인 고객" ? 0 : aCustomer.paymentHistory.weeksDelinquentInLastYear;
  }
}

function refactor_03() {
  class Site {
    get customer() {}
  }

  class Customer {
    get name() {}
    get billingPlan() {}
    set billingPlan(arg) {}
    get paymentHistory() {}
    get isUnknown() {
      return false;
    }
  }

  // JAVA같은 언어라면 Customer의 서브클래스를 생성했겠지만, javascript의 덕타이핑이 가능한 특성상 서브클래스 생성하지 않음
  // ts에서도 서브클래스로 했을듯
  class UnknownCustomer {
    get isUnknown() {
      return true;
    }
  }

  const aCustomer = site.customer;

  function client1() {
    let customerName;
    if (aCustomer === "미확인 고객") customerName = "거주자"; // 함수 적용
    else customerName = aCustomer.name;
  }

  function client2() {
    const plan = aCustomer === "미확인 고객" ? registry.billingPlans.basic : aCustomer.billingPlan; // 함수 적용
  }

  function client3() {
    if (aCustomer !== "미확인 고객") aCustomer.billingPlan = newPlan; // 함수 적용
  }

  function client4() {
    const weeksDelinquent = aCustomer === "미확인 고객" ? 0 : aCustomer.paymentHistory.weeksDelinquentInLastYear; // 함수 적용
  }

  function isUnknown(arg) {
    if (!(arg instanceof Customer || arg === "미확인 고객")) throw new Error(`잘못된 값과 비교: <${arg}>`);
    return arg === "미확인 고객";
  }
}

function refactor_04() {
  class Site {
    get customer() {} // 특이 케이스시 특이케이스 객체 반환하게 변경
  }

  class Customer {
    get name() {}
    get billingPlan() {}
    set billingPlan(arg) {}
    get paymentHistory() {}
    get isUnknown() {
      return false;
    }
  }

  class UnknownCustomer {
    get isUnknown() {
      return true;
    }
  }

  const aCustomer = site.customer;

  function client1() {
    let customerName;
    if (isUnknown(aCustomer)) customerName = "거주자";
    else customerName = aCustomer.name;
  }

  function client2() {
    const plan = isUnknown(aCustomer) ? registry.billingPlans.basic : aCustomer.billingPlan;
  }

  function client3() {
    if (isUnknown(aCustomer)) aCustomer.billingPlan = newPlan;
  }

  function client4() {
    const weeksDelinquent = isUnknown(aCustomer) ? 0 : aCustomer.paymentHistory.weeksDelinquentInLastYear;
  }

  function isUnknown(arg) {
    if (!(arg instanceof Customer || arg === "미확인 고객")) throw new Error(`잘못된 값과 비교: <${arg}>`);
    return arg === "미확인 고객";
  }
}

function refactor_05() {
  class Site {
    get customer() {
      return this._customer === "미확인 고객" ? new UnknownCustomer() : this._customer;
    }
  }

  class Customer {
    get name() {}
    get billingPlan() {}
    set billingPlan(arg) {}
    get paymentHistory() {}
    get isUnknown() {
      return false;
    }
  }

  class UnknownCustomer {
    get isUnknown() {
      return true;
    }
  }

  const aCustomer = site.customer;

  function client1() {
    let customerName;
    if (isUnknown(aCustomer)) customerName = "거주자";
    else customerName = aCustomer.name;
  }

  function client2() {
    const plan = isUnknown(aCustomer) ? registry.billingPlans.basic : aCustomer.billingPlan;
  }

  function client3() {
    if (isUnknown(aCustomer)) aCustomer.billingPlan = newPlan;
  }

  function client4() {
    const weeksDelinquent = isUnknown(aCustomer) ? 0 : aCustomer.paymentHistory.weeksDelinquentInLastYear;
  }

  function isUnknown(arg) {
    // 객체를 사용하도록 변경
    if (!(arg instanceof Customer || arg === "미확인 고객")) throw new Error(`잘못된 값과 비교: <${arg}>`);
    return arg === "미확인 고객";
  }
}

function refactor_06() {
  class Site {
    get customer() {
      return this._customer === "미확인 고객" ? new UnknownCustomer() : this._customer;
    }
  }

  class Customer {
    get name() {}
    get billingPlan() {}
    set billingPlan(arg) {}
    get paymentHistory() {}
    get isUnknown() {
      return false;
    }
  }

  class UnknownCustomer {
    get isUnknown() {
      return true;
    }
  }

  const aCustomer = site.customer;

  function client1() {
    let customerName;
    if (isUnknown(aCustomer)) customerName = "거주자"; // 여러 함수를 클래스로 묶기 적용 (6.9)
    else customerName = aCustomer.name;
  }

  function client2() {
    const plan = isUnknown(aCustomer) ? registry.billingPlans.basic : aCustomer.billingPlan;
  }

  function client3() {
    if (isUnknown(aCustomer)) aCustomer.billingPlan = newPlan;
  }

  function client4() {
    const weeksDelinquent = isUnknown(aCustomer) ? 0 : aCustomer.paymentHistory.weeksDelinquentInLastYear;
  }

  function isUnknown(arg) {
    if (!(arg instanceof Customer || arg instanceof UnknownCustomer)) throw new Error(`잘못된 값과 비교: <${arg}>`);
    return arg.isUnknown;
  }
}

function refactor_07() {
  class Site {
    get customer() {
      return this._customer === "미확인 고객" ? new UnknownCustomer() : this._customer;
    }
  }

  class Customer {
    get name() {}
    get billingPlan() {}
    set billingPlan(arg) {}
    get paymentHistory() {}
    get isUnknown() {
      return false;
    }
  }

  class UnknownCustomer {
    get name() {
      // !!!!!!!!! 여기 추가됨
      return "거주자";
    }
    get isUnknown() {
      return true;
    }
  }

  const aCustomer = site.customer;

  function client1() {
    let customerName = aCustomer.name;
  }

  function client2() {
    const plan = isUnknown(aCustomer) ? registry.billingPlans.basic : aCustomer.billingPlan; // billingPlan 처리
  }

  function client3() {
    if (isUnknown(aCustomer)) aCustomer.billingPlan = newPlan; // billingPlan 처리
  }

  function client4() {
    const weeksDelinquent = isUnknown(aCustomer) ? 0 : aCustomer.paymentHistory.weeksDelinquentInLastYear;
  }

  function isUnknown(arg) {
    if (!(arg instanceof Customer || arg instanceof UnknownCustomer)) throw new Error(`잘못된 값과 비교: <${arg}>`);
    return arg.isUnknown;
  }
}

function refactor_06() {
  class Site {
    get customer() {
      return this._customer === "미확인 고객" ? new UnknownCustomer() : this._customer;
    }
  }

  class Customer {
    get name() {}
    get billingPlan() {}
    set billingPlan(arg) {}
    get paymentHistory() {}
    get isUnknown() {
      return false;
    }
  }

  class UnknownCustomer {
    get isUnknown() {
      return true;
    }
  }

  const aCustomer = site.customer;

  function client1() {
    let customerName;
    if (isUnknown(aCustomer)) customerName = "거주자"; // 여러 함수를 클래스로 묶기 적용 (6.9)
    else customerName = aCustomer.name;
  }

  function client2() {
    const plan = isUnknown(aCustomer) ? registry.billingPlans.basic : aCustomer.billingPlan;
  }

  function client3() {
    if (isUnknown(aCustomer)) aCustomer.billingPlan = newPlan;
  }

  function client4() {
    const weeksDelinquent = isUnknown(aCustomer) ? 0 : aCustomer.paymentHistory.weeksDelinquentInLastYear;
  }

  function isUnknown(arg) {
    if (!(arg instanceof Customer || arg instanceof UnknownCustomer)) throw new Error(`잘못된 값과 비교: <${arg}>`);
    return arg.isUnknown;
  }
}

function refactor_08() {
  class Site {
    get customer() {
      return this._customer === "미확인 고객" ? new UnknownCustomer() : this._customer;
    }
  }

  class Customer {
    get name() {}
    get billingPlan() {}
    set billingPlan(arg) {}
    get paymentHistory() {}
    get isUnknown() {
      return false;
    }
  }

  class UnknownCustomer {
    get name() {
      return "거주자";
    }
    // !!!!!!!!! 여기 추가됨
    get billingPlan() {
      return registry.billingPlans.basic;
    }
    set billingPlan(arg) {}
    get isUnknown() {
      return true;
    }
  }

  const aCustomer = site.customer;

  function client1() {
    let customerName = aCustomer.name;
  }

  function client2() {
    const plan = aCustomer.billingPlan;
  }

  function client3() {
    aCustomer.billingPlan = newPlan;
  }

  function client4() {
    const weeksDelinquent = isUnknown(aCustomer) ? 0 : aCustomer.paymentHistory.weeksDelinquentInLastYear; // NullPaymentHistory 처리
  }

  function isUnknown(arg) {
    // 제거
    if (!(arg instanceof Customer || arg instanceof UnknownCustomer)) throw new Error(`잘못된 값과 비교: <${arg}>`);
    return arg.isUnknown;
  }
}

function refactor_09() {
  class Site {
    get customer() {
      return this._customer === "미확인 고객" ? new UnknownCustomer() : this._customer;
    }
  }

  class Customer {
    get name() {}
    get billingPlan() {}
    set billingPlan(arg) {}
    get paymentHistory() {}
    get isUnknown() {
      return false;
    }
  }

  class UnknownCustomer {
    get name() {
      return "거주자";
    }
    get billingPlan() {
      return registry.billingPlans.basic;
    }
    set billingPlan(arg) {}
    get paymentHistory() {
      return new NullPaymentHistory();
    }
    get isUnknown() {
      return true;
    }
  }

  class NullPaymentHistory {
    get weeksDelinquentInLastYear() {
      return 0;
    }
  }

  const aCustomer = site.customer;

  function client1() {
    let customerName = aCustomer.name;
  }

  function client2() {
    const plan = aCustomer.billingPlan;
  }

  function client3() {
    aCustomer.billingPlan = newPlan;
  }

  function client4() {
    const weeksDelinquent = aCustomer.paymentHistory.weeksDelinquentInLastYear;
  }
}

// 다음 예제로 객체 리터럴을 쓰는 예제가 있는데, 사실상 클래스 객체나 객체 리터럴이나 똑같기 때문에 이 부분은 그냥 넘어감
// 그다음 예제는 변환함수를 써서 객체리터럴을 집어넣어서 사용. 크게 개념이 다르지 않아서 이 부분도 넘어감
