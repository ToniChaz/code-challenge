import React, { Component } from 'react'
import { Modal, ModalHeader, ModalBody, ModalFooter, Button, Form, FormGroup, Label, Input } from 'reactstrap'

class ArticleModal extends Component {
  onChangeHandler(event) {
    this.props.onChangeHandler(event.target.name, event.target.value)
  }

  saveArticle() {
    console.log(this.props.modalData)
  }

  render() {
    const { visible, modalData, closeModal } = this.props

    return (
      <Modal isOpen={visible} toggle={closeModal}>
        <ModalHeader toggle={closeModal}>{modalData.title !== '' ? 'Edit ' : 'Add new '}
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
