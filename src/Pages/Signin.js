import React, {  useState } from "react";
import axios from "axios";
import {  useNavigate} from "react-router-dom";
//import { useForm } from "react-hook-form";
import {   ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
//import { useCookies } from 'react-cookie';
import jwt_decode from "jwt-decode";

function Signin() {
  let storeToken = localStorage.getItem("data");
  if(storeToken) {
      var decoded = jwt_decode(storeToken);
      console.log(decoded.name)
  }
  else{
    console.log("Not Logged in")
  }

    const [values, setValues] = useState({
        username: '',
        password: '',
      });

    const { username,  password} = values;

    const inputHandler = (e) => {
        let val = e.target.value;
        setValues({...values, [e.target.name] : val})
        console.log(val)
    }

    let navigate = useNavigate();

    const onSubmit = () =>{
        axios.post("https://server-traveldetails.herokuapp.com/login", values).then((response)=> {
         // setCookie('data', response.data.accessToken)
          localStorage.setItem("data", JSON.stringify(response.data.accessToken))
          toast.success(response.data.message);
          navigate('/home')
        
        }).catch((err) => {
          console.log(err.response.data.message)
           toast.error(err.response.data.error)
        })
        
      } 

    


  return (
   <>
  <h1 style={{color: "blue"}}>Sign In</h1>

  <input type="text" placeholder="username" value={username} name="username" onChange={inputHandler}/>

  <br></br>
  <input type="text" placeholder="password" value={password} name="password" onChange={inputHandler}/>

  <br></br>
  <button type="submit" onClick={onSubmit} > Login</button>

  <ToastContainer/>
   </>
  )
}

export default Signin