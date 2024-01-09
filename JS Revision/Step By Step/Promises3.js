"use strict";
let p1 = new Promise((resolve, reject) => {
   setTimeout(() => {
       console.log("Promise 1");
          resolve(1);
    //    reject(new Error(1));
   }, 1000); 
});
let p2 = new Promise((resolve, reject) => {
   setTimeout(() => {
       console.log("Promise 2");
       reject(new Error(2));
    //    resolve(2);
   }, 2000); 
});
let p3 = new Promise((resolve, reject) => {
   setTimeout(() => {
       console.log("Promise 3");
    //    reject(new Error(3));
       resolve(3);
   }, 3000); 
});


//All Promise Resolved
// let promise_all = Promise.all([p1, p2, p3]);

// promise_all.then((val) => {
//     console.log(val);
// });

let promise_all = Promise.allSettled([p1, p2, p3]);

promise_all.then((val) => {
    console.log(val);
});

// promise_all.catch((error) => {
//     console.log("Error"+error);
// })

// p1.then((val) => {
//     console.log("Reolved "+val);
// })
// p2.then((val) => {
//     console.log("Reolved "+val);
// })
// p3.then((val) => {
//     console.log("Reolved "+val);
// })


