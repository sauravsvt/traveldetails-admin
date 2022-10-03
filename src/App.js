import React from 'react'
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Signin from './Pages/Signin'
import Homepage from './Pages/Protected/Homepage'
import Protected from './Pages/Protected/Protected'
import Registration from './Pages/Admins/Registration'
import Protected2 from './Pages/Protected/Protected2'

function App() {
  return (

   <>
    <Router>
      <Routes>
      <Route path='/'  element={ <Protected component={Homepage}>
 <Homepage />
 </Protected>} />

 <Route path='/home'  element={ <Protected component={Homepage}>
 <Homepage />
 </Protected>} />

 

 <Route path='/register'  element={ <Protected component={Registration}>
 <Registration />
 </Protected>} />

 <Route path='/login'  element={ <Protected2 component={Signin}>
 <Signin />
 </Protected2>} />




      </Routes>

    </Router>

   </>
  )
}

export default App