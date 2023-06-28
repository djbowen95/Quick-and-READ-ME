// Import required packages.
const inquirer = require("inquirer"); // Inquirer: for building a CLI.
const fs = require("fs"); // fs (file system): read/write local files.
const path = require("path"); // Path: utilities for file/directory paths. 

// Modules, to keep index.js clean. 
const questions = require("./resources/questions"); // Array of question prompts.
const generateMarkdown = require("./resources/generateMarkdown.js"); // Functions to generate a markdown file, following a template.

// Write new file to the file system.
function writeToFile(fileName, data) {
  fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// Prompt questions; generate markdown file with answers; store in 'generated-readme' directory.
function begin() {
  inquirer.prompt(questions).then((answers) => { // Async JavaScript; awaits promise from Inquirer as user answers prompts on the command line. 
      writeToFile("generated-readme/README.md", generateMarkdown({...answers})); // Spread awaits returned promise.
  })
}

// Client introduces itself to the user.
console.log("\n Hello, Welcome to the Easy Read Me Generator!\n");
console.log("The application will ask you a series of prompts.");
console.log("It will generate a markdown README file based on your answers.\n");

// Call of function to begin asking the user prompts.
begin();