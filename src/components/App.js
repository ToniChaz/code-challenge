import React, { Component } from 'react'
import { Container } from 'reactstrap'
import HeaderPage from '../containers/layout/HeaderPage'
import FooterPage from '../containers/layout/FooterPage'
import ArticlesPage from '../containers/ArticlesPage'

class App extends Component {
  render() {
    return (
      <Container>
        <HeaderPage />
        <ArticlesPage />
        <FooterPage />
      </Container>
    )
  }
}

export default App
