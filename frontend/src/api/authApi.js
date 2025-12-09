import myAxios from './myAxios'

export function registerUser(userData) {
  return myAxios.post('/auth/register', userData)
}

export function loginUser(credentials) {
  return myAxios.post('/auth/login', credentials)
}
