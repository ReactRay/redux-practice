import axios from 'axios'

const baseURL = 'https://localhost:5001/api'

const myAxios = axios.create({
  baseURL,
  withCredentials: false,
})

// Attach token
myAxios.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token')
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (error) => Promise.reject(error)
)

// Handle 401/403
myAxios.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem('token')
      window.location.href = '/login'
    }

    if (error.response?.status === 403) {
      console.warn('Forbidden')
    }

    return Promise.reject(error)
  }
)

export default myAxios
