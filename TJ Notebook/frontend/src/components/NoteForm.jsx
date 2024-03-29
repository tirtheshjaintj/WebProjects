import React from 'react'

export default function NoteForm() {
  return (
 <>
 <h2>Add a Note</h2>
        <form className="my-3" action="/" method="post">
          <div className="mb-3">
            <label htmlFor="title" className="form-label">Add Note Title</label>
            <input type="email" className="form-control" id="title" placeholder="Add a title For Notes" />
          </div>
          <div className="mb-3">
            <label htmlFor="description" className="form-label">Add Note Description</label>
            <textarea className="form-control" id="description" placeholder='Add Note Description' rows="3"></textarea>
          </div>
          <button type="submit" className='btn btn-primary'>Add Note</button>
        </form>
 </>   
  )
}
