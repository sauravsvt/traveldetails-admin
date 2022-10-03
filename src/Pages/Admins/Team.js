import React, { useEffect, useState } from "react";
import axios from "axios";

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
      <h1> TravelDetails Team</h1>
      <table>
      <tbody>
        <th> Name</th>
        <th>Email</th>
        <th>Phone</th>
        <th>Address</th>
        <th>Role</th>
        <th>Profile</th>
        <th>AddedBy</th>
      </tbody>
  
    {APIData.map((val)=> {
      return (
      <tbody>
        <tr key={val._id}>
          <td>{val.name}</td>
          <td>{val.email}</td>
          <td>{val.phone}</td>
          <td>{val.address}</td>
          <td>{val.role}</td>
          <td>{val.profile}</td>
          <td>{val.addedby}</td>
        </tr>
      </tbody>
      )
    })}
    </table>
    </>
  )
}

export default Team;