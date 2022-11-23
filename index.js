const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
const Engineer = require('./lib/Engineer');
const team = [];
const cards = [];

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
        const manager = new Manager(name, id, email, officeNum)
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

      const headHTML = `
      <!doctype html>
      <html lang="en">
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1">
          <title>My Team</title>
          <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">
          <link rel="stylesheet" href="../dist/style.css">
        </head>
        
        <body >
          <header>
            <h1 class='text-center'>My Team</h1>
          </header>
          
          <main class="container">
            <div class="row justify-content-center text-center employee-cards">`

      const footHTML = `
          </main>
          <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3" crossorigin="anonymous"></script>
        </body>
      </html>`

      team.forEach(member => {
        console.log(member)
        console.log(member.role)
        if (member.role === 'Manager'){
          const card = 
      `        <div class="card col-3">
                <div class="card-header">${member.role}</div>
                <div class="card-body">
                  <h5 class="card-title">${member.name}</h5>
                  <ul>
                    <li><strong>EmployeeID: </strong>${member.ID}</li>
                    <li><strong>Email: </strong><a href="mailto: ${member.email}">${member.email}</a></li>
                    <li><strong>Office Number: </strong>${member.officeNumber}</li>
                  </ul>
                </div>
              </div>`
          cards.push(card)
        } else if (member.role === 'Engineer') {
              const card =       
      `        <div class="card col-3">
                <div class="card-header">${member.role}</div>
                <div class="card-body">
                  <h5 class="card-title">${member.name}</h5>
                  <ul>
                    <li><strong>EmployeeID: </strong>${member.ID}</li>
                    <li><strong>Email: </strong><a href="mailto: ${member.email}">${member.email}</a></li>
                    <li><strong>GitHub: </strong><a href=https://www.github.com/${member.githubUsername}>${member.githubUsername}</a> </li>
                  </ul>
                </div>
              </div>`
              cards.push(card)
        } else if (member.role === 'Intern'){
              const card =  
      `        <div class="card col-3">
                <div class="card-header">${member.role}</div>
                <div class="card-body">
                  <h5 class="card-title">${member.name}</h5>
                  <ul>
                    <li><strong>EmployeeID: </strong>${member.ID}</li>
                    <li><strong>Email: </strong><a href="mailto: ${member.email}">${member.email}</a></li>
                    <li><strong>School: </strong>${member.school}</li>
                  </ul>
                </div>
              </div>`
              cards.push(card)
        }
      })

      const printHTML = headHTML + cards.join('') + footHTML

        fs.writeFile('./dist/index.html', printHTML, (err) => {
          err ? console.error(err) : console.log('HTML Created!')
      });
    };
  });
};

// renderCard = (teamMember) => {
//   const cardEl = document.createElement('div');
//   cardEl.classList.add('card', 'col-3');
  
//   const cardHeaderEl = document.createElement('div');
//   cardHeaderEl.classList.add('card-header');
//   cardHeaderEl.textContent = teamMember.role;
//   cardEl.appendChild(cardHeaderEl)

//   const cardBodyEl = document.createElement('div');
//   cardBodyEl.classList.add('card-body');
//   cardEl.appendChild(cardBodyEl);
  
//   const cardBodyTitle = document.createElement('h5');
//   cardBodyTitle.classList.add('card-title');
//   cardBodyTitle.textContent = teamMember.name;
//   cardBodyEl.appendChild(cardBodyTitle);

//   const cardListEl =  document.createElement('ul');
//   cardBodyEl.appendChild(cardListEl);

//   const emailListItem =  document.createElement('li');
//   const strongEmailEl = document.createElement('strong');
//   const emailLink = document.createElement('a');
//   strongEmailEl.textContent = 'Email: ';
//   emailListItem.appendChild(strongEmailEl);
//   emailLink.setAttribute('href', `mailto:${teamMember.email}`)
//   emailListItem.appendChild(emailLink)
//   emailListItem.textContent = teamMember.email;
//   cardListEl.appendChild(emailListItem);

//   if (teamMember.officeNum){
    
//     const officeListItem =  document.createElement('li');
//     const strongOfficeEl = document.createElement('strong');
//     strongOfficeEl.textContent = 'Office Number: ';
//     officeListItem.appendChild(strongOfficeEl);
//     officeListItem.textContent = teamMember.officeNum;
//     cardListEl.appendChild(officeListItem);

//   } else if (teamMember.github) {
    
//     const githubListItem =  document.createElement('li');
//     const strongGithubEl = document.createElement('strong');
//     const githubLink = document.createElement('a');
//     strongGithubEl.textContent = 'GitHub: ';
//     githubListItem.appendChild(strongGithubEl);
//     githubLink.setAttribute('href', `https://www.github.com/${teamMember.github}`)
//     githubListItem.appendChild(githubLink)
//     githubListItem.textContent = teamMember.github;
//     cardListEl.appendChild(githubListItem);

//   } else if (teamMember.school) {

//     const schoolListItem =  document.createElement('li');
//     const strongSchoolEl = document.createElement('strong');
//     strongSchoolEl.textContent = 'School: ';
//     schoolListItem.appendChild(strongSchoolEl);
//     schoolListItem.textContent = teamMember.school;
//     cardListEl.appendChild(schoolListItem);
//   }

//   employeeCardsEL.appendChild(cardEl)

// }

// team.forEach((member) => renderCard(member));






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