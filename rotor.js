import Walze from "./walze";

export default class Rotor extends Walze {
  position = 0;
  ringsetting = 0;

  constructor(wiring, notches, name) {
    this.setWiring(wiring);
    this.setNotches(notches);
    this.setName(name);
  }

  sendSignal = (signal, reverse) => {};

  rotate = () => {};

  inNotch = () => {};

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
