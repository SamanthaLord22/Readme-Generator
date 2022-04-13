// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
inquirer
    .prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project?',
        },
        {
            type: 'input',
            name: 'description',
            message: 'Give a brief description of how you application works:',
        },
        {
            type: 'input',
            name: 'install',
            message: 'How do to install the application:',
        },
        {
            type: 'input',
            name: 'use',
            message: 'How to use the application:',
        },
        {
            type: 'input',
            name: 'contributions',
            message: 'Contributions to this application:',
        },
        {
            type: 'input',
            name: 'test',
            message: 'How to test the application:',
        },
        {
            type: 'list',
            name: 'license',
            message: 'What license was used:',
            choices: ['Apache License 2.0', 'GNU GPLv3', 'MIT', 'GNU GPLv2']
        },
        {
            type: 'input',
            name: 'username',
            message: 'What is your github username?',
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email?',
        },
    ])
    .then((answers) => {
        generateMarkdown(answers)
    });


