import React, { useState } from "react";
import "../css/Admin.css"; // Import the CSS file for styling
import { LuLayoutDashboard } from "react-icons/lu";
import { IoHomeOutline } from "react-icons/io5";
import { SiLogstash } from "react-icons/si";
import { FaRegUser } from "react-icons/fa";
import { BiLogOut } from "react-icons/bi";
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Sidebar = () => {

  // used useLocation to track the current path to apply the styles
  const location = useLocation();


// this usestate is closing and openinng the side bar
  const [isOpen, setIsOpen] = useState(false);
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="sidebar-container">
      <div className={`sidebar ${isOpen ? "open" : ""}`}>
        <div className="sidebar-heading">
          <h3>BIT Admin</h3>
        </div>
        <div className="sidebar-options">
          <ul>
            <li className="sidebarlistnames">
              <IoHomeOutline className="adminpage-icons" />
              <NavLink 
                to="/" 
              >
                Home
              </NavLink>
            </li>
            {/* dynamically  styled based on the location  */}

            <li className={location.pathname === '/admin/dashboard' ? 'sidebarlistnames active-link' : 'sidebarlistnames'}>
              <LuLayoutDashboard className="adminpage-icons" />
              <NavLink 
                to="dashboard" 
              >
                Dashboard
              </NavLink>
            </li>
            {/* <li className={location.pathname === '/StudentUI' ? 'sidebarlistnames active-link' : 'sidebarlistnames'}>
              <LuLayoutDashboard className="adminpage-icons" />
              <NavLink 
                to="studentUI" 
              >
                Student Form
              </NavLink>
            </li>
            <li className={location.pathname === '/AlumniUI' ? 'sidebarlistnames active-link' : 'sidebarlistnames'}>
              <LuLayoutDashboard className="adminpage-icons" />
              <NavLink 
                to="alumniUI" 
              >
                Alumni Form
              </NavLink>
            </li>
            <li className={location.pathname === '/parentsUI' ? 'sidebarlistnames active-link' : 'sidebarlistnames'}>
              <LuLayoutDashboard className="adminpage-icons" />
              <NavLink 
                to="parentsUI" 
              >
                Parent Form
              </NavLink>
            </li>
            <li className={location.pathname === '/employerUI' ? 'sidebarlistnames active-link' : 'sidebarlistnames'}>
              <LuLayoutDashboard className="adminpage-icons" />
              <NavLink 
                to="employerUI" 
              >
                Employer Form
              </NavLink>
            </li> */}
            <li className={location.pathname === '/admin/logs' ? 'sidebarlistnames active-link' : 'sidebarlistnames'}>
              <SiLogstash className="adminpage-icons" />
              <NavLink 
                to="logs" 
              >
                Logs
              </NavLink>
            </li>
            <li className={location.pathname === '/admin/manageusers' ? 'sidebarlistnames active-link' : 'sidebarlistnames'}>
              <FaRegUser className="adminpage-icons" />
              <NavLink 
                to="manageusers" 
              >
                User Management
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="logout-div">
          <ul>
            <li><BiLogOut className="adminpage-icons" />Logout</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
