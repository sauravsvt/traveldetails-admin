import React, {  useState } from "react";
import axios from "axios";

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
  <h1 style={{color: "blue"}}>Sign Up Intern</h1>
    <label> name </label>
  <input type="text" placeholder="name" value={name} name="name" onChange={inputHandler}/>

  <br></br>
  <label> email </label>
  <input type="email" placeholder="email" value={email} name="email" onChange={inputHandler}/>

  <br></br>
  <label> phone </label>
  <input type="number" placeholder="phone" value={phone} name="phone" onChange={inputHandler}/>

<br></br>
<label> address </label>
<input type="text" placeholder="address" value={address} name="address" onChange={inputHandler}/>

<br></br>
<label> profile </label>
<input type="text" placeholder="profile" value={profile} name="profile" onChange={inputHandler}/>

<br></br>
<label> username </label>
<input type="text" placeholder="username" value={username} name="username" onChange={inputHandler}/>

<br></br>
<label> password </label>
<input type="password" placeholder="password" value={password} name="password" onChange={inputHandler}/>

<br></br>
  <button type="submit" onClick={onSubmit} > Add Employee</button>

<Team/>
  <ToastContainer/>
   </>
  )
}

export default Registration