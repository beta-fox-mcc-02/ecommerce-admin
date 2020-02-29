import axios from 'axios';

const userAPI = axios.create({
  baseURL: process.env.VUE_APP_URL,
});

export default userAPI;
