"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _roller = _interopRequireDefault(require("./roller.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class Plugboard extends _roller.default {
  constructor(_plugs, name) {
    super();

    _defineProperty(this, "setPlugs", plugs => {
      plugs = this.getPlugsFormated(plugs);
      this.setWiringByPlugs(plugs);
    });

    _defineProperty(this, "getPlugsFormated", plugs => {
      if (typeof plugs === 'string') {
        plugs = plugs.toUpperCase().split(' ');
      } else if (typeof plugs === 'object' && plugs instanceof Array) {
        plugs = plugs.map(function (plug) {
          return plug.toString().toUpperCase();
        });
      } else {
        plugs = [];
      }

      return plugs;
    });

    _defineProperty(this, "setWiringByPlugs", plugs => {
      let wiring = this.alphabet.slice();
      plugs.forEach(plug => {
        plug = plug.split('');
        wiring[this.alphabet.indexOf(plug[0])] = plug[1];
        wiring[this.alphabet.indexOf(plug[1])] = plug[0];
      });
      this.verifyConnections(wiring, plugs);
      this.setWiring(wiring);
    });

    _defineProperty(this, "verifyConnections", (wiring, plugs) => {
      if (wiring.length > this.alphabet.length || plugs.length > Math.floor(this.alphabet.length / 2)) {
        throw new Error('O Plugboard apenas aceita  ' + Math.floor(this.alphabet.length / 2) + ' conexões a serem setadas');
      }
    });

    this.setName(name);
    this.setPlugs(_plugs);
  }

}

exports.default = Plugboard;