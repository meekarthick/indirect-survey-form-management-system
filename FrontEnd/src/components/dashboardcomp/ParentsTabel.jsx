import React from 'react'
import DashboardTable from './DashboardTable'

const ParentsTabel = () => {
  return (
    <div className='main-container'>
      <h1>Survey <span>Dashboard</span> and <span>Reports</span> of <span>Parents</span></h1>
      <DashboardTable role="Parent" />
    </div>
  )
}

export default ParentsTabel