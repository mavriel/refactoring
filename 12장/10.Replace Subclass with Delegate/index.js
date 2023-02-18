function org() {
  // 생성자 팩터리 함수로 변경
  booking1 = new Booking(show, date);
  booking2 = new PremiumBooking(show, date, extras);

  // 위임클래스 생성

  class Booking {
    constructor(show, date) {
      this._show = show;
      this._date = date;
    }
    get hasTalkback() {
      return this._show.hasOwnProperty("talkback") && !this.isPeakDay;
    }
    get basePrice() {
      let result = this._show.price;
      if (this.isPeakDay) result += Math.round(result * 0.15);
      return result;
    }
  }

  class PremiumBooking extends Booking {
    constructor(show, date, extras) {
      super(show, date);
      this._extras = extras;
    }
    get hasTalkback() {
      return this._show.hasOwnProperty("talkback");
    }
    get basePrice() {
      return Math.round(super.basePrice + this._extras.premiumFee);
    }
    get hasDinner() {
      return this._extras.hasOwnProperty("dinner") && !this.isPeakDay;
    }
  }
}

function refactor_01() {
  function createBooking(show, date) {
    return new Booking(show, date);
  }
  function createPremiumBooking(show, date, extras) {
    // 위임과 예약 객처 연결
    return new PremiumBooking(show, date, extras);
  }

  booking1 = createBooking(show, date);
  booking2 = createPremiumBooking(show, date, extras);

  class PremiumBookingDelegate {
    constructor(hostBooking, extras) {
      this._host = hostBooking;
      this._extras = extras;
    }
  }

  class Booking {
    constructor(show, date) {
      this._show = show;
      this._date = date;
    }
    get hasTalkback() {
      return this._show.hasOwnProperty("talkback") && !this.isPeakDay;
    }
    get basePrice() {
      let result = this._show.price;
      if (this.isPeakDay) result += Math.round(result * 0.15);
      return result;
    }
  }

  class PremiumBooking extends Booking {
    constructor(show, date, extras) {
      super(show, date);
      this._extras = extras;
    }
    get hasTalkback() {
      return this._show.hasOwnProperty("talkback");
    }
    get basePrice() {
      return Math.round(super.basePrice + this._extras.premiumFee);
    }
    get hasDinner() {
      return this._extras.hasOwnProperty("dinner") && !this.isPeakDay;
    }
  }
}

function refactor_02() {
  function createBooking(show, date) {
    return new Booking(show, date);
  }
  function createPremiumBooking(show, date, extras) {
    const result = new PremiumBooking(show, date, extras);
    result._bePremium(extras);
    return result;
  }

  booking1 = createBooking(show, date);
  booking2 = createPremiumBooking(show, date, extras);

  class PremiumBookingDelegate {
    constructor(hostBooking, extras) {
      this._host = hostBooking;
      this._extras = extras;
    }
  }

  class Booking {
    constructor(show, date) {
      this._show = show;
      this._date = date;
    }
    get hasTalkback() {
      return this._show.hasOwnProperty("talkback") && !this.isPeakDay;
    }
    get basePrice() {
      let result = this._show.price;
      if (this.isPeakDay) result += Math.round(result * 0.15);
      return result;
    }

    _bePremium(extras) {
      this._premiumDelegate = new PremiumBookingDelegate(this, extras);
    }
  }

  class PremiumBooking extends Booking {
    constructor(show, date, extras) {
      super(show, date);
      this._extras = extras;
    }
    // 함수옮기기
    get hasTalkback() {
      return this._show.hasOwnProperty("talkback");
    }
    get basePrice() {
      return Math.round(super.basePrice + this._extras.premiumFee);
    }
    get hasDinner() {
      return this._extras.hasOwnProperty("dinner") && !this.isPeakDay;
    }
  }
}

