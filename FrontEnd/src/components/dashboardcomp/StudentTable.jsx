import React from 'react'
import InputYearDepartment from '../adminpagecompo/InputYearDepartment'
import DashboardTable from './DashboardTable'

const StudentTable = () => {
  return (
    <div className='main-container'>
      <div className='empty'></div>
      <h1>Survey <span>Dashboard</span> and <span>Reports</span> of <span>Students</span></h1>
      <InputYearDepartment />
      <DashboardTable role="Student" />
    </div>
  )
}

export default StudentTable
