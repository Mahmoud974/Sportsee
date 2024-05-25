import React from "react";
import {
  BarChart,
  ResponsiveContainer,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

// Composant personnalisé pour l'infobulle
const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip bg-red-600 text-white p-2 rounded">
        <p>{`${payload[0].value} kg`}</p>
        <p>{`${payload[1].value} Kcal`}</p>
      </div>
    );
  }

  return null;
};

export default function App({ sessions }) {

  // Vérifiez que sessions est défini et qu'il s'agit d'un tableau
  if (!sessions || !Array.isArray(sessions)) {
    return <div>Les sessions sont invalides ou non définies.</div>;
  }

  // Préparer les données en utilisant les sessions
  const data = sessions.map((session, id) => {
    return {
      name: (id + 1).toString(), // Commencez l'index par 1
      Calories: session.calories,
      Poids: session.kilogram,
    };
  });

  return (
    <div className="h-[20rem] relative">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          className="bg-[#FBFBFB] flex px-8 justify-between items-center rounded-lg mx-auto"
          width="100%"
          height="100%"
          barCategoryGap={40}
          data={data}
        >
          <text className="absolute left-0 top-0 mt-4 ml-4 px-8">
            Activité quotidienne
          </text>
          <Legend
            verticalAlign="top"
            align="right"
            height={40}
            iconType="circle"
            iconSize={8}
          />
          <CartesianGrid vertical={false} strokeDasharray="3 3" />
          <XAxis tickLine={false} dataKey="name" /> {/* Utilisez 'name' pour l'axe x */}
          <XAxis
            label={{
              value: "Calories brûlées (kCal)",
              angle: 0,
              position: "top",
              textAnchor: "middle",
            }}
          />
          <YAxis orientation="right" axisLine={false} tickLine={false} />
          <Bar
            dataKey="Poids"
            fill="#282D30"
            radius={[20, 20, 0, 0]}
            maxBarSize={10}
            name="Poids (kg)"
          />
          <Bar
            dataKey="Calories"
            fill="#E60000"
            radius={[20, 20, 0, 0]}
            maxBarSize={10}
            name="Calories brûlées (kCal)"
          />
          <Tooltip content={<CustomTooltip />} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
