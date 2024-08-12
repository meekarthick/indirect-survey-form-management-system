import React from 'react'
import stdicon from './images/studenticon.png'
import { Link } from 'react-router-dom';
import { AiOutlineHome } from "react-icons/ai";
import { FaWpforms } from "react-icons/fa";
import { RxDashboard } from "react-icons/rx";
import transparentbg from "./images/transparentbg.png"
const SideBar = ({user}) => {
  return (
    <div className='sidenavbar'>
      <div className='stdicondiv'>
        <img src={transparentbg} alt='student' className='stdlogo' />
      </div>
      <div className='sidebaropt'>
        <Link to="/" className='sidebarlinks'><AiOutlineHome className='sidebaricons' />Home</Link>
        {/* <Link to="/" className='sidebarlinks'><RxDashboard className='sidebaricons' />Dashboard</Link> */}
        <Link to="/" className='sidebarlinks'><FaWpforms className='sidebaricons' />Forms</Link> 
        {
            (user === 'Parent' || user === 'Employer') && 
            <Link to="/" className='sidebarlinks'><FaWpforms className='sidebaricons' />Logout</Link> 
        }
      </div>
    </div>
  )
}

export default SideBar