import PropTypes from 'prop-types'
import { useEffect } from 'react';
import { Link, useLocation  } from "react-router-dom";
export default function Navbar(props) {
const location = useLocation();
// useEffect(()=>{
//   console.log(location.pathname)
// },[location]);
  return (
    <>
          <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">TJ Notebook</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className={`nav-link ${location.pathname==="/"?"active":""}`} aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${location.pathname==="/about"?"active":""}`} aria-current="page" to="/about">About</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}


Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  mode: PropTypes.string
}

Navbar.defaultProps = {
  title: "Default Title",
  mode: "dark"
}
