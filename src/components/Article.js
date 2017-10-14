import React, { Component } from 'react'
import { Col, Container, Row } from 'reactstrap'
import ArticleCardPage from '../containers/common/ArticleCardPage'
import HeaderPage from '../containers/layout/HeaderPage'
import FooterPage from '../containers/layout/FooterPage'

class Article extends Component {
  componentWillMount() {
    if (!this.props.articles) {
      this.props.history.push('/')
    } else {
      this.props.filterArticle(this.props.match.params.articleId)
    }
  }

  render() {
    const { article } = this.props
    if (!article) return null

    return (
      <Container>
        <HeaderPage />
        <Row>
          <Col>
            <ArticleCardPage article={article[0]} single />
          </Col>
        </Row>
        <FooterPage />
      </Container>
    )
  }
}

export default Article
