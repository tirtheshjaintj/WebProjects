import React from 'react'

export default function NewsItem(props) {
  return (
<>
<div className={"card m-2 bg-"+props.mode1+" text-"+props.mode2} style={{minHeight:525+'px'}}>
  <img src={props.image} style={{width: 100+"%",height:15+'rem'}} className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">{props.title}</h5>
    <p className="card-text"><small className={"text-"+props.mode2}>By {props.author?props.author:"Unknown"} On {props.date}</small></p>
    <p className="card-text">{props.description}</p>
    <a rel="noreferrer" href={props.link} style={{position:'absolute',bottom:0,width:100+'%',left:0,height:'35px',textAlign:'center',fontWeight:'bolder'}} className={"btn btn-sm btn-"+props.mode2} target="_blank">Read More</a>
  </div>
</div>
</>
    )
}