function refactor_03() {
  function createBooking(show, date) {
    return new Booking(show, date);
  }
  function createPremiumBooking(show, date, extras) {
    const result = new PremiumBooking(show, date, extras);
    result._bePremium(extras);
    return result;
  }

  booking1 = createBooking(show, date);
  booking2 = createPremiumBooking(show, date, extras);

  class PremiumBookingDelegate {
    constructor(hostBooking, extras) {
      this._host = hostBooking;
      this._extras = extras;
    }

    get hasTalkback() {
      return this._host._show.hasOwnProperty("talkback");
    }
  }

  class Booking {
    constructor(show, date) {
      this._show = show;
      this._date = date;
    }
    get hasTalkback() {
      return this._show.hasOwnProperty("talkback") && !this.isPeakDay;
    }
    get basePrice() {
      let result = this._show.price;
      if (this.isPeakDay) result += Math.round(result * 0.15);
      return result;
    }

    _bePremium(extras) {
      this._premiumDelegate = new PremiumBookingDelegate(this, extras);
    }
  }

  class PremiumBooking extends Booking {
    constructor(show, date, extras) {
      super(show, date);
      this._extras = extras;
    }
    // 함수 제거 및 위임 사용 로직을 슈퍼클래스로 이동
    get hasTalkback() {
      return this._premiumDelegate.hasTalkback;
    }
    get basePrice() {
      return Math.round(super.basePrice + this._extras.premiumFee);
    }
    get hasDinner() {
      return this._extras.hasOwnProperty("dinner") && !this.isPeakDay;
    }
  }
}

function refactor_04() {
  // basePrice 처리

  function createBooking(show, date) {
    return new Booking(show, date);
  }
  function createPremiumBooking(show, date, extras) {
    const result = new PremiumBooking(show, date, extras);
    result._bePremium(extras);
    return result;
  }

  booking1 = createBooking(show, date);
  booking2 = createPremiumBooking(show, date, extras);

  class PremiumBookingDelegate {
    constructor(hostBooking, extras) {
      this._host = hostBooking;
      this._extras = extras;
    }

    get hasTalkback() {
      return this._host._show.hasOwnProperty("talkback");
    }
  }

  class Booking {
    constructor(show, date) {
      this._show = show;
      this._date = date;
    }
    get hasTalkback() {
      return this._premiumDelegate
        ? this._premiumDelegate.hasTalkback
        : this._show.hasOwnProperty("talkback") && !this.isPeakDay;
    }
    get basePrice() {
      let result = this._show.price;
      if (this.isPeakDay) result += Math.round(result * 0.15);
      return result;
    }

    _bePremium(extras) {
      this._premiumDelegate = new PremiumBookingDelegate(this, extras);
    }
  }

  class PremiumBooking extends Booking {
    constructor(show, date, extras) {
      super(show, date);
      this._extras = extras;
    }
    get basePrice() {
      return Math.round(super.basePrice + this._extras.premiumFee);
    }
    get hasDinner() {
      return this._extras.hasOwnProperty("dinner") && !this.isPeakDay;
    }
  }
}

function refactor_05() {
  function createBooking(show, date) {
    return new Booking(show, date);
  }
  function createPremiumBooking(show, date, extras) {
    const result = new PremiumBooking(show, date, extras);
    result._bePremium(extras);
    return result;
  }

  booking1 = createBooking(show, date);
  booking2 = createPremiumBooking(show, date, extras);

  class PremiumBookingDelegate {
    constructor(hostBooking, extras) {
      this._host = hostBooking;
      this._extras = extras;
    }
    get hasTalkback() {
      return this._host._show.hasOwnProperty("talkback");
    }
    extendBasePrice(base) {
      return Math.round(base + this._extras.premiumFee);
    }
  }

  class Booking {
    constructor(show, date) {
      this._show = show;
      this._date = date;
    }
    get hasTalkback() {
      return this._premiumDelegate
        ? this._premiumDelegate.hasTalkback
        : this._show.hasOwnProperty("talkback") && !this.isPeakDay;
    }
    get basePrice() {
      let result = this._show.price;
      if (this.isPeakDay) result += Math.round(result * 0.15);
      return this._premiumDelegate ? this._premiumDelegate.extendBasePrice(result) : result;
    }

    _bePremium(extras) {
      this._premiumDelegate = new PremiumBookingDelegate(this, extras);
    }
  }

  class PremiumBooking extends Booking {
    constructor(show, date, extras) {
      super(show, date);
      this._extras = extras;
    }
    // 위임으로 이동 및 분배로직 추가
    get hasDinner() {
      return this._extras.hasOwnProperty("dinner") && !this.isPeakDay;
    }
  }
}

