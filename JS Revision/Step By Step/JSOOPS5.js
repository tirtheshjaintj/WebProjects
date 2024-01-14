class Animal {

    constructor (name) {
        this.name = Animal.capitalize(name);
    }

    walk() {
        console.log("Animal " + this.name + " is walking");
    }

    static capitalize(name) {
        return name.charAt(0).toUpperCase() + name.substr(1, name.length);
    }

}

console.log(Animal.capitalize("ram kumar"));

let anim1 = new Animal("zebra");

anim1.walk();