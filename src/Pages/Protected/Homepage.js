import React from 'react'
import {  useNavigate} from "react-router-dom";
import Add from '../Add';
import Show from '../Show';
import jwt_decode from "jwt-decode";
import '../CSS/Homepage.css'
import Notices from '../Interns/Notices';
import RaiseTicket from '../Interns/RaiseTicket';
import MarkAttendance from '../Interns/MarkAttendance'
import AssignedTasks from '../Interns/AssignedTasks';
import AddNotice from '../Admins/AddNotice';
import EmployeeAttendance from '../Admins/EmployeeAttendance';
import TicketsRaised from '../Admins/TicketsRaised';

function Homepage() {
  let storeToken = localStorage.getItem("data");
  var decoded = jwt_decode(storeToken);

  let navigate = useNavigate();
  const RegisterNewUser = () => {
    navigate('/register')
 }

  const logOut = () => {
    localStorage.clear()
    console.log(localStorage)
    navigate('/')
 }

  if(decoded.role === "admin"){
    return (
      <>
    <div className='welcome'>
    <br></br>
   <h1> Welcome {decoded.name}</h1>
   <h3>{decoded.profile}</h3>
   <button onClick={RegisterNewUser}> RegisterNewUser</button>
   <button onClick={logOut}> Logout</button>
   </div>
     
      <AddNotice/>
      <Notices/>
      <Add/>
      <Show/>
      <EmployeeAttendance/>
      <TicketsRaised/>

     
      </>
    )
  }
  else 

  return (
   <>
   <div className='welcome'>
   <h1> Welcome {decoded.name}</h1>
   <h3>{decoded.profile}</h3>
   <button onClick={logOut}> logOut</button>
    </div>
     
     <Notices/>
     <MarkAttendance/>
     <AssignedTasks/>
     <RaiseTicket/>
   </>
  )
}

export default Homepage