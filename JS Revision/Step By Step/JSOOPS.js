let a = {
    name: "Tirthesh Jain",
    run: () => {
        console.log("alert1");
    }
};



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
console.log(a);
a.run();
console.log(a.name2);