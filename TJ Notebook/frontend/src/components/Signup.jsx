import React,{useState} from 'react';
import Cookies from 'universal-cookie';
import {Link, useNavigate} from 'react-router-dom';
import { useContext } from 'react';
import noteContext from '../context/notes/NoteContext';
import toast, { Toaster } from 'react-hot-toast';

export default function Signup() {
  const notify = (msg,color) => toast(msg, {
    duration: 2000,
    position: 'bottom-right',
    // Styling
    style: {borderTop:`4px solid ${color}`},
    className: '',
  
    // Custom Icon
    icon: '🪪',

    // Change colors of success/error/loading icon
    iconTheme: {
      primary: '#000',
      secondary: '#fff'
    },
    // Aria
    ariaProps: {
      role: 'status',
      'aria-live': 'polite'
    }
  });
    const [cred,setCred]=useState({email:"",password:"",name:""});
    const navigate = useNavigate();
    const cookies = new Cookies();
    const {setProgress}=useContext(noteContext);
    const host="https://tj-notebook.vercel.app";
    if(cookies.get('auth-token')){
        navigate("/");
        // console.log(cookies.get('auth-token'));
    }
    const handleSubmit=async (e)=>{
         e.preventDefault();
         setProgress(90);
         const response=await fetch(`${host}/api/auth/createuser`,{
            method:'POST',
            headers:{
              'Content-Type':'application/json'
            },
            body:JSON.stringify(cred)
          });
          setProgress(100);
          const data=await response.json();
          // console.log(data);
          if(data.error){
            notify(data.error,"red");
            }
          else{
              notify("Logged In Successfully","green");
          }
          document.getElementById("error").innerHTML=data.error+" Error";
          if(data.authtoken){
            cookies.set('auth-token',data.authtoken, { path: '/' });
            // console.log(cookies.get('auth-token')); // Pacman
            navigate("/");
          }
    }
    const onChange = (e) => {
        setCred({ ...cred, [e.target.name]: e.target.value });
      }
  return (
    <div className="container my-5">
            <h1>Signup To TJ Notebook</h1>
        <form onSubmit={handleSubmit}>
        <div className="mb-3">
    <label htmlFor="name" className="form-label">Your Name</label>
    <input type="text" onChange={onChange} value={cred.name} className="form-control"  id="name" name="name" aria-describedby="emailHelp" required/>
  </div>
  <div className="mb-3">
    <label htmlFor="email" className="form-label">Email address</label>
    <input type="email" onChange={onChange} value={cred.email} className="form-control"  id="email" name="email" aria-describedby="emailHelp" required/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="password" className="form-label">Password</label>
    <input type="password" onChange={onChange} minLength={6} value={cred.password}  className="form-control" name="password" id="password" required/>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
  <div id="error"></div>
</form>
<br /><br />
<Toaster />
<Link to="/login">Do you wanna login?</Link>
    </div>
  )
}
