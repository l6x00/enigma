export default class Walze {
  alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  name = "";
  wiring = [];

  constructor(wiring, name) {
    this.setWiring(wiring);
    this.setName(name);
  }

  setWiring = wiring => {
    this.verifyUniqueWiring(wiring);

    this.wiring = this.convertWiring(wiring);
  };

  convertWiring = wiring => {
    if (typeof wiring === "string") {
      wiring = wiring.toUpperCase().split("");
    } else if (typeof wiring === "object" && wiring instanceof Array) {
      wiring = wiring.map(function(wire) {
        return wire.toString().toUpperCase();
      });
    } else {
      wiring = this.alphabet.slice();
    }

    return wiring;
  };

  verifyUniqueWiring = wiring => {
    if (
      wiring.some(function(e, i, l) {
        return l.indexOf(e) !== l.lastIndexOf(e);
      }) ||
      wiring.length !== this.alphabet.length
    ) {
      throw new Error(
        "O Walze deve ter " + this.alphabet.length + " caracteres únicos."
      );
    }
  };

  setName = name => {
    this.name = typeof wiring === "string" ? name : "";
  };

  sendSignal = (signal, reverse) => {
    const position = reverse
      ? this.wiring.indexOf(signal)
      : this.alphabet.indexOf(signal);

    signal = reverse ? this.alphabet[position] : this.wiring[position];
    return signal;
  };
}