function refactor_06() {
  function createBooking(show, date) {
    return new Booking(show, date);
  }
  // 불필요 클래스 제거
  function createPremiumBooking(show, date, extras) {
    const result = new PremiumBooking(show, date, extras);
    result._bePremium(extras);
    return result;
  }

  booking1 = createBooking(show, date);
  booking2 = createPremiumBooking(show, date, extras);

  class PremiumBookingDelegate {
    constructor(hostBooking, extras) {
      this._host = hostBooking;
      this._extras = extras;
    }
    get hasTalkback() {
      return this._host._show.hasOwnProperty("talkback");
    }
    extendBasePrice(base) {
      return Math.round(base + this._extras.premiumFee);
    }

    get hasDinner() {
      return this._extras.hasOwnProperty("dinner") && !this._host.isPeakDay;
    }
  }

  class Booking {
    constructor(show, date) {
      this._show = show;
      this._date = date;
    }
    get hasTalkback() {
      return this._premiumDelegate
        ? this._premiumDelegate.hasTalkback
        : this._show.hasOwnProperty("talkback") && !this.isPeakDay;
    }
    get basePrice() {
      let result = this._show.price;
      if (this.isPeakDay) result += Math.round(result * 0.15);
      return this._premiumDelegate ? this._premiumDelegate.extendBasePrice(result) : result;
    }

    _bePremium(extras) {
      this._premiumDelegate = new PremiumBookingDelegate(this, extras);
    }
    get hasDinner() {
      return this._premiumDelegate ? this._premiumDelegate.hasDinner : undefined;
    }
  }

  class PremiumBooking extends Booking {
    constructor(show, date, extras) {
      super(show, date);
      this._extras = extras;
    }
    get hasDinner() {
      return this._extras.hasOwnProperty("dinner") && !this.isPeakDay;
    }
  }
}

function refactor_07() {
  function createBooking(show, date) {
    return new Booking(show, date);
  }
  // 불필요 클래스 제거
  function createPremiumBooking(show, date, extras) {
    const result = new Booking(show, date);
    result._bePremium(extras);
    return result;
  }

  booking1 = createBooking(show, date);
  booking2 = createPremiumBooking(show, date, extras);

  class PremiumBookingDelegate {
    constructor(hostBooking, extras) {
      this._host = hostBooking;
      this._extras = extras;
    }
    get hasTalkback() {
      return this._host._show.hasOwnProperty("talkback");
    }
    extendBasePrice(base) {
      return Math.round(base + this._extras.premiumFee);
    }

    get hasDinner() {
      return this._extras.hasOwnProperty("dinner") && !this._host.isPeakDay;
    }
  }

  class Booking {
    constructor(show, date) {
      this._show = show;
      this._date = date;
    }
    get hasTalkback() {
      return this._premiumDelegate
        ? this._premiumDelegate.hasTalkback
        : this._show.hasOwnProperty("talkback") && !this.isPeakDay;
    }
    get basePrice() {
      let result = this._show.price;
      if (this.isPeakDay) result += Math.round(result * 0.15);
      return this._premiumDelegate ? this._premiumDelegate.extendBasePrice(result) : result;
    }

    _bePremium(extras) {
      this._premiumDelegate = new PremiumBookingDelegate(this, extras);
    }
    get hasDinner() {
      return this._premiumDelegate ? this._premiumDelegate.hasDinner : undefined;
    }
  }
}
