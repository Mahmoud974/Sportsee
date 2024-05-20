import React from "react";
import { RadialBarChart, RadialBar } from "recharts";

export default function App({todayScore}) {
let total = todayScore * 100

  // Vérification pour s'assurer que total est un nombre valide
  if (isNaN(total)) {
    total = 0; // Vous pouvez choisir de définir une valeur par défaut appropriée
  }
  const data = [
    { name: "18-24", uv: 100, pv: 2400, fill: "#FBFBFB" },
    { name: "25-29", uv: 100, pv: 4567, fill: "#FBFBFB" },
    { name: "30-34", uv: 100, pv: 1398, fill: "#FBFBFB" },
    { name: "unknow", uv: total, pv: 4800, fill: "#E60000" }
  ];

  return (
    <RadialBarChart
      className="bg-[#FBFBFB] rounded-lg mx-auto flex justify-center"
      width={240}
      height={240}
      outerRadius={115}
      barSize={15}
      data={data}
      innerRadius={10}
      startAngle={160} // Pivoter le graphique de 160 degrés (vers le haut)
    >
      <RadialBar
        minAngle={15}
        cornerRadius={10}
        dataKey="uv"
      />
    <text x={40} y={30} textAnchor="middle" dominantBaseline="middle" fill="#000" fontSize={16} fontWeight="bold" >
      Score
      </text>
      {/* Texte au milieu */}
      <text x={120} y={100} textAnchor="middle" dominantBaseline="middle" fill="#000" fontSize={34} fontWeight="bold" >
        {total}%
      </text>
      <text x={120} y={130} textAnchor="middle" dominantBaseline="middle" fill="#353535" fontSize={16}>
        de votre 
      </text>
      <text x={120} y={150} textAnchor="middle" dominantBaseline="middle" fill="#353535" fontSize={16}>
        objectif
      </text>
    </RadialBarChart>
  );
}
