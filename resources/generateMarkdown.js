// Render a license badge based on a license input. 
function renderLicenseBadge(license) {
    if (license !== "None") {
      return `<img src="https://img.shields.io/badge/license-${license}-green.svg">`
    } else {
      return ""
    }
  }