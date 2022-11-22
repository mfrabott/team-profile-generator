const Employee = require('../lib/Employee')

describe("Employee", () => {
    describe("getName", () => {
      it("should acquire the name of the employee from input", () => {
        const testName = "Ghandi";
  
        const testEmployee = new Employee();
        testEmployee.getName(testName);

        expect(testEmployee.name).toEqual(testName);
      });
    });
  });
  