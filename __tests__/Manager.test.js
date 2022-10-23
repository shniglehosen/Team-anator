const Manager = require("../lib/manager.js");

describe("Manager", () => {
  it("should be an instance of manager class", () => {
    expect(new Manager()).toBeInstanceOf(Manager);
  });

  it("should create an object keys first name, last name, id, email, role", () => {
    const manager = new Manager(
      "Nathan Aramyan",
      5,
      "nathan.aramyan@gmail.com",
      "Manager"
    );
    manager.getRole();

    expect(manager).toEqual({
      Name: "Nathan Aramyan",
      id: 5,
      email: "nathan.aramyan@gmail.com",
      role: "Manager",
      teamNumber: 66,
    });
  });

  it("should create an object with fullName", () => {
    const manager = new Manager("Nathan Aramyan");
    manager.getName();

    expect(manager.fullName).toEqual("Nathan Aramyan");
  });

  it("should create an object with role equal to manager", () => {
    const manager = new Manager("Nathan", "Aramyan");
    manager.getRole();

    expect(manager.role).toEqual("Manager");
  });
});