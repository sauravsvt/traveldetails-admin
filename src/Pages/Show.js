import React, { useEffect, useState } from "react";
import axios from "axios";
function Show() {
  const [APIData, setAPIData] = useState([]);


  const loadUser = async () => {
  await axios.get(`https://server-traveldetails.herokuapp.com/getAll`).then(response => {
    console.log(response.data)
    setAPIData(response.data)
  })
 
}

useEffect( () => {
  loadUser();
  }, []);




  return (
    <>
    <table>
      <tbody>
        <th>Name</th>
        <th>Task</th>
        <th>Deadline</th>
      </tbody>
  
    {APIData.map((val)=> {
      return (
      <tbody>
        <tr key={val._id}>
          <td>{val.name}</td>
          <td>{val.task}</td>
          <td>{val.deadline}</td>
        </tr>
      </tbody>
      )
    })}
    </table>
 
    </>
  )
}

export default Show