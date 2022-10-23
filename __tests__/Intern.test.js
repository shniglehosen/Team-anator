const Intern = require("../lib/intern.js");

describe("Intern", () => {
  it("should be an instance of intern class", () => {
    expect(new Intern()).toBeInstanceOf(Intern);
  });

  it("should create an object keys first name, last name, id, email, role", () => {
    const intern = new Intern(
      "Nathan",
      "Aramyan",
      5,
      "Nathan.aramyan@gmail.com",
      "Intern"
    );
    intern.getRole();

    expect(intern).toEqual({
      firstName: "Nathan",
      lastName: "Aramyan",
      id: 5,
      email: "nathan.aramyan@gmail.com",
      role: "Intern",
      school: "DU",
    });
  });

  it("should create an object with fullName", () => {
    const intern = new Intern("Nathan", "Aramyan");
    intern.getName();

    expect(intern.fullName).toEqual("Nathan Aramyan");
  });

  it("should create an object with role equal to intern", () => {
    const intern = new Intern("Nathan", "Aramyan");
    intern.getRole();

    expect(intern.role).toEqual("Intern");
  });
});