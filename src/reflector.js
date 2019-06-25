const Roller = require('./roller');

export default class Reflector extends Roller {
  constructor(wiring, name) {
    this.setWiring(wiring);
    this.setName(name);
  }
}
