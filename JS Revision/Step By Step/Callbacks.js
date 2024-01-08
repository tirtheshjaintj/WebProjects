"use strict";
//Taking Input In NodeJS

//Synchronous Programming Step By Step
const prompt = require("prompt-sync")({ sigint: true });
// let name = prompt("Tell Your Name ");
// console.log(name);

//Asynchronous Programming Let The Below Code Run
const func = async (url, callback) => {
    let data = await fetch(url);
    let json = await data.json();
    console.log(json);
    callback("Loaded",url);
}

const loading = (text,url) => {
    console.log(new Error(text+" "+url));  
};

func("https://jsonplaceholder.typicode.com/todos/1",loading);