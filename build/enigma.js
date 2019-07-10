"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _rotor = _interopRequireDefault(require("./rotor.js"));

var _entrywheel = _interopRequireDefault(require("./entrywheel.js"));

var _plugboard = _interopRequireDefault(require("./plugboard.js"));

var _reflector = _interopRequireDefault(require("./reflector.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Main Class
 */
class Enigma {
  constructor(rotors, entrywheel, plugboard, reflector) {
    _defineProperty(this, "alphabet", 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split(''));

    _defineProperty(this, "rotors", null);

    _defineProperty(this, "entryWheel", null);

    _defineProperty(this, "plugboard", null);

    _defineProperty(this, "reflector", null);

    _defineProperty(this, "encryptLetter", signal => {
      // Roda uma vez
      this.rotate(); // Envia o sinal para o plugboard

      signal = this.plugboard.sendSignal(signal);
      console.log("signal plugboard: ", signal); // Envia o sinal para o Entrywheel

      signal = this.entryWheel.sendSignal(signal);
      console.log("signal entryWheel: ", signal); // Envia o sinal por todos os rotores

      for (var index = this.rotors.length - 1; index >= 0; index--) {
        signal = this.rotors[index].sendSignal(signal);
      }

      console.log("signal rotors: ", signal); // Envia o sinal para o Entrywheel na direção inversa (Volta)

      signal = this.reflector.sendSignal(signal, true);
      console.log("signal reflector: ", signal); // Envia o sinal por todos os rotores (Volta)

      this.rotors.map(rotor => {
        signal = rotor.sendSignal(signal, true);
      });
      console.log("signal reverse rotors: ", signal); // Envia o sinal para o Entrywheel (Volta)

      signal = this.entryWheel.sendSignal(signal, true);
      console.log("signal reverse entrywheel: ", signal); // Envia o sinal para o plugboard na direção inversa (Volta)

      signal = this.plugboard.sendSignal(signal, true);
      console.log("signal plugboard: ", signal);
      return signal;
    });

    _defineProperty(this, "rotate", () => {
      let notched = [],
          turned = [];
      this.rotors.map((rotor, index) => {
        turned[index] = false;
        notched.push(rotor.inNotch());
      });

      for (var index = this.rotors.length - 1; index >= 0; index--) {
        if (index === this.rotors.length - 1 || turned[index + 1] && notched[index + 1] || turned[index + 1] && notched[index] && index > 0) {
          this.rotors[index].rotate();
          turned[index] = true;
        }
      }
    });

    _defineProperty(this, "encrypt", string => {
      // Convert argument to string, upper case, and remove illegal letters (such as spaces)
      string = typeof string === 'string' ? string : string.toString();
      string = string.toUpperCase().replace(new RegExp('[^' + this.reflector.wiring + ']', 'g'), '').split('');
      let response = '';
      const stringArray = [...string];
      stringArray.map(letter => {
        response += this.encryptLetter(letter);
      });
      console.log("Encrypted text: ", response);
      return response;
    });

    _defineProperty(this, "getPositions", () => {
      let string = '';
      this.rotors.map(rotor => {
        string += rotor.getPosition();
      });
      return string;
    });

    _defineProperty(this, "setPositions", positions => {
      positions = [...positions];
      this.rotors.map((rotor, index) => {
        rotor.setPosition(positions[index]);
      });
    });

    _defineProperty(this, "getRingSettings", () => {
      let string = '';
      this.rotors.map((rotor, index) => {
        string += rotor.getRingSetting();
      });
      return string;
    });

    _defineProperty(this, "setRingSettings", settings => {
      settings = [...settings];
      this.rotors.map((rotor, index) => {
        rotor.setRingSetting(settings[index]);
      });
    });

    _defineProperty(this, "reverseArray", arr => {
      var newArray = [];

      for (var i = arr.length - 1; i >= 0; i--) {
        newArray.push(arr[i]);
      }

      return newArray;
    });

    this.rotors = [new _rotor.default(rotors[0].definition, rotors[0].position), new _rotor.default(rotors[1].definition, rotors[1].position), new _rotor.default(rotors[2].definition, rotors[2].position)];
    this.entryWheel = new _entrywheel.default(entrywheel);
    this.plugboard = new _plugboard.default(plugboard);
    this.reflector = new _reflector.default(reflector);
  }

}

exports.default = Enigma;