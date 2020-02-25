import axios from 'axios'

const ecommerce = axios.create({
  baseURL: 'https://tranquil-inlet-43823.herokuapp.com'
})

// # baseUrl heroku
// * https://tranquil-inlet-43823.herokuapp.com

// # baseUrl dev
// * http://localhost:3000

export default ecommerce
