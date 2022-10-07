import React, { useEffect, useState } from "react";
import axios from "axios";
import '../CSS/Homepage.css';

function EmployeeAttendance() {
  const [APIData, setAPIData] = useState([]);


  const loadUser = async () => {
    await axios.get(`https://server-traveldetails.herokuapp.com/viewattendance`).then(response => {
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
      <h1> View Employee Attendance</h1>
      <table>
      <tbody className="table-title">
        <th>Employee Name</th>
        <th>Attendance</th>
      </tbody>
  
    {APIData.map((val)=> {
      return (
      <tbody className="table-list">
        <tr key={val._id}>
          <td>{val.name}</td>
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

export default EmployeeAttendance