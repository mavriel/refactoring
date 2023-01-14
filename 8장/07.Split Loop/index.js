function org() {
  let youngest = people[0] ? people[0].age : Infinity;
  let totalSalary = 0;

  for (const p of people) {
    // 반복문 복제
    if (p.age < youngest) {
      youngest = p.age;
    }
    totalSalary += p.salary;
  }

  return `최연소: ${youngest}, 총 급여: ${totalSalary}`;
}

function refactor01() {
  let youngest = people[0] ? people[0].age : Infinity;
  let totalSalary = 0;

  for (const p of people) {
    if (p.age < youngest) {
      youngest = p.age; // 부수효과가 있는 코드는 한쪽만 놔두고 제거
    }
    totalSalary += p.salary;
  }

  for (const p of people) {
    if (p.age < youngest) {
      youngest = p.age;
    }
    totalSalary += p.salary; // 부수효과가 있는 코드는 한쪽만 놔두고 제거
  }

  return `최연소: ${youngest}, 총 급여: ${totalSalary}`;
}

function refactor02() {
  let youngest = people[0] ? people[0].age : Infinity; // 문장슬라이드
  let totalSalary = 0;

  for (const p of people) {
    totalSalary += p.salary;
  }

  for (const p of people) {
    if (p.age < youngest) {
      youngest = p.age;
    }
  }

  return `최연소: ${youngest}, 총 급여: ${totalSalary}`;
}

function refactor03() {
  let totalSalary = 0; // 함수 추출
  for (const p of people) {
    totalSalary += p.salary;
  }

  let youngest = people[0] ? people[0].age : Infinity; // 함수 추출
  for (const p of people) {
    if (p.age < youngest) {
      youngest = p.age;
    }
  }

  return `최연소: ${youngest}, 총 급여: ${totalSalary}`;
}

function refactor04() {
  return `최연소: ${youngest()}, 총 급여: ${totalSalary()}`;

  function totalSalary() {
    let totalSalary = 0; // 함수 추출
    for (const p of people) {
      // 파이프라인 교체
      totalSalary += p.salary;
    }
    return totalSalary;
  }
  function youngest() {
    let youngest = people[0] ? people[0].age : Infinity; // 알고리즘 교체
    for (const p of people) {
      if (p.age < youngest) {
        youngest = p.age;
      }
    }
    return youngest;
  }
}

function refactor05() {
  return `최연소: ${youngest()}, 총 급여: ${totalSalary()}`;

  function totalSalary() {
    return people.reduce((total, p) => total + p.salary, 0);
  }
  function youngest() {
    return Math.min(...people.map((p) => p.age));
  }
}
