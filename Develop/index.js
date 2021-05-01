// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const functions = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = ["What was your title?",
 "Describe your program.",
 "How do you install this program?",
 "What is your usage information?",
 "What are your contributition guidelines?",
 "What are your test instructions?",
 "What problem does it solve?",
 "What did you learn?",
 "What makes your project stand out?",
 "What is your gitHub username?",
 "What is your email address?"];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
   err ? console.error(err) : console.log('Success!')
    );
}

// TODO: Create a function to initialize app
function init() {
    inquirer
  .prompt([
    {
      type: 'input',
      name: 'title',
      message: questions[0],
    },
    {
        type: 'input',
        name: 'description',
        message: questions[1],
      },
      {
        type: 'input',
        name: 'questionThree',
        message: questions[2],
      },
      {
        type: 'input',
        name: 'questionFour',
        message: questions[3],
      },
      {
        type: 'input',
        name: 'questionFive',
        message: questions[4],
      },
      {
        type: 'input',
        name: 'questionSix',
        message: questions[5],
      },
      {
        type: 'input',
        name: 'questionSeven',
        message: questions[6],
      },
      {
        type: 'input',
        name: 'questionEight',
        message: questions[7],
      },
      {
        type: 'input',
        name: 'questionNine',
        message: questions[8],
      },
      {
        type: 'checkbox',
        message: 'Choose a license',
        name: 'license',
        choices: ['MIT', 'GNU', 'ISC', 'none'],
      },
      {
        type: 'input',
        name: 'gitHubUsername',
        message: questions[9],
      },
      {
        type: 'input',
        name: 'email',
        message: questions[10],
      }
    
  ])
  .then((data) => {
   const checkboxData = data.license[0]
   const content = functions.generateMarkdown(data);
   const license = functions.renderLicenseBadge(checkboxData);
   const licenseCode = functions.renderLicenseLink(license); 
   const licenseContent = functions.renderLicenseSection(license);



    writeToFile("README.md",content[0]
     + "\n"
     + licenseCode
     + "\n \n"
     + "Description: "
     + "\n"
     + content[1]
     + "\n \n"
     + "Table of Contents: \n 1.Intallation \n 2.Usage \n 3.Contribution Guidlines \n 4.Test instructions \n 5.Additional Info \n \n"
     + "Installation: \n "
     + content[2]
     + "\n \n"
     + "Usage: \n"
     + content[3]
     + "\n \n"
     + "Contribution Guidlines: \n "
     + content[4]
     + "\n \n"
     + "Test Instructions: \n "
     + content[5]
     + "\n \n"
     +"Additional Info: \n "
     + content[6]
     + "\n"
     + content[7]
     + "\n"
     + content[8]
     + "\n \n"
     +"Questions: \n "
     + content[9]
     +"\n"
     + "https://github.com/"
     + content[9]
     +"\n"
     +"You can reach me at: \n"
     + content[10]
     + "\n \n"
     + "License: \n"
     +licenseContent
     
     );
    
    
 
  });
}

// Function call to initialize app
init();
