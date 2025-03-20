import React from 'react'
import InputYearDepartment from '../adminpagecompo/InputYearDepartment'
import DashboardTable from './DashboardTable'

const AluminiTable = () => {
  return (
    <div className='main-container'>

      <h1>Survey <span>Dashboard</span> and <span>Reports</span> of <span>Alumini</span></h1>

      <InputYearDepartment />
      <DashboardTable role="Alumni" />
    </div>
  )
}

export default AluminiTable
