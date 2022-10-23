const Engineer = require("../lib/engineer.js");

describe("Engineer", () => {
  it("should be an instance of engineer class", () => {
    expect(new Engineer()).toBeInstanceOf(Engineer);
  });

  it("should create an object keys first name, last name, full name, id, email role", () => {
    const engineer = new Engineer(
      "Nathan",
      "Aramyan",
      5,
      "nathan.aramyan@gmail.com",
      "NathanAramyan"
    );
    engineer.getRole();

    expect(engineer).toEqual({
      firstName: "Nathan",
      lastName: "Aramyan",
      id: 5,
      email: "Nathan.Aramyan@gmail.com",
      role: "Engineer",
      github: "NathanAramyan",
    });
  });

  it("should create an object with fullName", () => {
    const engineer = new Engineer("Nathan", "Aramyan");
    engineer.getName();

    expect(engineer.fullName).toEqual("Nathan Aramyan");
  });

  it("should create an object with role equal to engineer", () => {
    const engineer = new Engineer("Nathan", "Aramyan");
    engineer.getRole();

    expect(engineer.role).toEqual("Engineer");
  });
});