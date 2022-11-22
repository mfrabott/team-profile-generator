const inquirer = require('inquirer');
const Employee = require('../lib/Employee');

class Engineer extends Employee{
  constructor(name, ID, email, githubUsername) {
    
    super(name, ID, email)
    this.githubUsername = githubUsername;

  };

  getgitHub() {
    inquirer
    .prompt(
      {
        type: 'input',
        message: `What is the Engineer's gitHub username?`,
        name: 'username',
      })
    .then((response) => {
        this.githubUsername = response.username
    });
  };

  getRole() {
    return 'Engineer'
  };

};

module.exports = Engineer;