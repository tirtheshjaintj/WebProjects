const arr=[1,2,3,4,5,6];


let a2=[2,2,3,3,4,5,6];
let result2=[];
let result1=a2.filter((val,i,arr)=>{
       return arr.indexOf(val)===i;
});
let len=a2.length;
for(let i=0;i<len;i++){
      if(result2.indexOf(a2[i])==-1){
        result2.push(a2[i]);
      }
}

console.log(result2);






console.log("Original",arr);

//Array Map Function
const arr2=arr.map(increment);
console.log("After Map",arr2);
function increment(val){
return val+1;
}

//Array Filter Function
const arr3=arr.filter(odd);
function even(val){
    return val%2==0;
}
function odd(val){
    return !(val%2==0);
}
console.log("After Filter",arr3);

//Array Reduce Function
const arr4=arr.reduce(sum);
function sum(val1,val2,index){
console.log(index);
    return val1+val2;
}
console.log("After Reduce",arr4);



arr.forEach(double);

function double(value,index,arr){
value*=2;
// console.log(index,value);
};



