import React from 'react'
import Sidebar from '../components/SideBar'
import { Outlet } from 'react-router-dom'
const AdminUI = () => {
  return (
    <div className='admincontainer'>
      <Sidebar />
      <div className='adminmaincontent'>
        <Outlet />
      </div>
    </div>
  )
}

export default AdminUI