import { useEffect, useState } from "react";
import { PieChart, Pie, Legend, Tooltip, Cell } from "recharts";
import { COLORS } from "./constants";

interface ChartRow {
  name: string;
  amount: number;
}

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index,
}: {
  cx: number;
  cy: number;
  midAngle: number;
  innerRadius: number;
  outerRadius: number;
  percent: number;
  index: number;
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

export const CurrentSpendByService = ({
  data,
}: {
  data?: CloudAccountHistory;
}) => {
  const [chartData, setChartData] = useState<ChartRow[]>([]);

  useEffect(() => {
    if (data) {
      setChartData(
        data.groups.map<ChartRow>((group) => ({
          name: group.key,
          amount: group.amount ?? 0,
        }))
      );
    }
  }, [data]);

  return (
    <PieChart width={400} height={400}>
      <Pie
        data={chartData}
        dataKey="amount"
        cx="50%"
        cy="50%"
        labelLine={false}
        label={renderCustomizedLabel}
        outerRadius={150}
        fill="#8884d8"
      >
        {chartData.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Legend />
      <Tooltip />
    </PieChart>
  );
};
