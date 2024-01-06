"use strict";
const obj={
    name:"Tirthesh Jain",
    age:"19",
    sem:{
    id:"4th"
}
}
obj.name="TJ";
obj.weight=69;
console.log(obj["sem"]["id"]);

for(let i in obj) {
    console.log(i);
}

let arr=[null,345,true,BigInt("93283338129480"),"TJ",Symbol("I am a nice Symbol")];
for(let i of arr) {
    console.log(i,typeof i);
}
