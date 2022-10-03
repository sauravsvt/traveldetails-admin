import React, {  useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import jwt_decode from "jwt-decode";
import 'react-toastify/dist/ReactToastify.css';
function RaiseTicket() {
  let storeToken = localStorage.getItem("data");
 // var token = (storeToken.replace(/['"]+/g, ''));
  var decoded = jwt_decode(storeToken);
  var name = decoded.name
    const [values, setValues] = useState({
        ticket: '',
        name: name
      });

    const { ticket} = values;

    const inputHandler = (e) => {
        let val = e.target.value;
        setValues({...values, [e.target.name] : val})
        console.log(val)
    }

    const onSubmit = () => {
      axios.post(`https://server-traveldetails.herokuapp.com/addTickets`, values).then((response)=> {
        console.log(response.data.message)
        toast.success(response.data.message);
       
       })
     .catch((err) => {
         console.log(err)
       //   toast.error(err.response.data.error)
       })
    }

  return (
    <>
    <h1> Raise Your Query</h1>
    <div className="notice_area">
  <input type="text" placeholder="Add Notice" name="ticket" onChange={inputHandler}  value={ticket}/>
  <button onClick={onSubmit}> Send Query</button>
    <ToastContainer/>
  </div>
 
    </>
  )
}

export default RaiseTicket