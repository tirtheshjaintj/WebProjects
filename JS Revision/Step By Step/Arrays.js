let arr = [1, 2, 3, 4, { name: "Tirthesh" }];
let arr2 = [1, 2, 20, 4, 5, 6, 7, 100];
let arr3 = ["TJ", "Tirthesh", "Name", "My"];
// delete arr2[0];
// console.log(arr2.concat(arr));
// console.log(arr2.join(" and "));
// console.log(arr2.pop());
// console.log(arr2.push(0));
// console.log(arr2.shift());
// console.log(arr2.unshift(100));

arr2.reverse();
console.log(arr2);

arr2.sort((a, b) => {
    return a - b;
});

console.log(arr2);

arr.forEach(callbackfn);


function callbackfn(i, index, arr) {
    console.log(i);
}

let deleted = arr3.splice(0, 2, "Ram", "Sita");
console.log(arr3);
console.log(deleted);

let slice1 = arr3.slice(1);
let slice2 = arr3.slice(1, 3);
console.log(slice1);
console.log(slice2);

