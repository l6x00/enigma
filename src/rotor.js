import Roller from './roller.js'

export default class Rotor extends Roller {
  position = 0;
  ringsetting = 0;

  constructor(wiring, notches, name) {
    super()

    this.setWiring(wiring);
    this.setNotches(notches);
    this.setName(name);
  }

  sendSignal = (signal, reverse) => {
    let position;

    position = this.alphabet.indexOf(signal);


    // console.log("this.position", this.position)
    // console.log("position", position)
    // console.log("this.ringsetting", this.ringsetting)
    // console.log("this.alphabet.length", this.alphabet.length)
    position =
      (position + this.position + this.alphabet.length - this.ringsetting) %
      this.alphabet.length;



    signal = this.alphabet[position];

    if (reverse) position = this.wiring.indexOf(signal);

    signal = reverse ? this.alphabet[position] : this.wiring[position];

    position = this.alphabet.indexOf(signal);
    position =
      (position + (this.alphabet.length - this.position + this.ringsetting)) %
      this.alphabet.length;

    signal = this.alphabet[position];
    return signal;
  };

  rotate = () => {
    this.position = (this.position + 1) % this.alphabet.length;
    // console.log("rotate", this.position);
  };

  inNotch = () => {
    let inNotch = false;

    this.notches.every(notch => {
      if (this.position === this.alphabet.indexOf(notch)) {
        inNotch = true;
        return false;
      } else {
        return true;
      }
    });

    return inNotch;
  };

  setNotches = notches => {
    notches = this.formatNotches(notches);

    this.verifyNotchesAreUnique(notches);
    this.verifyLengthOfNotches(notches);

    this.notches = notches;
  };

  formatNotches = notches => {
    if (typeof notches === 'string') {
      notches = notches.toUpperCase().split('');
    } else if (typeof notches === 'object' && notches instanceof Array) {
      notches = notches.map(function(notch) {
        return notch.toString().toUpperCase();
      });
    } else {
      notches = [];
    }

    return notches;
  };

  verifyNotchesAreUnique = notches => {
    if (
      notches.some(function(e, i, l) {
        return l.indexOf(e) !== l.lastIndexOf(e);
      })
    ) {
      throw new Error('Os notches consistem em caracteres únicos.');
    }
  };

  verifyLengthOfNotches = notches => {
    if (notches.length > this.alphabet.length) {
      throw new Error(
        'Você não pode ter mais notches do que caracteres no rotor.'
      );
    }
  };

  getPosition = () => this.alphabet[this.position];

  setPosition = position => {
    this.position = this.alphabet.indexOf(position);
    console.log("setPosition", this.position);
  };

  getRingSetting = () => this.alphabet[this.ringsetting];

  setRingSetting = setting => {
    this.ringsetting = this.alphabet.indexOf(setting);
  };
}
