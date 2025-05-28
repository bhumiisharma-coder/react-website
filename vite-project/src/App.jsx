import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Router/Navbar'
import { Router } from 'react-router'
import Roters from './Router/Roters'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [count, setCount] = useState(0)
    const [input,setinput] = useState("");

  return (
    <>
      
      <Navbar input={input} setinput={setinput}></Navbar>
     <Roters input={input}></Roters>
        
    </>
  )
}

export default App
