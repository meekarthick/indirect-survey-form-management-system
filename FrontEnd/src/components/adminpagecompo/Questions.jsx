import React from "react";
import { NavLink } from "react-router-dom";
const Questions = () => {
  return (
    <div className="main-container-questions">
      <h1>Select the option</h1>
      <div className="button-container">
        <NavLink to="/admin/addQuestion">
          <button>Add Question</button>
        </NavLink>
        <NavLink to="/admin/updateQuestion">
          <button>Update Question</button>
        </NavLink>
      </div>
    </div>
  );
};

export default Questions;
