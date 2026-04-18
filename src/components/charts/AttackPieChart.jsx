import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Total Scan", value: 12 },
  { name: "MALICIOUS", value: 8 },
  { name: "SUSPICIOUS", value: 15 },
  { name: "CLEAN", value: 10 },
  { name: "CRITICAL INCIDENTS", value: 20 },
  { name: "OPEN INCIDENTS", value: 5 },
  { name: "SECURITY EVENTS", value: 18 },
  { name: "ACTIVE ICONS", value: 12 },
];

const COLORS = [
  "#A000FF",
  "#FF9304",
  "#FFD166",
  "#EF476F",
  "#06D6A0",
  "#3A86FF",
  "#87BD23",
  "#FDE006",
];

function AttackPieChart() {
  return (
      <ResponsiveContainer>
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            cx="50%"          
            cy="50%"
            innerRadius={85}  
            outerRadius={100}
            paddingAngle={-10}
            cornerRadius={16}
            strokeWidth={0}
            aria-setsize={3}
          >
            {data.map((entry, index) => (
              <Cell key={index} fill={COLORS[index]} />
            ))}
          </Pie>

          <Tooltip
            contentStyle={{
              backgroundColor: "#111313",
              border: "none",
              borderRadius: "8px",
              color: "#fff",
            }}
          />

          {/* <Legend
            layout="horizontal"
            align="right"
            verticalAlign="bottom"
            wrapperStyle={{
              color: "#fff",
              fontSize: "12px",
            }}
          /> */}
        </PieChart>
      </ResponsiveContainer>
    
  );
}

export default AttackPieChart;