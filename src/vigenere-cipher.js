const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {

  constructor(type) {
    this.type = type;
  }

  encrypt(message, key) {

    if (message === undefined || key === undefined) {
      throw new Error('That\'s not good.');
    }

    let arr = [];
    // let message = 'attack at dawn!';
    for (let i = 0; i < message.length; i++) {
      if (message[i].search(/[^A-Za-z]/) !== -1) {
        arr.push(i);
      }
    }
    let messageWithLettersOnly = message.replace(/[^A-Za-z]/g, '');

    // let key = 'alphonse';
    let fullKey = key.padEnd(messageWithLettersOnly.length, key);

    let messageCode = [];
    for (let i = 0; i < messageWithLettersOnly.length; i++) {
      messageCode.push(messageWithLettersOnly.toUpperCase().charCodeAt(i));
    }

    let keyCode = [];
    for (let i = 0; i < fullKey.length; i++) {
      keyCode.push(fullKey.toUpperCase().charCodeAt(i));
    }
    let messageCodedInNumbers = [];
    for (let i = 0; i < messageCode.length; i++) {
      if ((messageCode[i] + keyCode[i]) > 26) {
        messageCodedInNumbers.push((messageCode[i] + keyCode[i]) % 26);
      } else {
        messageCodedInNumbers.push(messageCode[i] + keyCode[i]);
      }
    }

    let messageCodedInLetters = [];
    for (let i = 0; i < messageCodedInNumbers.length; i++) {
      messageCodedInLetters.push(String.fromCodePoint((messageCodedInNumbers[i] + 65)));
    }

    for (let i = 0; i < arr.length; i++) {
      messageCodedInLetters.splice([arr[i]], 0, message[arr[i]]);
    }

    this.type === false ? messageCodedInLetters.reverse() : messageCodedInLetters;

    let finalCodedMessage = messageCodedInLetters.join('');

    return finalCodedMessage;
  } 
  decrypt(message, key) {

    if (message === undefined || key === undefined) {
      throw new Error('Coca-cola');
    }

    let arr = [];
    // let message = 'attack at dawn!';
    for (let i = 0; i < message.length; i++) {
      if (message[i].search(/[^A-Za-z]/) !== -1) {
        arr.push(i);
      }
    }
    let messageWithLettersOnly = message.replace(/[^A-Za-z]/g, '');

    // let key = 'alphonse';
    let fullKey = key.padEnd(messageWithLettersOnly.length, key);

    let messageCode = [];
    for (let i = 0; i < messageWithLettersOnly.length; i++) {
      messageCode.push(messageWithLettersOnly.toUpperCase().charCodeAt(i));
    }

    let keyCode = [];
    for (let i = 0; i < fullKey.length; i++) {
      keyCode.push(fullKey.toUpperCase().charCodeAt(i));
    }
    let messageCodedInNumbers = [];
    for (let i = 0; i < messageCode.length; i++) {
      if ((messageCode[i] + 26 - keyCode[i]) >= 26) {
        messageCodedInNumbers.push((messageCode[i] + 26 - keyCode[i]) % 26);
      } else {
        messageCodedInNumbers.push(messageCode[i] + 26 - keyCode[i]);
      }
    }

    let messageCodedInLetters = [];
    for (let i = 0; i < messageCodedInNumbers.length; i++) {
      messageCodedInLetters.push(String.fromCodePoint((messageCodedInNumbers[i] + 65)));
    }

    for (let i = 0; i < arr.length; i++) {
      messageCodedInLetters.splice([arr[i]], 0, message[arr[i]]);
    }

    this.type === false ? messageCodedInLetters.reverse() : messageCodedInLetters;

    let finalCodedMessage = messageCodedInLetters.join('');

    return finalCodedMessage;
  }
}

module.exports = VigenereCipheringMachine;
