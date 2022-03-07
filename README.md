
# Read Me Generator!
## Description
This is an application which generates a professional README markdown file, based on user input. It can be run from the terminal, and asks the user a series of prompts, in order to quickly create a high quality file that contains all the essential information about a project. It is built with node.js and the inquirer package.

## Demo Video and Sample
The application can be seen in use here:  
https://youtu.be/Y6WrL1kr5qs

A sample READ ME can be found at:
```
 ./generated-readme/README-sample.md
```
    
## Table of Contents
    
* [01. Installation](#installation)
* [02. Usage](#usage)
* [03. License](#license)
* [04. Contribution](#contribution)
* [05. Tests](#tests)
* [06. Questions](#questions)
* [07. Future Development](#development)
    
## Installation
To install:  
1.  Create a local clone of the most recent version of the repository from GitHub. This should store all the necessary files on your local machine.  
2. Open the directory you have saved the repository in on your terminal.  
3. Use the command 'npm install' find and install the required package (Inquirer) in the directory.  
4. Make sure the folder to store the generated READ ME is there. Look for 'generated-readme/' within the main directory - and create it if it is not there. To do this on the terminal:
```
// To view all folders in a directory:
    ls
// To make a new directory if it is not there:
    mkdir generated-readme
```
5. Finally, use the command 'node index.js' to run the program!

## Usage
To use the program:  
1. Begin the program by running the command 'node index.js' in your terminal, in the correct directory.  
2. The terminal will now ask you a series of prompts: answer these in the level of detail you would like to be contained in your READ ME file.  
3. When you are done, press ENTER to move to the next prompt.  
4. When every prompt has been answered, your README file should be stored locally at the following path:  
``` 
./generated-readme/README.md
```
5. Make a copy of your file or move it to the required location before running the application again. IMPORTANT: if you run the application again before copying or moving your READ ME file, the READ ME will be overwritten and your file will be lost. 

## License
<img src="https://img.shields.io/badge/license-MIT-green.svg">  

This project is licensed under MIT.
    
## Contribution
Please contact me if you would like to contribute to this project.

## Tests
There are currently no tests for this application.

## Questions
If you have any questions about this project, please contact me at:  
Email: djbowen95@gmail.com  
GitHub: [djbowen95](https://github.com/djbowen95)  

## Development
Some of the ways I would like to build on this project in future:  
1. Use more prompts to generate a better / more descriptive description section.
2. Ask user which of the following prompts they would like to include in the READ ME, using the inquirer checklist function.
3. Make the installation instructions and usage instructions a numbered list, either by asking the user to number instructions or asking them to input instructions one-by-one.
4. Add a 'future development' set of prompts.
5. Function to double check answers - ie. "Does this all look correct?" "What would you like to change?"
6. Generate tests using TDD for this application. 