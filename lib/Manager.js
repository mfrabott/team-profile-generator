const Employee = require('../lib/Employee');


class Manager extends Employee{
  constructor(name, ID, email, officeNumber, role) {
    
    super(name, ID, email, role)
    this.officeNumber = officeNumber;

  }

  getRole() {
    return 'Manager'
  }

}

module.exports = Manager;