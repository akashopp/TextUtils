import Alert from './Components/Alert';
import Navbar from './Components/Navbar';
import About from './Components/About';
import TextArea from './Components/TextArea';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import { useState } from 'react';
function App() {
  const [mode, setMode] = useState('light')
  const [alert, setAlert] = useState(null)
  const showAlert = (message, type)=>{
    setAlert({
      message: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  const toggleMode = ()=>{
   if(mode === 'light'){
    document.body.style.backgroundColor = 'grey'
    document.body.style.color = 'white'
    document.body.style.fontFamily = 'ubuntu'
    setMode('dark')
    showAlert('Dark Mode has been enabled', 'SUCCESS')
  }else{
    document.body.style.backgroundColor = 'white'
    document.body.style.color = 'black'
    document.body.style.fontFamily = 'ubuntu'
    setMode('light')
    showAlert('Light Mode has been enabled', 'SUCCESS')
   }
  }
  return (
    <>
    <Router>
      <Navbar title="MyWebsite" aboutText = "About the Website" mode = {mode} toggleMode = {toggleMode}/>
      <Alert alert = {alert}/>
      <div className="container my-3">
        <Routes>
          <Route path="/" element={<TextArea title="Enter the text here" mode = {mode}/>}/>
          <Route path="/about" element={<About/>}/>
        </Routes>
      </div>
      
    </Router>
    </>
  );
}
export default App;
