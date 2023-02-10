function org() {
  // 함수복제 후 이름 설정
  function alertForMiscreants(people) {
    for (const p of people) {
      if (p === "조커") {
        sendAlert();

        return "조커";
      }
      if (p === "사루만") {
        sendAlert();

        return "사루만";
      }
    }
    return "";
  }

  const found = alertForMiscreants(people);
}

function refactor_01() {
  // 함수복제 후 이름 설정
  function alertForMiscreants(people) {
    for (const p of people) {
      if (p === "조커") {
        sendAlert();

        return "조커";
      }
      if (p === "사루만") {
        sendAlert();

        return "사루만";
      }
    }
    return "";
  }

  const found = alertForMiscreants(people);
}

function refactor_02() {
  function alertForMiscreants(people) {
    for (const p of people) {
      if (p === "조커") {
        sendAlert();

        return "조커";
      }
      if (p === "사루만") {
        sendAlert();

        return "사루만";
      }
    }
    return "";
  }

  // 질의 함수에서 부수효과 제거
  function findMiscreants(people) {
    for (const p of people) {
      if (p === "조커") {
        sendAlert();

        return "조커";
      }
      if (p === "사루만") {
        sendAlert();

        return "사루만";
      }
    }
    return "";
  }

  const found = alertForMiscreants(people);
}

function refactor_03() {
  function alertForMiscreants(people) {
    for (const p of people) {
      if (p === "조커") {
        sendAlert();

        return "조커";
      }
      if (p === "사루만") {
        sendAlert();

        return "사루만";
      }
    }
    return "";
  }

  function findMiscreants(people) {
    for (const p of people) {
      if (p === "조커") {
        return "조커";
      }
      if (p === "사루만") {
        return "사루만";
      }
    }
    return "";
  }

  // 질의함수로 바꾸고, 부수효과 코드 삽입
  const found = alertForMiscreants(people);
}

function refactor_04() {
  // 질의 관련 코드 삭제
  function alertForMiscreants(people) {
    for (const p of people) {
      if (p === "조커") {
        sendAlert();

        return "조커";
      }
      if (p === "사루만") {
        sendAlert();

        return "사루만";
      }
    }
    return "";
  }

  function findMiscreants(people) {
    for (const p of people) {
      if (p === "조커") {
        return "조커";
      }
      if (p === "사루만") {
        return "사루만";
      }
    }
    return "";
  }

  const found = findMiscreants(people);
  alertForMiscreants(people);
}

function refactor_05() {
  function alertForMiscreants(people) {
    for (const p of people) {
      if (p === "조커") {
        return;
      }
      if (p === "사루만") {
        return;
      }
    }
    return;
  }

  function findMiscreants(people) {
    for (const p of people) {
      if (p === "조커") {
        return "조커";
      }
      if (p === "사루만") {
        return "사루만";
      }
    }
    return "";
  }

  const found = findMiscreants(people);
  alertForMiscreants(people);
}
