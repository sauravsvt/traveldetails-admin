import React, { useEffect, useState } from "react";
import axios from "axios";
function TicketsRaised() {
  const [APIData, setAPIData] = useState([]);


  const loadUser = async () => {
    await axios.get(`https://server-traveldetails.herokuapp.com/getTickets`).then(response => {
      console.log(response.data)
      setAPIData(response.data)
    })
}

useEffect( () => {
  loadUser();
  }, []);

  return (
   <>
    <h1>Tickets Raised</h1>
    <table>
      <tbody>
        <th>From</th>
        <th>Issue</th>
        <th>Date</th>
      </tbody>
  
    {APIData.map((val)=> {
      return (
      <tbody>
        <tr key={val._id}>
          <td>{val.name}</td>
          <td>{val.ticket}</td>
          <td>{val.timeStamp}</td>
        </tr>
      </tbody>
      )
    })}
    </table>

   </>
  )
}

export default TicketsRaised