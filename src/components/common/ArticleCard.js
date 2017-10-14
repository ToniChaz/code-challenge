import React, { Component } from 'react'
import { push, goBack } from 'react-router-redux'
import { CardLink, Card, CardText, CardBody, CardTitle, CardFooter } from 'reactstrap'

class ArticleCard extends Component {
  render() {
    const { article: { author, title, excerpt, id }, single = false } = this.props

    return (
      <Card>
        <CardBody>
          <CardTitle>{title}</CardTitle>
          <CardText>{single ? excerpt : excerpt.substring(0, 60)}</CardText>
          {single
            ? <CardLink onClick={() => this.props.dispatch(goBack())}>Go back</CardLink>
            : <CardLink onClick={() => this.props.dispatch(push(`/${id}`))}>Read more</CardLink>
          }
        </CardBody>
        <CardFooter className="text-muted">By {author}</CardFooter>
      </Card>
    )
  }
}

export default ArticleCard
