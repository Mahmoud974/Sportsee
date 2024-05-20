import React from "react";
import { Radar, RadarChart, PolarGrid, PolarAngleAxis } from 'recharts';

// Exemple d'utilisation du composant avec les données sessions

const session = {
  
  kind: {
    "1": "Intensité",
    "2": "Vitesse",
    "3":  "Force",
    "4": "Endurance" ,
    "5": "Energie",
    "6": "Cardio"
  }
};

// Utilisation dans l'application
const App = () => (
  <div>
    <Courbes sessions={sessions} />
  </div>
);


const Courbes = ({ sessions }) => {
  // Vérifiez que sessions est défini et qu'il contient les clés attendues
  if (!sessions || !sessions.data || !sessions.kind) {
    return <div>Les sessions sont invalides ou non définies.</div>;
  }

  // Préparer les données en utilisant les sessions
  const data = sessions.data.map((item) => {
   
    return {
      subject: session.kind[item.kind.toString()],
      A: item.value,
      fullMark: 150, 
    };
  });



  return (
    <RadarChart
      className="bg-[#282D30] p-1 rounded-lg mx-auto flex justify-center"
      outerRadius={90}
      width={240}
      height={240}
      data={data}
    >
      <PolarGrid gridType="polygon" radialLines={false} />
      <PolarAngleAxis dataKey="subject" tick={{ fill: "white", fontSize: 10 }} />
      <Radar name="Session" dataKey="A" fill="#E60000" fillOpacity={0.6} />
    </RadarChart>
  );
};


export default Courbes;