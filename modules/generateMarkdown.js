// Render a license badge based on a license input.
function renderLicenseBadge(license) {
    if (license !== "None") {
      return `<img src="https://img.shields.io/badge/license-${license}-green.svg">`
    } else {
      return "" // Return an empty string if input is 'none'.
    }
}

// Render a license link based on input.
function renderLicenseLink(license) {
    if (license !== "None") {
      return `* [License](#license)`
    } else {
      return "" // Return an empty string if input is 'none'.
    }
}

// Render license section based on input.
function renderLicenseSection(license) {
    if (license !== "None") {
      return `## License
      
      This project is licensed under ${license}.`
    } else {
      return "" // Return an empty string if input is 'none'.
    }
}

// Template for the markdown file - fills in gaps with 'data' from user input.
function generateMarkdown(data) {
    return `
# ${data.title}
${renderLicenseBadge(data.license)}
    
## Description
${data.description}
    
## Table of Contents
    
* [Installation](#installation)
* [Usage](#usage)
${renderLicenseLink(data.license)}
* [Contribution](#contribution)
* [Tests](#tests)
* [Questions](#questions)
    
## Installation
${data.installation}

## Usage
${data.usage}

${renderLicenseSection(data.license)}
    
## Contribution
${data.contribution}

## Tests
${data.test}

## Questions
If you have any questions about this project, please contact me at:  
Email: ${data.email}  
GitHub: [${data.github}](https://github.com/${data.github})  `;
  }
  
  module.exports = generateMarkdown;