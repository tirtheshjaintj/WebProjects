class Person {
    constructor (name) {
        this.name = name;
    }

    get name() {
        return this._name;
    }
    set name(newName) {
        this._name = newName;
    }
}

let p1 = new Person("tirthesh Jain");
//With Constructor
p1.name = ""
console.log(p1.name);

//Using Getter Setter
console.log(p1.name);
p1.name = "Ram Kumar";
console.log(p1.name);