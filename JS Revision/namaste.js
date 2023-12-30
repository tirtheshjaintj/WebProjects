let obj={harry:95,ramesh:100,mukesh:80};

let a=[1,20,30,21,90];
a[3]=1000;

let compare =(a,b)=>{ return a-b};

a.sort(compare);


// for(let i in a){
//     console.log(a[i]);
// }
// a.push(784);
a.forEach((item,index)=>{
console.log(item+" at index "+index);
});



// console.log(a.toString());
// console.log(a.join("-"));
// console.log(a.shift(),a);
// console.log(a.splice(4,1),a);
// console.log(a.unshift(100),a);


console.log(obj);

// for(let i=0;i<Object.keys(obj).length;i++){
// console.log(Object.keys(obj)[i]+" marks =",Object.values(obj)[i]);
// }

for(let i in obj){
    console.log(i+" marks =",obj[i]);
}

// let no=10;
// let i;
// while(i!=no){
//     i=prompt("Enter A Number");
// }

const mean=(a,b,c,d)=>{
console.log((a+b+c+d)/4);
};

mean(10,20,30,40);
let string=`Today Is ${new Date().toDateString()}`.toLowerCase();
console.log(string);

console.log(string.includes("today"));

let extract="Please give Rs 1000";
let val=extract.replace("Please give Rs","").trim();
val=Number.parseInt(val);
console.log(typeof(val));
console.log(val);
