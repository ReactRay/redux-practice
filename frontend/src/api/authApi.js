import myAxios from './myAxios'

export function registerUser(userData) {
  return myAxios.post('/auth/register', userData)
}
