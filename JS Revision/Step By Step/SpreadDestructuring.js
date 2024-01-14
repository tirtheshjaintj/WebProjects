"use strict";


//Destructuring
let arr = [12, 1, 15, 16, 17, 8];
let [a, , b, ...rest] = arr;
console.log(a, b, rest);

let [a1, b1, c1] = [10, 20, 30];
console.log(a1, b1, c1);

const obj = { a2: 1, b2: 2 };
const { a2, b2 } = obj;
console.log(a2, b2);

//Spread Operator
function sum(...args) {
    let sum = 0;
    for (let i of args) {
        sum += i;
    }
    return sum;
}

console.log(sum(10, 20, 30));

let obj2 = {
    name: "Tirthesh Jain",
    degree: "B.Tech"
}
let obj3 = { ...obj2, name: "Ram Kumar" };
console.log(obj3);


