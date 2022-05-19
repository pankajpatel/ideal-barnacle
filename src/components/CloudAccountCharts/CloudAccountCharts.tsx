import dayjs from "dayjs";
import { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  Legend,
  Tooltip,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";
import { Spinner } from "../../ds/components/Spinner";
import { COLORS } from "./constants";

interface ChartData {
  date: string;
  Storage?: number;
  Compute?: number;
  Network?: number;
}

type Keys = "Storage" | "Compute" | "Network";

type Expense = {
  [key in Keys]?: number;
};

export const CloudAccountCharts = ({
  data,
  months = 6,
}: {
  data?: CloudAccountHistory[];
  months?: number;
}) => {
  const [chartData, setChartData] = useState<ChartData[]>([]);
  useEffect(() => {
    if (data) {
      setChartData(
        data
          .map<ChartData>((item: CloudAccountHistory) => ({
            date: dayjs(item.date).format("MMM YY"),
            ...item.groups.reduce<Expense>(
              (acc, group) => ({ ...acc, [group.key]: group.amount ?? 0 }),
              {}
            ),
          }))
          .slice(-months)
      );
    }
  }, [data, months]);

  if (!data) {
    return <Spinner />;
  }
  return (
    <BarChart width={730} height={400} data={chartData}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="date" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="Compute" fill={COLORS[0]} />
      <Bar dataKey="Network" fill={COLORS[1]} />
      <Bar dataKey="Storage" fill={COLORS[2]} />
    </BarChart>
  );
};
