const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "dist");
const outputFile = path.join(OUTPUT_DIR, "team.html");

const template = require("./src/team-template");
const profile = [];

function menu () {
  function createManager(){
    return inquirer.prompt(
      [
        {
          type: "input",
          name: "mgrName",
          message: "Enter managers name.",
        },
        {
          type: "input",
          name: "mgrId",
          message: "Enter member ID.",
        },
        {
          type: "input",
          name: "mgrEmail",
          message: "Enter members email address",
        },
        {
          type: "input",
          name: "mgrNumber",
          message: "What is your team number?",
        },
        
      ]
    ) 
    .then(answers => {
      const manager = new Manager(answers.mgrName, answers.mgrId, answers.mgrEmail, answers.mgrNumber);
      profile.push(manager);

      teamOptions();
    });
    
  }
  function teamOptions(){
    inquirer.prompt([
      {
        type: "list",
        name: "buildOptions",
        message: "What type of team member would you like to add?",
        choices: [
          "Engineer",
          "Intern",
          "I don't need to add any more members"
        ]
      }
    ]
    )
    .then(userChoice => {
      switch(userChoice.buildOptions) {
        case "Engineer":
          createEngineer();
          break;
        case "Intern":
          createIntern();
          break;
        default: 
          buildTeam();
      }
    }); 
  }
  function createEngineer(){
    return inquirer.prompt(
      [
        {
          type: "input",
          name: "engName",
          message: "What is your name?",
        },
        {
          type: "input",
          name: "engId",
          message: "What is your ID number?",
        },
        {
          type: "input",
          name: "engEmail",
          message: "What is your email address?",
        },
        {
          type: "input",
          name: "engGithub",
          message: "What is your GitHub link?",
        },
      ]
    )
    .then(answers => {
      const engineer = new Engineer(answers.engName, answers.engId, answers.engEmail, answers.engGithub);
      profile.push(engineer);

      teamOptions();
    });

  }
  function createIntern(){
    return inquirer.prompt(
      [
        {
          type: "input",
          name: "intName",
          message: "What is your name?",
        },
        {
          type: "input",
          name: "intId",
          message: "What is your ID number?",
        },
        {
          type: "input",
          name: "intEmail",
          message: "What is your email address?",
        },
        {
          type: "input",
          name: "intSchool",
          message: "What school are you attending?",
        },
      ]
    )
    .then(answers => {
      const intern = new Intern(answers.intName, answers.intId, answers.intEmail, answers.intSchool);
      profile.push(intern);

      teamOptions();
    });
 
  }

  function buildTeam(){
    if (!fs.existsSync(OUTPUT_DIR)) {
      fs.mkdirSync(OUTPUT_DIR);
    }
    fs.writeFileSync(outputFile, template(profile), "utf-8");
  }

createManager();
}
menu();