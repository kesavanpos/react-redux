import axios from 'axios';

const baseUrl = 'http://localhost:5000/';

export const getUsers = () => {
  return axios.get(`${baseUrl}users`);
};
