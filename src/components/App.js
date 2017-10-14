import React, { Component } from 'react'
import { ARTICLES_QUERY } from '../constants/querys/queries'

class App extends Component {
  componentWillMount() {
    this.props.fetchArticles(ARTICLES_QUERY)
  }

  render() {
    const { articles } = this.props

    if (!articles) return null

    return (
      <div className="App">
        <h2>Billin code challenge</h2>
        <pre>{JSON.stringify(articles, null, 2)}</pre>
      </div>
    )
  }
}

export default App
