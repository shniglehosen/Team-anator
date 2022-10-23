const Employee = require("./Employee");

class Manager extends Employee{
    constructor(name, id, email, teamNumber){
        super(name,id,email);
        this.teamNumber = teamNumber;
    }

    getTeamNumber(){
        return this.teamNumber;
    }
    getRole(){
        return "Manager";
    }
}

module.exports = Manager;