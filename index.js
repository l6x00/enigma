#!/usr/bin/nodejs
const chalk = require("chalk");
const figlet = require("figlet");
const inquirer = require("inquirer");

var settingsQuestions = [
  {
    type: "input",
    name: "rotor1_definition",
    message: "What's is the definition of rotor I?",
    default: "JGDQOXUSCAMIFRVTPNEWKBLZYH"
  },
  {
    type: "input",
    name: "rotor1_position",
    message: "What's is the initial position of rotor I?",
    default: "Q"
  },
  {
    type: "input",
    name: "rotor2_definition",
    message: "What's is the definition of rotor II?",
    default: "NTZPSFBOKMWRCJDIVLAEYUXHGQ"
  },
  {
    type: "input",
    name: "rotor2_position",
    message: "What's is the initial position of rotor II?",
    default: "V"
  },
  {
    type: "input",
    name: "rotor3_definition",
    message: "What's is the definition of rotor III?",
    default: "JVIUBHTCDYAKEQZPOSGXNRMWFL"
  },
  {
    type: "input",
    name: "rotor3_position",
    message: "What's is the initial position of rotor III?",
    default: "J"
  },
  {
    type: "input",
    name: "reflector_definition",
    message: "What's is the definition of reflector (UKW)?",
    default: "QYHOGNECVPUZTFDJAXWMKISRBL"
  },
  {
    type: "input",
    name: "entrywheel_definition",
    message: "What's is the definition of entry wheel (ETW)?",
    default: "QWERTZUIOASDFGHJKPYXCVBNML"
  },
  {
    type: "input",
    name: "plugboard_definition",
    message: "What's is the definition of plugboard (Steckerbrett)?",
    default: "AD CN ET FL GI JV KZ PU QY WX"
  },
  {
    type: "input",
    name: "text",
    message: "What's is text to be encrypted?"
  }
];

showEnigmaFiglet = () => {
  console.log(
    chalk.redBright(
      figlet.textSync("Enigma", {
        font: "Cyberlarge",
        horizontalLayout: "default",
        verticalLayout: "default"
      })
    )
  );
};

askForSettings = () => {
  inquirer.prompt(settingsQuestions).then(answers => {
    console.log("Settings:");
    console.log(JSON.stringify(answers, null, "  "));
  });
};

init = () => {
  showEnigmaFiglet();
  askForSettings();
  // Ask positions and definitions of 3 rotors
  // Ask definitions of reflector
  // Ask defintion of plugboard
  // Ask defintion of entrywhell
};

init();
