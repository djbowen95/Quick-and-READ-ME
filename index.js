const inquirer = require("inquirer");
const fs = require("fs");

console.log("\n Hello, Welcome to the Easy Read Me Generator!\n");
console.log("The application will ask you a series of prompts.");
console.log("It will generate a markdown README file based on your answers.\n")

const questions = [
  // Question prompt for the project title; the type of the prompt is 'input'.
  {
    type: "input",
    name: "project title",
    message: "What is the title of your project?",
  },
  // Question prompt for the project description; the type of the prompt is 'input'.
  {
    type: "input",
    name: "description",
    message: "Please give a short description of your project."
  },
  // Question prompt for installation instructions; the type of prompt is 'input'.
  {
    type: "input",
    name: "installation",
    message: "How would a user install your application?"
  },
  // Question prompt for usage information; the type of prompt is 'input.
  {
    type: "input",
    name: "usage",
    message: "Provide instructions for how a user would use your project:",
  },
  // Question prompt for contribution guidelines, the type of prompt is 'input'.
  {
    type: "input",
    name: "contribution guidelines",
    message: "Please provide any guidelines you would like others to follow when contributing to the project.",
  },
  // Question prompt for test instructions, the type of prompt is 'input'.
  {
    type: "input",
    name: "test",
    message: "How can a user test your application functions correctly?",
  }
];

inquirer.prompt(questions).then((answers) => {
  console.log(JSON.stringify(answers, null, '  '));
});


// Contribution Guidelines

// Test Instructions

// License (Choose from Options)

// GitHub Username

// Email Address


// Example taken from the inquirer documentation, with several prompt types.
/*
const questions = [
  {
    type: 'confirm',
    name: 'toBeDelivered',
    message: 'Is this for delivery?',
    default: false,
  },
  {
    type: 'input',
    name: 'phone',
    message: "What's your phone number?",
    validate(value) {
      const pass = value.match(
        /^([01]{1})?[-.\s]?\(?(\d{3})\)?[-.\s]?(\d{3})[-.\s]?(\d{4})\s?((?:#|ext\.?\s?|x\.?\s?){1}(?:\d+)?)?$/i
      );
      if (pass) {
        return true;
      }

      return 'Please enter a valid phone number';
    },
  },
  {
    type: 'list',
    name: 'size',
    message: 'What size do you need?',
    choices: ['Large', 'Medium', 'Small'],
    filter(val) {
      return val.toLowerCase();
    },
  },
  {
    type: 'input',
    name: 'quantity',
    message: 'How many do you need?',
    validate(value) {
      const valid = !isNaN(parseFloat(value));
      return valid || 'Please enter a number';
    },
    filter: Number,
  },
  {
    type: 'expand',
    name: 'toppings',
    message: 'What about the toppings?',
    choices: [
      {
        key: 'p',
        name: 'Pepperoni and cheese',
        value: 'PepperoniCheese',
      },
      {
        key: 'a',
        name: 'All dressed',
        value: 'alldressed',
      },
      {
        key: 'w',
        name: 'Hawaiian',
        value: 'hawaiian',
      },
    ],
  },
  {
    type: 'rawlist',
    name: 'beverage',
    message: 'You also get a free 2L beverage',
    choices: ['Pepsi', '7up', 'Coke'],
  },
  {
    type: 'input',
    name: 'comments',
    message: 'Any comments on your purchase experience?',
    default: 'Nope, all good!',
  },
  {
    type: 'list',
    name: 'prize',
    message: 'For leaving a comment, you get a freebie',
    choices: ['cake', 'fries'],
    when(answers) {
      return answers.comments !== 'Nope, all good!';
    },
  },
];

inquirer.prompt(questions).then((answers) => {
  console.log('\nOrder receipt:');
  console.log(JSON.stringify(answers, null, '  '));
});

*/