import React from "react";
import {
  BarChart, ResponsiveContainer,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

// Composant personnalisé pour l'infobulle
const CustomTooltip = ({ active, payload, label }) => {
  if (active) {
    return (
      <div className="custom-tooltip" style={{ backgroundColor: "#E60000", color: "#FFF", padding: "5px 10px", borderRadius: "5px" }}>
        <p>{`Jour ${label}`}</p>
        <p>{`${payload[0].name}: ${payload[0].value}`}</p>
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
      name: (id + 1).toString(),
      Calories: session.calories,
      Poids: session.kilogram,
      amt: session.day,
    };
  });


  return (
    <div className="h-[20rem] relative">
      <ResponsiveContainer width="100%" height="100%">

        <BarChart className="bg-[#FBFBFB] flex px-8 justify-between items-center rounded-lg mx-auto"
          width="100%" height="100%" barCategoryGap={40}
          data={data}
          tooltip={<CustomTooltip />}> {/* Utilisation du composant personnalisé pour l'infobulle */}
          <text className="absolute left-0 top-0 mt-4 ml-4 px-8" >Activité quotidienne</text>

          <Legend verticalAlign="top" align="right" height={40} iconType="circle" iconSize={8} /> {/* Réglage de la taille de l'icône des légendes rondes avec iconSize */}

          <CartesianGrid vertical={false} strokeDasharray="3 3" />

          <XAxis tickLine={false} dataKey="" />
          <XAxis label={{ value: 'Calories brûlées (kCal)', angle: 0, position: 'top', textAnchor: 'middle' }} />

          <YAxis orientation="right" axisLine={false} tickLine={false} />

          <Tooltip />

          <Bar dataKey="Poids" fill="#282D30" radius={[20, 20, 0, 0]} maxBarSize={10} name="Poids (kg)" />
          <Bar dataKey="Calories" fill="#E60000" radius={[20, 20, 0, 0]} maxBarSize={10} name="Calories brûlées (kCal)" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
