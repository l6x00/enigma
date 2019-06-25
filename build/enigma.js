"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Enigma = void 0;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Main script
class Enigma {
  constructor(rotors, ukw, plugboard, reflector) {
    _defineProperty(this, "alphabet", 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split(''));

    _defineProperty(this, "rotors", null);

    _defineProperty(this, "ukw", null);

    _defineProperty(this, "plugboard", null);

    _defineProperty(this, "reflector", null);

    _defineProperty(this, "sendSignal", () => {
      // Roda uma vez
      this.rotate();
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
      const stringArray = [...string]; // stringArray.foreach(letter => {
      //   response += this.signal(letter);
      // });
      // return response;
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

    this.rotors = rotors;
    this.ukw = ukw;
    this.plugboard = plugboard;
    this.reflector = reflector;
  }

}

exports.Enigma = Enigma;