import React,{useState} from 'react';
import Cookies from 'universal-cookie';
import {useNavigate} from 'react-router-dom';

export default function Signup() {
    const [cred,setCred]=useState({email:"",password:"",name:""});
    const navigate = useNavigate();
    const cookies = new Cookies();
    const host="http://localhost:8000";
    if(cookies.get('auth-token')){
        navigate("/");
        console.log(cookies.get('auth-token'));
    }
    const handleSubmit=async (e)=>{
         e.preventDefault();
         const response=await fetch(`${host}/api/auth/createuser`,{
            method:'POST',
            headers:{
              'Content-Type':'application/json'
            },
            body:JSON.stringify(cred)
          });
          const data=await response.json();
          console.log(data);
          if(data.authtoken){
            cookies.set('auth-token',data.authtoken, { path: '/' });
            console.log(cookies.get('auth-token')); // Pacman
            navigate("/");
          }
    }
    const onChange = (e) => {
        setCred({ ...cred, [e.target.name]: e.target.value });
      }
  return (
    <div className="container my-5">
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
    <input type="password" onChange={onChange} value={cred.password}  className="form-control" name="password" id="password" required/>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
    </div>
  )
}
