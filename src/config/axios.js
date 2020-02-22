import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://secure-anchorage-23075.herokuapp.com'
});

export default instance
