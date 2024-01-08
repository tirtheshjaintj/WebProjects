"use strict";
console.log("Hello In One");

// setTimeout(() => {
//     console.log("Hello In 2 Seconds");
// }, 2000);

console.log("Hello In Two");

//Promises
let promise = new Promise(function (resolve, reject) {
    console.log("New Promise");
    resolve(56);
});
console.log(promise);

let promise2 = new Promise((resolve, reject) => {
    console.log("Promise is Pending");
   setTimeout(() => {
       console.log("Promise 2 Resolved");
       resolve(true);
        //   reject(new Error("I am an error"));
   }, 4000); 
});

let promise3 = new Promise((resolve, reject) => {
    console.log("Promise is Pending");
   setTimeout(() => {
       console.log("Promise 3 Rejected");
    //    resolve(true);
       reject(new Error("I am an error"));
       
   }, 4000); 
});

promise2.then((val) => {
    console.log(val); 
});

promise3.catch((val) => {
    console.log("Some Error Occurred in Promise3 "+val); 
});
