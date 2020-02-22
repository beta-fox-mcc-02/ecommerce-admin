import axios from 'axios';

// const localhost = 'http://localhost:3000';
const heroku = "https://protected-taiga-69173.herokuapp.com";
const instance = axios.create({
  baseURL: heroku
});

export default instance;
