"use strict";

var doc = document;
console.log("DOM Manipulation Here"); // console.log(doc.body.firstChild);
// console.log(doc.body.lastChild);

var parent = doc.querySelector("#parent");
var parent2 = doc.querySelector("#parent2");
var children = Array.from(parent.children); // console.log(doc.body.children);

var tag = doc.getElementsByTagName("div"); // console.log(tag);

var tag2 = doc.querySelectorAll("#parent div"); // console.log(tag2);

console.log("First Child", parent.firstChild);

for (var _i = 0, _children = children; _i < _children.length; _i++) {
  var i = _children[_i];
  console.log(i);
}

var child1 = parent.firstElementChild;
child1.innerText = "First Child";
var child2 = child1.nextSibling;
child2.innerText = "Second Child";
var child3 = child2.nextSibling;
child3.innerText = "Third Child";
var child4 = child3.nextSibling;
child4.innerText = "Fourth Child";
var last = parent.lastElementChild;
last.innerText = "Last Child"; // for(let i of children){
//     console.log(i);
// }
//Matches Closest Contains CSS Selectors

console.log(parent.matches(".parent"));
console.log(children[0].closest("#parent"));
console.log(parent.contains(children[0]));
console.dir(parent.outerHTML);
console.log(doc.body.firstElementChild.nodeName);
console.log(doc.body.firstElementChild);
console.log("TagName of First Child", doc.body.firstElementChild.tagName);
console.log("NodeName of First Child", doc.body.firstElementChild.tagName);
var newelem = doc.createElement("div");
newelem.classList.add("child");
newelem.innerText = "11";
doc.body.firstElementChild.appendChild(newelem);
newelem = doc.createElement("div");
newelem.classList.add("child");
newelem.innerText = "12";
parent.append(newelem); // parent.prepend("Prepend");

parent.before("Before");
parent.after("After");
console.log(parent.getAttribute("id"));
parent.setAttribute("style", "padding:100px;");

parent.onclick = function () {
  // parent.removeAttribute("style");
  try {
    parent.removeChild(parent.firstElementChild);
    parent.classList.toggle("black");
  } catch (err) {
    console.log("No Children");
  }
};

console.log(parent.dataset.name);