import React from "react";

const ButtonAdmin = ({ value,disabled }) => {
  return (
    <div>
      <div className="main-form-add">
        <button className="submit-button" type="submit" disabled={disabled}>
          {value}
        </button>
      </div>
    </div>
  );
};

export default ButtonAdmin;
