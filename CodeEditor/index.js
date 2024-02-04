"use strict";
const doc = document;
var editor1 = CodeMirror.fromTextArea(document.getElementById('htmlcode'), {
    lineNumbers: true,
    mode: 'javascript',
    matchBrackets: true,
    showHint: true,
    lint: true,
    autoCloseTags: true,
    lineWrapping: true,
    styleActiveLine: true,
    matchBrackets: true,
    extraKeys: {
        "Ctrl-Space": "autocomplete"
    },
    theme: 'abbott'
});

var editor2 = CodeMirror.fromTextArea(document.getElementById('csscode'), {
    lineNumbers: true,
    mode: 'javascript',
    matchBrackets: true,
    showHint: true,
    lint: true,
    autoCloseTags: true,
    lineWrapping: true,
    styleActiveLine: true,
    matchBrackets: true,
    extraKeys: {
        "Ctrl-Space": "autocomplete"
    },
    theme: 'abbott'
});
var editor3 = CodeMirror.fromTextArea(document.getElementById('jscode'), {
    lineNumbers: true,
    mode: 'javascript',
    matchBrackets: true,
    showHint: true,
    lint: true,
    autoCloseTags: true,
    lineWrapping: true,
    styleActiveLine: true,
    matchBrackets: true,
    extraKeys: {
        "Ctrl-Space": "autocomplete"
    },
    theme: 'abbott'
});

if (localStorage.getItem("htmlcode") != null) {
    editor1.setValue(localStorage.getItem("htmlcode"));
    editor2.setValue(localStorage.getItem("csscode"));
    editor3.setValue(localStorage.getItem("jscode"));
}

let output = doc.getElementById("output");


function showoutput() {
    localStorage.setItem("htmlcode", editor1.getValue());
    localStorage.setItem("csscode", editor2.getValue());
    localStorage.setItem("jscode", editor3.getValue());
    output.innerHTML = `${localStorage.getItem("htmlcode")}`;
    output.innerHTML += `<style> ${localStorage.getItem("csscode")}</style>`;
    eval(localStorage.getItem("jscode"));
    var i = 0;
    if (i == 0) {
        var x = document.getElementById("snackbar");
        x.className = "show";
        setTimeout(function () { x.className = x.className.replace("show", ""); i = 1; }, 3000);
    }
    else {
        i = 0;
    }



}

const saver = () => {
    if (window.innerWidth < 700) {
        showoutput();
        console.clear();
    }
}

window.onkeydown = () => {
    showoutput();
    console.clear();
};

window.onkeyup = () => {
    showoutput();
    console.clear();
};

window.onscroll = () => {
    showoutput();
    saver();
};

window.onclick = () => {
    showoutput();
    saver();
};

showoutput();

function showhtml() {
    $("#htmlbox").slideToggle("slow");
}
function showjs() {
    $("#jsbox").slideToggle("slow");
}

function showcss() {
    $("#cssbox").slideToggle("slow");
}
// Add the event listener
document.addEventListener("keydown", (event) => {
    if (event.keyCode == 83 && (navigator.platform.match("Mac") ? event.metaKey : event.ctrlKey)) {
        event.preventDefault();
        doSomethingElse();
    }
}, false);

// Do something other than the default action
const doSomethingElse = () => {
    console.log('Prevented the default event for the Ctrl+S key combination');
    console.log('You can now do something else with the key combo.');
}

doc.getElementById("reset").addEventListener("click", () => {

    if (confirm("Are you sure you want to reset?")) {
        localStorage.clear();
        editor1.setValue(`<div id="center"> 
<h1 id="owner">Hope You Like My Live Code Editor  (Tirthesh Jain)</h1>
</div>`);
        editor2.setValue(`#center{
    display:flex;
    justify-content:center;
    user-select:none;
}
h1{
    color:white;
    background:black;
    font-size:20px;
    padding:10px;
    text-align:center;
    transition:all 3s;
    border-radius:20px;
    margin:10px;
    box-shadow:2px 2px 10px black;
}
h1:hover{
   transform:scale(1.5);
}
`);
        editor3.setValue(`document.getElementById("owner").onclick=()=>{alert(owner.innerText)};`);
    }
    else {

    }
});


if (window.innerWidth < 700) {
    showjs();
    showcss();
}




