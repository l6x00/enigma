import Roller from './roller.js'

/**
 *  É o rolo de entrada
 */
export default class EntryWheel extends Roller {
  constructor(wiring, name) {
    super()
    this.setWiring(wiring);
    this.setName(name);
  }
}
