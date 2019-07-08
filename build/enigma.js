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

      signal = this.plugboard.sendSignal(signal); // Envia o sinal para o Entrywheel

      signal = this.entryWheel.sendSignal(signal); // Envia o sinal por todos os rotores

      this.rotors.foreach(rotor => {
        signal = rotor.sendSignal(signal);
      }); // Envia o sinal para o Entrywheel na direção inversa (Volta)

      signal = this.entryWheel(signal, true); // Envia o sinal para o plugboard na direção inversa (Volta)

      signal = this.plugboard(signal, true);
      return signal;
    });

    _defineProperty(this, "rotate", () => {
      let notched = [],
          turned = [];
      this.rotors.forEach((rotor, index) => {
        turned[index] = false;
        notched.push(rotor.inNotch());
      });
      const reverseRotors = this.rotors.reverse();
      reverseRotors.foreach((rotor, index) => {
        if (this.verifyRotate(index, turned, notched)) {
          rotor.rotate();
          turned[index] = true;
        }
      });
    });

    _defineProperty(this, "verifyRotate", (index, turned, notched) => index === this.rotors.length - 1 || turned[index + 1] && notched[index + 1] || turned[index + 1] && notched[index] && index > 0);

    _defineProperty(this, "encrypt", string => {
      // Convert argument to string, upper case, and remove illegal letters (such as spaces)
      console.log(this.reflector.wiring);
      string = typeof string === 'string' ? string : string.toString();
      string = string.toUpperCase().replace(new RegExp('[^' + this.reflector.wiring + ']', 'g'), '').split('');
      let response = '';
      const stringArray = [...string];
      stringArray.foreach(letter => {
        response += this.encryptLetter(letter);
      });
      return response;
    });

    _defineProperty(this, "getPositions", () => {
      let string = '';
      this.rotors.foreach(rotor => {
        string += rotor.getPosition();
      });
      return string;
    });

    _defineProperty(this, "setPositions", positions => {
      positions = [...positions];
      this.rotors.foreach((rotor, index) => {
        rotor.setPosition(positions[index]);
      });
    });

    _defineProperty(this, "getRingSettings", () => {
      let string = '';
      this.rotors.foreach((rotor, index) => {
        string += rotor.getRingSetting();
      });
      return string;
    });

    _defineProperty(this, "setRingSettings", settings => {
      settings = [...settings];
      this.rotors.foreach((rotor, index) => {
        rotor.setRingSetting(settings[index]);
      });
    });

    this.rotors = [new _rotor.default(rotors[0].definition, rotors[0].position), new _rotor.default(rotors[1].definition, rotors[1].position), new _rotor.default(rotors[2].definition, rotors[2].position)];
    console.log(this.rotors);
    this.entryWheel = new _entrywheel.default(entrywheel);
    this.plugboard = new _plugboard.default(plugboard);
    this.reflector = new _reflector.default(reflector);
  }

}

exports.default = Enigma;