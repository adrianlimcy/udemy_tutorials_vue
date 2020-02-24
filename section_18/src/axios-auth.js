import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://vuejs-http-95bb2.firebaseio.com'
})

export default instance
