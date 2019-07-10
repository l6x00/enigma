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
       
    this.entryWheel = new EntryWheel(entrywheel);
    this.plugboard = new Plugboard(plugboard);
    this.reflector = new Reflector(reflector);
  }

  encryptLetter = (signal) => {
    // Roda uma vez
    this.rotate();

    // Envia o sinal para o plugboard
    signal = this.plugboard.sendSignal(signal)

    console.log("signal plugboard: ", signal)

    // Envia o sinal para o Entrywheel
    signal = this.entryWheel.sendSignal(signal)

    console.log("signal entryWheel: ", signal)

    // Envia o sinal por todos os rotores
    for (var index = this.rotors.length - 1; index >= 0; index--) {
      signal = this.rotors[index].sendSignal(signal)
    }

    console.log("signal rotors: ", signal)


    // Envia o sinal para o Entrywheel na direção inversa (Volta)
    signal = this.reflector.sendSignal(signal, true)

    console.log("signal reflector: ", signal)


    // Envia o sinal por todos os rotores (Volta)
    this.rotors.map((rotor) => {
      signal = rotor.sendSignal(signal, true)
    })

    console.log("signal reverse rotors: ", signal)

    // Envia o sinal para o Entrywheel (Volta)
    signal = this.entryWheel.sendSignal(signal, true)
    console.log("signal reverse entrywheel: ", signal)

    // Envia o sinal para o plugboard na direção inversa (Volta)
    signal = this.plugboard.sendSignal(signal, true)
    console.log("signal plugboard: ", signal)

    return signal
  };

  rotate = () => {
    let notched = [],
      turned = [];

    this.rotors.map((rotor, index) => {
      turned[index] = false;
      notched.push(rotor.inNotch());
    });

    for (var index = this.rotors.length - 1; index >= 0; index--) {
      if (index === this.rotors.length - 1 ||
        (turned[index + 1] && notched[index + 1]) ||
        (turned[index + 1] && notched[index] && index > 0)) {
          this.rotors[index].rotate();
          turned[index] = true;
      }
    }
  };

  encrypt = string => {
    // Convert argument to string, upper case, and remove illegal letters (such as spaces)

    string = typeof string === 'string' ? string : string.toString();
    string = string
      .toUpperCase()
      .replace(new RegExp('[^' + this.reflector.wiring + ']', 'g'), '')
      .split('');

    let response = '';
    const stringArray = [...string];
    
    stringArray.map(letter => {
      response += this.encryptLetter(letter);
    });

    console.log("Encrypted text: ", response);


    return response;
  };

  getPositions = () => {
    let string = '';

    this.rotors.map(rotor => {
      string += rotor.getPosition();
    });

    return string;
  };

  setPositions = positions => {
    positions = [...positions];

    this.rotors.map((rotor, index) => {
      rotor.setPosition(positions[index]);
    });
  };

  getRingSettings = () => {
    let string = '';

    this.rotors.map((rotor, index) => {
      string += rotor.getRingSetting();
    });

    return string;
  };

  setRingSettings = settings => {
    settings = [...settings];

    this.rotors.map((rotor, index) => {
      rotor.setRingSetting(settings[index]);
    });
  };

  reverseArray = (arr) => {
    var newArray = [];
    for (var i = arr.length - 1; i >= 0; i--) {
      newArray.push(arr[i]);
    }
    return newArray;
  }
}