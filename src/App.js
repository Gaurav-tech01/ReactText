import Alert from './Alert';
import './App.css';
import About from './componenets/About';
import Navbar from './componenets/Navbar';
import TextForm from './componenets/TextForm';
import React, { useState } from 'react'
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";

function App() {

  const [mode, setmode] = useState('light')
  const [text, setText] = useState('dark')
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }
  const toggleMode = () => {
    if (mode === 'light') {
      setmode('dark')
      setText('light')
      showAlert("Dark Mode Enabled", "success")
      document.body.style.backgroundColor = '#042743'
    } else {
      setmode('light')
      setText('dark')
      showAlert("Light Mode Enabled", "success")
      document.body.style.backgroundColor = 'white'
    }
  }
  return (
    <>
      <Navbar title="TextUtils" home="HomePage" text={text} mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3">
        <BrowserRouter>
          <Routes>
            <Route index element={<TextForm showAlert={showAlert} heading="Enter the Text" mode={mode} />}/>
            <Route path="/" element={<TextForm showAlert={showAlert} heading="Enter the Text" mode={mode} />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
