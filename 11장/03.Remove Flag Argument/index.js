function org() {
  aShipment.deliveryDate = deliveryDate(anOrder, true);

  aShipment.deliveryDate = deliveryDate(anOrder, false);

  // 조건문 분해하기
  function deliveryDate(anOrder, isRush) {
    if (isRush) {
      let deliveryTime;
      if (["MA", "CT"].includes(anOrder.deliveryState)) deliveryTime = 1;
      else if (["NY", "NH"].includes(anOrder.deliveryState)) deliveryTime = 2;
      else deliveryTime = 3;
      return anOrder.placedOn.plusDays(1 + deliveryTime);
    } else {
      let deliveryTime;
      if (["MA", "CT", "NY"].includes(anOrder.deliveryState)) deliveryTime = 2;
      else if (["ME", "NH"].includes(anOrder.deliveryState)) deliveryTime = 3;
      else deliveryTime = 4;
      return anOrder.placedOn.plusDays(2 + deliveryTime);
    }
  }
}

function refactor_02() {
  // 호출함수 변경
  aShipment.deliveryDate = deliveryDate(anOrder, true);

  aShipment.deliveryDate = deliveryDate(anOrder, false);

  function deliveryDate(anOrder, isRush) {
    if (isRush) {
      return rushDeliveryDate(anOrder);
    } else {
      return regularDeliveryDate(anOrder);
    }
  }

  function rushDeliveryDate(anOrder) {
    let deliveryTime;
    if (["MA", "CT"].includes(anOrder.deliveryState)) deliveryTime = 1;
    else if (["NY", "NH"].includes(anOrder.deliveryState)) deliveryTime = 2;
    else deliveryTime = 3;
    return anOrder.placedOn.plusDays(1 + deliveryTime);
  }

  function regularDeliveryDate(anOrder) {
    let deliveryTime;
    if (["MA", "CT", "NY"].includes(anOrder.deliveryState)) deliveryTime = 2;
    else if (["ME", "NH"].includes(anOrder.deliveryState)) deliveryTime = 3;
    else deliveryTime = 4;
    return anOrder.placedOn.plusDays(2 + deliveryTime);
  }
}

function refactor_01() {
  aShipment.deliveryDate = rushDeliveryDate(anOrder);

  aShipment.deliveryDate = regularDeliveryDate(anOrder);

  // 불필요 함수 제거
  function deliveryDate(anOrder, isRush) {
    if (isRush) {
      return rushDeliveryDate(anOrder);
    } else {
      return regularDeliveryDate(anOrder);
    }
  }

  function rushDeliveryDate(anOrder) {
    let deliveryTime;
    if (["MA", "CT"].includes(anOrder.deliveryState)) deliveryTime = 1;
    else if (["NY", "NH"].includes(anOrder.deliveryState)) deliveryTime = 2;
    else deliveryTime = 3;
    return anOrder.placedOn.plusDays(1 + deliveryTime);
  }

  function regularDeliveryDate(anOrder) {
    let deliveryTime;
    if (["MA", "CT", "NY"].includes(anOrder.deliveryState)) deliveryTime = 2;
    else if (["ME", "NH"].includes(anOrder.deliveryState)) deliveryTime = 3;
    else deliveryTime = 4;
    return anOrder.placedOn.plusDays(2 + deliveryTime);
  }
}

function refactor_02() {
  aShipment.deliveryDate = rushDeliveryDate(anOrder);
  aShipment.deliveryDate = regularDeliveryDate(anOrder);

  function rushDeliveryDate(anOrder) {
    let deliveryTime;
    if (["MA", "CT"].includes(anOrder.deliveryState)) deliveryTime = 1;
    else if (["NY", "NH"].includes(anOrder.deliveryState)) deliveryTime = 2;
    else deliveryTime = 3;
    return anOrder.placedOn.plusDays(1 + deliveryTime);
  }

  function regularDeliveryDate(anOrder) {
    let deliveryTime;
    if (["MA", "CT", "NY"].includes(anOrder.deliveryState)) deliveryTime = 2;
    else if (["ME", "NH"].includes(anOrder.deliveryState)) deliveryTime = 3;
    else deliveryTime = 4;
    return anOrder.placedOn.plusDays(2 + deliveryTime);
  }
}

// 로직이 복잡해서 수정이 어려운 경우
// wrapping 함수를 사용한다.
function difficult() {
  aShipment.deliveryDate = rushDeliveryDate(anOrder);

  aShipment.deliveryDate = regularDeliveryDate(anOrder, false);

  function rushDeliveryDate(anOrder) {
    return deliveryDate(anOrder, true);
  }
  function regularDeliveryDate(anOrder) {
    return deliveryDate(anOrder, false);
  }

  function deliveryDate(anOrder, isRush) {
    if (isRush) {
      let deliveryTime;
      if (["MA", "CT"].includes(anOrder.deliveryState)) deliveryTime = 1;
      else if (["NY", "NH"].includes(anOrder.deliveryState)) deliveryTime = 2;
      else deliveryTime = 3;
      return anOrder.placedOn.plusDays(1 + deliveryTime);
    } else {
      let deliveryTime;
      if (["MA", "CT", "NY"].includes(anOrder.deliveryState)) deliveryTime = 2;
      else if (["ME", "NH"].includes(anOrder.deliveryState)) deliveryTime = 3;
      else deliveryTime = 4;
      return anOrder.placedOn.plusDays(2 + deliveryTime);
    }
  }
}
