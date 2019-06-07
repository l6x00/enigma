const Walze = require("./walze");

export default class Steckerbrett extends Walze {
  constructor(plugs, name) {
    this.setName(name);
    this.setPlugs(plugs);
  }

  setPlugs = () => {};
}
