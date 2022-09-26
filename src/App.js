import React from 'react'
import {BrowserRouter as Router, Routes, Route , Link, Navigate} from 'react-router-dom'
import Add from './Pages/Add'
import Show from './Pages/Show'

function App() {
  return (

   <>
    <Router>
        <nav>
        <Link to ="/Add">Add Work</Link>
        <Link to ="/View">Show</Link>
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