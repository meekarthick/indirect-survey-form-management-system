import React from 'react'
import SideBar from '../components/SideBar'
import StudentUI from '../UIs/StudentUI'
import EmployerUI from '../UIs/EmployerUI'
import ParentUI from '../UIs/ParentUI'
import AlumniUI from '../UIs/AlumniUI'

const FormFillingpage = () => {
  return (
    <div className='formfillingdiv'>
        <SideBar
        user={''}
        />
        <StudentUI />
        {/* <EmployerUI /> */}
        {/* <ParentUI /> */}
        {/* <AlumniUI /> */}
    </div>
  )
}

export default FormFillingpage