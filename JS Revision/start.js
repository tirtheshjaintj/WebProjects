const doc=document;
var button=doc.getElementById("click");

let arr=["a", "b", "c", "d", "e"];
arr.pop();
arr.push("Hello".split(""));
arr.shift();
arr.unshift("World");
console.log(arr);
console.log(arr.toString());
console.log(arr.join(" + "));


arr.forEach(function(val,key) {
    console.log(val,key);
})
let obj=[{"name":"Tirthesh Jain","RollNo":2230120},{"name":"Tirthesh Jain","RollNo":2230120}];
console.log(obj);

function sum(...a){
 let sum=0;
    a.forEach(function(val){
        sum+=val;
    });
    return sum;
}






doc.getElementById("para").innerHTML=sum(100,2000,30,2,5,6);


button.addEventListener("click",(e) => {console.log(e)});

button.innerText="Click Me Again";

console.log(doc.getElementsByTagName("div"));
console.log(document);


let i=0;
setInterval(()=>{
    let date=new Date();
    let time=date.toLocaleTimeString();
    let day=date.toDateString();
let para=doc.getElementById("para");
para.innerHTML=time+" "+day;
para.style.fontWeight="bold";

},1000)   
