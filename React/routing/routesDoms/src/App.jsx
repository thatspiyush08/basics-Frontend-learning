import { useState } from 'react'

import './App.css'
import Dashboard from './components/Dashboard'
import {BrowserRouter,Routes, Route, useNavigate} from 'react-router-dom'
import Landing  from './components/Landing'


function App() {
    
  
    function Appbar(){
      const navigate = useNavigate()
      return (
        <div>
          <button onClick={()=>{
            navigate("/")
          }}>
            Landing
          </button>
          <button onClick={()=>{
            navigate("/dashboard")
          }}>
            Dashboard
          </button>
        </div>
      )
    }

  return (
    

<div>
      <BrowserRouter>
      <Appbar/>
      <Routes>
      <Route path="/dashboard" element={<Dashboard />}></Route>
      <Route path="/" element={<Landing/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
    
      
    
  )
}

export default App
