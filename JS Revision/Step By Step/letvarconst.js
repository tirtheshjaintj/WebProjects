"use strict";
console.log("Diference Between Var Let Const");

//
const coder="Tirthesh Jain";
{
        const coder="Ram Kumar";
        const coder1="Ram Kumar";
        console.log(coder);
}
const coder1="Tirthesh Jain";

console.log(coder1);

//Using Var For GLobal Scope
var a=100;
var b="Name";
var c=null;
var d=undefined;
var e;
{
    var b="Tirthesh Jain";
    console.log(b);
}
console.log(b);

//Using Var For Block Scope
let a1=100;
let b1="Name";
let c1=null;
let d1=undefined;
let e1;
{
    let b1="Tirthesh Jain";
    console.log(b1);
}


console.log(b1);

console.log(typeof(b1));
