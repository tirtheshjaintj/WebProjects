// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar'
import TextForm from './components/TextForm';
import Alert from './components/Alert';
// let text="Lets Learn ReactJS";
// text={
//   name:"Tirthesh Jain",
//   age:20
// }
function App() {
  const [mode, setMode] = useState('light');

  const [alerts, setAlert] = useState(null);


  const showAlert = (message, type = "success") => {
    console.log(alerts);
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
    <>
      <Navbar title="TJ Text Editor" mode={ mode } toggleMode={ toggleMode } />
      <TextForm heading="Enter Text Here" mode={ mode } showAlert={ showAlert } />
      <Alert alert={ alerts } />
      {/* <About heading="About Us" /> */ }
    </>
  );
}

export default App;
