
"use strict";
for(let i=0;i<10;i++){
    console.log(++i);
}
const obj={
   ram:90,
   sham:200,
    sham:100,
   gitika:56
}
for(let a in obj){
    console.log(a,"marks",obj[a]);
}

let arr=[1,2,3,4,5,6];
// for(let a in arr){
//     console.log(a,"marks",arr[a]);
// }
for(let a of arr){
    console.log(a,"marks");
}

let i=0;
 
while(i<10){
    console.log(i,"Print");
    i++;
}
do{
    console.log(i,"Print");
}while(i<10);
