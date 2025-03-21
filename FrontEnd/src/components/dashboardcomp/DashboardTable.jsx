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

  // Column headings for the main dashboard
  const mainDashboardColumns = [
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

  // Column headings for role-specific dashboards (Student, Parent, Alumni, Employer)
  const responseColumns = [
    "S.no",
    "Program Outcomes",
    "Strongly Agree",
    "Agree",
    "Neutral",
    "Disagree",
    "Strongly Disagree",
  ];

  // Determine which columns to display based on role
  const columnsToDisplay = role === "Normal" ? mainDashboardColumns : responseColumns;

  // Function to generate a random number between 1 and 5
  const getRandomNumber = () => Math.floor(Math.random() * 5) + 1;

  return (
    <div className="table-container">
      <table className="survey-table">
        <thead className="table-head">
          <tr>
            {columnsToDisplay.map((col, index) => (
              <th key={index}>{col}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => {
            // Generate random numbers for rating columns
            const ratings = columnsToDisplay.slice(2, -1).map(() => getRandomNumber());

            // Calculate average rating
            const averageRating = (ratings.reduce((sum, num) => sum + num, 0) / ratings.length).toFixed(2);

            return (
              <tr key={index} className={index % 2 === 0 ? "even-row" : "odd-row"}>
                <td>{index + 1}</td>
                <td>{item}</td>
                {ratings.map((num, i) => (
                  <td key={i}>{num}</td>
                ))}
                <td>{averageRating}</td> {/* Display calculated average */}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default DashboardTable;
