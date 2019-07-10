'use strict';

var _chalk = _interopRequireDefault(require("chalk"));

var _figlet = _interopRequireDefault(require("figlet"));

var _inquirer = _interopRequireDefault(require("inquirer"));

var _enigma = _interopRequireDefault(require("enigma"));

var _questions = _interopRequireDefault(require("./questions.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

require('babel-polyfill');

const askSettings = async () => {
  const settings = await _inquirer.default.prompt(_questions.default);
  return settings;
};

const encrypt = settings => {
  var rotorI = new _enigma.default.Rotor(settings.rotor1_definition, settings.rotor1_position);
  var rotorII = new _enigma.default.Rotor(settings.rotor2_definition, settings.rotor2_position);
  var rotorIII = new _enigma.default.Rotor(settings.rotor3_definition, settings.rotor3_position);
  var reflector = new _enigma.default.Reflector(settings.reflector_definition);
  var plugboard = new _enigma.default.Plugboard(settings.plugboard_definition);
  var entryWheel = new _enigma.default.EntryWheel(settings.entrywheel_definition);
  var enigma = new _enigma.default.Enigma([rotorI, rotorII, rotorIII], reflector, plugboard, entryWheel);
  console.log(enigma.string(settings.text));
};

const init = async () => {
  const enigma = _chalk.default.redBright(_figlet.default.textSync('ENIGMA', {
    font: 'Cybermedium'
  }));

  const settings = await askSettings();
  encrypt(settings);
};

init();