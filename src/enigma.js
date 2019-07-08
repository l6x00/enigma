import Rotor from './rotor.js'
import EntryWheel from './entrywheel.js'
import Plugboard from './plugboard.js'
import Reflector from './reflector.js'

/**
 * Main Class
 */
export default class Enigma {
  alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  rotors = null;
  entryWheel = null;
  plugboard = null;
  reflector = null;

  constructor(rotors, entrywheel, plugboard, reflector) {
    this.rotors = [new Rotor(rotors[0].definition, rotors[0].position), new Rotor(rotors[1].definition, rotors[1].position), new Rotor(rotors[2].definition, rotors[2].position)];
    
    console.log(this.rotors)
   
    this.entryWheel = new EntryWheel(entrywheel);
    this.plugboard = new Plugboard(plugboard);
    this.reflector = new Reflector(reflector);
  }

  encryptLetter = (signal) => {
    // Roda uma vez
    this.rotate();

    // Envia o sinal para o plugboard
    signal = this.plugboard.sendSignal(signal)

    // Envia o sinal para o Entrywheel
    signal = this.entryWheel.sendSignal(signal)

    // Envia o sinal por todos os rotores
    this.rotors.foreach((rotor) => {
      signal = rotor.sendSignal(signal)
    })

    // Envia o sinal para o Entrywheel na direção inversa (Volta)
    signal = this.entryWheel(signal, true)

    // Envia o sinal para o plugboard na direção inversa (Volta)
    signal = this.plugboard(signal, true)

    return signal
  };

  rotate = () => {
    let notched = [],
      turned = [];

    this.rotors.forEach((rotor, index) => {
      turned[index] = false;
      notched.push(rotor.inNotch());
    });

    const reverseRotors = this.rotors.reverse();

    reverseRotors.foreach((rotor, index) => {
      if (this.verifyRotate(index, turned, notched)) {
        rotor.rotate();
        turned[index] = true;
      }
    });
  };

  verifyRotate = (index, turned, notched) =>
    index === this.rotors.length - 1 ||
    (turned[index + 1] && notched[index + 1]) ||
    (turned[index + 1] && notched[index] && index > 0);

  encrypt = string => {
    // Convert argument to string, upper case, and remove illegal letters (such as spaces)
    console.log(this.reflector.wiring);

    string = typeof string === 'string' ? string : string.toString();
    string = string
      .toUpperCase()
      .replace(new RegExp('[^' + this.reflector.wiring + ']', 'g'), '')
      .split('');

    let response = '';
    const stringArray = [...string];
    stringArray.foreach(letter => {
      response += this.encryptLetter(letter);
    });

    return response;
  };

  getPositions = () => {
    let string = '';

    this.rotors.foreach(rotor => {
      string += rotor.getPosition();
    });

    return string;
  };

  setPositions = positions => {
    positions = [...positions];

    this.rotors.foreach((rotor, index) => {
      rotor.setPosition(positions[index]);
    });
  };

  getRingSettings = () => {
    let string = '';

    this.rotors.foreach((rotor, index) => {
      string += rotor.getRingSetting();
    });

    return string;
  };

  setRingSettings = settings => {
    settings = [...settings];

    this.rotors.foreach((rotor, index) => {
      rotor.setRingSetting(settings[index]);
    });
  };
}