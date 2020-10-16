const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    if (Array.isArray(arr) === true) {
      let count = 0;
      let i = 0;
      while (i < arr.length) {
        count = Math.max(count, this.calculateDepth(arr[i]));
        i++;
      }
      return count += 1;
    }
    return 0;
  }
};