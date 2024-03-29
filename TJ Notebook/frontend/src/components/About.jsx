import {useContext,useEffect} from "react";
import noteContext from '../context/notes/NoteContext';
export default function About() {
  const  a=useContext(noteContext);
  return (
    <div className="container">
    <h3>This is About Page</h3>
    </div>
  )
}
