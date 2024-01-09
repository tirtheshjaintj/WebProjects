async function tj() {
    
    let p1 = new Promise((resolve, reject) => {
        setTimeout(() => {
            // console.log("Promise 1");
            resolve(1);
        }, 3000);
    });

    let p2 = new Promise((resolve, reject) => {
         setTimeout(() => {
            // console.log("Promise 2");
            resolve(2);
        }, 2000);
    });
    console.log("Promise 1");
    let valp1 = await p1;
    console.log(p1);
    console.log("Promise 2");
    let valp2 = await p2;
    console.log(p2);
    return [valp1, valp2];
}

let res = tj();
res.then((val) => {
    console.log(val);
})