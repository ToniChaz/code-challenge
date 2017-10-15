import axios from 'axios'
import config from '../constants/config'

const requestHandler = (url, operation) => {
  console.log(operation)
  return new Promise((resolve, reject) => {
    axios.post(config.API_URL + url, operation)
      .then(response => resolve(response.data))
      .catch(error => reject(error))
  })
}

export {
  requestHandler
}
