const doc=document;
function update(){
let title=document.getElementById("title").value.trim().replaceAll("<","").replaceAll(">","");
let desc=document.getElementById("description").value.trim().replaceAll("<","").replaceAll(">","");
if(title.replaceAll(" ","")!="" && desc.replaceAll(" ","")!=""){
if(localStorage.getItem("tasks")==null){
tasksArray=[];
tasksArray.push([title,desc]);
localStorage.setItem("tasks",JSON.stringify(tasksArray));
}
else{
    let tasksArrayStr=localStorage.getItem("tasks");
    tasksArray=JSON.parse(tasksArrayStr);
    tasksArray.push([title,desc]);
    localStorage.setItem("tasks",JSON.stringify(tasksArray));
}
console.log(tasksArray);
}
doc.getElementById("title").value="";
doc.getElementById("description").value="";
show();
}
function show(){
if(localStorage.getItem("tasks")==null){
        tasksArray=[];
        localStorage.setItem("tasks",JSON.stringify(tasksArray));
}
else{
    let tasksArrayStr=localStorage.getItem("tasks");
    tasksArray=JSON.parse(tasksArrayStr);
    localStorage.setItem("tasks",JSON.stringify(tasksArray));
}
    let tablebody=doc.getElementById("tablebody");
let str="";
tasksArray.forEach((element,index) => {
    str+=`<tr>
        <td scope="col" class="no">${index+1}</td>
            <td scope="col" class="no">${element[0]}</td>
            <td scope="col" class="no">${element[1]}</td>
          <td scope="col" class="yes"><button type="button" onclick="deleted(${index})" class="glitter btn btn-outline-light">Delete</button></td>
          </tr>
          `;
});
tablebody.innerHTML=str;
}
function save(){
    update();
}
function deleted(i){
    if(confirm("Do you want to delete?")){
    let tasksArrayStr=localStorage.getItem("tasks");
    tasksArray=JSON.parse(tasksArrayStr);
    tasksArray.splice(i,1);
    localStorage.setItem("tasks",JSON.stringify(tasksArray));
    show();
    }
    else{

    }
}
function clearall(){
    if(confirm("Do you want to delete?")){
    localStorage.clear();
    show();

    }
    else{

    }
}
update();

