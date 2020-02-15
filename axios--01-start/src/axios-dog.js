import axios from 'axios'

const doggyInstance = axios.create({
  baseURL: 'https://dog.ceo/api/breeds/image/random'
})

export default doggyInstance
