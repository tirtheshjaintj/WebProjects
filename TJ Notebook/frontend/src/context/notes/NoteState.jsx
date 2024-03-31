import { useEffect, useState } from "react";
import NoteContext from "./NoteContext";
import Cookies from 'universal-cookie';

const NoteState = (props) => {
  const host="http://localhost:8000";
  const [notes, setNotes] = useState([]);
  //Fetching All Notes
  const getAllNotes=async ()=>{
    try{
      const response=await fetch(`${host}/api/notes/fetchall`,{
        method:'GET',
        headers:{
          'Content-Type':'application/json',
          'auth-token':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjYwMmM1NmE4MzY5MjFhNGY1ZGMwZDRjIn0sImlhdCI6MTcxMTcyNzcwOH0.V35Yba3VrX6Ixo6NNDYepj8rViqkuNda0K3wp9DYzro'
        }
      });
      setNotes(await response.json());
    }
    catch(error){
      console.log(error);
    }
  }
  const cookies = new Cookies();
  const authtoken=cookies.get('auth-token');

  //Add a Note
  const addNote = async (note) => {
    try{
    const response=await fetch(`${host}/api/notes/addnote`,{
      method:'POST',
      headers:{
        'Content-Type':'application/json',
        'auth-token':authtoken
      },
      body:JSON.stringify(note)
    });
    const data=await response.json();
    console.log("Adding a new Note");
    const created_note = {
      "_id": `${data._id}`,
      "user": `${data.user}`,
      "title": `${note.title}`,
      "description": `${note.description}`,
      "tag": `${note.tag}`,
      "date": "2024-03-27T11:37:16.550Z",
      "__v": 0
    };
    setNotes(notes.concat(created_note));
  }
  catch(error){
    console.error(error);
  }
  }

  //Deleting A Note using Its ID
  const deleteNote = async (id) => {
    console.log(id);
    const response=await fetch(`${host}/api/notes/deletenote/${id}`,{
      method:'DELETE',
      headers:{
        'Content-Type':'application/json',
        'auth-token':authtoken
      }
    });
    // console.log("Deleting Note with id", id);
    const newNotes = notes.filter((note) => {
      return note._id != id;
    });
    setNotes(newNotes);
  }

  //Editing A Note using its ID
  const editNote = async (id, title, description, tag) => {
    //TODO API Call
    try{
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

  }
  catch(error){
    console.error(error);
  }
  }

  return (
    <NoteContext.Provider value={{ notes, setNotes, addNote, deleteNote, editNote ,getAllNotes}}>
      {props.children}
    </NoteContext.Provider>
  )
}
export default NoteState;