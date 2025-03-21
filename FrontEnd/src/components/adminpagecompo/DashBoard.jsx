import React, { useState } from 'react'
import DashBoardForm from '../dashboardcomp/DashBoardForm'
import DashboardTable from '../dashboardcomp/DashboardTable'
import ParentsFeedbacks from '../dashboardcomp/ParentsFeedbacks'
import EmployerFeedBAck from '../dashboardcomp/EmployerFeedBAck'
import GroupedBarChart from '../charts/GroupedBarCharts'
import LineChartComponent from '../charts/LineChartComponent'
import { PieChart } from 'recharts'
import PieChartComponent from '../charts/PieChartComponent'
import RadarChartComponent from '../charts/RadarChartComponent'
const DashBoard = () => {



  return (
    <div className='dashboardmain-div'>
      <div className='dashboardhead-div'>
        <h3>Survey <span>Dashboard</span> and <span>Reports</span></h3>
      </div>
      <DashBoardForm />
      <DashboardTable />
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "20px" }}>
        <div style={{ width: "48%" }}>
          <GroupedBarChart />
        </div>
        <div style={{ width: "48%" }}>
          <LineChartComponent />
        </div>
        <div style={{ width: "48%" }}>
          <PieChartComponent />
        </div>
        <div style={{ width: "48%" }}>
          <RadarChartComponent />
        </div>
      </div>

    </div>
  )
}

export default DashBoard