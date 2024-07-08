import React, { useEffect, useRef, useContext, useState } from 'react'
import noteContext from '../context/notes/NoteContext';
import NoteForm from './NoteForm';
// import Alert from './Alert';
import NoteItem from './NoteItem';
export default function Notes() {
  const context = useContext(noteContext);
  const { notes, getAllNotes ,editNote} = context;
  const [note, setNote] = useState({ title: "", description: "", tag: "", _id: "" });
  useEffect(() => {
  getAllNotes();
  // console.log("Auth Token");
  }, []);

  const ref = useRef(null);
  const updateNote = (noted) => {
    ref.current.click();
    setNote(noted);
  }
  const refclose = useRef(null);
  const handleClick = (e) => {
    e.preventDefault();
    editNote(note._id,note.title,note.description,note.tag);
    // console.log("Updating note",note);
    refclose.current.click();
  }

  const onChange = (e) => {
    setNote({ ...note, [e.target.name.replace("update_","")]: e.target.value });
  }

  return (
    <>
      <h2 className="my-3">Add a Note</h2>
      <NoteForm />
      <button type="button" className="btn btn-primary d-nEdit" ref={ref} style={{ display: "none" }} data-bs-toggle="modal" data-bs-target="#exampleModal">
      </button>

      <div className="modal fade"id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">Edit Note</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form className="my-3" id="updateform" action="/" method="post">
                <div className="mb-3">
                  <label htmlFor="update_title" className="form-label">Edit Note Title</label>
                  <input type="text" onChange={onChange} value={note.title} className="form-control" name="update_title" id="update_title" placeholder="Edit a title For Note" minLength={5} required />
                </div>
                <div className="mb-3">
                  <label htmlFor="update_description" className="form-label">Edit Note Description</label>
                  <textarea className="form-control" onChange={onChange} value={note.description} name="update_description" id="update_description" placeholder='Edit Note Description' rows="3" minLength={5} required></textarea>
                </div>
                <div className="mb-3">
                  <label htmlFor="update_tag" className="form-label">Edit Note Tag</label>
                  <input type="text" onChange={onChange} value={note.tag} className="form-control" name="update_tag" id="update_tag" placeholder="Edit a tag For Note"/>
                </div>
                <input type="hidden" name="noteid" id="noteid" value={note._id} />
                <button type="submit" disabled={note.title.length<5 || note.description.length<5} onClick={handleClick} className='btn btn-primary'>Update Note</button>
              </form>
            </div>
            <div className="modal-footer">
              <button type="button"   ref={refclose}  className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>

      <h2>Your Notes</h2>
      <div className="row container">
        {notes.length===0 && 'No notes to display'}
        {
          notes.map((note) => {
            return <NoteItem key={note._id} updateNote={updateNote} note={note} />
          })
        }
      </div>
      {/* <Alert /> */}
    </>
  )
}
