function org() {
  class Order {
    constructor(data) {
      this.priority = data.priority;
    }
  }

  const highPriorityCount = orders.filter((o) => "high" === o.priority || "rush" === o.priority).length;
}

function 캡슐화() {
  class Order {
    constructor(data) {
      this._priority = data.priority;
    }
    get priority() {
      return this._priority;
    }
    set priority(aString) {
      this._priority = aString;
    }
  }

  const highPriorityCount = orders.filter((o) => "high" === o.priority || "rush" === o.priority).length;
}

function 값클래스생성() {
  class Priority {
    constructor(value) {
      this._value = value;
    }
    toString() {
      return this._value;
    }
  }
  class Order {
    constructor(data) {
      this._priority = data.priority;
    }
    get priority() {
      return this._priority;
    }
    set priority(aString) {
      this._priority = aString;
    }
  }

  const highPriorityCount = orders.filter((o) => "high" === o.priority || "rush" === o.priority).length;
}

function 접근자수정() {
  class Priority {
    constructor(value) {
      this._value = value;
    }
    toString() {
      return this._value;
    }
  }
  class Order {
    constructor(data) {
      this._priority = data.priority;
    }
    get priority() {
      return this._priority.toString();
    }
    set priority(aString) {
      this._priority = new Priority(aString);
    }
  }

  const highPriorityCount = orders.filter((o) => "high" === o.priority || "rush" === o.priority).length;
}

function 함수명변경() {
  class Priority {
    constructor(value) {
      this._value = value;
    }
    toString() {
      return this._value;
    }
  }
  class Order {
    constructor(data) {
      this._priority = data.priority;
    }
    get priorityString() {
      return this._priority.toString();
    }
    set priority(aString) {
      this._priority = new Priority(aString);
    }
  }

  const highPriorityCount = orders.filter((o) => "high" === o.priorityString || "rush" === o.priorityString).length;
}
