const doc=document;

var button=doc.getElementById("click");


let json={name: "click",length:1};

let jso=JSON.stringify(json);

let parse=JSON.parse(jso);
console.log(parse);



if(localStorage.getItem("name")){
console.log("Already There");
console.log(localStorage.getItem("name"));

}
else{
// localStorage.setItem("name","Tirthesh Jain");
}


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
let obj=[{name:"Tirthesh Jain",RollNo:2230120},{name:"Tirthesh Jain",RollNo:2230120}];
console.log(obj);

function sum(...a){
 let sum=0;
    a.forEach(function(val){
        sum+=val;
    });
    return sum;
}






doc.getElementById("para").innerHTML=sum(100,2000,30,2,5,6);




for(let i=0;i<100;i++){
    doc.getElementById("big").innerHTML+=`<div class="container"></div>`;

}

button.innerText="Click Me Again";

console.log(doc.getElementsByTagName("div"));
console.log(document);


    let container=doc.getElementsByClassName("container");
    for(let i=0;i<container.length;i++){
    if(i%2==0){
    container[i].style="padding:5px;background-color:red";
    }
    else{
        container[i].style="padding:5px;background-color:green";
    }

    container[i].addEventListener("click",()=>{
        if(container[i].classList.contains("border")){
            container[i].classList.remove("border");
        }
        else{
            container[i].classList.add("border");
        }
    }
    );

let createElement=doc.createElement("p");
createElement.innerText="Create a new child "+i;
createElement.style.textAlign="center";
    container[i].appendChild(createElement);
    }    



let i=0;
setInterval(()=>{
    let date=new Date();
    let time=date.toLocaleTimeString();
    let day=date.toDateString();
let para=doc.getElementById("para");
para.innerHTML=time+" "+day;
para.style.fontWeight="bold";

},1000)   


arr.forEach((e)=>console.log(e));



