const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(is_direct) {
    this.is_direct = is_direct === undefined ? true : is_direct;
    this.chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  }

  encrypt(message, key) {
    if (message === undefined || key === undefined) throw new Error();

    message = message.toUpperCase();
    key = key.toUpperCase();

    let encrypted_message = "";
    let keyPos = 0;

    for (let i = 0; i < message.length; i++) {
      if (this.chars.indexOf(message[i]) === -1) {
        encrypted_message += message[i];
      } else {
        encrypted_message += this.chars[
          (this.chars.indexOf(message[i]) + this.chars.indexOf(key[keyPos])) %
            26
        ];
        keyPos = ++keyPos % key.length;
      }
    }

    if (this.is_direct) return encrypted_message;

    return [...encrypted_message].reverse().join("");
  }

  decrypt(message, key) {
    if (message === undefined || key === undefined) throw new Error();

    message = message.toUpperCase();

    key = key.toUpperCase();

    let decrypted_message = "";
    let keyPos = 0;

    for (let i = 0; i < message.length; i++) {
      if (this.chars.indexOf(message[i]) === -1) {
        decrypted_message += message[i];
      } else {
        let position =
          this.chars.indexOf(message[i]) - this.chars.indexOf(key[keyPos]);
        if (position < 0) position += 26;
        decrypted_message += this.chars[position];

        keyPos = ++keyPos % key.length;
      }
    }

    return this.is_direct
      ? decrypted_message
      : [...decrypted_message].reverse().join("");
  }
}

module.exports = VigenereCipheringMachine;
