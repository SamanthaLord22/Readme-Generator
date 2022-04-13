//Includes packages needed
const fs = require('fs')
const inquirer = require('inquirer');


// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  let dataPage = `## reademe generator

  ## title
  ${answers.title}

  ## description
  ${answers.description}

  ## install
 ${answers.install}

  ## use
  ${answers.use}

  ## contributions
  ${answers.contributions}

  ## test
  ${answers.test}

  ## license
  ## https://img.shields.io/badge/license-Apache2.0-bule.svg
  ${answers.license}

  ## username
  ${answers.username}

  ## email
  ${answers.email}
`
  console.log(dataPage)

  fs.writeFile(`${answers.name} readme.md`, dataPage, (err) =>
    err ? console.log(err) : console.log('success'));
}

module.exports = generateMarkdown
