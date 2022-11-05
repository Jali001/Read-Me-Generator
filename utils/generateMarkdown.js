// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(data) 
{
    if (data.license === `MIT` )
    {
      return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
    }

    if(data.license === `ISC`)
    {
      return `[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)`;
    }

    if(data.license === `GNUPLv3`)
    {
      return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;
    }

    return '';
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(data) 
{
  if (data.license === `MIT` )
    {
      return `https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT`;
    }

    if(data.license === `ISC`)
    {
      return `https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC`;
    }

    if(data.license === `GNUPLv3`)
    {
      return `https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0`;
    }

    return '';
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(data) 
{
  if (data.license !== 'none') {
    return `
  ## License
  
  ${renderLicenseLink(data)}
    `
  } else {
    return `
  ## License
  There has not been any license set for this project. 
    `
  }

    return '';
}

// TODO: Create a function to generate markdown for README
// think about how a Read me should be formatted 
//new line
//#
function generateMarkdown(data) {
  let table = `## Table of Contents`;

 

  return 
  `# ${data.title}  ${renderLicenseBadge(data)}

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

  

  ${renderLicenseSection(data)}

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

