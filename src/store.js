import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { routerMiddleware } from 'react-router-redux'

import createHistory from 'history/createBrowserHistory'

import rootReducer from './reducers'
import rootSagas from './sagas'

const history = createHistory()
const middleware = routerMiddleware(history)
const sagaMiddleware = createSagaMiddleware()

const enhancer = compose(
  applyMiddleware(sagaMiddleware)
)

const configureStore = () => {
  const store = createStore(rootReducer, applyMiddleware(middleware), enhancer)
  sagaMiddleware.run(rootSagas)
  return store
}

export default {
  configureStore: configureStore(),
  history
}
