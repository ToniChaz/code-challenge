import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import articles from './article'

const rootReducer = combineReducers({
  articles,
  router: routerReducer
})

export default rootReducer
