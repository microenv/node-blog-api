import axios from 'axios'

// const API_PORT = process.env.PORT || 3000
// const API_ENDPOINT = '//localhost:' + API_PORT
const API_ENDPOINT = 'https://blogapi.alagym.com.br'

export function url (path) {
  return API_ENDPOINT + path
}

export function getPosts () {
  return axios.get(url('/posts'))
}
