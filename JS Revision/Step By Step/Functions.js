"use strict";
//Taking Input In NodeJS
const prompt = require("prompt-sync")({ sigint: true });

function add(...args) {
let sum=0;
for(let i of args) {
sum+=i;
}
return sum;
}
console.log("The Sum Is",add(10,20,30,40,50));

//Returning Function
const divide=()=>{
return (a,b)=>{
return a/b;
};

};
console.log(divide()(10,20));


const print=(obj)=>{
for(let i in obj){
    console.log(i,"marks",obj[i]);
}
};

const obj={
    ram:90,
    sham:100,
    reshma:150,
    ramesh:50
}

print(obj);

let correct=20;
let num;
while(correct!=num){
num=prompt("Enter a number ");
}

console.log("You have entered a correct number");

const mean=(...args)=>{
let sum=0;
for(let i of args){
       sum+=i;
}
return sum/args.length;

};

console.log(mean(10,20,30));


