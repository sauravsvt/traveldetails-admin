import React, {  useState } from "react";
import axios from "axios";
import '../CSS/registration.css'

//import { useForm } from "react-hook-form";
import {   ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
//import { useCookies } from 'react-cookie';
import jwt_decode from "jwt-decode";
import Team from "./Team";

function Registration() {
  let storeToken = localStorage.getItem("data");
  var decoded = jwt_decode(storeToken);
  var addedby = decoded.name;
  
    const [values, setValues] = useState({
        name: '',
        email: '',
        phone: '',
        address: '',
        role: 'intern',
        profile: '',
        username: '',
        password: '',
        addedby: addedby
      });

    const {name, email, phone, address, profile, username,  password} = values;

    const inputHandler = (e) => {
        let val = e.target.value;
        setValues({...values, [e.target.name] : val})
        console.log(val)
    }



    const onSubmit = () =>{
        axios.post("https://server-traveldetails.herokuapp.com/register", values).then((response)=> {
          toast.success(response.data.message);
        }).catch((err) => {
          console.log(err.response.data.message)
           toast.error(err.response.data.error)
        })
        
      } 

    


  return (
   <>
   <div className="bbground">
    <div className="signup"> 
      <h1 style={{color: "rgb(0, 128, 0)"}}>Sign Up Intern</h1>

      <div className="label-input">
        <label> Name </label>
        <input type="text" placeholder="Name" value={name} name="Name" onChange={inputHandler}/>
      </div>

      <div className="label-input">
        <label> Email </label>
        <input type="email" placeholder="Email" value={email} name="email" onChange={inputHandler}/>
      </div>

      <div className="label-input">
        <label> Phone </label>
        <input type="number" placeholder="Phone" value={phone} name="phone" onChange={inputHandler}/>
      </div>

      <div className="label-input">
        <label> Address </label>
        <input type="text" placeholder="Address" value={address} name="address" onChange={inputHandler}/>
      </div>
      <div className="label-input">
        <label> Profile </label>
        <input type="text" placeholder="Profile" value={profile} name="profile" onChange={inputHandler}/>
      </div>

      <div className="label-input">
        <label> Username </label>
        <input type="text" placeholder="Username" value={username} name="username" onChange={inputHandler}/>
      </div>

      <div className="label-input">
        <label> Password </label>
        <input type="password" placeholder="Password" value={password} name="password" onChange={inputHandler}/>
      </div>

      <button type="submit" onClick={onSubmit} > Add Employee</button>
      </div>
    </div>
    <Team/>
    <ToastContainer/>
   </>
  )
}

export default Registration