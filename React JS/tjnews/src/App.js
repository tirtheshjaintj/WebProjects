import './App.css';
import Navbar from './components/Navbar';
import News from './components/News';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import React, { useState } from 'react';
import LoadingBar from 'react-top-loading-bar'

function App() {
const [progress,setProgress]=useState(0);
const[mode1,setMode1]=useState('light');
const[mode2,setMode2]=useState('dark');

const switchOver=()=>{
  if(mode1=="light"){
setMode1("dark");
setMode2("light");
    document.body.style.backgroundColor="#212529";
  }
  else{
setMode2("dark");
setMode1("light");
document.body.style.backgroundColor="white";
  }
}

  return (
    <Router>
    <LoadingBar color='#f11946' height={4} progress={progress}/>
    <Navbar title="TJ News" mode1={mode1} mode2={mode2} switchOver={switchOver}/>
    <Routes>
      <Route  exact path="*"  element={<News key="1" api={process.env.REACT_APP_NEWS_API_1} pageSize={5} country="in" category="general" setProgress={setProgress}  mode1={mode1} mode2={mode2} />}/>
      <Route  exact path="/science"  element={<News key="2" api={process.env.REACT_APP_NEWS_API_2} pageSize={5} country="in" category="science" setProgress={setProgress} mode1={mode1} mode2={mode2} />}/>
      <Route  exact path="/entertainment"  element={<News key="3" api={process.env.REACT_APP_NEWS_API_3} pageSize={5} country="in" category="entertainment" setProgress={setProgress} mode1={mode1} mode2={mode2} />}/>
      <Route  exact path="/business"  element={<News key="4" api={process.env.REACT_APP_NEWS_API_4} pageSize={5} country="in" category="business" setProgress={setProgress} mode1={mode1} mode2={mode2} />}/>
      <Route  exact path="/health"  element={<News key="5" api={process.env.REACT_APP_NEWS_API_2} pageSize={5} country="in" category="health" setProgress={setProgress} mode1={mode1} mode2={mode2} />}/>
      <Route  exact path="/sports"  element={<News key="6" api={process.env.REACT_APP_NEWS_API_3} pageSize={5} country="in" category="sports" setProgress={setProgress} mode1={mode1} mode2={mode2} />}/>
      <Route  exact path="/technology"  element={<News key="7" api={process.env.REACT_APP_NEWS_API_4} pageSize={5} country="in" category="technology" setProgress={setProgress} mode1={mode1} mode2={mode2} />}/>
    </Routes>
    </Router>
  );
}

export default App;

// ee355aa0713649d9873316fcba596b9e