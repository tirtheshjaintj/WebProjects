import React,{useContext} from 'react'
import NoteContext from "../context/notes/NoteContext";
export default function NoteItem(props) {
const { note, updateNote} = props;
const  context=useContext(NoteContext);
const {deleteNote}=context;
  return (
    <>
      <div className="col-lg-3 my-2">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">
            {note.title} 
            <i className="fa-trash-alt far  p-1" onClick={()=>{deleteNote(note._id)}}></i>             
            <i className="fa-edit far  p-1" onClick={()=>{updateNote(note)}}></i>
            </h5>
            <p className="card-text">{note.description}</p>
            <p className="card-text">{note.tag}</p>
          </div>
        </div>
      </div>
    </>
  )
}
