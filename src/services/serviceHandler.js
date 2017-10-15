import axios from 'axios'
import config from '../constants/config'

const requestHandler = (url, query, variables = null) => {
  return new Promise((resolve, reject) => {
    axios.post(config.API_URL + url, { query, variables })
      .then(response => resolve(response.data))
      .catch(error => reject(error))
  })
}

export {
  requestHandler
}
