const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  str = String(str);
  !options.additionRepeatTimes ? options.additionRepeatTimes = 1 : options.additionRepeatTimes;
  !options.repeatTimes ? options.repeatTimes = 1 : options.repeatTimes;
  !options.separator ? options.separator = '+' : options.separator;
  !options.additionSeparator ? options.additionSeparator = '|' : options.additionSeparator;
  options.addition || options.addition === false || options.addition === null ? String(options.addition) : options.addition = '';
  let substring = `${options.addition}${options.additionSeparator}`.repeat(options.additionRepeatTimes).slice(0, -`${options.additionSeparator.length}`);
  let string = `${str}${substring}${options.separator}`.repeat(options.repeatTimes).slice(0, -`${options.separator.length}`);
  return string;
};
  