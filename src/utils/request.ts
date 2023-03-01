import axios from 'axios'

const request = axios.create({
  baseURL: 'http://localhost:36530',
  timeout: 30000,
  withCredentials: true,
})

export default request
