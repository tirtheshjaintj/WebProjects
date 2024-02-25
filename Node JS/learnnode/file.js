import fs from "fs";
import os from "os";
// Sync Write File
// fs.writeFileSync('./test.txt',"Tirthesh Jain");

// fs.writeFile('./test.txt',"Tirthesh Jain Here",(err)=>{});



fs.appendFile('./test.txt',"Tirthesh Jain Here\n",(err)=>{});

console.log("Synchronous");
const result1=fs.readFileSync('./test.txt','utf-8');
console.log(result1);
console.log("Synchronous");

console.log("Asynchronous");
fs.readFile('./test.txt','utf-8',(err,result)=>{
    console.log(result);
});
console.log("Asynchronous");







console.log("Helo");

fs.cpSync('./file.js','./copy.txt');
fs.unlinkSync('./copy.txt');
// fs.cpSync('./file.js','./copy.txt');
console.log(fs.statSync('./file.js'));
// fs.mkdirSync("tirthesh2/a/b",{recursive:true});

let arr=[10,20,30,40];

arr.forEach((elem)=>{
console.log(elem);
})

let arr2=arr.map((elem)=>{
return elem*2;
})
console.log(arr2);

let arr3=arr.filter((elem)=>{
    return (elem%3==0);
})
console.log(arr3);

console.log(os.hostname);

// class Hero{
    
//     constructor(a,b){
//         this.a=a;
//         this.b=b;
//         this.name="Tirthesh Jain"
//         console.log("I am a Hero Class");
//     }

//     print(){
//         console.log(this);
//     }
// }

// class Zero extends Hero{
//     constructor(a,b){
//         super(a,b);
//     }
// }

// let hero1=new Zero(10,20);
// hero1.print();