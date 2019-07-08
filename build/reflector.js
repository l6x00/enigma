"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _roller = _interopRequireDefault(require("./roller.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Reflector extends _roller.default {
  constructor(wiring, name) {
    super();
    this.setWiring(wiring);
    this.setName(name);
  }

}

exports.default = Reflector;