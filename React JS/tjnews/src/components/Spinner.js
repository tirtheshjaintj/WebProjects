import React from 'react'

export default function Spinner(props) {
  return (
    <div className="d-flex justify-content-center">
    <div className={"spinner-border text-"+[props.mode2]} role="status">
      <span className="visually-hidden">Loading...</span>
    </div>
  </div>
  )
}
