var uniqueRandomArray = require("unique-random-array");
var names = require("./demo-names");

module.exports = {
  all: names,
  random: uniqueRandomArray(names)
};
