const axios = require('axios');

const imgurAPI = axios.create({
  baseURL: 'https://api.imgur.com/3/upload',
});

module.exports = imgurAPI;
