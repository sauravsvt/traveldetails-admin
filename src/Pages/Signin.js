import React, {  useState } from "react";
import axios from "axios";
import {  useNavigate} from "react-router-dom";
//import { useForm } from "react-hook-form";
import {   ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
//import { useCookies } from 'react-cookie';
import jwt_decode from "jwt-decode";
import './CSS/sign-in.css';

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
   <div className="sign-in">
     <h1 style={{color: "rgb(0, 128, 0)"}}>Sign In</h1>

     <h2>Username</h2>
     <input type="text" placeholder="username" value={username} name="username" onChange={inputHandler}/>

     <br/>
     <h2>Password</h2>
     <input type="password" placeholder="Password" value={password} name="password" onChange={inputHandler}/>

     <button type="submit" onClick={onSubmit} > Login</button>

     <ToastContainer/>
   </div>
   </>
  )
}

export default Signin