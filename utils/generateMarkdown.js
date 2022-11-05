// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) 
{
    if (data.license)
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
// think about how a Read me should be formatted 
//new line
//#
function generateMarkdown(data) {
  let table = `## Table of Contents`;

 

  return 
  `# ${data.title}

  ## Description
  ${data.description}

  ## Table of Contents

  * [Installation](#Installation)
  * [Usage](#Usage)
  * [License](#license)
  * [Contributing](#Contributing)
  * [Tests](#Tests)
  * [Questions](#Questions)

  ***

  ## Installation

  ${data.install}

  ## Usage

  ${data.usage}

  ## Lisense 

  ${data.license}

  ## Test

  ${data.test}

  ## Contribute 

  ${data.contribution}

  ## Question

  If you have any questions about the project you can reach out to me via email or GitHub with the information below. 

  >Email: ${data.email} 
  >GitHub : [${data.github}](https://github.com/${data.github})




`;
}

module.exports = generateMarkdown;

