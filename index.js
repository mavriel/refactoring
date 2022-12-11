const invoices = require("./invoices.json");
const plays = require("./plays.json");
const statement = require('./statement');

console.log(statement(invoices[0], plays));
