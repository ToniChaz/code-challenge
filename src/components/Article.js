import React, { Component } from 'react'
import { Col, CardLink, Card, CardText, CardBody, CardTitle, CardFooter } from 'reactstrap'

class Article extends Component {
  render() {
    const { article: { author, title, excerpt } } = this.props

    return (
      <Col xs="12" sm="6" md="4">
        <Card>
          <CardBody>
            <CardTitle>{title}</CardTitle>
            <CardText>{excerpt.substring(0, 100)}</CardText>
            <CardLink href="#">Read more</CardLink>
          </CardBody>
          <CardFooter className="text-muted">By {author}</CardFooter>
        </Card>
      </Col>
    )
  }
}

export default Article
