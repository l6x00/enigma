const Walze = require("./walze");

/**
 *  É o rolo de entrada
 */
export default class Eintrittswalze extends Walze {
  constructor(wiring, name) {
    this.setWiring(wiring);
    this.setName(name);
  }
}
