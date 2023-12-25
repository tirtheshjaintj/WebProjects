const doc=document;

var editor1 = CodeMirror.fromTextArea(document.getElementById('htmlcode'), {
    lineNumbers: true,
    mode: 'javascript',
    matchBrackets : true,
    showHint: true,
    lint: true,
    autoCloseTags:true,
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
    matchBrackets : true,
    showHint: true,
    lint: true,
    autoCloseTags:true,
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
    matchBrackets : true,
    showHint: true,
    lint: true,
    autoCloseTags:true,
    lineWrapping: true,
	styleActiveLine: true,
	matchBrackets: true,
    extraKeys: {
        "Ctrl-Space": "autocomplete"
    },
    theme: 'abbott'
}); 

if(localStorage.getItem("htmlcode")!=null){
    editor1.setValue(localStorage.getItem("htmlcode"));
    editor2.setValue(localStorage.getItem("csscode"));
    editor3.setValue(localStorage.getItem("jscode"));
}

    let output=doc.getElementById("output");
    

function showoutput(){
    localStorage.setItem("htmlcode",editor1.getValue());
    localStorage.setItem("csscode",editor2.getValue());
    localStorage.setItem("jscode",editor3.getValue());
    output.innerHTML=`${localStorage.getItem("htmlcode")}`;
    output.innerHTML+=`<style> ${localStorage.getItem("csscode")}</style>`;
    eval(localStorage.getItem("jscode"));
    var i=0;
    if(i==0){
    var x = document.getElementById("snackbar");
    x.className = "show";
    setTimeout(function(){ x.className = x.className.replace("show", "");i=1; }, 3000);
    }
    else{
i=0;
    }

}
window.onkeyup=(e)=>{
    showoutput();
    console.clear();
};

showoutput();

let j=1;
let k=1;
let l=1;
function showhtml(){
    
    if(j==0){
        doc.getElementById("htmlbox").style.display="block"
        j=1;
    }
    else{
        doc.getElementById("htmlbox").style.display="none"
       j=0;
    }
   

}
function showjs(){
    if(k==0){
        doc.getElementById("jsbox").style.display="block"
        k=1;
    }
    else{
        doc.getElementById("jsbox").style.display="none"
       k=0;
    }
}

function showcss(){
    if(l==0){
        doc.getElementById("cssbox").style.display="block"
        l=1;
    }
    else{
        doc.getElementById("cssbox").style.display="none"
       l=0;
    }
}



