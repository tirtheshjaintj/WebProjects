let a = {
    name: "Tirthesh Jain",
    run: () => {
        console.log("alert1");
    }
};

console.log(a);

let p1 = {
    run: () => {
        console.log("alert2");
    }
};

p2 = {
    name2: "TJ"
};

p1.__proto__ = p2;

a.__proto__ = p1;
a.run();
console.log(a.name2);