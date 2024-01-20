import React from 'react'

export default function Alert(props) {
    return (
        props.alert && <div className="container my-5">
            <div className={ `alert alert-${props.alert.type}` } role="alert">
                <h4 className="alert-heading text-center"><b>{ props.alert.msg }</b></h4>
            </div>
        </div>
    )
}
