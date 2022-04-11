// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
//const questions = [
const questions = [
    {
        type: 'input',
        name: 'Title',
        message: 'What is the title of your project?',
    },
    {
        type: 'input',
        name: 'Description',
        message: 'Give a brief description of how you application works:',
    },
    {
        type: 'input',
        name: 'Install',
        message: 'How do to install the application:',
    },
    {
        type: 'input',
        name: 'Use',
        message: 'How to use the application:',
    },
    {
        type: 'input',
        name: 'Contributions',
        message: 'Contributions to this application:',
    },
    {
        type: 'input',
        name: 'Test',
        message: 'How to test the application:',
    },
    {
        type: 'input',
        name: 'License',
        message: 'What license was used:',
    },
    {
        type: 'input',
        name: 'Username',
        message: 'What is your github username?',
    },
    {
        type: 'input',
        name: 'Email',
        message: 'What is your email?',
    },
];
console.log(questions.message);

// TODO: Create a function to write README file
function writeToFile(fileName, data) {};

// TODO: Create a function to initialize app
function init() {};

// Function call to initialize app
init();
