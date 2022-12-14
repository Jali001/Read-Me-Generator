// TODO: Include packages needed for this application
//THIS HAS BEEN COMPLETE^^^^^^^
const inquirer =  require ('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
const fs = require ('fs');

// TODO: Create an array of questions for user input
const questions = 
[
    {
        type: "input",
        name: "title",
        message: "What is the Project Title?",
    },
    {
        type: "input",
        name: "description",
        message: "What is the description for the Project?",
    },

    {
        type: "input",
        name: "installation",
        message: "What is the installation instructions?",
    },

    {
        type: "input",
        name: "usage",
        message: "what usage information should be for this project?",
    },

    {
        type: "list",
        name: "license",
        message: "What license is being used for this project?",
        choices: ["MIT",new inquirer.Separator(),"ISC",new inquirer.Separator(),"GNUPLv3"],
        
    },

    {
        type: "input",
        name: "test",
        message: "what is being tested for this project/what are the test instructions?",
    },

    {
        type: "input",
        name: "contribution",
        message: "Who contrubuted to the project?",
    },
    {
        type: "input",
        name: "email",
        message: "what email should be added for questions?",
    },

    {
        type: "input",
        name: "github",
        message: "what is the github username for this project?",
    },

    
];

// TODO: Create a function to write README file
// data = user input
// need fs 
function writeToFile(fileName,data) {
    console.log(typeof data);
    console.log(data)
    console.log("*******");
    fs.writeFile(fileName, data, { encoding: 'utf8' },  (err) =>
    err ? console.log(err) : console.log(`Successfully created $(fileName)`)
  ); 
  }

// TODO: Create a function to initialize app
// this function will initial the app and ask the questions
function init() 
{
 inquirer 
 .prompt(questions)
 
 .then((data) =>{
    console.log(data);
    writeToFile("./dest/README.md", generateMarkdown(data))
 }

 

 )
}

// Function call to initialize app
init();

