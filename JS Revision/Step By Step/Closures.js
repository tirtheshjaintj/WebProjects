"use strict"
//Closures

let message = "Global";

function hello1() {
    //Lexical Environment Of Outer Function
    console.log("Hello1");
    let message = "Good Morning";
    console.log("Hello1 " + message);
    //Inner Function Is Closure
    let c = function () {
        console.log("I can C you ", message);
    }
    message = "Value Changed";
    return c;
}

function returnfunc() {
    const x = () => {
        let a = 1;
        console.log(a);
        const y = () => {
            // let a = 2;
            console.log(a);
            const z = () => {
                // let a = 3;
                console.log(a);
            }
            z();
        }
        a = 999;
        y();
        // x();
    }
    return x;
}


let closure1 = hello1();
closure1();

let closure2 = returnfunc();
closure2();

