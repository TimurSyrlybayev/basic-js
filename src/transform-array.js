const CustomError = require("../extensions/custom-error");

module.exports = function transform( arr ) {
  if (Array.isArray(arr) === false) throw new Error('Ooops, smth went wrong...');

  let arr2 = [];
  for (let i = 0; i < arr.length; i++) {
    switch (arr[i]) {
      case '--discard-next':
        i++;
        break;
      case '--discard-prev':
        if (i > 0 && arr[i - 2] !== '--discard-next') {
          arr2.pop();
        }
        i;
        break;
      case '--double-next':
        if (i < arr.length - 1) {
          arr2.push(arr[i + 1]);
        }
        i;
        break;
      case '--double-prev':
        if (i > 0 && arr[i - 2] !== '--discard-next') {
          arr2.push(arr[i - 1]);
        }
        i;
        break;
      default:
        arr2.push(arr[i]);
    };
  };
  return arr2  
};
