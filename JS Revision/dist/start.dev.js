"use strict";

var doc = document;
var button = doc.getElementById("click");
var json = {
  name: "click",
  legth: 1
};
var jso = JSON.stringify(json);
var parse = JSON.parse(jso);
console.log(parse);

if (localStorage.getItem("name")) {
  console.log("Already There");
  console.log(localStorage.getItem("name"));
} else {// localStorage.setItem("name","Tirthesh Jain");
}

var arr = ["a", "b", "c", "d", "e"];
arr.pop();
arr.push("Hello".split(""));
arr.shift();
arr.unshift("World");
console.log(arr);
console.log(arr.toString());
console.log(arr.join(" + "));
arr.forEach(function (val, key) {
  console.log(val, key);
});
var obj = [{
  name: "Tirthesh Jain",
  RollNo: 2230120
}, {
  name: "Tirthesh Jain",
  RollNo: 2230120
}];
console.log(obj);

function sum() {
  var sum = 0;

  for (var _len = arguments.length, a = new Array(_len), _key = 0; _key < _len; _key++) {
    a[_key] = arguments[_key];
  }

  a.forEach(function (val) {
    sum += val;
  });
  return sum;
}

doc.getElementById("para").innerHTML = sum(100, 2000, 30, 2, 5, 6);

for (var _i = 0; _i < 100; _i++) {
  doc.getElementById("big").innerHTML += "<div class=\"container\"></div>";
}

button.innerText = "Click Me Again";
console.log(doc.getElementsByTagName("div"));
console.log(document);
var container = doc.getElementsByClassName("container");

var _loop = function _loop(_i2) {
  if (_i2 % 2 == 0) {
    container[_i2].style = "padding:5px;background-color:red";
  } else {
    container[_i2].style = "padding:5px;background-color:green";
  }

  container[_i2].addEventListener("click", function () {
    if (container[_i2].classList.contains("border")) {
      container[_i2].classList.remove("border");
    } else {
      container[_i2].classList.add("border");
    }
  });

  var createElement = doc.createElement("p");
  createElement.innerText = "Create a new child " + _i2;
  createElement.style.textAlign = "center";

  container[_i2].appendChild(createElement);
};

for (var _i2 = 0; _i2 < container.length; _i2++) {
  _loop(_i2);
}

var i = 0;
setInterval(function () {
  var date = new Date();
  var time = date.toLocaleTimeString();
  var day = date.toDateString();
  var para = doc.getElementById("para");
  para.innerHTML = time + " " + day;
  para.style.fontWeight = "bold";
}, 1000);
arr.forEach(function (e) {
  return console.log(e);
});