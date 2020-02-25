import axios from 'axios'

const api = axios.create({
  baseURL: 'https://fast-dusk-38592.herokuapp.com/'
})

export default api
