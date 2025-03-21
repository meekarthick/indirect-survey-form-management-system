import React from "react";
import { PieChart, Pie, Tooltip, Cell, Legend, ResponsiveContainer } from "recharts";

const data = [
  { name: "Student Survey", value: 12 },
  { name: "Alumni Survey", value: 10 },
  { name: "Employer Survey", value: 8 },
  { name: "CoCurricular", value: 5 },
  { name: "Extra Curricular", value: 4 },
];

const COLORS = ["#8884d8", "#82ca9d", "#ffc658", "#ff7f50", "#a4de6c"];

const PieChartComponent = () => {
  return (
    <ResponsiveContainer width="50%" height={300}>
      <PieChart>
        <Pie data={data} cx="50%" cy="50%" outerRadius={120} fill="#8884d8" dataKey="value" label>
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </ResponsiveContainer>
  );
};

export default PieChartComponent;
