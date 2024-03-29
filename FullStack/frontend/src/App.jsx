import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import axios from 'axios'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const [jokes,setJokes]=useState([]);

useEffect(()=>{
axios.get("/api/jokes")
.then((response)=>{
  // console.log(response.data);
 setJokes(response.data);
})
.catch((err)=>{
  console.log(err);
})
},[])

  return (
    <>
     <h1>Full Stack App</h1>
     <p>JOKES: {jokes.length}</p>
      {
       jokes.map((joke,index)=>(
           <div key={index}>
                <h3>{joke.title}</h3>
                <p>{joke.content}</p>
            </div>
       ))
      }
    </>
  )
}

export default App
