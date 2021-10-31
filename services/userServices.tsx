import axios from 'axios';

const baseUrl = 'http://localhost:5000/';

export const getUsers = () => {
  return [{ name: 'kesavan', email: 'kesavan.keshav@gmail.com' }];

  //return axios.get(`${baseUrl}users`);
};
