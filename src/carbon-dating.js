const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  return typeof (sampleActivity) === 'string' && Number(sampleActivity) !== 'NaN' && 15 >= Number(sampleActivity) && Number(sampleActivity) > 0 ? Math.ceil(Math.log(MODERN_ACTIVITY / sampleActivity) * HALF_LIFE_PERIOD / 0.693) : false;
};
