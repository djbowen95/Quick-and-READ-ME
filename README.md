<h1 align="center"> 🏃 Quick and READ ME! 📝</h1>
<h2 align="center"> Command-Line README Generator. <i> Version 1.0.0 </i> </h2>
<p><strong>Quick and READ ME!</strong> is an easy-to-use, command-line interface that helps a user to quickly create a professional README markdown file. Created in <em>Node.js</em> with the <em>Inquirer npm package</em>, it can be run on a local machine from the command line. It will invite a user to answer a series of question prompts about their current project, and generate a simple README file based on their input. The user is then free to copy across to their own project's repository. </p>


## Table of Contents
    
* [01. About](#about)
* * [01A. Project History](#project-history)
* * [01B. Sample README](#sample-readme)
* [02. Key Features](#key-features)
* * [02A. My First Node Project](#my-first-node-project)
* * [02B. Working with npm Packages](#working-with-npm-packages)
* * [02C. Modularization](#modularization)
* * [02D. Brand New Tools](#brand-new-tools)
* [03. Installation](#installation)
* * [03A. Prerequisites](#prerequisities)
* * [03B. Cloning the Repository](#cloning-the-repository)
* * [03C. Running Quick and README](#running-quick-and-readme)
* [04. Usage](#usage)
* * [04A. Creating Your README File](#creating-your-readme-file)
* * [04B. Saving Your README File](#saving-your-readme-file)
* [05. Testing](#testing)
* [06. Version History](#version-history)
* [07. License](#license)
* [08. Contribution](#contribution)
* * [08A. Contribution Guidelines](#contribution-guidelines)
* * [08B. Future Development](#future-development)
* [09. Questions](#questions)

## About
### Project History
This project was first built as a weekly assignment for the University of Birmingham and 2U/Trilogy Coding Bootcamp. The project was built for Week 9 of the program, which is the week we were introduced to Node.js and the core concepts which underpin back-end development. We were introduced to npm and several basic node packages, including fs and inquirer, as well as some JavaScript features that were not supported in the front-end projects we had built at this point, notably modularization.

This challenge of this project was to build a command-line client from scratch that demonstrated our understanding of Node.js and the node package manager. You can view the full project brief, which I have included in the documentation folder, [here](./documenation/brief.md).

While I've built far more complex applications since building this project, I've chosen to pin this to one to my GitHub profile because I think its a really good example of the core understanding of Node.js programming (elaborate).
### Demonstration Video
The application can be seen in use here:  
https://drive.google.com/file/d/1X9gVfdiT6SPgdSwwy0LVtYSUOOUI0eLx/view?usp=sharing
[Should at least upload this to YouTube]
### Sample README
If you would like to look at an example of the style of markdown file the application can produce, one can be found at:
```
 ./generated-readme/README-sample.md
```
## Key Features
### My First Node Project
### Working with npm Packages
### Modularization
### Brand New Tools
JS features - Template literals, Arrow functions, functional loops (map/filter especially), node (process / argument), fs read/write the file system, modularization, npm and inquirer, object orientated programing, constructors etc, test driven development (?), promises (this stuff might be worth actually leaving for the next project unless I build these features!)
Node -> Modularization -> NPM and Inquirer -> More JS with Node (?) (Maybe just the three, but add OOP and TDD later)
Node process, argv -> modularization -> npm packages / inquirer -> more complex javascript? functional loops, iterators, template literals, etc. -> fs read/write (can i fit that into node or npm)
Maybe Async JavaScript
## Installation
### Prerequisities
Node - download. Version used. File browser, explorer, some way to explore the file system (vs code).
### Cloning the Repository
Make sure you install the packages / inquirer - dependency. Version (older). 
### Running Quick and README
npm start
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
### Creating Your README File
### Saving Your README File
To use the program:  
1. Begin the program by running the command 'node index.js' in your terminal, in the correct directory.  
2. The terminal will now ask you a series of prompts: answer these in the level of detail you would like to be contained in your READ ME file.  
3. When you are done, press ENTER to move to the next prompt.  
4. When every prompt has been answered, your README file should be stored locally at the following path:  
``` 
./generated-readme/README.md
```
5. Make a copy of your file or move it to the required location before running the application again. IMPORTANT: if you run the application again before copying or moving your READ ME file, the READ ME will be overwritten and your file will be lost. 

Maybe screen shot each prompt.
Saving your file as a section.
You can always customise your file afterwards. 

## Testing
This project was not built with any unit tests.

I built a similar application the following week of the Coding Bootcamp course, the [Team Profile Builder](https://github.com/djbowen95/Team-Profile-Builder). This project does have a full set of unit tests, built in Jest. Please take a look at it if you would like to see an example of my work building unit tests.

## Version History
### Version 1.1.0
Improved README (this READ ME).
### Version 1.0.0
As in the BootCamp - upload / link to brief here.
## License
MIT. Link!
## Contribution
### Contribution Guidelines
Want to say - please feel free to reach out; work on the issues for whatever I'm working on below, or break down tasks to explore some of my other ideas. Make a branch. Bootcamp Alumni. Want this to be easy to copy and paste directly when I write it. 

### Future Development
Some of the ways I would like to build on this project in future:  
1. Ask users which sections they would like to include in the READ ME - using the Inquirer checklist function. Currently working on this.
2. Refactor this project and build tests - so that the application can be tested after installing! Will need to create classes/more complex application so this is a much bigger project, but will look at following weeks' project for inspiration.
3. Give the user option to add additional sections (maybe in line with my current READ MEs) -> preferably build these as TDD style features (ie. 'version history' would be easy to make).
4. Allow users to double check answers - ie. ask them 'does this all look correct' and 'what would you like to change' before creating the README file -> again, make this TDD!
5. Include badges could also be fun -> license, version (and get the badge to find this out itself!).
6. Include some styling -> title centred, badges featured.
7. Save all READMEs with a unique name - so that they do not overwrite each other - and check to make sure that doesn't happen.
8. Let program save user data such as contact info (name/github/linkedin/etc).
9. Option that allows a user to go back into/parse a previously created README and edit it (possibly just add version history).

## Questions
