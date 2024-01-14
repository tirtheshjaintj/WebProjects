//Inheritance

"use strict";

class Animal {
    constructor (name, color) {
        this.name = name;
        this.color = color;
    }
    run() {
        console.log(this.name + " is Running");
    }
    eat() {
        console.log(this.name + " is Eating");
    }
}

class Monkey extends Animal {

    eatBanana() {
        console.log(this.name + " is Eating Banana");
    }
    hide() {
        console.log(this.name + " is Hiding");
    }

}

let anim1 = new Animal("Giraffe", "yellow");
anim1.run();

let mon1 = new Monkey("Monkey", "Brown");
mon1.run();
mon1.eatBanana();
mon1.hide();