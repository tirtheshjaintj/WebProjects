import React, { useEffect } from 'react';
import Notes from './Notes';
import Cookies from 'universal-cookie';
import {useNavigate} from 'react-router-dom';
export default function Home() {
  const cookies = new Cookies();
  const navigate=new useNavigate();
  useEffect(()=>{
    // console.log(cookies.get('auth-token'));
    if(!cookies.get('auth-token')){
      navigate("/signup");
    }
  }) 
  return (
    <div className="container mt-3">
      <Notes />
      </div>
  )
}
