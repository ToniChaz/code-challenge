import React, { Component } from 'react'
import { Route } from 'react-router'
import AppPage from './containers/AppPage'
import ArticlePage from './containers/ArticlePage'

class Router extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={AppPage} />
        <Route exact path="/:articleId" component={ArticlePage} />
      </div>
    )
  }
}

export default Router
