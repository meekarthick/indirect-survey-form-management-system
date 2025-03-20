import React, { useState } from "react";
import StudentLogin from "../forms/LoginForms/StudentLogin";
import AlumniLogin from "../forms/LoginForms/AlumniLogin";
import EmployerLogin from "../forms/LoginForms/EmployerLogin";
import PhoneAuth from "../forms/LoginForms/PhoneAuth";

const Loginform = () => {
  const [selectedLogin, setSelectedLogin] = useState(null);

  return (
    <div className="main-form">
      <h2 className="login-para">Login</h2>
      <div className="login-select-div">
        <div>
        <button onClick={() => setSelectedLogin("Student")} className={`login-button ${selectedLogin === "Student" ? "active" : ""}`}>
          Student Login
        </button>
        <button onClick={() => setSelectedLogin("Alumni")} className={`login-button ${selectedLogin === "Alumni" ? "active" : ""}`}>
          Alumni Login
        </button>
        <button onClick={() => setSelectedLogin("Employer")} className={`login-button ${selectedLogin === "Employer" ? "active" : ""}`}>
          Employer Login
        </button>
        <button onClick={() => setSelectedLogin("Parents")} className={`login-button ${selectedLogin === "Parents" ? "active" : ""}`}>
          Parents Login
        </button>
        </div>
        <div className="login-container">
          {selectedLogin === "Student" && <StudentLogin />}
          {selectedLogin === "Alumni" && <AlumniLogin />}
          {selectedLogin === "Employer" && <EmployerLogin />}
          {selectedLogin === "Parents" && <PhoneAuth />}
        </div>
      </div>
      
    </div>
  );
};

export default Loginform;
