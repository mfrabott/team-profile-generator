const inquirer = require('inquirer');

class Employee {
  constructor(name, ID, email) {
    this.name = name;
    this.ID = ID;
    this.email = email;
  };
  
  getName() {
    return this.name;
  };

  getId() {
    return this.id;
  };

  getEmail() {
    return this.email;
  };
    
  getRole() {
      return 'Employee'
  };

};
  
module.exports = Employee;
  