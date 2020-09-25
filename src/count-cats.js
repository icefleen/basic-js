const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  return matrix.reduce(
    (totalCount, arr) =>
      totalCount +
      arr.reduce((lineCount, val) => lineCount + (val === "^^"), 0),
    0
  );
};
