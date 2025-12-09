import myAxios from './myAxios'

export function fetchPosts() {
  return myAxios.get('/post')
}
