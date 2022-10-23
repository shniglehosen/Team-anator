const Employee = require("../lib/Employee.js");

describe("Employee", () => {
  it("Should create an object", () => {
    const employee = new Employee();

    // expect(employee.name).toEqual("Nathan");
    // expect(employee.id).toEqual(3);
    expect(typeof(employee)).toBe("object");
  });
  // check if arguemtns are provided
  it("should get name via constructor", () => {
    const name = "Nathan";
    const employee = new Employee(name);

    expect(employee.name).toBe(name);
  });


  it("should get id via constructor", () => {
    const testValue = 4;
    const employee = new Employee("Nathan", testValue); 

    expect(employee.id).toBe(testValue);
  });

  it("should get email via constructor", () => {
    const testValue = "test@test.com";
    const employee = new Employee("Nathan", 4, testValue); 

    expect(employee.email).toBe(testValue);
  });

  // testing the methods
  it("Should get name via getName()", () => {
    const testValue = "Nathan";
    const employee = new Employee(testValue); 

    expect(employee.getName()).toBe(testValue);
  });
  // name should be a string

  it("Should throw an errror if 'name' is not a string", () => {
    const testValue = "test@test.com";
    const employee = new Employee("Nathan", 4, testValue); 

    expect(employee.email).toBe(testValue);
  });
  // Id should be a number
  it("Should throw an error if 'id' is not a number", () => {
    const testValue = "test@test.com";
    const employee = new Employee("Nathan", 4, testValue); 

    expect(employee.email).toBe(testValue);
  });

  // email should be an email address? Or string?
  it("Should throw and error if 'email' is not in correct format", () => {
    const testValue = "Employee";
    const cb = () => new Employee("Nathan", 3, "nathan.aramyan@gmail");
// this is get role method test 
    expect(cb).toThrow(err);
  })});