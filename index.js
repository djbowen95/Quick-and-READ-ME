// Import packages required for the program to run.
const inquirer = require("inquirer"); // Runs the prompts in the terminal.
const fs = require("fs"); // Will be used to write README to the file system.
const path = require("path"); // Will be used to create a new path to store the README file.
const questions = require("./resources/questions"); // Contains questions.
const generateMarkdown = require("./resources/generateMarkdown.js") // Program that writes markdown file based on user responses. 

// Introduce the application in the console.
console.log("\n Hello, Welcome to the Easy Read Me Generator!\n");
console.log("The application will ask you a series of prompts.");
console.log("It will generate a markdown README file based on your answers.\n");

// Write a new file to the file system, containing data passed through as a parameter.
function writeToFile(fileName, data) {
  fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// Initiate the program.
begin();