import { useState } from "react";
import NoteContext from "./NoteContext";
const NoteState=(props)=>{
const notes_exp=[
        {
          "_id": "660404eca7a3c98748fb25fc213",
          "user": "6602c56a836921a4f5dc0d4c",
          "title": "My Note",
          "description": "Just Testing",
          "tag": "Special",
          "date": "2024-03-27T11:37:16.550Z",
          "__v": 0
        },
        {
            "_id": "660404eca7a3c98748fb25fc",
            "user": "6602c56a836921a4f5dc0d4c",
            "title": "My Note",
            "description": "Just Testing",
            "tag": "Special",
            "date": "2024-03-27T11:37:16.550Z",
            "__v": 0
          }
          ,
        {
            "_id": "660404eca7a3c98748fb25fc",
            "user": "6602c56a836921a4f5dc0d4c",
            "title": "My Note",
            "description": "Just Testing",
            "tag": "Special",
            "date": "2024-03-27T11:37:16.550Z",
            "__v": 0
          }
          ,
        {
            "_id": "660404eca7a3c98748fb25fc",
            "user": "6602c56a836921a4f5dc0d4c",
            "title": "My Note",
            "description": "Just Testing",
            "tag": "Special",
            "date": "2024-03-27T11:37:16.550Z",
            "__v": 0
          }
];

const [notes,setNotes]=useState(notes_exp);

return (
    <NoteContext.Provider value={{notes,setNotes}}>
     {props.children}
    </NoteContext.Provider>
)
}
export default NoteState;