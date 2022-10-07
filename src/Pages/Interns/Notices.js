import React, { useEffect, useState } from "react";
import axios from "axios";
import '../CSS/Homepage.css';
function Notices() {
  //let storeToken = localStorage.getItem("data");
  //var token = (storeToken.replace(/['"]+/g, ''));

  const [APIData, setAPIData] = useState([]);


  const loadUser = async () => {
    await axios.get(`https://server-traveldetails.herokuapp.com/viewnotice`).then(response => {
      setAPIData(response.data)
    })
   
 
}

useEffect( () => {
  loadUser();
  }, []);

  console.log(APIData)


  return (
    <>
      <div className='ViewNotices'>
        <h1>View Notices</h1>
        <table>
      <tbody className="table-title">
        <th>Notices</th>
        <th>Published Date</th>
      </tbody>

    {
      APIData.length > 0 ? 
      APIData.map((val)=> {
      return (
      <tbody className="table-list">
        <tr key={val._id}>
          <td>{val.notice}</td>
          <td>{val.timeStamp}</td>
        </tr>
      </tbody>
      )
    })
    
    :
    <h2>No Result Found</h2>}
    </table>
      </div>
    </>
  )
}

export default Notices