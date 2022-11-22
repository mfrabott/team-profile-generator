const inquirer = require('inquirer');
const fs = require('fs');
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
const Engineer = require('./lib/Engineer');


// function 
const manager = new Manager()
const managerName = manager.getName();
// const employeeID = manager.getId();
// const employeeEmail = manager.getEmail();


console.log (managerName);


// TODO: Inquirer Inputs
// WHEN I start the application
// THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number


// WHEN I enter the team manager’s name, employee ID, email address, and office number
// THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team


// WHEN I select the engineer option
// THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu


// WHEN I select the intern option
// THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu



  // fs.writeFile('index.html', printHTML, (err) => {
  //       err ? console.error(err) : console.log('HTML Created!')
  //   });