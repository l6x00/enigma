const Roller = require('./roller');

class Reflector extends Roller {
  constructor(wiring, name) {
    this.setWiring(wiring);
    this.setName(name);
  }
}

export { Reflector };
