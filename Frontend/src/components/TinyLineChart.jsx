import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  Tooltip,
} from "recharts";

const daysOfWeek = ["L", "M", "M", "J", "V", "S", "D"]; // Noms des jours en français



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
    <div className="z-12 relative w-60 h-60 bg-[#FF0000] p-4 rounded-lg mx-auto z-12">
      <div className="absolute top-2 left-4 text-white">
        <h2 className="font-bold opacity-65 m-3 text-xs">Durée moyenne des <br /> sessions</h2>
      </div>
      <div className="flex justify-center items-end h-full pt-8">
        <LineChart
          width={200}
          height={200}
        data={data}
        
          className="mx-auto opacity-65" >
         
          <XAxis
            dataKey="name"
             axisLine={false}
            tickLine={false}
            tick={{ fill: "#FFFFFF" }}
          />
          <Tooltip />
          <Line 
           
            type="monotone"
            dataKey="sessionLength"
            stroke="#fff"
            strokeWidth={3} // Rend la courbe plus épaisse
            activeDot={{ r: 3 }}
            dot={false}
            strokeLinecap="round" 
            
          />
        </LineChart>
      </div>
    </div>
  );
}
