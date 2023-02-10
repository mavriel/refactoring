function org() {
  const thermostat = {
    selectedTemperature: 15,
    currentTemperature: 20,
  };

  if (thePlan.targetTemperature > thermostat.currentTemperature) setToHeat();
  else if (thePlan.targetTemperature < thermostat.currentTemperature) setToCool();
  else setOff();

  class HeatingPlan {
    get targetTemperature() {
      // 변수추출하기
      if (thermostat.selectedTemperature > this._max) return this._max;
      else if (thermostat.selectedTemperature < this._min) return this._min;
      else return thermostat.selectedTemperature;
    }
  }
}

function refactor_01() {
  const thermostat = {
    selectedTemperature: 15,
    currentTemperature: 20,
  };

  if (thePlan.targetTemperature > thermostat.currentTemperature) setToHeat();
  else if (thePlan.targetTemperature < thermostat.currentTemperature) setToCool();
  else setOff();

  class HeatingPlan {
    get targetTemperature() {
      const selectedTemperature = thermostat.selectedTemperature;
      // 메서드 추출
      if (selectedTemperature > this._max) return this._max;
      else if (selectedTemperature < this._min) return this._min;
      else return selectedTemperature;
    }
  }
}

function refactor_02() {
  const thermostat = {
    selectedTemperature: 15,
    currentTemperature: 20,
  };

  if (thePlan.targetTemperature > thermostat.currentTemperature) setToHeat();
  else if (thePlan.targetTemperature < thermostat.currentTemperature) setToCool();
  else setOff();

  class HeatingPlan {
    get targetTemperature() {
      // 인라인
      const selectedTemperature = thermostat.selectedTemperature;
      return this.xxNewTargetTemperature(selectedTemperature);
    }

    xxNewTargetTemperature(selectedTemperature) {
      if (selectedTemperature > this._max) return this._max;
      else if (selectedTemperature < this._min) return this._min;
      else return selectedTemperature;
    }
  }
}

function refactor_03() {
  const thermostat = {
    selectedTemperature: 15,
    currentTemperature: 20,
  };

  // 메서드 인라인
  if (thePlan.targetTemperature > thermostat.currentTemperature) setToHeat();
  else if (thePlan.targetTemperature < thermostat.currentTemperature) setToCool();
  else setOff();

  class HeatingPlan {
    get targetTemperature() {
      return this.xxNewTargetTemperature(thermostat.selectedTemperature);
    }

    xxNewTargetTemperature(selectedTemperature) {
      if (selectedTemperature > this._max) return this._max;
      else if (selectedTemperature < this._min) return this._min;
      else return selectedTemperature;
    }
  }
}

function refactor_04() {
  const thermostat = {
    selectedTemperature: 15,
    currentTemperature: 20,
  };

  if (thePlan.targetTemperature(thermostat.selectedTemperature) > thermostat.currentTemperature) setToHeat();
  else if (thePlan.targetTemperature(thermostat.selectedTemperature) < thermostat.currentTemperature) setToCool();
  else setOff();

  class HeatingPlan {
    // 함수명 변경
    targetTemperature(selectedTemperature) {
      if (selectedTemperature > this._max) return this._max;
      else if (selectedTemperature < this._min) return this._min;
      else return selectedTemperature;
    }
  }
}
