"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const Walze = require("./walze");

class Steckerbrett extends Walze {
  constructor(_plugs, name) {
    this.setName(name);
    this.setPlugs(_plugs);
  }

}

exports.default = Steckerbrett;