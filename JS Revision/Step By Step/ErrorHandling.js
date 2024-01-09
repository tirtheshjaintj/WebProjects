
try {
    console.log("fda");
    throw new SyntaxError("Saale Syntax Sahi Likh");
}
catch (error) {
    console.log(error);
    // console.log(error.name);
    // console.log(error.message);
    // console.log(error.stack);
}
finally {
    console.log("Fuck");
}
