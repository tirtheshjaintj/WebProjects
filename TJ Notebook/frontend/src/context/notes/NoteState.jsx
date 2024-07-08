import { useState } from "react";
import NoteContext from "./NoteContext";
import Cookies from 'universal-cookie';

export default function NoteState(props) {
  const host="https://tj-notebook.vercel.app";
  const [notes, setNotes] = useState([]);
  const [progress,setProgress]=useState(0);
  
  const cookies = new Cookies();
  //Fetching All Notes
  const getAllNotes=async ()=>{
    try{
        const authtoken=cookies.get('auth-token');
        if(authtoken){
          setProgress(90);
        // console.log("GetAllNotes",authtoken);
      const response=await fetch(`${host}/api/notes/fetchall`,{
        method:'GET',
        headers:{
          'Content-Type':'application/json',
          'auth-token':authtoken
        }
      });
      setNotes(await response.json());
      setProgress(100);
    }
    }
    catch(error){
      // console.log(error);
    }
  }

  //Add a Note
  const addNote = async (note) => {
    try{
      setProgress(90);
    const authtoken=cookies.get('auth-token');
    const response=await fetch(`${host}/api/notes/addnote`,{
      method:'POST',
      headers:{
        'Content-Type':'application/json',
        'auth-token':authtoken
      },
      body:JSON.stringify(note)
    });
    const data=await response.json();
    // console.log("Adding a new Note");
    const created_note = {
      "_id": `${data._id}`,
      "user": `${data.user}`,
      "title": `${note.title}`,
      "description": `${note.description}`,
      "tag": `${note.tag}`
    };
    setNotes(notes.concat(created_note));
    setProgress(100);
  }
  catch(error){
    console.error(error);
  }
  }

  //Deleting A Note using Its ID
  const deleteNote = async (id) => {
const authtoken=cookies.get('auth-token');
if(window.confirm("Are your Sure you want to delete this Note")){
  setProgress(90);
  const newNotes = notes.filter((note) => {
    return note._id != id;
  });
  setNotes(newNotes);
    const response=await fetch(`${host}/api/notes/deletenote/${id}`,{
      method:'DELETE',
      headers:{
        'Content-Type':'application/json',
        'auth-token':authtoken
      }
    });
    setProgress(100);
    // console.log("Deleting Note with id", id);
  }
  }

  //Editing A Note using its ID
  const editNote = async (id, title, description, tag) => {
    //TODO API Call
    const authtoken=cookies.get('auth-token');
    try{
    setProgress(90);
    const response=await fetch(`${host}/api/notes/updatenote/${id}`,{
      method:'PUT',
      headers:{
        'Content-Type':'application/json',
        'auth-token':authtoken
      },
      body:JSON.stringify({title,description,tag})
    });
    const json=response.json();

    const newNotes=JSON.parse(JSON.stringify(notes));
    //Logic To Edit Client
    for (let i=0;i<newNotes.length;i++) {
      if (newNotes[i]._id == id) {
          newNotes[i].title = title;
          newNotes[i].description = description;
          newNotes[i].tag = tag;
          break;  
      }
    }
    setNotes(newNotes);
    setProgress(100);
  }
  catch(error){
    console.error(error);
  }
  }

  return (
    <NoteContext.Provider value={{ notes, setNotes, addNote, deleteNote, editNote ,getAllNotes,progress,setProgress}}>
      {props.children}
    </NoteContext.Provider>
  )
}
