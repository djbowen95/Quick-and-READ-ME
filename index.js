const inquirer = require("inquirer");
const fs = require("fs");
const questions = require("./resources/questions");

// Introduce the application in the console.
console.log("\n Hello, Welcome to the Easy Read Me Generator!\n");
console.log("The application will ask you a series of prompts.");
console.log("It will generate a markdown README file based on your answers.\n");

// Run the code to ask the questions, then return the answers as an object in the console.
inquirer.prompt(questions).then((answers) => {
  const ansObj = JSON.stringify(answers);
  console.log(ansObj)
});
