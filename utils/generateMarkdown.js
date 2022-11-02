// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    return 'spec'
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
// think about how a Read me should be formatted 
//# H1
//new line
//#
function generateMarkdown(data) {
  return `# ${data.title}

## this is a h1 
${renderLicenseBadge(data.license)}
`;
}

module.exports = generateMarkdown;

