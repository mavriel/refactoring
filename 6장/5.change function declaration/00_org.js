function circum(radius) {
  return 2 * Math.PI * radius;
}

class Book {
  constructor() {
    this._reservations = [];
  }

  addReservation(customer) {
    this._reservations.push(customer);
  }
}
