import React from "react";
import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { subject: "Engineering Knowledge", A: 2, fullMark: 5 },
  { subject: "Problem Analysis", A: 3, fullMark: 5 },
  { subject: "Design Solutions", A: 2.5, fullMark: 5 },
  { subject: "Investigations", A: 2.2, fullMark: 5 },
  { subject: "Modern Tool Usage", A: 2.8, fullMark: 5 },
];

const RadarChartComponent = () => {
  return (
    <ResponsiveContainer width="50%" height={300}>
      <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
        <PolarGrid />
        <PolarAngleAxis dataKey="subject" />
        <PolarRadiusAxis angle={30} />
        <Tooltip />
        <Radar name="Score" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
      </RadarChart>
    </ResponsiveContainer>
  );
};

export default RadarChartComponent;
