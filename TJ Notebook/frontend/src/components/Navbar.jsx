import PropTypes from 'prop-types'
import { Link, useLocation} from "react-router-dom";
import Cookies from 'universal-cookie';
import {useNavigate} from 'react-router-dom';
export default function Navbar(props) {
const location = useLocation();
const cookies = new Cookies();
const navigate = useNavigate();
if(cookies.get('auth-token')){
  console.log(cookies.get('auth-token'));
}

const logOut=()=>{
  console.log("Logout");
  cookies.remove('auth-token', { path: '/', 'sameSite': 'none', 'secure': 'true' });
  navigate("/login");
}
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
            <form className="d-flex">
    {!(cookies.get('auth-token'))?<Link to="/login" className="btn btn-primary mx-1">Login</Link>:``}
    {!(cookies.get('auth-token'))?<Link to="/signup" className="btn btn-primary mx-1">SignUp</Link>:``}
    {(cookies.get('auth-token'))?<a onClick={logOut} className="btn btn-primary mx-1">Logout</a>:``}
      </form>
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
