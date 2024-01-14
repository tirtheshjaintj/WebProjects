let a = (val) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(val);
        }, 1000);
    })
}


//IIFE
(
    async () => {
        let b = await a(10);
        console.log(b);
        let c = await a(20);
        console.log(c);
        let d = await a(40);
        console.log(d);
    }

)();