console.log("Cookie " + document.cookie);

document.cookie = "name=Tirthesh";
document.cookie = "name=Ram Kumar";
document.cookie = "name2=Tirthesh";
let key = prompt("Enter Your Key");
let value = prompt("Enter Your Value");

document.cookie = `${encodeURIComponent(key)}=${value}`;

console.log(document.cookie.split(";"));
