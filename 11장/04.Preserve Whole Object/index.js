function org() {
  const low = aRoom.daysTempRange.low;
  const high = aRoom.daysTempRange.high;

  if (aPlan.withinRange(low, high)) {
    alert.push("방 온도가 지정범위를 벗어났습니다.");
  }

  class HeatingPlan {
    withinRange(bottom, top) {
      return bottom >= this._temperatureRange.low && top <= this._temperatureRange.high;
    }
    // 원하는 인터페이스의 새 함수 생성
  }
}

function refactor_01() {
  const low = aRoom.daysTempRange.low;
  const high = aRoom.daysTempRange.high;

  // 기존함수 호출자 수정
  if (aPlan.withinRange(low, high)) {
    alert.push("방 온도가 지정범위를 벗어났습니다.");
  }

  class HeatingPlan {
    withinRange(bottom, top) {
      return bottom >= this._temperatureRange.low && top <= this._temperatureRange.high;
    }

    xxNEWWithInRage(aNumberRange) {
      return this.withinRange(aNumberRange.low, aNumberRange.high);
    }
  }
}

function refactor_02() {
  if (aPlan.xxNEWWithInRage(aRoom.daysTempRange)) {
    alert.push("방 온도가 지정범위를 벗어났습니다.");
  }

  class HeatingPlan {
    withinRange(bottom, top) {
      return bottom >= this._temperatureRange.low && top <= this._temperatureRange.high;
    }

    xxNEWWithInRage(aNumberRange) {
      // 원래함수 인라인
      return this.withinRange(aNumberRange.low, aNumberRange.high);
    }
  }
}

function refactor_03() {
  if (aPlan.xxNEWWithInRage(aRoom.daysTempRange)) {
    alert.push("방 온도가 지정범위를 벗어났습니다.");
  }

  class HeatingPlan {
    // 함수명 수정
    xxNEWWithInRage(aNumberRange) {
      return aNumberRange.low >= this._temperatureRange.low && aNumberRange.high <= this._temperatureRange.high;
    }
  }
}

function refactor_04() {
  if (aPlan.withInRage(aRoom.daysTempRange)) {
    alert.push("방 온도가 지정범위를 벗어났습니다.");
  }

  class HeatingPlan {
    withInRage(aNumberRange) {
      return aNumberRange.low >= this._temperatureRange.low && aNumberRange.high <= this._temperatureRange.high;
    }
  }
}
