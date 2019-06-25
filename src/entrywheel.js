const Roller = require('./roller');

/**
 *  É o rolo de entrada
 */
export default class EntryWheel extends Roller {
  constructor(wiring, name) {
    this.setWiring(wiring);
    this.setName(name);
  }
}
