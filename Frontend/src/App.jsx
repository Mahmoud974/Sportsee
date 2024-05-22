import Radar from './components/Radar';
import TinyLineChart from './components/TinyLineChart';
import SimpleRadialBarChart from './components/SimpleRadialBarChart';
import Bar from './components/Bar';
import Navbar from './components/Navbar';
import { ResponsiveContainer } from "recharts";
import { accountService } from './_services/display.service';
import { useState, useEffect } from 'react';
import NavbarSide from './components/NavbarSide';
import Badges from './components/Badges';
import { useParams } from 'react-router-dom';

const App = () => {
  const { userId } = useParams();
  
  const [data, setData] = useState([]);
  const [activity, setActivity] = useState([]);
  const [performance, setPerformance] = useState([]);
  const [average, setAverage] = useState([]);
  
  // Fonction générique pour récupérer les données
  const fetchData = async (serviceFunction, setStateFunction, userId) => {
    try {
      const response = await serviceFunction(userId);
      setStateFunction(response);
    } catch (error) {
      console.error(error);
    }
  };

  // Utilisation de la fonction générique dans useEffect
  useEffect(() => {
    if (userId) {
      fetchData(accountService.displayProfil, setData, userId);
      fetchData(accountService.displayActivity, setActivity, userId);
      fetchData(accountService.displayPerformance, setPerformance, userId);
      fetchData(accountService.displayAverageSessions, setAverage, userId);
    }
  }, [userId]);

  return ( 
    <>
      <Navbar />
      <section className="flex flex-row">
        {/* Barre verticale 4 icons */}
        <NavbarSide />
        <div className='flex  flex-r'>
          <section className="ml-8 mt-8">
            <h1 className='text-4xl font-bold'>Bonjour <span className="text-red-600">{data.userInfos?.firstName || " "}</span></h1>
            <p className='mt-6'>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
            <div>
            </div>
            <div className="flex-col xl:flex-row  mb-16 xl:mb-0 flex ">
              <ResponsiveContainer width="100%" height="100%" minWidth={300} minHeight={300} aspect={2}>
                <div className='flex flex-col mt-12'>
                  <Bar sessions={activity.sessions} />
                  <div className="h-[20rem] flex flex-row space-x-8 mt-12">
                    <TinyLineChart sessions={average} />
                    <Radar sessions={performance} />
                    <SimpleRadialBarChart todayScore={data.todayScore} />
                  </div>
                </div>
              </ResponsiveContainer>
              {/* Listes des calories, fat */}
              <Badges data={data} />
            </div>
          </section>
        </div>
      </section>
    </>
  );
};

export default App;
