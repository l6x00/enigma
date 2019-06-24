"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _walze = _interopRequireDefault(require("./walze"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class Rotor extends _walze.default {
  constructor(wiring, notches, name) {
    this.setWiring(wiring);
    this.setNotches(notches);
    this.setName(name);
  }

}

exports.default = Rotor;