function org() {
  let defaultOwner = { firstName: "마틴", lastName: "파울러" };
  // add get/set func

  spaceship.owner = defaultOwner;
  defaultOwner = { firstName: "레베카", lastName: "파슨스" };
}

function refactor_1() {
  let defaultOwner = { firstName: "마틴", lastName: "파울러" };
  function getDefaultOwner() {
    return defaultOwner;
  }
  function setDefaultOwner(arg) {
    defaultOwner = arg;
  }

  spaceship.owner = defaultOwner; // 게터함수로 변경
  defaultOwner = { firstName: "레베카", lastName: "파슨스" }; // 세터 함수로 변경
}

function refactor_2() {
  let defaultOwner = { firstName: "마틴", lastName: "파울러" }; // module로 뺀다
  function getDefaultOwner() {
    return defaultOwner;
  }
  function setDefaultOwner(arg) {
    defaultOwner = arg;
  }

  spaceship.owner = getDefaultOwner();
  setDefaultOwner({ firstName: "레베카", lastName: "파슨스" });
}

// 기타 게터가 복제본 반환하게
function getDefaultOwner() {
  // return defaultOwner;
  return { ...defaultOwner };
}
