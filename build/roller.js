"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class Roller {
  constructor() {
    _defineProperty(this, "alphabet", 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split(''));

    _defineProperty(this, "name", '');

    _defineProperty(this, "wiring", []);

    _defineProperty(this, "setWiring", wiring => {
      this.wiring = this.convertWiring(wiring);
      this.verifyUniqueWiring();
    });

    _defineProperty(this, "convertWiring", wiring => {
      if (typeof wiring === 'string') {
        wiring = wiring.toUpperCase().split('');
      } else if (typeof wiring === 'object' && wiring instanceof Array) {
        wiring = wiring.map(function (wire) {
          return wire.toString().toUpperCase();
        });
      } else {
        wiring = this.alphabet.slice();
      }

      return wiring;
    });

    _defineProperty(this, "verifyUniqueWiring", wiring => {
      if (this.wiring.some(function (e, i, l) {
        return l.indexOf(e) !== l.lastIndexOf(e);
      }) || this.wiring.length !== this.alphabet.length) {
        throw new Error('O Walze deve ter ' + this.alphabet.length + ' caracteres únicos.');
      }
    });

    _defineProperty(this, "setName", name => {
      this.name = typeof wiring === 'string' ? name : '';
    });

    _defineProperty(this, "sendSignal", (signal, reverse = false) => {
      const position = reverse ? this.wiring.indexOf(signal) : this.alphabet.indexOf(signal);
      signal = reverse ? this.alphabet[position] : this.wiring[position];
      return signal;
    });
  }

}

exports.default = Roller;