// Main script

export default class Enigma {
  alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  rotors = null;
  ukw = null;
  plugboard = null;
  reflector = null;

  constructor(rotors, ukw, plugboard, reflector) {
    this.rotors = rotors;
    this.ukw = ukw;
    this.plugboard = plugboard;
    this.reflector = reflector;
  }

  sendSignal = () => {
    // Roda uma vez
    this.rotate();
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

  convertToString = string => {
    // Convert argument to string, upper case, and remove illegal letters (such as spaces)
    string = typeof string === "string" ? string : string.toString();
    string = string
      .toUpperCase()
      .replace(new RegExp("[^" + this.reflector.wiring + "]", "g"), "")
      .split("");

    let response = "";
    const stringArray = [...string];
    stringArray.foreach(letter => {
      response += this.signal(letter);
    });

    return response;
  };

  getPositions = () => {
    let string = "";

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
    let string = "";

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
