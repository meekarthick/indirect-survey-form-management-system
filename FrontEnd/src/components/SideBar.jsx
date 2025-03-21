import React, { useState, useEffect } from "react";
import "../css/Admin.css";
import { FaAngleDown, FaAngleUp, FaQuestion, FaRegUser } from "react-icons/fa";
import { BiLogOut } from "react-icons/bi";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Home2, KeyboardOpen, LogoutCurve } from "iconsax-react";
import bitLogo from "../assets/images/bit web logo.png"
const Sidebar = () => {
  const location = useLocation();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  // Keep sidebar and dropdown open when inside dashboard routes
  useEffect(() => {
    if (location.pathname.startsWith("/admin/dashboard")) {
      setIsDropdownOpen(true);
    }
  }, [location.pathname]);

  useEffect(() => {
    if (location.pathname.startsWith("/admin")) {
      setIsOpen(true);
    }
  }, [location.pathname]);
  // Toggle sidebar visibility manually
  const toggleSidebar = () => {
    setIsOpen((prev) => !prev);
  };

  // Logout function
  const handleLogout = () => {
    alert("Logging out...");
    // Add actual logout logic here
  };

  return (
    <div className="sidebar-container">
      {/* Sidebar Toggle Button */}
      <button className="toggle-btn" onClick={toggleSidebar}>
        {isOpen ? "Close" : "Open"}
      </button>

      <div className={`sidebar ${isOpen ? "open" : ""}`}>
        <div className="sidebar-heading">
          <img className="logo" src={bitLogo} />
        </div>
        <div className="sidebar-options">
          <ul>
            <li className="sidebarlistnames">
              <div className="icons-cust">
                <Home2 />
              </div>
              <NavLink to="/">Home</NavLink>
            </li>

            {/* Dashboard Dropdown */}
            <li
              className={`sidebarlistnames ${
                location.pathname.startsWith("/admin/dashboard")
                  ? "active-link"
                  : ""
              }`}
            >
              <div className="dashboard-dropdown">
                <div
                  className="dropdown-header"
                  onClick={() => setIsDropdownOpen((prev) => !prev)}
                >
                  <div className="dropdown-head">
                    <div className="dashboard-button">
                      <div className="icons-cust">
                        <KeyboardOpen />
                      </div>
                      <NavLink to="/admin/dashboard">Dashboard</NavLink>
                    </div>
                    <div className="dropdown-icon">
                      {isDropdownOpen ? <FaAngleUp /> : <FaAngleDown />}
                    </div>
                  </div>
                </div>
                {isDropdownOpen && (
                  <div className="dropdown-content">
                    <Link className="elements-drop" to="studentTable">
                      Student
                    </Link>
                    <Link className="elements-drop" to="aluminiTable">
                      Alumini
                    </Link>
                    <Link className="elements-drop" to="employerTable">
                      Employer
                    </Link>
                    <Link className="elements-drop" to="parentTable">
                      Parents
                    </Link>
                  </div>
                )}
              </div>
            </li>

            {/* User Management */}
            <li
              className={`sidebarlistnames ${
                location.pathname === "/admin/manageusers" ? "active-link" : ""
              }`}
            >
              <div className="icons-cust">
               <FaQuestion />
              </div>
              <NavLink to="/admin/questionPage">Questions</NavLink>
            </li>
          </ul>
        </div>

        {/* Logout */}
        <div className="logout-div">
          <ul>
            <li onClick={handleLogout} className="logout-button">
             <LogoutCurve className="icons-cust" />
              Logout
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
