import React, { Component } from 'react'
import { Row } from 'reactstrap'
import ArticlePage from '../containers/ArticlePage'

class Articles extends Component {
  componentWillMount() {
    this.props.fetchArticles()
  }

  render() {
    const { articles } = this.props

    if (!articles) return null

    return <Row>{articles.map((article, idx) => <ArticlePage key={idx} article={article} />)}</Row>
  }
}

export default Articles
