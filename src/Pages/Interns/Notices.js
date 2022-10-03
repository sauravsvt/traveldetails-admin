import React, { useEffect, useState } from "react";
import axios from "axios";
import '../CSS/Homepage.css'
function Notices() {
  //let storeToken = localStorage.getItem("data");
  //var token = (storeToken.replace(/['"]+/g, ''));

  const [APIData, setAPIData] = useState([]);


  const loadUser = async () => {
    await axios.get(`https://server-traveldetails.herokuapp.com/viewnotice`).then(response => {
      console.log(response.data)
      setAPIData(response.data)
    })
   
 
}

useEffect( () => {
  loadUser();
  }, []);

  return (
    <>
      <div className='ViewNotices'>
        <h1>View Notices</h1>
        <table>
      <tbody>
        <th>Notices</th>
        <th>Published Date</th>
      </tbody>
  
    {APIData.map((val)=> {
      return (
      <tbody>
        <tr key={val._id}>
          <td>{val.notice}</td>
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

export default Notices