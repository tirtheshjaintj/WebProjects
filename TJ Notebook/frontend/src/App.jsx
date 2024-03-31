import {BrowserRouter as Router,Routes,Route,useNavigate} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Login from './components/Login';
import Signup from './components/Signup';
import NoteState from './context/notes/NoteState';
import Cookies from 'universal-cookie';

export default function App() {
  const cookies = new Cookies(); 

  return (
// Context Added
<NoteState>
{/* NoteContext */}

<Router>
{/* Navbar Added */}
<Navbar/>

<Routes>
<Route exact path="/" element={<Home/>}/>
<Route exact path="/about" element={<About/>}/>
<Route exact path="/login" element={<Login/>}/>
<Route exact path="/signup" element={<Signup/>}/>
</Routes>
</Router>

</NoteState>
  )
}

