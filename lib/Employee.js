const inquirer = require('inquirer');

class Employee {
    constructor() {
    };
  
    getName() {
        inquirer
        .prompt(
          {
            type: 'input',
            message: `What is the new employee's name?`,
            name: 'name',
          })
        .then((response) => {
            this.name = response.name
        });
    };

    getId() {
        inquirer
        .prompt(
          {
            type: 'input',
            message: `What is the new employee's ID Number?`,
            name: 'idNumber',
          })
        .then((response) => {
            this.id = response.idNumber;
        });
    };

    getEmail() {
        inquirer
        .prompt(
          {
            type: 'input',
            message: `What is the new employee's email address?`,
            name: 'email',
          },)
        .then((response) => {
            this.email = response.email;
        });
    };
    
    getRole() {
        return 'Employee'
    };

};
  
module.exports = Employee;
  