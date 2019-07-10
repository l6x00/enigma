'use strict';

require('babel-polyfill');

import chalk from 'chalk';
import figlet from 'figlet';
import inquirer from 'inquirer';
import Enigma from './enigma.js';
import questions from './questions.js';

const askSettings = async () => {
  const settings = await inquirer.prompt(questions);
  return settings;
};

const encrypt = settings => {
  var enigma = new Enigma(
    [
      {definition: settings.rotor1_definition, position: settings.rotor1_position},
      {definition: settings.rotor2_definition, position: settings.rotor2_position},
      {definition: settings.rotor3_definition, position: settings.rotor3_position},
    ],
    settings.entrywheel_definition,
    settings.plugboard_definition,
    settings.reflector_definition
  );

  enigma.encrypt(settings.text)

};

const init = async () => {
  const enigma = chalk.redBright(
    figlet.textSync('ENIGMA', {
      font: 'Cybermedium'
    })
  );

  const settings = await askSettings();

  encrypt(settings);
};

init();
