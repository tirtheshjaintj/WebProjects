
const timer=setTimeout((a,b,c) => {
    console.log("I counted till 2 Second "+(a+b+c));
}, 2000,10,20,30);

// clearTimeout(timer);


const interval=setInterval(() => {
    console.log(new Date().toLocaleTimeString());
}, 1000);

setTimeout(() => {
    clearInterval(interval);
}, 10000);


function sum(a, b) {
    return a + b;
}

console.log(sum(10,20,30));
