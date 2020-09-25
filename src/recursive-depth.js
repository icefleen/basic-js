const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let max = 1;

    for (let elem of arr) {
      if (elem instanceof Array) {
        let depth = this.calculateDepth(elem);
        if (depth + 1 > max) max = depth + 1;
      }
    }

    return max;
  }
};