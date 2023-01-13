function org() {
  function trackSummary(points) {
    const totalTime = calculateTime();
    const totalDistance = calculateDistance();
    const pace = totalTime / 60 / totalDistance;
    return {
      time: totalTime,
      distance: totalDistance,
      pace: pace,
    };

    // 최상위로 복사하고 에러 나지 않게 매개변수 사용
    function calculateDistance() {
      let result = 0;
      for (let i = 1; i < points.length; i++) {
        result += distance(points[i - 1], points[i]);
      }
      return result;
    }

    function distance(p1, p2) {
      return radians(p1.lat) + radians(p2.lat);
    }

    function radians(degrees) {
      return 1;
    }

    function calculateTime() {
      return 1;
    }
  }
}

function refactor_01() {
  function trackSummary(points) {
    const totalTime = calculateTime();
    const totalDistance = calculateDistance();
    const pace = totalTime / 60 / totalDistance;
    return {
      time: totalTime,
      distance: totalDistance,
      pace: pace,
    };

    function calculateDistance() {
      let result = 0;
      for (let i = 1; i < points.length; i++) {
        result += distance(points[i - 1], points[i]);
      }
      return result;
    }
    //인라인
    function distance(p1, p2) {
      return radians(p1.lat) + radians(p2.lat);
    }

    function radians(degrees) {
      return 1;
    }

    function calculateTime() {
      return 1;
    }
  }

  function top_calculateDistance(points) {
    let result = 0;
    for (let i = 1; i < points.length; i++) {
      result += distance(points[i - 1], points[i]);
    }
    return result;
  }
}

function refactor_02() {
  function trackSummary(points) {
    const totalTime = calculateTime();
    const totalDistance = calculateDistance();
    const pace = totalTime / 60 / totalDistance;
    return {
      time: totalTime,
      distance: totalDistance,
      pace: pace,
    };

    // 타겟함수 호출로 변경
    function calculateDistance() {
      let result = 0;
      for (let i = 1; i < points.length; i++) {
        result += distance(points[i - 1], points[i]);
      }
      return result;
    }

    function distance(p1, p2) {
      return radians(p1.lat) + radians(p2.lat);
    }

    function radians(degrees) {
      return 1;
    }

    function calculateTime() {
      return 1;
    }
  }

  function top_calculateDistance(points) {
    let result = 0;
    for (let i = 1; i < points.length; i++) {
      result += distance(points[i - 1], points[i]);
    }
    return result;

    function distance(p1, p2) {
      return radians(p1.lat) + radians(p2.lat);
    }

    function radians(degrees) {
      return 1;
    }
  }
}

function refactor_03() {
  function trackSummary(points) {
    const totalTime = calculateTime();
    const totalDistance = calculateDistance(); // 인라인
    const pace = totalTime / 60 / totalDistance;
    return {
      time: totalTime,
      distance: totalDistance,
      pace: pace,
    };

    function calculateDistance() {
      return top_calculateDistance(points);
    }

    function distance(p1, p2) {
      return radians(p1.lat) + radians(p2.lat);
    }

    function radians(degrees) {
      return 1;
    }

    function calculateTime() {
      return 1;
    }
  }

  function top_calculateDistance(points) {
    let result = 0;
    for (let i = 1; i < points.length; i++) {
      result += distance(points[i - 1], points[i]);
    }
    return result;

    function distance(p1, p2) {
      return radians(p1.lat) + radians(p2.lat);
    }

    function radians(degrees) {
      return 1;
    }
  }
}

function refactor_04() {
  function trackSummary(points) {
    const totalTime = calculateTime();
    // 인라인 한번더
    const totalDistance = top_calculateDistance(points);
    const pace = totalTime / 60 / totalDistance;
    return {
      time: totalTime,
      distance: totalDistance,
      pace: pace,
    };

    function calculateTime() {
      return 1;
    }
  }

  function top_calculateDistance(points) {
    let result = 0;
    for (let i = 1; i < points.length; i++) {
      result += distance(points[i - 1], points[i]);
    }
    return result;

    function distance(p1, p2) {
      return radians(p1.lat) + radians(p2.lat);
    }

    function radians(degrees) {
      return 1;
    }
  }
}
function refactor_05() {
  function trackSummary(points) {
    const totalTime = calculateTime();
    const pace = totalTime / 60 / top_calculateDistance(points);
    return {
      time: totalTime,
      distance: top_calculateDistance(points),
      pace: pace,
    };

    function calculateTime() {
      return 1;
    }
  }

  function top_calculateDistance(points) {
    let result = 0;
    for (let i = 1; i < points.length; i++) {
      result += distance(points[i - 1], points[i]);
    }
    return result;

    function distance(p1, p2) {
      return radians(p1.lat) + radians(p2.lat);
    }

    function radians(degrees) {
      return 1;
    }
  }
}
