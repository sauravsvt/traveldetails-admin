import React, { useEffect, useState } from "react";
import axios from "axios";
import '../CSS/Homepage.css'


function Team() {
  const [APIData, setAPIData] = useState([]);


  const loadUser = async () => {
    await axios.get(`https://server-traveldetails.herokuapp.com/team`).then(response => {
      console.log(response.data)
      setAPIData(response.data)
    })
}

useEffect( () => {
  loadUser();
  }, []);

  return (
    <>
    <h1 className="big-table-h1"> TravelDetails Team</h1>
    <div className="big-table">
      <table>
      <tbody className="table-title">
        <th> Name</th>
        <th>Email</th>
        <th>Phone</th>
        <th>Address</th>
        <th>Profile</th>
      </tbody>
  
    {APIData.map((val)=> {
      return (
      <tbody className="table-list">
        <tr key={val._id}>
          <td>{val.name}</td>
          <td>{val.email}</td>
          <td>{val.phone}</td>
          <td>{val.address}</td>
          <td>{val.profile}</td>
      
        </tr>
      </tbody>
      )
    })}
    </table>
    </div>
    </>
  )
}

export default Team;