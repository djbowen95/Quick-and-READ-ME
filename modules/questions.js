const questions = [
    // Question prompt for the project title; the type of the prompt is 'input'.
    {
      type: "input",
      name: "title",
      message: "What is the title of your project?",
    },
    // Question prompt for the project description; the type of the prompt is 'input'.
    {
      type: "input",
      name: "description",
      message: "Please give a short description of your project.",
    },
    // Question prompt for installation instructions; the type of prompt is 'input'.
    {
      type: "input",
      name: "installation",
      message: "How would a user install your application?",
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
      name: "contribution",
      message:
        "Please provide any guidelines you would like others to follow when contributing to the project.",
    },
    // Question prompt for test instructions, the type of prompt is 'input'.
    {
      type: "input",
      name: "test",
      message: "How can a user test your application functions correctly?",
    },
    // Question prompt for licensing, the type of prompt is 'list'.
    {
      type: "list",
      name: "license",
      message: "Which license would you like to use for your project?",
      choices: ["MIT", "GNU", "Apache 2.0", "ISC", "None"],
    },
    // Question prompt for github username.
    {
      type: "input",
      name: "github",
      message: "What is the GitHub username of the lead contributor?",
    },
    // Question prompt for user email address.
    {
      type: "input",
      name: "email",
      message: "What email address can be used to contact the lead contributor?",
    },
  ];

  module.exports = questions;