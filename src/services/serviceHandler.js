import axios from 'axios'
import config from '../constants/config'

const requestHandler = (url, query) => {
  return new Promise((resolve, reject) => {
    axios.post(config.API_URL + url, { query })
      .then(response => resolve(response.data))
      .catch(error => reject(error))
  })
}

export {
  requestHandler
}
