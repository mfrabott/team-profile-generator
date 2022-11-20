
const inquirer = require('inquirer');
const fs = require('fs');

// TODO Employee Class
// The first class is an Employee parent class with the following properties and methods:

// name

// id

// email

// getName()

// getId()

// getEmail()

// getRole()—returns 'Employee'

// The other three classes will extend Employee.

// TODO: Manager Class
// In addition to Employee's properties and methods, Manager will also have the following:

// officeNumber

// getRole()—overridden to return 'Manager'

// TODO Engineer Class
// In addition to Employee's properties and methods, Engineer will also have the following:

// github—GitHub username

// getGithub()

// getRole()—overridden to return 'Engineer'

// TODO: Intern Class
// In addition to Employee's properties and methods, Intern will also have the following:

// school

// getSchool()

// getRole()—overridden to return 'Intern'

// TODO: Input Validation
// Finally, although it’s not a requirement, consider adding validation to ensure that user input is in the proper format.

// TODO: Inquirer Inputs
// WHEN I start the application
// THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number


// WHEN I enter the team manager’s name, employee ID, email address, and office number
// THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team


// WHEN I select the engineer option
// THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu


// WHEN I select the intern option
// THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu



inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is the title of your project?',
      name: 'title',
    },
    {
      type: 'input',
      message: 'What is the url of your repository?',
      name: 'repository',
    },
    {
      type: 'input',
      message: 'What is the description of your project?',
      name: 'description',
    },
    {
      type: 'input',
      message: 'What are the installation instructions for your project?',
      name: 'installation',
    },
    {
      type: 'input',
      message: 'What is the intended use for your project?',
      name: 'usageInfo',
    },
    {
      type: 'input',
      message: 'How can others contribute to the project?',
      name: 'contribute',
    },
    {
      type: 'input',
      message: 'What are the instructions for testing the application?',
      name: 'test',
    },
    {
      type: 'list',
      message: 'What is the license for your project?',
      name: 'license',
      choices: ['Apache License 2.0', 'GNU General Public License v2.0', 'MIT License', 'BSD 2-Clause License', 'BSD 3-Clause License', 'Boost Software License 1.0', 'Mozilla Public License 2.0', 'The Unlicense'],
    },
    {
      type: 'input',
      message: 'What is your GitHub username?',
      name: 'username',
    },
    {
      type: 'input',
      message: 'What is your email address?',
      name: 'email',
    },
  ])

  .then((response) => {

    const projTitle = response.title
    const projDesc = response.description
    const projInstall = response.installation
    const projUsage = response.usageInfo
    const projLicense = response.license
    const projUsername = response.username
    const projEmail = response.email
    const projContribute = response.contribute
    const projTest = response.test
    const projRepo = response.repository
    let badge = ''

    switch(projLicense){
      case 'Apache License 2.0':
        badge = '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
        break;
      case 'BSD 3-Clause License':
        badge = '[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)'
        break;
      case 'BSD 2-Clause License':
        badge = '[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)'
        break;
      case 'GNU General Public License v2.0':
        badge = '[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)'
        break;
      case 'MIT License':
        badge = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
        break;
      case 'Mozilla Public License 2.0':
        badge = '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)'
        break;
      case 'The Unlicense':
        badge = '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)'
        break;
      case 'Boost Software License 1.0':
        badge = '[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)'
        break;
      default:
        badge = '';
    }

    let printHTML = `
  
# ${projTitle}

${badge}

## Table of Contents

[Project Description](${projRepo}#Project-Description)

[Installation Instructions](${projRepo}#Installation)

[Usage Information](${projRepo}#Usage)

[License](${projRepo}#License)

[Contributing](${projRepo}#Contributing)

[Tests](${projRepo}#Tests)

[Questions](${projRepo}#Questions)

## Project Description
${projDesc}


## Installation
${projInstall}

## Usage
${projUsage}

## License

This project is covered under the ${projLicense}.

## Contributing

${projContribute}

## Tests 
${projTest}

## Questions

Find more of my work at: https://github.com/${projUsername}

For any questions, please contact me at: ${projEmail}

`
  fs.writeFile('index.html', printHTML, (err) => {
        err ? console.error(err) : console.log('HTML Created!')
    })
  });