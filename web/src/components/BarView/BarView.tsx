import React from "react";
import "./BarView.css";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Legend,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";

const techData = [
  { name: "TypeScript", value: 40 },
  { name: "JavaScript", value: 15 },
  { name: "Python", value: 35 },
  { name: "Java", value: 7 },
  { name: "C++", value: 3 },
];

const barColors = ["#074799", "#FFD65A", "#4DA1A9", "#5CB338", "#4C585B"];
interface Props {}
const BarView: React.FC<Props> = () => {
  const data = React.useMemo(() => techData, []);
  return (
    <div className="bar">
      <h2 style={{ textAlign: "center" }}>Most used Programming Languages</h2>
      <ResponsiveContainer width={350} height={250}>
        <BarChart data={data} margin={{}}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="" display={"none"} />
          <YAxis />
          <Legend
            payload={techData.map((item, index) => ({
              value: item.name,
              type: "circle",
              id: item.name,
              color: barColors[index],
            }))}
            wrapperStyle={{ fontSize: 10 }}
          />
          <Bar dataKey="value" name="Usage">
            {techData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={barColors[index]} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BarView;
