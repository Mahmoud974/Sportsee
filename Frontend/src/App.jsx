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
import ErreurPage from './ErrorPage'; // Importez votre composant de page d'erreur

/**
 * Application principale qui affiche les données utilisateur et des graphiques.
 * @returns {JSX.Element} Le composant App.
 */
const App = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const [activity, setActivity] = useState([]);
  const [performance, setPerformance] = useState([]);
  const [average, setAverage] = useState([]);
  const [error, setError] = useState(null); // État pour stocker les erreurs

  /**
   * Fonction générique pour récupérer les données et mettre à jour l'état.
   * @param {Function} serviceFunction - La fonction du service pour récupérer les données.
   * @param {Function} setStateFunction - La fonction pour mettre à jour l'état.
   * @param {string} id - L'identifiant de l'utilisateur.
   */
  const fetchData = async (serviceFunction, setStateFunction, id) => {
    try {
      const response = await serviceFunction(id);
      setStateFunction(response);
    } catch (error) {
      console.error(error);
      setError(error); // Mettre à jour l'état avec l'erreur
    }
  };

  /**
   * Utilise useEffect pour récupérer les données utilisateur lors du montage du composant ou lorsque l'id change.
   */
  useEffect(() => {
    if (id) {
      fetchData(accountService.displayProfil, setData, id);
      fetchData(accountService.displayActivity, setActivity, id);
      fetchData(accountService.displayPerformance, setPerformance, id);
      fetchData(accountService.displayAverageSessions, setAverage, id);
    }
  }, [id]);

  // Afficher la page d'erreur si une erreur s'est produite
  if (error) {
    return <ErreurPage />;
  }

  return ( 
    <>
      <Navbar />
      <section className="flex flex-row">
        {/* Barre verticale avec 4 icônes */}
        <NavbarSide />
        <div className='flex flex-r'>
          <section className="ml-8 mt-8">
            <h1 className='text-4xl font-bold'>
              Bonjour <span className="text-red-600">{data.userInfos?.firstName || " "}</span>
            </h1>
            <p className='mt-6'>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
            <div>
            </div>
            <div className="flex-col xl:flex-row mb-16 xl:mb-0 flex">
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
              {/* Liste des calories, graisses, etc. */}
              <Badges data={data} />
            </div>
          </section>
        </div>
      </section>
    </>
  );
};

export default App;
