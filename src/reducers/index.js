import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import articles from './article'
import modal from './modal'

const rootReducer = combineReducers({
  articles,
  modal,
  router: routerReducer
})

export default rootReducer
