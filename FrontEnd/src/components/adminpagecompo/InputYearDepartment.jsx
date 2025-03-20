import React, { useState } from "react";

const optionsYear = [
  2025, 2024, 2023, 2022, 2021, 2020, 2019, 2018, 2017, 2016, 2015, 2014, 2013,
  2012, 2011, 2010, 2009, 2008, 2007, 2006, 2005, 2004, 2003, 2002, 2001, 2000,
  1999, 1998, 1997, 1996, 1995, 1994, 1993, 1992, 1991, 1990,
];

const optionsDepartment = [
  "Biomedical",
  "Biotechnology",
  "Aeronautical Engineering",
  "Agricultural Engineering",
  "Artificial Intelligence and Datascience",
  "Artificial Intelligence and Machine Learning",
  "Automobile Engineering",
  "Civil Engineering",
  "Computer Science and Business Systems",
  "Computer Science and Design",
  "Computer Science and Engineering",
  "Computer Technology",
  "Electrical and Electronics Engineering",
  "Electronics and Communication Engineering",
  "Electronics and Instrumentation Engineering",
  "Fashion Technology",
  "Food Technology",
  "Information Science and Engineering",
  "Information Technology",
  "Mechanical Engineering",
  "Mechatronics Engineering",
];
const InputYearDepartment = (person) => {
  const [selectedYearOption, setSelectedYearOption] = useState("");
  const handleYearChange = (event) => {
    setSelectedYearOption(event.target.value);
  };

  const [selectedDepartmentOption, setSelectedDepartmentOption] = useState("");
  const handleDepartmentChange = (event) => {
    setSelectedDepartmentOption(event.target.value);
  };
  return (
    <div className="inputContainer">
      <div>
        <h4>Batch</h4>
        <select className="selecter" value={selectedYearOption} onChange={handleYearChange}>
          <option value="">Select the Batch</option>
          {optionsYear.map((year, index) => (
            <option key={index} value={year}>
              {year}
            </option>
          ))}
        </select>
      </div>
      <div>
      <h4>Department</h4>
        <select className="selecter" value={selectedDepartmentOption} onChange={handleDepartmentChange}>
          <option value="">Select the Department</option>
          {optionsDepartment.map((department, index) => (
            <option key={index} value={department}>
              {department}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default InputYearDepartment;
