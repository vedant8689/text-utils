// import logo from './logo.svg';
import React,{useState } from 'react'
import './App.css';
import About from  './Components/About'
import Alert from './Components/Alert';
import Navbar from './Components/Navbar';
import Textform from './Components/Textform';

//import for react router dom
import {
  BrowserRouter as Router, 
  Routes, 
  Route, 
  Link 
} from 'react-router-dom';

function App() {
  const [mode, setMode] = useState('light');//whether dark mode is enable or not
  const [alert, setAlert] = useState(null);
  const toggleMode = () =>{
    if(mode === 'light')
    {
      setMode('dark')
      document.body.style.backgroundColor = 'grey';
      document.title="TextUtils - Dark Mode";
      // showAlert("Dark Mode Activated", "success");
    }
    else
    {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      // showAlert("Light Mode Activated", "success");
      document.title="TextUtils - Light Mode";
    }
  }
  const showAlert = (message, type) =>{
    setAlert({
      msg:message,
      type: type,
    })
  }
  return (
    <>
  <Router>
  <Navbar title="TextUtils" aboutText="About
  TextUtils" mode={mode} toggleMode={toggleMode}/>
  <Alert alert={alert}/>
  <div className="container my-3">
  <Routes>
    <Route exact path='/' element={<Textform showAlert={showAlert} heading = "Enter Text to Analyze" heading2 = "Find and Replace" mode={mode} />}/>
    <Route exact path='/about' element={<About/>}/>
  </Routes>
  </div>
  </Router>
  </>
  );
}

export default App;
