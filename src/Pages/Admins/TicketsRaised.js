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
   <div className="ViewNotices">
    <h1>Tickets Raised</h1>
    <table>
      <tbody className="table-title">
        <th>From</th>
        <th>Issue</th>
        <th>Date</th>
      </tbody>
  
    {APIData.map((val)=> {
      return (
      <tbody className="table-list">
        <tr key={val._id}>
          <td>{val.name}</td>
          <td>{val.ticket}</td>
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

export default TicketsRaised