import React from 'react'

export default function NoteItem(props) {
  const { title, description, tag } = props.note;
  return (
    <>
      <div className="col-lg-3 my-2">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p className="fa-trash-alt far fa-xl p-1"></p>
            <p className="fa-edit far fa-xl p-1"></p>
          </div>
        </div>
      </div>
    </>
  )
}
