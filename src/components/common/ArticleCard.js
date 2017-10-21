import React, { Component } from 'react'
import { Button, Card, CardText, CardBody, CardTitle, CardFooter, ButtonGroup, Col, Row } from 'reactstrap'
import ArticleTagPage from '../../containers/common/ArticleTagPage'

class ArticleCard extends Component {
  getSingleContent(props) {
    return (
      <CardBody>
        <CardText className="float-right"><i>{props.article.published ? 'Published' : 'Not published'}</i></CardText>
        <CardTitle>{props.article.title}</CardTitle>
        <CardText>{props.article.content}</CardText>
        <Button color="link" className="btn-extra" onClick={() => props.goBack()}>Back</Button>
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
        <Button color="link" className="btn-extra" onClick={() => props.push(`/${props.article.id}`)}>Read more</Button>
      </CardBody>
    )
  }

  render() {
    const { article, deleteArticle, openModal, single = false } = this.props
    return (
      <Card>
        {single ? this.getSingleContent(this.props) : this.getContent(this.props)}
        <CardFooter className="text-muted">
          <Row>
            <Col md={single ? 3 : 12}>
              By {article.author}
            </Col>
            {single &&
            <Col md="9">
              <Button color="danger" className="float-right"
                      onClick={() => deleteArticle(article.id)}>Delete</Button>{' '}
              <Button color="success" className="float-right" onClick={() => openModal(article)}>Update</Button>
            </Col>
            }
          </Row>
        </CardFooter>
      </Card>
    )
  }
}

export default ArticleCard
