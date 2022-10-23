const addTeam = (team) => {
    const addMngr = (manager) => {
      return `
        <section>
        <div class="card text-white bg-secondary mb-3" style="max-width: 18rem;">
  <div class="card-header" style="text-align:center;">${manager.getRole()}</div>
  <div class="card-body">
    <h5 class="card-title" style="text-align:center;">${manager.getName()}</h5>
    <ul class="card-text">
    <li> ID: ${manager.getId()} </li>
    <li> Email: <a class="text-light" href ="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
    <li> Office #: ${manager.getTeamNumber()}</li>
    </ul>
  </div>
  </div>
  </section>
        `;
    };
    const addEng = (engineer) => {
      return `
      <section>
      <div class="card text-white bg-secondary mb-3" style="max-width: 18rem;">
  <div class="card-header" style="text-align:center;">${engineer.getRole()}</div>
  <div class="card-body">
  <h5 class="card-title" style="text-align:center;">${engineer.getName()}</h5>
  <ul class="card-text">
  <li> ID: ${engineer.getId()} </li>
  <li> Email: <a class="text-light" href ="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
  <li> Github: <a href="https://github.com/${engineer.getGithub()}" targer="_blank" title="Github"> ${engineer.getGithub()}</a></li>
  </ul>
  </div>
  </div>
  </section>
      `;
    };
    const addInt = (intern) => {
      return `
    <section>
    <div class="card text-white bg-secondary mb-3" style="max-width: 18rem;">
  <div class="card-header" style="text-align:center;">${intern.getRole()}</div>
  <div class="card-body">
  <h5 class="card-title" style="text-align:center;">${intern.getName()}</h5>
  <ul class="card-text">
  <li> ID: ${intern.getId()} </li>
  <li> Email: <a class="text-light" href ="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
  <li> School: ${intern.getSchool()}</li>
  </ul>
  </div>
  </div>
  </section>
    `;
    };
  
  
    const arrayHtml = [];
  
    arrayHtml.push(team
      .filter(employee => employee.getRole() === "Manager")
      .map(manager => addMngr(manager))
    );
  
     arrayHtml.push(team
      .filter(employee => employee.getRole() === "Engineer")
      .map(engineer => addEng(engineer))
      .join("")
    );
    
    arrayHtml.push(team
      .filter(employee => employee.getRole() === "Intern")
      .map(intern => addInt(intern))
      .join("")
    );
    return arrayHtml.join("");
  
  
  }
  module.exports = team => {
    return `
    <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta http-equiv="X-UA-Compatible" content="ie=edge" />
      <title>My Team</title>
      <link
        rel="stylesheet"
        href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
        crossorigin="anonymous"
      />
      <link rel="stylesheet" href="../style.css" />
      <script src="https://kit.fontawesome.com/c502137733.js"></script>
    </head>
    <body>
      <div class="container-fluid">
        <div class="row">
          <div class="col-12 jumbotron mb-3 team-heading">
            <h1 class="text-center">My Team</h1>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-12 team-area d-flex justify-content-center">
            ${addTeam(team)}
          </div>
        </div>
      </div>
    </body>
  </html>
    `;
  };