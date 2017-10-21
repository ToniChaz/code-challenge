import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import articles from './article'
import modal from './modal'
import customAlert from './alert'

const rootReducer = combineReducers({
  articles,
  modal,
  customAlert,
  router: routerReducer
})

export default rootReducer
