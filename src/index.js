import React from 'react'
import ReactDOM from 'react-dom'

import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import createSagaMiddleware from 'redux-saga'
import { ConnectedRouter, routerMiddleware } from 'react-router-redux'

import 'bootstrap/dist/css/bootstrap.css'

import createHistory from 'history/createBrowserHistory'
import Router from './router'

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

const store = configureStore()

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Router />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
)
