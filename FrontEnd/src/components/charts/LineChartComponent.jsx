import React from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

const data = [
  { name: "Engineering Knowledge", Average: 2 },
  { name: "Problem Analysis", Average: 3 },
  { name: "Design Solutions", Average: 2.5 },
  { name: "Investigations", Average: 2.2 },
  { name: "Modern Tool Usage", Average: 2.8 },
];

const LineChartComponent = () => {
  return (
    <ResponsiveContainer width="50%" height={300}>
      <LineChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="Average" stroke="#8884d8" strokeWidth={2} />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default LineChartComponent;
