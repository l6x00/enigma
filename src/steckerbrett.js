const Walze = require("./walze");

export default class Steckerbrett extends Walze {
  constructor(plugs, name) {
    this.setName(name);
    this.setPlugs(plugs);
  }

  setPlugs = plugs => {
    plugs = this.getPlugsFormated(plugs);

    this.setWiringByPlugs(plugs);
  };

  getPlugsFormated = plugs => {
    if (typeof plugs === "string") {
      plugs = plugs.toUpperCase().split(" ");
    } else if (typeof plugs === "object" && plugs instanceof Array) {
      plugs = plugs.map(function(plug) {
        return plug.toString().toUpperCase();
      });
    } else {
      plugs = [];
    }

    return plugs;
  };

  setWiringByPlugs = plugs => {
    let wiring = this.alphabet.slice();

    plugs.forEach(plug => {
      plug = plug.split("");
      wiring[this.alphabet.indexOf(plug[0])] = plug[1];
      wiring[this.alphabet.indexOf(plug[1])] = plug[0];
    });

    this.verifyConnections(wiring, plugs);

    this.setWiring(wiring);
  };

  verifyConnections = (wiring, plugs) => {
    if (
      wiring.length > this.alphabet.length ||
      plugs.length > Math.floor(this.alphabet.length / 2)
    ) {
      throw new Error(
        "O Steckerbrett apenas aceita  " +
          Math.floor(this.alphabet.length / 2) +
          " conexões a serem setadas"
      );
    }
  };
}
