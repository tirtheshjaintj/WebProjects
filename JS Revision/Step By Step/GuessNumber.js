"use strict";
//Taking Input In NodeJS
const prompt = require("prompt-sync")({ sigint: true });

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

let guess=getRandomInt(100);
let num;
let times=0;
while(num!=guess){
    num=Number.parseInt(prompt("Guess Number "));
       if(num>guess){
                        console.log("The guess Is Bigger");
       }
       else if(num<guess){
                        console.log("Your guess Is Smaller");
       }
       times++;
}
console.log("You Guessed It Right in",times,"times");

