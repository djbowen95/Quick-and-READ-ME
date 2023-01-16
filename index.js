// Import packages to index.js.
const inquirer = require("inquirer"); // Inquirer.
const fs = require("fs"); // Node's file system module.
const path = require("path"); // Directory path module.

// Modularized questions and functions to keep index.js shorter.
const questions = require("./resources/questions");
const generateMarkdown = require("./resources/generateMarkdown.js");

// Write new file to the file system.
function writeToFile(fileName, data) {
  fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// Prompt user with questions and user answers to generate markdown file.
function begin() {
  inquirer.prompt(questions).then((answers) => { // Async JavaScript. Following line must await Inquirer returning its promise. 
      writeToFile("generated-readme/README.md", generateMarkdown({...answers})); // Spread awaits returned promise.
  })
}

// Client introduces itself to the user.
console.log("\n Hello, Welcome to the Easy Read Me Generator!\n");
console.log("The application will ask you a series of prompts.");
console.log("It will generate a markdown README file based on your answers.\n");

// Call of function to begin asking the user prompts.
begin();