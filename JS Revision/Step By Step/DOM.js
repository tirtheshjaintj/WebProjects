const doc = document;
console.log("DOM Manipulation Here");
// console.log(doc.body.firstChild);
// console.log(doc.body.lastChild);
let parent = doc.querySelector("#parent");

let parent2 = doc.querySelector("#parent2");
let children = Array.from(parent.children);
// console.log(doc.body.children);
let tag = doc.getElementsByTagName("div");
// console.log(tag);
let tag2 = doc.querySelectorAll("#parent div");
// console.log(tag2);
console.log("First Child", parent.firstChild);
for (let i of children) {
    console.log(i);
}

//Siblings
let child1 = parent.firstElementChild;
child1.innerText = "First Child";
let child2 = child1.nextSibling;
child2.innerText = "Second Child";
let child3 = child2.nextSibling;
child3.innerText = "Third Child";
let child4 = child3.nextSibling;
child4.innerText = "Fourth Child";
let last = parent.lastElementChild;
last.innerText = "Last Child";

// for(let i of children){
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

//Create Element
let newelem = doc.createElement("div");
newelem.classList.add("child");
newelem.innerText = "11";
doc.body.firstElementChild.appendChild(newelem);
newelem = doc.createElement("div");
newelem.classList.add("child");
newelem.textContent = "12";

parent.append(newelem);
parent.prepend(newelem.cloneNode(true));
parent.before(newelem.cloneNode(true));
parent.after(newelem.cloneNode(true));


console.log(parent.getAttribute("id"));
parent.setAttribute("style", "padding:100px;");

let i = children.length + 3;
parent.onclick = () => {
    // parent.removeAttribute("style");
    try {
        // parent.removeChild(parent.firstElementChild);
        // parent.replaceChild(newelem,parent.firstElementChild);
        let myelem = newelem.cloneNode(true);
        myelem.textContent = i;
        parent.appendChild(myelem.cloneNode(true));
        parent.classList.toggle("black");
        i++;

    }
    catch (err) {
        console.log("No Children");
    }
}


console.log(parent.dataset.name);
