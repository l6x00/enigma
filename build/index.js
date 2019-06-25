'use strict';

require('babel-polyfill');

const chalk = require('chalk');

const figlet = require('figlet');

const inquirer = require('inquirer');

const {
  Enigma
} = require('./enigma.js');

const {
  questions
} = require('./questions.js');

const askSettings = async () => {
  const settings = await inquirer.prompt(questions);
  return settings;
};

const encrypt = settings => {
  var enigma = new Enigma([[settings.rotor1_definition, settings.rotor1_position], [settings.rotor2_definition, settings.rotor2_position], [settings.rotor3_definition, settings.rotor3_position]], settings.reflector_definition, settings.plugboard_definition, settings.entrywheel_definition);
  console.log(enigma);
  console.log(enigma.encrypt('EXAMPLEMESSAGE'));
};

const init = async () => {
  const enigma = chalk.redBright(figlet.textSync('ENIGMA', {
    font: 'Cybermedium'
  }));
  console.log(enigma);
  const settings = await askSettings();
  console.log(settings);
  encrypt(settings);
};

init();