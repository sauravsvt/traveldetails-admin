import React from 'react'
import {useState} from 'react';
import axios from "axios";
import {  useNavigate} from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './CSS/Add.css'

function Add() {
    const [values, setValues] = useState({
        name:'',
        task: '',
        deadline: '',
      });

     
    const { name, task, deadline} = values;
    
    
    const inputHandler = (e) => {
        let val = e.target.value;
        setValues({...values, [e.target.name] : val})
        console.log(values)
    }
    
    let navigate = useNavigate();

    
    const onSubmit = (e) =>{
      e.preventDefault();
      if(values.name.length && values.task.length && values.deadline.length> 3){
        let text = "Are you sure?"
        if(window.confirm(text)=== true) {
        text ="Sending"
        axios.post("http://localhost:3001/post", values)
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
    <button onClick={viewData}>Show All</button>
    
    <ToastContainer />

  </>
  )
}

export default Add





 
