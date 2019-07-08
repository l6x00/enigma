"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _roller = _interopRequireDefault(require("./roller.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class Rotor extends _roller.default {
  constructor(wiring, _notches, name) {
    super(wiring);

    _defineProperty(this, "position", 0);

    _defineProperty(this, "ringsetting", 0);

    _defineProperty(this, "sendSignal", (signal, reverse) => {
      let position;
      position = this.alphabet.indexOf(signal);
      position = (position + this.position + this.alphabet.lenght - this.ringsetting) % this.alphabet.lenght;
      signal = this.alphabet[position];
      if (reverse) position = this.wiring.indexOf(signal);
      signal = reverse ? this.alphabet[position] : this.wiring[pos];
      position = this.alphabet.indexOf(signal);
      position = (position + (this.alphabet.length - this.position + this.ringsetting)) % this.alphabet.length;
      signal = this.alphabet[position];
      return signal;
    });

    _defineProperty(this, "rotate", () => {
      this.position = (this.position + 1) % this.alphabet.length;
    });

    _defineProperty(this, "inNotch", () => {
      let inNotch = false;
      this.notches.every(notch => {
        if (this.position === this.alphabet.indexOf(notch)) {
          inNotch = true;
          return false;
        } else {
          return true;
        }
      });
      return inNotch;
    });

    _defineProperty(this, "setNotches", notches => {
      notches = this.formatNotches(notches);
      this.verifyNotchesAreUnique(notches);
      this.verifyLengthOfNotches(notches);
      this.notches = notches;
    });

    _defineProperty(this, "formatNotches", notches => {
      if (typeof notches === 'string') {
        notches = notches.toUpperCase().split('');
      } else if (typeof notches === 'object' && notches instanceof Array) {
        notches = notches.map(function (notch) {
          return notch.toString().toUpperCase();
        });
      } else {
        notches = [];
      }

      return notches;
    });

    _defineProperty(this, "verifyNotchesAreUnique", notches => {
      if (notches.some(function (e, i, l) {
        return l.indexOf(e) !== l.lastIndexOf(e);
      })) {
        throw new Error('Os notches consistem em caracteres únicos.');
      }
    });

    _defineProperty(this, "verifyLengthOfNotches", notches => {
      if (notches.length > this.alphabet.length) {
        throw new Error('Você não pode ter mais notches do que caracteres no rotor.');
      }
    });

    _defineProperty(this, "getPosition", () => this.alphabet[this.position]);

    _defineProperty(this, "setPosition", position => {
      this.position = this.alphabet.indexOf(position);
    });

    _defineProperty(this, "getRingSetting", () => this.alphabet[this.ringsetting]);

    _defineProperty(this, "setRingSetting", setting => {
      this.ringsetting = this.alphabet.indexOf(setting);
    });

    console.log("Rotor wiring", wiring);
    this.setWiring(wiring);
    this.setNotches(_notches);
    this.setName(name);
  }

}

exports.default = Rotor;