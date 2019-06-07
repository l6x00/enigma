const Walze = require("./walze");

export default class Umkehrwalze extends Walze {
  constructor(wiring, name) {
    this.setWiring(wiring);
    this.setName(name);
  }
}
