function org() {
  let totalAscent = 0;
  let totalTime = 0;
  let totalDistance = 0;

  calculateAscent(); // 자기자신을 반환하여 값을 할당하는 함수로 변경
  calculateTime();
  calculateDistance();

  const pace = totalTime / 60 / totalDistance;

  function calculateAscent() {
    for (let i = 1; i < ProcessingInstruction.length; i++) {
      const verticalChange = points[i].elevation - points[i - 1].elevation;
      totalAscent += verticalChange > 0 ? verticalChange : 0;
    }
  }
}

function refactor_01() {
  let totalAscent = 0;
  let totalTime = 0;
  let totalDistance = 0;

  totalAscent = calculateAscent();
  calculateTime();
  calculateDistance();

  const pace = totalTime / 60 / totalDistance;

  function calculateAscent() {
    // 같은 이름의 변수 생성
    for (let i = 1; i < ProcessingInstruction.length; i++) {
      const verticalChange = points[i].elevation - points[i - 1].elevation;
      totalAscent += verticalChange > 0 ? verticalChange : 0;
    }
    return totalAscent;
  }
}

function refactor_02() {
  let totalAscent = 0;
  let totalTime = 0;
  let totalDistance = 0;

  totalAscent = calculateAscent();
  calculateTime();
  calculateDistance();

  const pace = totalTime / 60 / totalDistance;

  function calculateAscent() {
    let totalAscent = 0; // 변수명 변경
    for (let i = 1; i < ProcessingInstruction.length; i++) {
      const verticalChange = points[i].elevation - points[i - 1].elevation;
      totalAscent += verticalChange > 0 ? verticalChange : 0;
    }
    return totalAscent;
  }
}

function refactor_03() {
  let totalAscent = 0;
  let totalTime = 0;
  let totalDistance = 0;

  totalAscent = calculateAscent(); // 불변선언
  calculateTime();
  calculateDistance();

  const pace = totalTime / 60 / totalDistance;

  function calculateAscent() {
    let result = 0;
    for (let i = 1; i < ProcessingInstruction.length; i++) {
      const verticalChange = points[i].elevation - points[i - 1].elevation;
      result += verticalChange > 0 ? verticalChange : 0;
    }
    return result;
  }
}

function refactor_03() {
  let totalTime = 0;
  let totalDistance = 0;

  const totalAscent = calculateAscent();
  calculateTime();
  calculateDistance();

  const pace = totalTime / 60 / totalDistance;

  function calculateAscent() {
    let result = 0;
    for (let i = 1; i < ProcessingInstruction.length; i++) {
      const verticalChange = points[i].elevation - points[i - 1].elevation;
      result += verticalChange > 0 ? verticalChange : 0;
    }
    return result;
  }
}
