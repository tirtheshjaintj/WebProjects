import React, { useEffect } from 'react'
import Notes from './Notes'
import NoteForm from './NoteForm'
export default function Home() {
  return (
    <div className="container m-4">

      <NoteForm />
      <Notes />

    </div>
  )
}
