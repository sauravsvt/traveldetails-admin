import React from 'react'
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import jwt_decode from "jwt-decode";
import 'react-toastify/dist/ReactToastify.css';
import {  useNavigate} from "react-router-dom";
import Add from '../Add';
import Show from '../Show';
import '../CSS/Homepage.css'
import Notices from '../Interns/Notices';
import RaiseTicket from '../Interns/RaiseTicket';
import AssignedTasks from '../Interns/AssignedTasks';
import AddNotice from '../Admins/AddNotice';
import EmployeeAttendance from '../Admins/EmployeeAttendance';
import TicketsRaised from '../Admins/TicketsRaised';

function Homepage() {
  let storeToken = localStorage.getItem("data");
  var decoded = jwt_decode(storeToken);
  var name= decoded.name
  let navigate = useNavigate();
  const RegisterNewUser = () => {
    navigate('/register')
 }

 const Attedance =()=> {
  axios.get(`https://server-traveldetails.herokuapp.com/doattendance/${name}`).then((response)=> {
    console.log(response.data.message)
    toast.success("Attedance marked successfully")
   }).catch((err) => {
     console.log(err.response.data.message)
     toast.error(err.response.data.message)
   })
 }

  const logOut = () => {
    localStorage.clear()
    navigate('/login')
 }

  if(decoded.role === "admin"){
    return (
      <>
      <div className='top'>
        <div className='welcome'>
              <h1> Welcome {decoded.name}</h1>
              <h3>{decoded.profile}</h3>
        </div>      

        <div className='welcome-button'>
          <button onClick={RegisterNewUser}>
            <svg width="96" height="96" viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_1_7)">
              <path d="M52 32C52 23.16 44.84 16 36 16C27.16 16 20 23.16 20 32C20 40.84 27.16 48 36 48C44.84 48 52 40.84 52 32ZM60 40V48H72V60H80V48H92V40H80V28H72V40H60ZM4 72V80H68V72C68 61.36 46.68 56 36 56C25.32 56 4 61.36 4 72Z" fill="white"/>
              </g>
              <defs>
              <clipPath id="clip0_1_7">
              <rect width="96" height="96" fill="white"/>
              </clipPath>
              </defs>
          </svg>
          </button>
          
          <button onClick={logOut}> 
            <svg width="96" height="96" viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_1_14)">
              <path d="M52 12H44V52H52V12ZM71.32 20.68L65.64 26.36C71.96 31.44 76 39.24 76 48C76 63.48 63.48 76 48 76C32.52 76 20 63.48 20 48C20 39.24 24.04 31.44 30.32 26.32L24.68 20.68C16.92 27.28 12 37.04 12 48C12 67.88 28.12 84 48 84C67.88 84 84 67.88 84 48C84 37.04 79.08 27.28 71.32 20.68Z" fill="white"/>
              </g>
              <defs>
              <clipPath id="clip0_1_14">
              <rect width="96" height="96" fill="white"/>
              </clipPath>
              </defs>
            </svg>
          </button>
        </div>
      </div>
     
      <AddNotice/>
      <Notices/>
      <Add/>
      <Show/>
      <EmployeeAttendance/>
      <TicketsRaised/>
      </>
    )
  }
  else 

  return (
   <>
   <div className='top'>
    <div className='welcome'>
      <h1> Welcome {decoded.name}</h1>
      <h3>{decoded.profile}</h3>
    </div>

    <div className='welcome-button'>
      <button onClick={Attedance}>
      <svg width="96" height="96" viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
        <rect width="96" height="96" fill="url(#pattern0)"/>
        <defs>
        <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
        <use xlinkHref="#image0_2_3" transform="scale(0.0104167)"/>
        </pattern>
        <image id="image0_2_3" width="96" height="96" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAABmJLR0QA/wD/AP+gvaeTAAAFeUlEQVR4nO2dW6gVVRzGv6Vhd7U0JE3KSjMh6AIWkQ8RXans8lCBRPSSWARRD70cqKCH6Cki6AJFRPgiBcoRswgiKqMi6UInCruYWifidFHydI7n18PMJo199vrPnrVmzp5Zv9c9s75vf9/es/fMmouUSCQSiUQikUgk2oYrszKwRNJaSddLWiZpqaTjA/gKhnOu1HuMzVH9rAQslDQkaUO/YyQyCocHXCdpo6S54e20j1lFFgbWS9qsFH4wzNtH4GpJw5Jmx7MTnpn+G2AyB5wqaUQD+Mmf6QVYN0GPaADDHwS8n478r+b3GtB/O1V8A4BFkv5wzh2MMfgG/HwFrAVODG5ghgMsAL4A3gJOiCGw1RD+/ODCAwAwF/josCw+AE4KLfK1p4C1QQUHBOBY4J0ueewk2yQFE/rTU0AbNztzPFuGEWBpKLGeBBEZIIDZwEZfLsAPwPIQgqmAHMABLxrCB5gC1oUQTQXkAE8awwd4KJRoKkAS8FiB8IdCCre+AOD+AuE/FVq81QUAd5Ftzy28BITd825zAcCtwKQx/E1A+CPFbS0AuAoYN4b/BjAnlpHWFQBcDvxtDP9t4JiYZlpVALAa/95/hx3EPhLQpgKA84DfjOF/BpxchalWFACcDew1hv8N2SxhJcYaXwBwGvCdMfzdwBlVmmt0AcApZHMaFkaBlVUbbGwBwDzgE2P4vwMX1GGykQUAxwHvGsM/AFxWl9HGFUA2obLNGP442TlRtZltVAFkEyqbjOH/A9xQt+HGFADMAl41hn8IuKNuz40pgGw261lj+FPAPXV7lhSnALI9ztWhvXo0i8xmPVilt56ELgA4F9hH9rfukhieu2gOFQj/0So8mQlZwGHhd4heAnBfgfCfjumlL0IV0CX86CUAd5L9mFp4GSh0vUQlhCigR/jRSgBuBiaM4b8G9Hu5Vul8ogoYwu8QrATgSuCgQRNgO3B0Ca1S+UQXAC7Efoy9dAnApcB+o957QKmrOsvmU4kAFZUAnA+MGXU+JcBZ3SHyqUSAyCUAK4CfjeN/DiwonkZX3SD5VCJApBKAs4A9xnG/BRb3l0ZX7WD5VCJA4BKAJcAu43g/Acv6T6OrftB8KhEgUAnAQuBL4zijwKpyaXT1EDyfSgQoWQLZ5UEfF1j/otJhdH8fUfKpRIA+SyCbzep2eVA3DgBrSgcx/XuIlk8lAhQvYQ3+Cwc7jAPXlg6ht/+o+VQyHwBcnIdrwXqm8gRwUwh/Hu9x84ku8J9OkW+Cjyng7lDePL7j5hNd4EitUCU8ENKXx3NzCsj1ypbwcGhPHr/NKiDX7LeEx2P48XhtXgG5btESnonlxeOzmQXk2tYSXqGm2axGF5Dr+0p4nT5nswL5a3YBuYfpSniTErNZgbw1v4Dcx/9LeJ8Y9+cp7qsdBeReOiXsJPR9efqkbD6WW5b1HKTqm+KRHdX80Tn3a5W601E2n4ErYKZRNp+ZdyJSy0gF1EwqoGZSATWTCqiZVEDNpAJqJhVQM5YC/ur1Ii28cWsHYJ5nkZ7ZSbYC9npev8IwRlPxvfc9pRWAYc/xphFaePNuYD7++2pv8Y1j+QYMe14/R9IOskuCGv+QB7JTIm+R9KGkFZ7Ffdk1/wEONTIh6XTn3L5eC3m/Ac65PZJeCOWqRTznC1+yP8RnkbKH+LRuW98nY5JWOudGfQua9gOcc79Iuk3SZEljbeCQpHWW8KUCO2LOue2S7s0FEt2ZlLTeObfVukLh2SzgGmWPMkyboyMZk3R7/kE1U/hQhHNum6Tlkp6QNF50/QYyIel5SauKhi+Vf5ztYkk3Knuc7ZnKHmdb+6kikdkvabekXZK2SNps+beTSCQSiUQikUgkEh3+BeFbkueDnOd1AAAAAElFTkSuQmCC"/>
        </defs>
      </svg>

      </button>

      <button onClick={logOut}>
      <svg width="96" height="96" viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_1_14)">
        <path d="M52 12H44V52H52V12ZM71.32 20.68L65.64 26.36C71.96 31.44 76 39.24 76 48C76 63.48 63.48 76 48 76C32.52 76 20 63.48 20 48C20 39.24 24.04 31.44 30.32 26.32L24.68 20.68C16.92 27.28 12 37.04 12 48C12 67.88 28.12 84 48 84C67.88 84 84 67.88 84 48C84 37.04 79.08 27.28 71.32 20.68Z" fill="white"/>
        </g>
        <defs>
        <clipPath id="clip0_1_14">
        <rect width="96" height="96" fill="white"/>
        </clipPath>
        </defs>
      </svg>
      </button>
    </div>
   </div>

     
     <Notices/>
     <AssignedTasks/>
     <RaiseTicket/>
     <ToastContainer/>
   </>
  )
}

export default Homepage