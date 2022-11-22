const Employee = require('../lib/Employee');

class Engineer extends Employee{
  constructor(name, ID, email, githubUsername) {
    
    super(name, ID, email)
    this.githubUsername = githubUsername;

  };

  getgitHub() {
    return this.githubUsername
  };
  
  getRole() {
    return 'Engineer'
  };

};

module.exports = Engineer;