import React, { useState } from 'react'
import DashBoardForm from '../dashboardcomp/DashBoardForm'
import DashboardTable from '../dashboardcomp/DashboardTable'
import ParentsFeedbacks from '../dashboardcomp/ParentsFeedbacks'
import EmployerFeedBAck from '../dashboardcomp/EmployerFeedBAck'
const DashBoard = () => {



  return (
    <div className='dashboardmain-div'>
      <div className='dashboardhead-div'>
        <h3>Survey <span>Dashboard</span> and <span>Reports</span></h3>
      </div>
      <DashBoardForm />
      <DashboardTable role="Normal" />
    </div>
  )
}

export default DashBoard