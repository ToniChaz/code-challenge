import React from 'react'
import ReactDOM from 'react-dom'

import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'

import 'bootstrap/dist/css/bootstrap.css'
import './index.css'

import Router from './router'
import store from './store'

ReactDOM.render(
  <Provider store={store.configureStore}>
    <ConnectedRouter history={store.history}>
      <Router />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
)
