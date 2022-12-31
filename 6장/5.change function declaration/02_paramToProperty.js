function org() {
  const newEnglanders = someCustomers.filter((c) => inNewEngland(c));

  function inNewEngland(aCustomer) {
    return ["MA", "CT", "ME", "VT", "NH", "RI"].includes(aCustomer.address.state); // extract constant ⌘⌥C
  }
}

function refactor_1() {
  const newEnglanders = someCustomers.filter((c) => inNewEngland(c));

  function inNewEngland(aCustomer) {
    const stateCode = aCustomer.address.state;
    return ["MA", "CT", "ME", "VT", "NH", "RI"].includes(stateCode); // extract method ⌘⌥M
  }
}

function refactor_2() {
  const newEnglanders = someCustomers.filter((c) => inNewEngland(c));

  function inNewEngland(aCustomer) {
    const stateCode = aCustomer.address.state;
    return NEW_inNewEngland(stateCode); // inline ⌘⌥N
  }

  function NEW_inNewEngland(stateCode) {
    return ["MA", "CT", "ME", "VT", "NH", "RI"].includes(stateCode);
  }
}

function refactor_3() {
  const newEnglanders = someCustomers.filter((c) => inNewEngland(c)); // inline ⌘⌥N

  function inNewEngland(aCustomer) {
    return NEW_inNewEngland(aCustomer.address.state);
  }

  function NEW_inNewEngland(stateCode) {
    return ["MA", "CT", "ME", "VT", "NH", "RI"].includes(stateCode);
  }
}

function refactor_4() {
  const newEnglanders = someCustomers.filter((c) => NEW_inNewEngland(c.address.state));

  function NEW_inNewEngland(stateCode) /* rename ⇧F6 */ {
    return ["MA", "CT", "ME", "VT", "NH", "RI"].includes(stateCode);
  }
}

function result() {
  const newEnglanders = someCustomers.filter((c) => inNewEngland(c.address.state));

  function inNewEngland(stateCode) {
    return ["MA", "CT", "ME", "VT", "NH", "RI"].includes(stateCode);
  }
}
