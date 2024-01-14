const hello = () => {
    console.log("Module1.js");
}

const advhello = (name) => {
    console.log("Module1.js " + name);
}



module.exports = { hello, advhello };
