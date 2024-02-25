// import logo from './logo.svg';
import React, { useState,useEffect } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar'
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alerts, setAlert] = useState(null);
  
  const showAlert = (message, type = "success") => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }




  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.background = "#222";
      showAlert("Dark Mode Enabled", "success");

    }
    else {
      setMode("light");
      document.body.style.background = "white";
      showAlert("Light Mode Enabled", "success");
    }
  }
  window.onload = () => {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      toggleMode();
      showAlert("Dark Mode Enabled", "success");
      // dark mode
    }

  }

  



  return (
    <Router>
      <Navbar title="TJ Text Editor" mode={ mode } toggleMode={ toggleMode } />
      <Routes>
        <Route exact path="*" element={ <TextForm heading="Enter Text Here" mode={ mode } showAlert={ showAlert } /> }></Route>
        <Route exact path="/about" element={ <About heading="About Us" /> }></Route>
      </Routes>
    
      <Alert alert={ alerts } />
    </Router>
  );
}


export default App;
