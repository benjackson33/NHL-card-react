// api-calls.js

import axios from "axios";

axios.defaults.baseURL = "http://localhost:3001/";

//* AXIOS CALLS

export const getTeams = () => {
  return axios.get(`teams`);
};

export const getRoster = (triCode) => {
  return axios.get(`${triCode}/roster`);
};
