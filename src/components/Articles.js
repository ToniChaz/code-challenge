import React, { Component } from 'react'
import { Row, Col } from 'reactstrap'
import ArticleCardPage from '../containers/common/ArticleCardPage'

class Articles extends Component {
  componentWillMount() {
    this.props.fetchArticles()
  }

  render() {
    const { articles } = this.props

    if (!articles) return null

    return <Row>{articles.map((article, idx) => <Col xs="12" sm="6" md="4" key={idx}><ArticleCardPage article={article} /></Col>)}</Row>
  }
}

export default Articles
