import React, { Component } from 'react'
import { push, goBack } from 'react-router-redux'
import { CardLink, Card, CardText, CardBody, CardTitle, CardFooter, ButtonGroup } from 'reactstrap'
import ArticleTagPage from '../../containers/common/ArticleTagPage'

class ArticleCard extends Component {
  getSingleContent(props) {
    return (
      <CardBody>
        <CardText className="float-right"><i>{props.article.published ? 'Published' : 'Not published'}</i></CardText>
        <CardTitle>{props.article.title}</CardTitle>
        <CardText>{props.article.content}</CardText>
        <CardLink onClick={() => this.props.dispatch(goBack())}>Back</CardLink>
        <ButtonGroup className="float-right">
          {props.article.tags.map((tag, idx) => <ArticleTagPage key={idx} tag={tag} />)}
        </ButtonGroup>
      </CardBody>
    )
  }

  getContent(props) {
    return (
      <CardBody>
        <CardTitle>{props.article.title}</CardTitle>
        <CardText>{props.article.excerpt}</CardText>
        <CardLink onClick={() => this.props.dispatch(push(`/${props.article.id}`))}>Read more</CardLink>
      </CardBody>
    )
  }

  render() {
    const { article: { author }, single = false } = this.props

    return (
      <Card>
        {single ? this.getSingleContent(this.props) : this.getContent(this.props)}
        <CardFooter className="text-muted">By {author}</CardFooter>
      </Card>
    )
  }
}

export default ArticleCard
