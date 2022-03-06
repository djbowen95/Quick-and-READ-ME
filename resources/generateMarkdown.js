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