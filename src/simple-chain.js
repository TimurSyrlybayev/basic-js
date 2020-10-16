const CustomError = require("../extensions/custom-error");

const chainMaker = {
  output: [],
  getLength() {
    return chainMaker.output.length;
  },
  addLink(value) {
    if (value === undefined) {
      chainMaker.output.push(`( )~~`);
    } else {
      chainMaker.output.push(`( ${value} )~~`);
    }
    return chainMaker;
  },
  removeLink(position) {
    if (!Number.isInteger(position) || position > chainMaker.output.length) {
      chainMaker.output = [];
      throw new Error('Nope.');
    } else {
      chainMaker.output.splice(position - 1, 1);
    }
    return chainMaker;
  },
  reverseChain() {
    chainMaker.output.reverse();
    return chainMaker;
  },
  finishChain() {
    chainMaker.output.splice(-1, 1, chainMaker.output[chainMaker.output.length - 1].slice(0, -2));
    let result = chainMaker.output.join('');
    chainMaker.output = [];
    return result;
  }
};

module.exports = chainMaker;
