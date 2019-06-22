"use strict";

require("babel-polyfill");

const chalk = require("chalk");

const figlet = require("figlet");

const inquirer = require("inquirer");

const Enigma = require("./enigma.js");

const questions = [{
  type: "input",
  name: "rotor1_definition",
  message: "What's the definition of rotor I?",
  default: "JGDQOXUSCAMIFRVTPNEWKBLZYH"
}, {
  type: "input",
  name: "rotor1_position",
  message: "What's the initial position of rotor I?",
  default: "J"
}, {
  type: "input",
  name: "rotor2_definition",
  message: "What's the definition of rotor II?",
  default: "NTZPSFBOKMWRCJDIVLAEYUXHGQ"
}, {
  type: "input",
  name: "rotor2_position",
  message: "What's the initial position of rotor II?",
  default: "N"
}, {
  type: "input",
  name: "rotor3_definition",
  message: "What's the definition of rotor III?",
  default: "JVIUBHTCDYAKEQZPOSGXNRMWFL"
}, {
  type: "input",
  name: "rotor3_position",
  message: "What's the initial position of rotor III?",
  default: "J"
}, {
  type: "input",
  name: "reflector_definition",
  message: "What's the definition of reflector?",
  default: "QYHOGNECVPUZTFDJAXWMKISRBL"
}, {
  type: "input",
  name: "plugboard_definition",
  message: "What's the definition of plugboard?",
  default: "AD CN ET FL GI JV KZ PU QY WX"
}, {
  type: "input",
  name: "entrywheel_definition",
  message: "What's the definition of entry wheel?",
  default: "QWERTZUIOASDFGHJKPYXCVBNML"
}, {
  type: "input",
  name: "text",
  message: "What's the text to be cryptographed?"
}]; // Questions
// Rotors

const askSettings = async () => {
  const settings = await inquirer.prompt(questions);
  return settings;
};

const encrypt = settings => {
  var enigma = new Enigma([[settings.rotor1_definition, settings.rotor1_position], [settings.rotor2_definition, settings.rotor2_position], [settings.rotor3_definition, settings.rotor3_position]], settings.reflector_definition, settings.plugboard_definition, settings.entrywheel_definition);
  console.log(enigma); //   console.log(enigma.string("EXAMPLEMESSAGE"));{};
};

const init = async () => {
  const enigma = chalk.redBright(figlet.textSync("ENIGMA", {
    font: "Cybermedium"
  }));
  console.log(enigma);
  const settings = await askSettings();
  console.log(settings);
  encrypt(settings);
};

init();