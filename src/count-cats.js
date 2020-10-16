const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  let count = 0;
  matrix.forEach(function (item) {
    count += item.filter(element => element === '^^').length;
  });
  return count;
};
