import axios from 'axios'

export default () => {
  return axios.create({
    baseURL: 'http://m.j-love4u.ru/api/'
  })
}
