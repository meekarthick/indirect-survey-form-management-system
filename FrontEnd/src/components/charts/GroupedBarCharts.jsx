import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

const data = [
  { name: "Engineering Knowledge", Student: 2, Alumni: 2, Employer: 2 },
  { name: "Problem Analysis", Student: 2, Alumni: 3, Employer: 3 },
  { name: "Design Solutions", Student: 1, Alumni: 3, Employer: 2 },
  { name: "Investigations", Student: 3, Alumni: 2, Employer: 2 },
  { name: "Modern Tool Usage", Student: 2, Alumni: 3, Employer: 2 },
];

const GroupedBarChart = () => {
  return (
    <ResponsiveContainer width="50%" height={300}>
      <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="Student" fill="#8884d8" />
        <Bar dataKey="Alumni" fill="#82ca9d" />
        <Bar dataKey="Employer" fill="#ffc658" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default GroupedBarChart;
