import jwt_decode from "jwt-decode";
import React, { useEffect, useState } from "react";
import axios from "axios";
import '../CSS/Homepage.css'

function AssignedTasks() {
  let storeToken = localStorage.getItem("data");
  var decoded = jwt_decode(storeToken);
  var name = decoded.name


  const [APIData, setAPIData] = useState([]);


  const loadUser = async () => {
  await axios.get(`https://server-traveldetails.herokuapp.com/viewmyTasks/${name}`).then(response => {
    console.log(response.data)
    setAPIData(response.data)
  })
 
}

useEffect( () => {
  loadUser();
  }, []);


  return (
    <>
    <div className="ViewNotices">
      <h1> Your Assigned Tasks</h1>
      <table>
      <tbody className="table-title">
        <th>Assigned To</th>
        <th>Task</th>
        <th>Deadline</th>
        <th>Assigned By</th>
        <th>Assigned On</th>
      </tbody>
  
    {APIData.map((val)=> {
      return (
      <tbody className="table-list">
        <tr key={val._id}>
          <td>{val.to}</td>
          <td>{val.task}</td>
          <td>{val.deadline}</td>
          <td>{val.messagefrom}</td>
          <td>{val.timeStamp}</td>
        </tr>
      </tbody>
      )
    })}
    </table>
    </div>
    </>
  )
}

export default AssignedTasks