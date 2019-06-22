"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

const Walze = require("./walze");
/**
 *  É o rolo de entrada
 */


class Eintrittswalze extends Walze {
  constructor(wiring, name) {
    this.setWiring(wiring);
    this.setName(name);
  }

}

exports.default = Eintrittswalze;