import React,{useContext,useState} from "react";
import NoteContext from "../context/notes/NoteContext";
export default function NoteForm() {
const  context=useContext(NoteContext);
const {addNote}=context;
const [note,setNote]=useState({title:"",description:"",tag:""});
const handleClick=(e)=>{
e.preventDefault();
if(note.title.replaceAll(" ","").length && note.description.replaceAll(" ","").length>5){
addNote(note);
document.getElementById("noteform").reset();
setNote({title:"",description:"",tag:""});
}
}
const onChange=(e)=>{
        setNote({...note,[e.target.name]:e.target.value});
}
  return (
 <>
         <form className="my-3" id="noteform" action="/" method="post">
          <div className="mb-3">
            <label htmlFor="title" className="form-label">Add Note Title</label>
            <input type="text" className="form-control" name="title" id="title" onChange={onChange} placeholder="Add a title For Note" minLength={5} required/>
          </div>
          <div className="mb-3">
            <label htmlFor="description" className="form-label">Add Note Description</label>
            <textarea className="form-control" name="description" id="description" onChange={onChange} placeholder='Add Note Description' rows="3" minLength={5} required></textarea>
          </div>
          <div className="mb-3">
            <label htmlFor="tag" className="form-label">Add Note Tag</label>
            <input type="text" className="form-control" name="tag" id="tag" onChange={onChange} placeholder="Add a tag For Note"/>
          </div>
          <button type="submit" disabled={note.title.length<5 || note.description.length<5} onClick={handleClick} className='btn btn-primary'>Add Note</button>
        </form>
 </>   
  )
}
