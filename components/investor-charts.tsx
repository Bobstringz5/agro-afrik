"use client";

import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const growthData = [
  { year: "2026", livestock: 0.3, revenue: 0.8 },
  { year: "2027", livestock: 1.2, revenue: 4.6 },
  { year: "2028", livestock: 4.8, revenue: 19.5 },
  { year: "2029", livestock: 12.4, revenue: 62 },
  { year: "2030", livestock: 28, revenue: 148 },
];

const marketData = [
  { name: "TAM", value: 66, label: "$66B" },
  { name: "SAM", value: 8, label: "$8B" },
  { name: "SOM", value: 150, label: "$150M" },
];

const revenueData = [
  { name: "Commissions", value: 34 },
  { name: "Subscriptions", value: 18 },
  { name: "Verification", value: 16 },
  { name: "Enterprise", value: 14 },
  { name: "Insights", value: 10 },
  { name: "Ads", value: 8 },
];

const colors = ["#2E7D32", "#111111", "#B08D57", "#4B5563", "#7C8A62", "#D7C3A2"];

export function ProblemChart() {
  return (
    <div className="h-72 w-full">
      <ResponsiveContainer>
        <BarChart data={marketData}>
          <CartesianGrid stroke="#E5E7EB" vertical={false} />
          <XAxis dataKey="name" tickLine={false} axisLine={false} />
          <YAxis hide />
          <Tooltip
            cursor={{ fill: "rgba(46,125,50,0.08)" }}
            contentStyle={{ borderRadius: 8, border: "1px solid #E5E7EB" }}
          />
          <Bar dataKey="value" radius={[6, 6, 0, 0]}>
            {marketData.map((entry, index) => (
              <Cell key={entry.name} fill={colors[index]} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export function MarketChart() {
  return (
    <div className="h-80 w-full">
      <ResponsiveContainer>
        <AreaChart data={growthData}>
          <defs>
            <linearGradient id="livestock" x1="0" x2="0" y1="0" y2="1">
              <stop offset="5%" stopColor="#2E7D32" stopOpacity={0.5} />
              <stop offset="95%" stopColor="#2E7D32" stopOpacity={0.02} />
            </linearGradient>
          </defs>
          <CartesianGrid stroke="#E5E7EB" vertical={false} />
          <XAxis dataKey="year" tickLine={false} axisLine={false} />
          <YAxis tickLine={false} axisLine={false} />
          <Tooltip contentStyle={{ borderRadius: 8, border: "1px solid #E5E7EB" }} />
          <Area
            type="monotone"
            dataKey="revenue"
            stroke="#111111"
            strokeWidth={3}
            fill="url(#livestock)"
            name="Projected revenue ($M)"
          />
          <Area
            type="monotone"
            dataKey="livestock"
            stroke="#2E7D32"
            strokeWidth={3}
            fill="transparent"
            name="Registered livestock (M)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}

export function RevenueChart() {
  return (
    <div className="h-72 w-full">
      <ResponsiveContainer>
        <PieChart>
          <Pie
            data={revenueData}
            dataKey="value"
            nameKey="name"
            innerRadius={64}
            outerRadius={105}
            paddingAngle={2}
          >
            {revenueData.map((entry, index) => (
              <Cell key={entry.name} fill={colors[index % colors.length]} />
            ))}
          </Pie>
          <Tooltip contentStyle={{ borderRadius: 8, border: "1px solid #E5E7EB" }} />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
