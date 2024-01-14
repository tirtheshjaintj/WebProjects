"use strict";
class Employee {
    constructor (name) {
        this.name = name;
        console.log("Class Created For " + this.name);

    }
    login() {
        console.log("Employee has logged In");
    }
    logout() {
        console.log("Employee has logged Out");
    }
    requestLeaves(leaves) {
        console.log(`Employee has requested ${leaves} leaves`);
    }
}

class Employee2 {

}

class Programmer extends Employee {
    constructor (name) {
        super(name);
        this.name = name;
        console.log("Class Created 2 For " + this.name);
    }
    requestCoffee(x) {
        console.log(`Employee has requested ${x} cup of coffee`);
    }

    requestLeaves(leaves) {
        super.requestLeaves(leaves);
    }

}


let e = new Employee("Tirthesh Jain");
e.login();
e.requestLeaves(10);

console.log("Programmer");
let p = new Programmer("Ram Kumar");
p.login();
p.requestLeaves(5);
p.requestCoffee(10);

