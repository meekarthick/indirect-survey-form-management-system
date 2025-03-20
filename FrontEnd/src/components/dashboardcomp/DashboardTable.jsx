import React from "react";

const DashboardTable = ({ role }) => {
  const data = [
    "Engineering knowledge",
    "Problem Analysis",
    "Design/Development of Solutions",
    "Conduct Investigations of Complex Problems",
    "Modern Tool Usage",
    "The Engineer and Society",
    "Environment and Sustainability",
    "Individual and Team Work",
    "Communication",
    "Project Management and Finance",
    "Life-long Learning",
  ];

  const hiddenColums = {
    Student: ["Alumni Survey", "Employer Survey", "Parent Survey"],
    Parent: ["Student Survey", "Alumni Survey", "Employer Survey"],
    Alumni: ["Student Survey", "Employer Survey", "Parent Survey"],
    Employer: ["Student Survey", "Alumni Survey", "Parent Survey"],
  };

  const columns = [
    "S.no",
    "Program Outcomes",
    "Student Survey",
    "Alumni Survey",
    "Employer Survey",
    "Parent Survey",
    "Extra Curricular Survey",
    "CoCurricular Survey",
    "Average Rating",
  ];
  return (
    <div className="table-container">
      <table className="survey-table">
        <thead className="table-head">
          <tr>
            {columns.map((col, index) =>
              !hiddenColums[role]?.includes(col) ? (
                <th key={index}>{col}</th>
              ) : null
            )}
          </tr>
        </thead>
        <tbody>
          {data.map((items, index) => (
            <tr key={index} className={index % 2 === 0 ? "even-row" : "odd-row"}>
              <td>{index + 1}</td>
              <td>{items}</td>
              {!hiddenColums[role]?.includes("Student Survey") && <td>-</td>}
              {!hiddenColums[role]?.includes("Alumni Survey") && <td>-</td>}
              {!hiddenColums[role]?.includes("Employer Survey") && <td>-</td>}
              {!hiddenColums[role]?.includes("Parent Survey") && <td>-</td>}
              {!hiddenColums[role]?.includes("Extra Curricular Survey") && (
                <td>-</td>
              )}
              {!hiddenColums[role]?.includes("CoCurricular Survey") && (
                <td>-</td>
              )}
              {!hiddenColums[role]?.includes("Average Rating") && <td>-</td>}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DashboardTable;
