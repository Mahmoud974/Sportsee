import Axios from './caller.service';
import { USER_MAIN_DATA, USER_ACTIVITY, USER_AVERAGE_SESSIONS, USER_PERFORMANCE } from '../mocks/mocks.jsx';
import UserInfos from '../models/userInfos.jsx';
import UserActivity from '../models/userActivity.jsx';
import UserSessions from '../models/userAvgSessions.jsx';
import UserPerformance from '../models/userPerformance.jsx';



/**
 * Fonction de simulation pour récupérer des données en fonction d'un endpoint donné.
 * @param {string} endpoint - L'endpoint à partir duquel récupérer les données.
 * @returns {Object|null} Les données récupérées ou null si aucune correspondance n'est trouvée.
 */
const mockFetchData = (endpoint) => {
  const [base, userId, type] = endpoint.split('/');

  switch (type) {
    case 'activity':
      return USER_ACTIVITY.find((user) => user.userId == userId);
    case 'average-sessions':
      return USER_AVERAGE_SESSIONS.find((user) => user.userId == userId);
    case 'performance':
      return USER_PERFORMANCE.find((user) => user.userId == userId);
    default:
      return USER_MAIN_DATA.find((user) => user.id == userId);
  }
};

/**
 * Récupère des données à partir d'un point de terminaison donné.
 * @param {string} endpoint - Le point de terminaison à partir duquel récupérer les données.
 * @returns {Promise<Object>} Une promesse qui se résout avec les données récupérées.
 */
const fetchData = async (endpoint) => {
  try {
    const response = await Axios.get(endpoint);
    return response.data.data;
  } catch (error) {
    // Remplacer console.error par un log moins alarmant ou le supprimer
    console.log('API request failed, using mock data.', error); // console.log au lieu de console.error
    alert('API request failed, using mock data.'); // Affiche une alerte lorsque les données mock sont utilisées
    return new Promise((resolve) => {
      
      const data = mockFetchData(endpoint);
      resolve(data);
    });
  }
};



/**
 * Affiche les informations de profil pour un utilisateur.
 * @param {string} user - L'identifiant de l'utilisateur.
 * @returns {Promise<UserInfos>} Une promesse qui se résout avec les informations de profil de l'utilisateur.
 */
const displayProfil = async (user) => {
  const data = await fetchData(`user/${user}`);
  return new UserInfos(data);
};

/**
 * Affiche les informations d'activité pour un utilisateur.
 * @param {string} user - L'identifiant de l'utilisateur.
 * @returns {Promise<UserActivity>} Une promesse qui se résout avec les informations d'activité de l'utilisateur.
 */
const displayActivity = async (user) => {
  const data = await fetchData(`user/${user}/activity`);
  return new UserActivity(data);
};

/**
 * Affiche les informations de session moyenne pour un utilisateur.
 * @param {string} user - L'identifiant de l'utilisateur.
 * @returns {Promise<UserSessions>} Une promesse qui se résout avec les informations de session moyenne de l'utilisateur.
 */
const displayAverageSessions = async (user) => {
  const data = await fetchData(`user/${user}/average-sessions`);
  return new UserSessions(data);
};

/**
 * Affiche les informations de performance pour un utilisateur.
 * @param {string} user - L'identifiant de l'utilisateur.
 * @returns {Promise<UserPerformance>} Une promesse qui se résout avec les informations de performance de l'utilisateur.
 */
const displayPerformance = async (user) => {
  const data = await fetchData(`user/${user}/performance`);
  return new UserPerformance(data);
};

export const accountService = {
  displayProfil,
  displayActivity,
  displayAverageSessions,
  displayPerformance,
};
