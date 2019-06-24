"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Main script
class Enigma {
  constructor(rotors, ukw, steckerbrett, etw) {
    _defineProperty(this, "alphabet", null);

    _defineProperty(this, "rotors", null);

    _defineProperty(this, "ukw", null);

    _defineProperty(this, "steckerbrett", null);

    _defineProperty(this, "etw", null);

    _defineProperty(this, "sendSignal", () => {
      // Roda uma vez
      this.rotate();
    });

    _defineProperty(this, "rotate", () => {});

    _defineProperty(this, "convertToString", () => {});

    _defineProperty(this, "getPositions", () => {});

    _defineProperty(this, "setPositions", () => {});

    _defineProperty(this, "getPositions", () => {});

    _defineProperty(this, "setPositions", () => {});

    this.rotors = rotors;
    this.ukw = ukw;
    this.steckerbrett = steckerbrett;
    this.etw = etw;
    this.alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  }

}

exports.default = Enigma;