import React from 'react'
import {useState} from 'react';
import {BrowserRouter as Router, Routes, Route , Link, Navigate} from 'react-router-dom'
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Add() {
    const [values, setValues] = useState({
        name:'',
        task: '',
        deadline: '',
        code:''
      });
    
    
     
      const { name, task, deadline, code} = values;
    
    
      const inputHandler = (e) => {
        let val = e.target.value;
        setValues({...values, [e.target.name] : val})
        console.log(values)
    }
    
    
    const onSubmit = (e) =>{
      e.preventDefault();
      let text = "Are you sure?"
      if(window.confirm(text)=== true) {
        text ="Sending"
        axios.post("http://localhost:3001/post", values)
       .then((res)=> {
        toast.success("Data Sent Successfully")
        console.log(res.data)
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
  return (
    <>
    <div className="form">
    <input type="text" 
        placeholder="name" name="name" value={name} onChange={e => inputHandler(e)} />
    <input type="text" 
        placeholder="Task" name="task" value={task} onChange={e => inputHandler(e)} />
              <br></br>
    <input type="text" 
        placeholder="Deadline" name="deadline" value={deadline} onChange={e => inputHandler(e)} />
          <br></br>
      
    </div>
    <button onClick={onSubmit}>Submit</button>
    <ToastContainer />

  </>
  )
}

export default Add





 
