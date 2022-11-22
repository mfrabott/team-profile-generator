const inquirer = require('inquirer');
const fs = require('fs');
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
      const role = 'Manager';

      const addManager = () => {
        const manager = new Manager(name, id, email, role, officeNum)
        team.push(manager);
        console.log(team)
      };
      addManager();
      addTeamMember();

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

renderCard = (teamMember) => {
  
}

team.forEach((member) => renderCard(member));

      // fs.writeFile('index.html', printHTML, (err) => {
      //   err ? console.error(err) : console.log('HTML Created!')
      // });



// WHEN I select the engineer option
// THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
const newEngineer = () => {
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
    {
      type: 'input',
      message: `What is the Engineer's gitHub username?`,
      name: 'username',
    }
  ])

  .then((response) => {
    const name = response.name      
    const id = response.idNumber;      
    const email = response.email;
    const githubUsername = response.username
    const role = 'Engineer';


    const addEngineer = () => {
      const engineer = new Engineer(name, id, email, role, githubUsername)
      team.push(engineer);
      console.log(team)
    };

    addEngineer();
    addTeamMember();

  });
};


// WHEN I select the intern option
// THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
const newIntern = () => {
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
    {
      type: 'input',
      message: `What school does the intern attend?`,
      name: 'school',
    }
  ])

  .then((response) => {
    const name = response.name      
    const id = response.idNumber;      
    const email = response.email;
    const school = response.school;
    const role = 'Intern';

    
    const addIntern = () => {
      const intern = new Intern(name, id, email, role, school)
      team.push(intern);
      console.log(team)
    };

    addIntern();
    addTeamMember();

  });
};

newManager();