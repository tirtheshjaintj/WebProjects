import React from 'react'

export default function NoteItem(props) {
  const { title, description, tag } = props.note;
  return (
    <>
      <div className="col-lg-3 my-2">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">
            {title} 
            <i className="fa-trash-alt far fa-xl p-1"></i>             
            <i className="fa-edit far fa-xl p-1"></i>
            </h5>
            <p className="card-text">{description}</p>
          </div>
        </div>
      </div>
    </>
  )
}
