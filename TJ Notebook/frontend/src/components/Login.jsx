import React,{useContext, useState} from 'react';
import Cookies from 'universal-cookie';
import {Link, useNavigate} from 'react-router-dom';
import noteContext from '../context/notes/NoteContext';
import toast, { Toaster } from 'react-hot-toast';

export default function Login() {
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
    const [cred,setCred]=useState({email:"",password:""});
    const navigate = useNavigate();
    const cookies = new Cookies();
    const {setProgress}=useContext(noteContext);
    const host="https://tj-notebook.vercel.app";
    if(cookies.get('auth-token')){
        navigate("/");
    }
    const handleSubmit=async (e)=>{
         e.preventDefault();
         setProgress(90);
         const response=await fetch(`${host}/api/auth/login`,{
            method:'POST',
            headers:{
              'Content-Type':'application/json'
            },
            body:JSON.stringify(cred)
          });
          const data=await response.json();
          if(data.error){
            notify(data.error,"red");
            }
          else{
              notify("Logged In Successfully","green");
          }
          document.getElementById("error").innerHTML=data.error;
         
          if(data.success){
            cookies.set('auth-token', data.authtoken, {path: '/', expires: new Date(Date.now()+2592000)});
            navigate("/");
          }
          setProgress(100);
    }
    const onChange = (e) => {
        setCred({ ...cred, [e.target.name]: e.target.value });
      }
      const guestLogin=(e)=>{
        setCred({email:"guest@example.com",password:"guest123"});
      }
  return (
    
    <div className="container my-5 w-100 d-flex flex-column justify-content-center">
      <h1>Login To TJ Notebook</h1>
        <form onSubmit={handleSubmit} method="post">
  <div className="mb-3">
    <label htmlFor="email" className="form-label">Email address</label>
    <input type="email" onChange={onChange} value={cred.email} className="form-control"  id="email" name="email" aria-describedby="emailHelp" required/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="password" className="form-label">Password</label>
    <input type="password" onChange={onChange} value={cred.password}  className="form-control" name="password" id="password" required/>
  </div>
  <button type="submit" className="btn btn-primary">Login</button>
  <div id="error"></div>
  <br />
  <button type="submit" className="btn btn-outline-primary" onClick={guestLogin}>Guest Login</button>
</form>

<br /><br />
<Toaster />
<Link to="/signup">Do you wanna signup?</Link>
    </div>
  )
}
