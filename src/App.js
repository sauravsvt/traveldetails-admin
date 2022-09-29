import React from 'react'
import {BrowserRouter as Router, Routes, Route , Link} from 'react-router-dom'
import Add from './Pages/Add'
import Show from './Pages/Show'
import './App.css'

function App() {
  return (

   <>
    <Router>
        <nav className='links'>
        <Link className='link' to ="/Add">Add Work</Link>
        <Link className='link' to ="/View">Show</Link>
        </nav>
      

      <Routes>
      <Route path="/" element={<Add />} />
      <Route path="/Add" element={<Add />} />
      <Route path="/View" element={<Show />} />
      </Routes>


    </Router>

   </>
  )
}

export default App