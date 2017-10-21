import React, { Component } from 'react'
import { Modal, ModalHeader, ModalBody, ModalFooter, Button, Form, FormGroup, Label, Input } from 'reactstrap'
import setTags from '../utils/setTags'
import setExcerpt from '../utils/setExcerpt'

class ArticleModal extends Component {
  onChangeHandler(event) {
    this.props.onChangeHandler(event.target.name, event.target.value)
  }

  validate(article) {
    if (article.title === '') {
      this.props.openAlert('danger', 'The title can´t be empty')
      return false
    }
    if (article.content === '') {
      this.props.openAlert('danger', 'The content can´t be empty')
      return false
    }
    if (article.author === '') {
      this.props.openAlert('danger', 'The author can´t be empty')
      return false
    }
    if (article.tags === '') {
      this.props.openAlert('danger', 'The tags can´t be empty')
      return false
    }
    return true
  }

  saveArticle() {
    const article = this.props.modalData
    if (this.validate(article)) {
      const newArticle = {
        ...article,
        ...{
          content: article.content.replace(/^\s+|\s+$/g, ''),
          tags: setTags(article),
          excerpt: setExcerpt(article),
          published: article.published === '' || article.published === 'true'
        }
      }
      if (this.props.edit) {
        this.props.updateArticle(newArticle)
      } else {
        this.props.createArticle(newArticle)
      }
    }
  }

  render() {
    const { visible, modalData, closeModal, edit } = this.props

    return (
      <Modal isOpen={visible} toggle={closeModal}>
        <ModalHeader toggle={closeModal}>{edit ? 'Edit ' : 'Add new '}
          article</ModalHeader>
        <Form>
          <ModalBody>
            <FormGroup>
              <Label for="title">Title</Label>
              <Input onChange={event => this.onChangeHandler(event)}
                     value={modalData.title}
                     type="title"
                     name="title"
                     id="title"
                     placeholder="Article title"
              />
            </FormGroup>
            <FormGroup>
              <Label for="published">Select</Label>
              <Input onChange={event => this.onChangeHandler(event)}
                     value={modalData.published}
                     type="select"
                     name="published"
                     id="published"
              >
                <option value>Published</option>
                <option value={false}>Not published</option>
              </Input>
            </FormGroup>
            <FormGroup>
              <Label for="content">Content</Label>
              <Input onChange={event => this.onChangeHandler(event)}
                     value={modalData.content}
                     type="textarea"
                     name="content"
                     id="content"
                     rows="10"
                     placeholder="Article content"
              />
            </FormGroup>
            <FormGroup>
              <Label for="author">Author</Label>
              <Input onChange={event => this.onChangeHandler(event)}
                     value={modalData.author}
                     type="text"
                     name="author"
                     id="author"
                     placeholder="The author name"
              />
            </FormGroup>
            <FormGroup>
              <Label for="tags">Title</Label>
              <Input onChange={event => this.onChangeHandler(event)}
                     value={modalData.tags}
                     type="text"
                     name="tags"
                     id="tags"
                     placeholder="Separate by comma ex. [ tag1,tag2,tag3 ]"
              />
            </FormGroup>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={() => this.saveArticle()}>Save</Button>{' '}
            <Button color="secondary" onClick={closeModal}>Cancel</Button>
          </ModalFooter>
        </Form>
      </Modal>
    )
  }
}

export default ArticleModal
