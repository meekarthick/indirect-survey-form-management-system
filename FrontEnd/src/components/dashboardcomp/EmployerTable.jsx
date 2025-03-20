import React from 'react'
import InputYearDepartment from '../adminpagecompo/InputYearDepartment'
import DashboardTable from './DashboardTable'

const EmployerTable = () => {
  return (
    <div className='main-container'>

      <h1>Survey <span>Dashboard</span> and <span>Reports</span> of <span>Employer</span></h1>

      <InputYearDepartment />
      <DashboardTable role="Employer" />
    </div>
  )
}


export default EmployerTable
