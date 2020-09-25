const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (!arr instanceof Array) throw new Error();

  let result = [];
  let removed = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "--discard-prev") {
      if (result.length > 0 && removed.indexOf(i - 1) === -1) {
        result = result.slice(0, result.length - 1);
        removed.push(i - 1);
      }
    } else if (arr[i] === "--double-prev") {
      if (i > 0 && removed.indexOf(i - 1) === -1) {
        result.push(arr[i - 1]);
      }
    } else if (arr[i] === "--discard-next") {
      removed.push(++i);
    } else if (arr[i] === "--double-next") {
      if (++i < arr.length) {
        result.push(arr[i]);
        result.push(arr[i]);
      }
    } else {
      result.push(arr[i]);
    }
  }

  return result;
};
