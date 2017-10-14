import React, { Component } from 'react'
import { Route } from 'react-router'
import AppPage from './containers/AppPage'

class Router extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={AppPage} />
      </div>
    )
  }
}

export default Router
