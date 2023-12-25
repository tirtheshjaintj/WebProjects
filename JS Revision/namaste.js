let a=100;
const doc=document;

for(let i=0;i<100;i++){
doc.body.innerHTML+=`<button class="container">Hello${i}</button>`;
}

function add(e){
       let b=200;
       console.log(e);

       function subtract(a,b){

       }

}

add();

window.addEventListener('click',(e)=>{


    console.log(e.target);
    e.target.style="display:none;";

});;

console.log(this);