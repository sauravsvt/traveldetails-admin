import React, { useEffect, useState } from "react";
import axios from "axios";
function Show() {
  const [APIData, setAPIData] = useState([]);


  const loadUser = async () => {
  await axios.get(`https://server-traveldetails.herokuapp.com/viewTasks`).then(response => {
    console.log(response.data)
    setAPIData(response.data)
  })
 
}

useEffect( () => {
  loadUser();
  }, []);




  return (
    <>   
   <h1> Show All Tasks</h1>
    <table>
      <tbody>
        <th>Assigned To</th>
        <th>Task</th>
        <th>Deadline</th>
        <th>Assigned By</th>
        <th>Assigned On</th>
      </tbody>
  
    {APIData.map((val)=> {
      return (
      <tbody>
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
    </>
  )
}

export default Show