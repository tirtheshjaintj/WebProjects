import React from 'react'
import {useContext} from "react";
import noteContext from '../context/notes/NoteContext';
import NoteItem from './NoteItem';
export default function Notes() {
const  context=useContext(noteContext);
const {notes,setNotes}=context;
  return (
<div className="container">
<h2>Your Notes</h2>
<div className="row">
{
notes.map((note)=>{
  return <NoteItem key={note._id} note={note}/>
})
}
</div>
</div>
    )
}
