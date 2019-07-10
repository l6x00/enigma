'use strict';

require('babel-polyfill');

import chalk from 'chalk';
import figlet from 'figlet';
import inquirer from 'inquirer';
import enigmajs from 'enigma';
import questions from './questions.js';

const askSettings = async () => {
  const settings = await inquirer.prompt(questions);
  return settings;
};

const encrypt = settings => {
  var rotorI        = new enigmajs.Rotor(settings.rotor1_definition, settings.rotor1_position);
  var rotorII       = new enigmajs.Rotor(settings.rotor2_definition, settings.rotor2_position);
  var rotorIII      = new enigmajs.Rotor(settings.rotor3_definition, settings.rotor3_position);
  var reflector     = new enigmajs.Reflector(settings.reflector_definition);
  var plugboard     = new enigmajs.Plugboard(settings.plugboard_definition);
  var entryWheel    = new enigmajs.EntryWheel(settings.entrywheel_definition);
  
  var enigma = new enigmajs.Enigma([rotorI, rotorII, rotorIII], reflector, plugboard, entryWheel);
  
  console.log( enigma.string( settings.text ) );
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
