function org() {
  const low = aRoom.daysTempRange.low;
  const high = aRoom.daysTempRange.high;

  // 변수추출하기
  if (aPlan.withinRange(low, high)) {
    alert.push("방 온도가 지정범위를 벗어났습니다.");
  }

  class HeatingPlan {
    withinRange(bottom, top) {
      return bottom >= this._temperatureRange.low && top <= this._temperatureRange.high;
    }
  }
}

function refactor_01() {
  // 매개변수 추출
  const low = aRoom.daysTempRange.low;
  const high = aRoom.daysTempRange.high;
  const isWithInRange = aPlan.withinRange(low, high);
  if (isWithInRange) {
    alert.push("방 온도가 지정범위를 벗어났습니다.");
  }

  class HeatingPlan {
    withinRange(bottom, top) {
      return bottom >= this._temperatureRange.low && top <= this._temperatureRange.high;
    }
  }
}

function refactor_02() {
  const tempRange = aRoom.daysTempRange;
  // 함수추출하기
  const low = tempRange.low;
  const high = tempRange.high;
  const isWithInRange = aPlan.withinRange(low, high);
  if (isWithInRange) {
    alert.push("방 온도가 지정범위를 벗어났습니다.");
  }

  class HeatingPlan {
    withinRange(bottom, top) {
      return bottom >= this._temperatureRange.low && top <= this._temperatureRange.high;
    }
  }
}

function refactor_03() {
  const tempRange = aRoom.daysTempRange;

  const isWithInRange = xxNewWithinRange(aPlan, tempRange);
  if (isWithInRange) {
    alert.push("방 온도가 지정범위를 벗어났습니다.");
  }

  // 함수 옮기기
  function xxNewWithinRange(aPlan, tempRange) {
    const low = tempRange.low;
    const high = tempRange.high;
    const isWithInRange = aPlan.withinRange(low, high);
    return isWithInRange;
  }

  class HeatingPlan {
    withinRange(bottom, top) {
      return bottom >= this._temperatureRange.low && top <= this._temperatureRange.high;
    }
  }
}

function refactor_04() {
  const tempRange = aRoom.daysTempRange;

  const isWithInRange = aPlan.xxNewWithinRange(tempRange);
  if (isWithInRange) {
    alert.push("방 온도가 지정범위를 벗어났습니다.");
  }

  class HeatingPlan {
    withinRange(bottom, top) {
      return bottom >= this._temperatureRange.low && top <= this._temperatureRange.high;
    }

    // 인라인하고, 이름바꾸기.....
    xxNewWithinRange(tempRange) {
      const low = tempRange.low;
      const high = tempRange.high;
      const isWithInRange = this.withinRange(low, high);
      return isWithInRange;
    }
  }
}
