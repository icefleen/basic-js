const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  if (typeof str !== "string") str = String(str);
  if (options === undefined) options = {};
  if (options.repeatTimes === undefined) options.repeatTimes = 1;
  if (options.separator === undefined) options.separator = "+";
  if (options.additionSeparator === undefined) options.additionSeparator = "|";

  let result = "";

  for (let i = 1; i <= options.repeatTimes; i++) {
    let addition =
      options.addition === undefined
        ? ""
        : repeater(options.addition, {
            repeatTimes: options.additionRepeatTimes,
            separator: options.additionSeparator,
          });
    result +=
      str + addition + (i < options.repeatTimes ? options.separator : "");
  }

  return result;
};
