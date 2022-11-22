const inquirer = require('inquirer');
const Employee = require('../lib/Employee');

class Intern extends Employee{
  constructor(name, ID, email, school) {
    
    super(name, ID, email)
    this.school = school;

  };

  getSchool() {
    inquirer
    .prompt(
      {
        type: 'input',
        message: `What school does the intern attend?`,
        name: 'school',
      })
    .then((response) => {
        this.school = response.school
    });

  };

  getRole() {
    return 'Intern'
  };

};

module.exports = Intern;