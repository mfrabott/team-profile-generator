const inquirer = require('inquirer');
const fs = require('fs');
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
const Engineer = require('./lib/Engineer');
const team = [];


// TODO: Inquirer Inputs
// WHEN I start the application
// THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
const newManager = () => {
  inquirer
    .prompt([
      {
        type: 'input',
        message: `What is the manager's name?`,
        name: 'name',
      },
      {
        type: 'input',
        message: `What is the manager's ID Number?`,
        name: 'idNumber',
      },
      {
        type: 'input',
        message: `What is the manager's email address?`,
        name: 'email',
      },
      {
        type: 'input',
        message: `What is the manager's office number?`,
        name: 'officeNum',
      },
    ])

    .then((response) => {
      const name = response.name      
      const id = response.idNumber;      
      const email = response.email;
      const officeNum = response.officeNum;

      const addManager = () => {
        const manager = new Manager(name, id, email, officeNum)
        team.push(manager);
        console.log(team)
      };
      addManager();
      addTeamMember();

  });
};


const newEmployee = () => {
  inquirer
  .prompt([
    {
      type: 'input',
      message: `What is the new employee's name?`,
      name: 'name',
    },
    {
      type: 'input',
      message: `What is the new employee's ID Number?`,
      name: 'idNumber',
    },
    {
      type: 'input',
      message: `What is the new employee's email address?`,
      name: 'email',
    },
  ])

  .then((response) => {
      const name = response.name      
      const id = response.idNumber;      
      const email = response.email;
  });
};

// WHEN I enter the team manager’s name, employee ID, email address, and office number
// THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team

function addTeamMember() {
  inquirer
  .prompt([
    {
      type: 'list',
      message: `Would you like to add a new engineer or intern to your team?`,
      name: 'addEmployee',
      choices: ['Engineer', 'Intern', `I'm all finished`]
    }
  ])

  .then((response) => {
    if (response.addEmployee === 'Engineer'){
      newEngineer();
    } else if (response.addEmployee === 'Intern') {
      newIntern();
    } else {
      console.log('escaped');
    };
  });
};

      // fs.writeFile('index.html', printHTML, (err) => {
      //   err ? console.error(err) : console.log('HTML Created!')
      // });



// WHEN I select the engineer option
// THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
const newEngineer = () => {
  newEmployee();
  inquirer
  .prompt([
    {
      type: 'input',
      message: `What is the Engineer's gitHub username?`,
      name: 'username',
    }
  ])
  .then((response) => {
    const githubUsername = response.username
    const engineer = new Engineer (name, ID, email, githubUsername)
  });
};


// WHEN I select the intern option
// THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
const newIntern = () => {
  newEmployee();
  inquirer
  .prompt(
    {
      type: 'input',
      message: `What school does the intern attend?`,
      name: 'school',
    })
  .then((response) => {
      const school = response.school
      const intern = new Intern (name, ID, email, school)
  });
};



newManager();