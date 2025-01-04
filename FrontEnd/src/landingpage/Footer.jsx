import React from 'react'
import bitWhitelogo from '../assets/images/bitWhitelogo.png'
import { FaLocationDot } from "react-icons/fa6";
import { IoCallOutline } from "react-icons/io5";
import { HiOutlineMail } from "react-icons/hi";
import { Link } from "@react-email/components";
const Footer = () => {
  const currentYear = new Date().getFullYear();
  console.log(currentYear);
  return (
    <div className='footermain-div'>
      <div className='footerdiv-1'>
        <div className='footerdiv1subdiv-1'>
          <div>
            <img src={bitWhitelogo} />
          </div>
          <div className='collegenamediv '>
            <p className='collegename'>Bannari Amman Institute of Technology</p>
            <p className='collegegradepara'>An Autonomous Institution, Affiliated to Anna University, Approved by AICTE, Accreadiated by NAAC with 'A+' Grade</p>
          </div>
        </div>
        <div className='footerdiv1subdiv-1'>
          <div className='locationlogo'>
            <FaLocationDot />
          </div>
          <div className='collegenamediv '>
            <p className='collegename'>Sathyamangalam, Erode, Tamil Nadu - 638401</p>
          </div>
        </div>
        <div className='footerdiv1subdiv-1'>
          <div className='phonelogo'>
            <IoCallOutline />
          </div>
          <div className='collegenamediv '>
            <a className='phonenumber' href="tel:+1234567890">+91 4295 226000</a><br></br>
            <a className='phonenumber' href="tel:+1987654321">+91 99429 21287</a>
          </div>
        </div>
        <div className='footerdiv1subdiv-1'>
          <div className='maillogo'>
            <HiOutlineMail />
          </div>
          <div className='collegenamediv '>
            <Link href="mailto:officeacademics@bitsathy.ac.in">officeacademics@bitsathy.ac.in</Link>
          </div>
        </div>
      </div>

      <div className='footerdiv-2'>
          <div>
            <p>{currentYear} BIT © . All Rights Reserved</p>
          </div>
      </div>

    </div>
  )
}

export default Footer