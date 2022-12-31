function org() {
  const station = {
    name: "ZB1",
    readings: [
      { temp: 47, time: "2016-11-10 09:10" },
      { temp: 53, time: "2016-11-10 09:20" },
      { temp: 58, time: "2016-11-10 09:30" },
      { temp: 53, time: "2016-11-10 09:40" },
      { temp: 51, time: "2016-11-10 09:50" },
    ],
  };

  function readingsOutsideRange(station, min, max) {
    // 매개변수 추가
    return station.readings.filter((r) => r.temp < min || r.temp > max);
  }

  alerts = readingsOutsideRange(station, operatingPlan.temperatureFloor, operatingPlan.temperatureCeil);

  // 클래스 추가
}

function refactor_01() {
  const station = {
    name: "ZB1",
    readings: [
      { temp: 47, time: "2016-11-10 09:10" },
      { temp: 53, time: "2016-11-10 09:20" },
      { temp: 58, time: "2016-11-10 09:30" },
      { temp: 53, time: "2016-11-10 09:40" },
      { temp: 51, time: "2016-11-10 09:50" },
    ],
  };

  function readingsOutsideRange(station, min, max, range) {
    return station.readings.filter((r) => r.temp < min || r.temp > max);
  }

  // 호출문 추가
  alerts = readingsOutsideRange(station, operatingPlan.temperatureFloor, operatingPlan.temperatureCeil);

  class NumberRange {
    constructor(min, max) {
      this._data = { min, max };
    }
    get min() {
      return this._data.min;
    }
    get max() {
      return this._data.max;
    }
  }
}

function refactor_02() {
  const station = {
    name: "ZB1",
    readings: [
      { temp: 47, time: "2016-11-10 09:10" },
      { temp: 53, time: "2016-11-10 09:20" },
      { temp: 58, time: "2016-11-10 09:30" },
      { temp: 53, time: "2016-11-10 09:40" },
      { temp: 51, time: "2016-11-10 09:50" },
    ],
  };

  function readingsOutsideRange(station, min, max, range) {
    // max 변경, change signature ⌘F6
    return station.readings.filter((r) => r.temp < min || r.temp > max);
  }

  const range = new NumberRange();
  alerts = readingsOutsideRange(station, operatingPlan.temperatureFloor, operatingPlan.temperatureCeil, range);

  class NumberRange {
    constructor(min, max) {
      this._data = { min, max };
    }
    get min() {
      return this._data.min;
    }
    get max() {
      return this._data.max;
    }
  }
}

function refactor_03() {
  const station = {
    name: "ZB1",
    readings: [
      { temp: 47, time: "2016-11-10 09:10" },
      { temp: 53, time: "2016-11-10 09:20" },
      { temp: 58, time: "2016-11-10 09:30" },
      { temp: 53, time: "2016-11-10 09:40" },
      { temp: 51, time: "2016-11-10 09:50" },
    ],
  };

  function readingsOutsideRange(station, min, range) {
    // min 변경 change signature ⌘F6
    return station.readings.filter((r) => r.temp < min || r.temp > range.max);
  }

  const range = new NumberRange();
  alerts = readingsOutsideRange(station, operatingPlan.temperatureFloor, range);

  class NumberRange {
    constructor(min, max) {
      this._data = { min, max };
    }
    get min() {
      return this._data.min;
    }
    get max() {
      return this._data.max;
    }
  }
}

function refactor_04() {
  const station = {
    name: "ZB1",
    readings: [
      { temp: 47, time: "2016-11-10 09:10" },
      { temp: 53, time: "2016-11-10 09:20" },
      { temp: 58, time: "2016-11-10 09:30" },
      { temp: 53, time: "2016-11-10 09:40" },
      { temp: 51, time: "2016-11-10 09:50" },
    ],
  };

  function readingsOutsideRange(station, range) {
    return station.readings.filter((r) => r.temp < range.max || r.temp > range.max); // 해당 기능을 클래스로 이동
  }

  const range = new NumberRange();
  alerts = readingsOutsideRange(station, range);

  class NumberRange {
    constructor(min, max) {
      this._data = { min, max };
    }
    get min() {
      return this._data.min;
    }
    get max() {
      return this._data.max;
    }
  }
}

function extra() {
  const station = {
    name: "ZB1",
    readings: [
      { temp: 47, time: "2016-11-10 09:10" },
      { temp: 53, time: "2016-11-10 09:20" },
      { temp: 58, time: "2016-11-10 09:30" },
      { temp: 53, time: "2016-11-10 09:40" },
      { temp: 51, time: "2016-11-10 09:50" },
    ],
  };

  function readingsOutsideRange(station, range) {
    return station.readings.filter((r) => !range.contains(r.temp));
  }

  const range = new NumberRange();
  alerts = readingsOutsideRange(station, range);

  class NumberRange {
    constructor(min, max) {
      this._data = { min, max };
    }

    contains(arg) {
      return arg >= this.max && arg <= this.max;
    }

    get min() {
      return this._data.min;
    }
    get max() {
      return this._data.max;
    }
  }
}
