const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if (date === undefined) {
    return 'Unable to determine the time of year!';
  }

  if (Object.prototype.toString.call(date) !== '[object Date]') {
    throw new Error('It took so much time to solve the issue :(');
  }
  
  if (typeof date === 'object' && date.toString().length !== 0) {
    if (date.getMonth() === 11 || (0 <= date.getMonth() && date.getMonth() < 2)) {
      return 'winter';
    } else if (2 <= date.getMonth() && date.getMonth() < 5) {
      return 'spring';
    } else if (5 <= date.getMonth() && date.getMonth() < 8) {
      return 'summer';
    } else if (8 <= date.getMonth() && date.getMonth() < 11) {
      return 'autumn';
    }
  } else if (date.Object.prototype === null) {
    throw new Error('Wrong argument!');
  } else {
    throw new Error('Wrong argument!');
  } 
};
