"use strict";
const func = (resolve, reject) => {
    setTimeout(() => {
        console.log("Resolved after 2 Seconds");
        resolve("DONE 1");
    }, 2000);

}

let p1 = new Promise(func);

p1.then((val) => {
    console.log(val);
    let p2 = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve("DONE 2");
        }, 2000);
        
    });
    return p2;
})
.then((val) => {
    console.log(val);
    return "DONE 3";
}).then((val) => {
    console.log(val);   
})

const LoadScript = (src) => {
    return new Promise((resolve,reject) => {
        let script1 = document.createElement("script");
        script1.src = src;
        document.body.appendChild(script1);
        script1.onload = () => {
            resolve("Sir Script Loaded Successfully");
        };

        script1.onerror = () => {
            reject(new Error("We Are Sorry Script Not Found"));
        };

    })
}

LoadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js")
    .then((val) => {
        console.log(val);
        return LoadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js");
    }).then((error) => {
        console.log(error);
    })
    .catch((error) => {
        console.log(error);
    });

let p2 = new Promise((resolve, reject) => {
 setTimeout(() => {
     console.log("Promise Is Resolved");
     resolve();
 }, 2000);   
});

p2.then(() => {
    console.log("Handler 1"); 
});

p2.then(() => {
    console.log("Handler 2"); 
});

p2.then(() => {
    console.log("Handler 3"); 
});