import React from "react";
import { LineChart, Rectangle,Line, XAxis, Tooltip } from "recharts";

const daysOfWeek = ["L", "M", "M", "J", "V", "S", "D"]; // Noms des jours en français

// Composant de Tooltip personnalisé
const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    // Récupération de la valeur à afficher dans l'info-bulle
    const value = payload[0].value;

    return (
      <div className="custom-tooltip">
        <p className="label">{`${value} min`}</p>
      </div>
    );
  }

  return null;
};

const CustomCursor = (props) => {
  const { points, width, height, stroke } = props;
  const { x, y } = points[0];
  const { x1, y1 } = points[1];
  console.log(props);
  return (
    <Rectangle
      fill="red"
      stroke="red"
      x={x}
      y={y}
      width={width}
      height={height}
    />
  );
};

// Fonction de rendu personnalisé pour les ticks de l'axe X
const renderCustomTick = ({ x, y, payload }) => {
  return (
    <text
      x={x}
      y={y + 25}
      fill="#FFFFFF"
      textAnchor="middle"
      opacity={0.6} // Applique une opacité aux jours de la semaine
    >
      {payload.value}
    </text>
  );
};

export default function TinyLineChart({ sessions }) {
  // Vérifier si les sessions sont définies et non vides
  if (!sessions || !sessions.sessions || sessions.sessions.length === 0) {
    return null; // Ou affichez un message d'erreur ou un chargement en cours
  }

  // Transformer les données des sessions
  const data = sessions.sessions.map((session, index) => {
    return {
      name: daysOfWeek[index],
      sessionLength: session.sessionLength,
    };
  });

  return (
    <div className="relative w-60 h-60 bg-[#FF0000] p-2 rounded-lg mx-auto">
      <div className="absolute top-2 left-4 text-white">
        <h2 className="font-bold m-2 text-xs">
          Durée moyenne des <br /> sessions
        </h2>
      </div>
      <div className="flex justify-center items-end h-full pt-1">
        <LineChart
          width={200}
          height={200}
          data={data}
          
         
        >
          <XAxis
            dataKey="name"
           
            axisLine={false}
            tickLine={false}
            tick={renderCustomTick} // Utilisation du rendu personnalisé des ticks
          />
          
          <Tooltip
            content={<CustomTooltip />}
            wrapperStyle={{
              backgroundColor: "#FFFFFF",
              padding: "8px",
              borderRadius: "4px",
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
            }}
            cursor={false}
          />
          
          <Line
          type="natural"
            dataKey="sessionLength"
            stroke="#fff"
            strokeWidth={3} // Rend la courbe plus épaisse
            activeDot={{ r: 3 }}
            dot={false}
            strokeLinecap="round" // Rend les extrémités de la ligne arrondies
            className="-mt-12"
          />
          
        </LineChart>
      </div>
    </div>
  );
}
