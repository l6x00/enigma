import Roller from './roller.js'

export default class Reflector extends Roller {
  constructor(wiring, name) {
    super()
    this.setWiring(wiring);
    this.setName(name);
  }
}
