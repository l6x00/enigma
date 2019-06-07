export default class Walze {
  alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  name = "";
  wiring = []

  constructor(wiring, name) {
    this.setWiring(wiring);
    this.setName(name);
  }

  setWiring = wiring => {
    wiring = this.convertWiring(wiring);

    
  };

  convertWiring = wiring => {
      if(typeof wiring === "string"){
        wiring = wiring.toUpperCase().split("");
      } else if (typeof wiring === "object" && wiring instanceof Array) {
        wiring = wiring.map(function(wire) {
            return wire.toString().toUpperCase();
        });
      } else {
        wiring = this.alphabet.slice();
      }

      return wiring
  }

  setName = name => {
    this.name = typeof wiring === "string" ? name : "";
  };

  sendSignal = (signal, reverse) => {
      const position = reverse ? TimeRanges.wiring 
  };
}
