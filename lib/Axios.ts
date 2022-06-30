import axios from 'axios'

const api = axios.create({
  baseURL: `${process.env.API_BASE_URL}`,
  timeout: 1000,
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json'
  }
})

export default api