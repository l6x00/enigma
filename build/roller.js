"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class Roller {
  constructor(_wiring, _name) {
    _defineProperty(this, "alphabet", 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split(''));

    _defineProperty(this, "name", '');

    _defineProperty(this, "wiring", []);

    _defineProperty(this, "setWiring", wiring => {
      console.log("setWiring", wiring);
      this.wiring = this.convertWiring(wiring);
      this.verifyUniqueWiring(wiring);
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
      console.log("verifyUniqueWiring", wiring);

      if (this.wiring.some(function (e, i, l) {
        return l.indexOf(e) !== l.lastIndexOf(e);
      }) || wiring.length !== this.alphabet.length) {
        throw new Error('O Walze deve ter ' + this.alphabet.length + ' caracteres únicos.');
      }
    });

    _defineProperty(this, "setName", name => {
      this.name = typeof wiring === 'string' ? name : '';
    });

    _defineProperty(this, "sendSignal", (signal, reverse) => {
      const position = reverse ? this.wiring.indexOf(signal) : this.alphabet.indexOf(signal);
      signal = reverse ? this.alphabet[position] : this.wiring[position];
      return signal;
    });

    console.log(_wiring); //this.setWiring(wiring);
    //this.setName(name);
  }

}

exports.default = Roller;