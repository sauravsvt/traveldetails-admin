import React from 'react'
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import jwt_decode from "jwt-decode";
import 'react-toastify/dist/ReactToastify.css';
import '../CSS/Homepage.css'

import { BiRun } from "react-icons/bi";
function MarkAttendance() {
  let storeToken = localStorage.getItem("data");
  var decoded = jwt_decode(storeToken);
  var name = decoded.name
  const Attendance =() => {
    axios.get(`https://server-traveldetails.herokuapp.com/doattendance/${name}`).then((response)=> {
      console.log(response.data.message)
      toast.success("Attedance marked successfully")
     }).catch((err) => {
       console.log(err.response.data.message)
       toast.error(err.response.data.message)
     })
     
  }
  return (
    <>
    <div className='Attendance'>
    <label> Tap to mark Attendance </label>
    <button onClick={Attendance}> <BiRun />? </button>

    </div>
    <ToastContainer/>
      
    </>
  )
}

export default MarkAttendance