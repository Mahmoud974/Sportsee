import Axios from './caller.service';

const fetchData = (endpoint) => {
  return Axios.get(endpoint).then(response => response.data.data)
    .catch(error => {
      console.log(error);
      throw error;
    });
}

let displayProfil = (user) => {
  return fetchData(`user/${user}`);
}

let displayActivity = (user) => {
  return fetchData(`user/${user}/activity`);
}

let displayAverageSessions = (user) => {
  return fetchData(`user/${user}/average-sessions`);
}

let displayPerformance = (user) => {
  return fetchData(`user/${user}/performance`);
}

export const accountService = {
  displayProfil,
  displayActivity,
  displayAverageSessions,
  displayPerformance
}
