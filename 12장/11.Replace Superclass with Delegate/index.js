class CatalogItem {
  constructor(id, title, tags) {
    this._id = id;
    this._title = title;
    this._tags = tags;
  }

  get id() {
    return this._id;
  }

  get title() {
    return this._title;
  }

  hasTag(arg) {
    return this._tags.includes(arg);
  }
}

class Scroll_org extends CatalogItem {
  // 슈퍼클래스 인스턴스 대입
  constructor(id, title, tags, dataLastCleaned) {
    super(id, title, tags);
    this._lastCleaned = dataLastCleaned;
  }

  needsCleaning(targetDate) {
    const threshold = this.hasTag("revered") ? 700 : 1500;
    return this.daysSinceLastCleaning(targetDate) > threshold;
  }

  daysSinceLastCleaning(targetDate) {
    return this._lastCleaned.until(targetDate, ChronoUnit.DAYS);
  }
}

class Scroll_01 extends CatalogItem {
  constructor(id, title, tags, dataLastCleaned) {
    super(id, title, tags);
    this._catalogItem = new CatalogItem(id, title, tags);
    this._lastCleaned = dataLastCleaned;
  }

  // 서브클래스에서 사용하는 슈퍼클래스의 동작 각각에 대응하는 전달 메서드 작성

  needsCleaning(targetDate) {
    const threshold = this.hasTag("revered") ? 700 : 1500;
    return this.daysSinceLastCleaning(targetDate) > threshold;
  }

  daysSinceLastCleaning(targetDate) {
    return this._lastCleaned.until(targetDate, ChronoUnit.DAYS);
  }
}

// 상속관계 제거
class Scroll_02 extends CatalogItem {
  constructor(id, title, tags, dataLastCleaned) {
    super(id, title, tags);
    this._catalogItem = new CatalogItem(id, title, tags);
    this._lastCleaned = dataLastCleaned;
  }

  get id() {
    return this._catalogItem.id;
  }
  get title() {
    return this._catalogItem.title;
  }
  hasTag(aString) {
    return this._catalogItem.hasTag(aString);
  }

  needsCleaning(targetDate) {
    const threshold = this.hasTag("revered") ? 700 : 1500;
    return this.daysSinceLastCleaning(targetDate) > threshold;
  }

  daysSinceLastCleaning(targetDate) {
    return this._lastCleaned.until(targetDate, ChronoUnit.DAYS);
  }
}

class Scroll_03 {
  constructor(id, title, tags, dataLastCleaned) {
    this._catalogItem = new CatalogItem(id, title, tags);
    this._lastCleaned = dataLastCleaned;
  }

  get id() {
    return this._catalogItem.id;
  }
  get title() {
    return this._catalogItem.title;
  }
  hasTag(aString) {
    return this._catalogItem.hasTag(aString);
  }

  needsCleaning(targetDate) {
    const threshold = this.hasTag("revered") ? 700 : 1500;
    return this.daysSinceLastCleaning(targetDate) > threshold;
  }

  daysSinceLastCleaning(targetDate) {
    return this._lastCleaned.until(targetDate, ChronoUnit.DAYS);
  }
}
