import React from 'react'
import {useState} from 'react';
import axios from "axios";
import {  useNavigate} from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './CSS/Add.css'
import jwt_decode from "jwt-decode";
function Add() {
  let storeToken = localStorage.getItem("data");
  var decoded = jwt_decode(storeToken);
  var token = (storeToken.replace(/['"]+/g, ''));

    const [values, setValues] = useState({
        to:'',
        task: '',
        deadline: '',
        messagefrom: decoded.name
      });

     
    const { to, task, deadline} = values;
    
    
    const inputHandler = (e) => {
        let val = e.target.value;
        setValues({...values, [e.target.name] : val})
     
    }
    
    let navigate = useNavigate();

    const onSubmit = (e) =>{
      e.preventDefault();
      if(values.to.length && values.task.length && values.deadline.length> 3){
        let text = "Are you sure?"
        if(window.confirm(text)=== true) {
        text ="Sending"
        axios.post(`https://server-traveldetails.herokuapp.com/assignTask/${token}`, values)
       .then((res)=> {
        toast("Data Sent Successfully")
       })
        .catch((err) => {
         console.log(err)
         toast.error("Problem inserting data", err)
         })
         }
        else{
        text = "You Cancelled"
        toast.error("Sending Cancelled")
        }

      }
    else
    alert("Enter at least value of length 3")
       
  } 

    const viewData = () => {
        navigate('/View')
      }
  return (
  <>
    <div className='form'>
      <h1>Assign Task</h1>

      <div className='name-deadline'>
        <div>
          <h4>Name</h4>
          <input type="text" 
              placeholder="To" name="to" value={to} onChange={e => inputHandler(e)} />
        </div>  
        
        <div>
          <h4>DeadLine</h4>   
          <input type="text" 
              placeholder="Deadline" name="deadline" value={deadline} onChange={e => inputHandler(e)} />   
        </div> 
      </div>  

      <div className='task'>
        <h4>Task</h4>
        <textarea type="text" 
          placeholder="Task" name="task" value={task} onChange={e => inputHandler(e)} />       
      </div> 

      <div className="buttons">
        <button onClick={onSubmit}>Submit</button>
        <button onClick={viewData}>Show All</button>
      </div>  
    
    <ToastContainer />
    </div>
  </>
  )
}

export default Add





 
