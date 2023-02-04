function org() {
  // 제어 플래그를 쓰는 부분을 함수추출했다고 가정
  let found = false;

  for (const p of people) {
    if (!found) {
      if (p === "조커") {
        sendAlert();
        found = true; // break나 return 처리
      }
      if (p === "사루만") {
        sendAlert();
        found = true;
      }
    }
  }
}

function refactor01() {
  let found = false;

  for (const p of people) {
    if (!found) {
      if (p === "조커") {
        sendAlert();
        return;
      }
      if (p === "사루만") {
        sendAlert();
        found = true; // 다음 처리
      }
    }
  }
}

function refactor02() {
  let found = false;

  for (const p of people) {
    if (!found) {
      // 제거
      if (p === "조커") {
        sendAlert();
        return;
      }
      if (p === "사루만") {
        sendAlert();
        return;
      }
    }
  }
}

function refactor03() {
  for (const p of people) {
    // 로직 변경
    if (p === "조커") {
      sendAlert();
      return;
    }
    if (p === "사루만") {
      sendAlert();
      return;
    }
  }
}

function refactor04() {
  if (people.some((p) => ["조커", "사루만"].includes(p))) {
    sendAlert();
  }
}
