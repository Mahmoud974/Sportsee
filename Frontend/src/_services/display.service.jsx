import Axios from './caller.service';
import { USER_MAIN_DATA, USER_ACTIVITY, USER_AVERAGE_SESSIONS, USER_PERFORMANCE } from '/Users/manuscrit974gmail.com/Desktop/sportSee/Frontend/src/data/mocks.jsx';
import UserInfos from '../models/userInfos.jsx';
import UserActivity from '../models/userActivity.jsx';
import UserSessions from '../models/userAvgSessions.jsx';
import UserPerformance from '../models/userPerformance.jsx';

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

const fetchData = async (endpoint) => {
  try {
    const response = await Axios.get(endpoint);
    return response.data.data;
  } catch (error) {
    console.error('API request failed, using mock data:', error);
    return new Promise((resolve) => {
      const data = mockFetchData(endpoint);
      resolve(data);
    });
  }
};

const displayProfil = async (user) => {
  const data = await fetchData(`user/${user}`);
  return new UserInfos(data);
};

const displayActivity = async (user) => {
  const data = await fetchData(`user/${user}/activity`);
  return new UserActivity(data);
};

const displayAverageSessions = async (user) => {
  const data = await fetchData(`user/${user}/average-sessions`);
  return new UserSessions(data);
};

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
