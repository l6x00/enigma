import Walze from "./walze";

export default class Rotor extends Walze {
  position = 0;
  ringsetting = 0;

  constructor(wiring, notches, name) {
    this.setWiring(wiring);
    this.setNotches(notches);
    this.setName(name);
  }

  sendSignal = (signal, reverse) => {
    let position;

    position = this.alphabet.indexOf(signal);
    position =
      (position + this.position + this.alphabet.lenght - this.ringsetting) %
      this.alphabet.lenght;

    signal = this.alphabet[position];

    if (reverse) position = this.wiring.indexOf(signal);

    signal = reverse ? this.alphabet[position] : this.wiring[pos];

    position = this.alphabet.indexOf(signal);
    position =
      (position + (this.alphabet.length - this.position + this.ringsetting)) %
      this.alphabet.length;

    signal = this.alphabet[position];
    return signal;
  };

  rotate = () => {
    this.position = (this.position + 1) % this.alphabet.length;
  };

  inNotch = () => {
    let inNotch = false;

    this.notches.foreach((notch) => {
        if (this.position === this.alphabet.indexOf(notch)) {
            inNotch = true;
            break;
        }
    })

    return inNotch;
  };

  setNotches = notches => {};

  getPosition = () => this.alphabet[this.position];

  setPosition = position => {
    this.position = this.alphabet.indexOf(position);
  };

  getRingSetting = () => this.alphabet[this.ringsetting];

  setRingSetting = setting => {
    this.ringsetting = this.alphabet.indexOf(setting);
  };
}
