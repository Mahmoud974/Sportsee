import React from "react";
import { RadialBarChart, RadialBar } from "recharts";

export default function App({ todayScore }) {
  let total = todayScore * 100;

  // Vérification pour s'assurer que total est un nombre valide
  if (isNaN(total)) {
    total = 0; // Vous pouvez choisir de définir une valeur par défaut appropriée
  }

  const data = [
    { name: "18-24", uv: 100, pv: 2400, fill: "#FBFBFB" },
    { name: "25-29", uv: 100, pv: 4567, fill: "#FBFBFB" },
    { name: "30-34", uv: 100, pv: 1398, fill: "#FBFBF9" },
    { name: "unknow", uv: total, pv: 4800, fill: "#E60000" }
  ];

  // Trouver l'index du résultat "unknow" dans les données
  const unknownIndex = data.findIndex((item) => item.name === "unknow");

  // Calculer la valeur du padding en fonction de la position du résultat "unknow"
  const padding = 32 * (data.length - unknownIndex);

  return (
    <RadialBarChart
      className="bg-[#FBFBFB] rounded-lg mx-auto flex justify-center"
      width={240}
      height={240}
      outerRadius={115}
      barSize={15}
      data={data}
      innerRadius={10}
      startAngle={90} // Pivoter le graphique de 90 degrés (vers le haut)
    >
      <RadialBar minAngle={15} cornerRadius={10} dataKey="uv" />
      <circle cx={120} cy={120} r={50 + padding} fill="#ffffff" /> {/* Ajout du cercle blanc au milieu avec padding */}
      <text
        x={40}
        y={20}
        textAnchor="middle"
        dominantBaseline="middle"
        fill="#000"
        fontSize={16}
        fontWeight="bold"
      >
        Score
      </text>
      {/* Texte au milieu */}
      <text
        x={120}
        y={100}
        textAnchor="middle"
        dominantBaseline="middle"
        fill="#000"
        fontSize={34}
        fontWeight="bold"
      >
        {total}%
      </text>
      <text
        x={120}
        y={130}
        textAnchor="middle"
        dominantBaseline="middle"
        fill="#353535"
        fontSize={16}
      >
        de votre
      </text>
      <text
        x={120}
        y={150}
        textAnchor="middle"
        dominantBaseline="middle"
        fill="#353535"
        fontSize={16}
      >
        objectif
      </text>
    </RadialBarChart>
  );
}
