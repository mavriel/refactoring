class ProductionPlan {
  get production() {
    return this._production; // 어설션추가
  }
  applyAdjustment(anAdjustment) {
    this._adjustments.push(anAdjustment);
    this._production += anAdjustment.amount;
  }
  // _production 계산함수 추가
}

class ProductionPlan_01 {
  get production() {
    assert(this._production === this.calculatedProduction); // 어설션 제거
    return this._production;
  }
  applyAdjustment(anAdjustment) {
    this._adjustments.push(anAdjustment);
    this._production += anAdjustment.amount;
  }
  get calculatedProduction() {
    return this._adjustments.reduce((sum, a) => sum + a.amount, 0);
  }
}

class ProductionPlan_02 {
  get production() {
    return this._production; // 인라인
  }
  applyAdjustment(anAdjustment) {
    this._adjustments.push(anAdjustment);
    this._production += anAdjustment.amount; // 제거
  }
  get calculatedProduction() {
    return this._adjustments.reduce((sum, a) => sum + a.amount, 0);
  }
}

class ProductionPlan_03 {
  get production() {
    return this._adjustments.reduce((sum, a) => sum + a.amount, 0);
  }
  applyAdjustment(anAdjustment) {
    this._adjustments.push(anAdjustment);
  }
}
