import React, {  useState } from "react";
import axios from "axios";
import './Admin.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function AddNotice() {
  let storeToken = localStorage.getItem("data");
  var token = (storeToken.replace(/['"]+/g, ''));

    const [values, setValues] = useState({
        notice: ''
      });

    const { notice} = values;

    const inputHandler = (e) => {
        let val = e.target.value;
        setValues({...values, [e.target.name] : val})
        console.log(val)
    }

    const onSubmit = () => {
      axios.post(`https://server-traveldetails.herokuapp.com/addnotice/${token}`, values).then((response)=> {
        console.log(response.data.message)
        toast.success(response.data.message);
       
       })
     // .catch((err) => {
      //    console.log(err)
      //  //   toast.error(err.response.data.error)
      //  })
    }

  return (
    <>
    <div className="notice_area">
  <input type="text" placeholder="Add Notice" name="notice" onChange={inputHandler}  value={notice}/>
  <button onClick={onSubmit}> Add Notice</button>
    <ToastContainer/>
  </div>
 
    </>
  )
}

export default AddNotice