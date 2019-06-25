"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

const Roller = require('./roller');
/**
 *  É o rolo de entrada
 */


class EntryWheel extends Roller {
  constructor(wiring, name) {
    this.setWiring(wiring);
    this.setName(name);
  }

}

exports.default = EntryWheel;