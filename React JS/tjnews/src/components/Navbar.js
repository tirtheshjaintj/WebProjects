import PropTypes from 'prop-types';
import { Link} from 'react-router-dom';
import React from 'react';

export default function Navbar(props) {
  return (
<>
<nav className={`navbar navbar-expand-lg navbar-${props.mode1} bg-${props.mode1}`} style={{position:"fixed",width:100+'%',top:0,zIndex:100}}> 
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">{props.title}</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      <li className="nav-item"><Link to="/general" className="nav-link active">General</Link></li>
        <li className="nav-item"><Link to="/business" className="nav-link active">Business</Link></li>
        <li className="nav-item"><Link to="/entertainment" className="nav-link active">Entertainment</Link></li>
        <li className="nav-item"><Link to="/health" className="nav-link active">Health</Link></li>
        <li className="nav-item"><Link to="/science" className="nav-link active">Science</Link></li>
        <li className="nav-item"><Link to="/sports" className="nav-link active">Sports</Link></li>
        <li className="nav-item"><Link to="/technology" className="nav-link active">Technology</Link></li>

      </ul>
      <form className="d-flex" role="search">
        <div className="form-check form-switch p-2">
    <input className="form-check-input" onChange={props.switchOver}   type="checkbox" role="switch" id="flexSwitchCheckDefault" />
    <label className={`form-check-label text-`+props.mode2}  htmlFor="flexSwitchCheckDefault" style={{textTransform:"capitalize"}}> Mode</label>
  </div>
        </form>
    </div>
  </div>
</nav>

</>


  )
}


Navbar.propTypes={
  title:PropTypes.string.isRequired
}

Navbar.defaultProps={
  title:"TJ News"
}