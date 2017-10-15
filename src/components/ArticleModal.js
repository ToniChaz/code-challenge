import React, { Component } from 'react'
import { Modal, ModalHeader, ModalBody, ModalFooter, Button, Form, FormGroup, Label, Input } from 'reactstrap'

class ArticleModal extends Component {
  saveArticle(){

  }

  render() {
    const { visible, closeModal, modalData } = this.props

    return (
      <Modal isOpen={visible} toggle={closeModal}>
        <ModalHeader toggle={closeModal}>{modalData ? 'Edit ' : 'Add new '} article</ModalHeader>
        <Form>
          <ModalBody>
            <FormGroup>
              <Label for="title">Title</Label>
              <Input type="title" name="title" id="title" placeholder="Article title" />
            </FormGroup>
            <FormGroup>
              <Label for="published">Select</Label>
              <Input type="select" name="published" id="published">
                <option value>Published</option>
                <option value={false}>Not published</option>
              </Input>
            </FormGroup>
            <FormGroup>
              <Label for="content">Content</Label>
              <Input type="textarea" name="content" id="content" />
            </FormGroup>
            <FormGroup>
              <Label for="author">Author</Label>
              <Input type="title" name="author" id="author" placeholder="The author name" />
            </FormGroup>
            <FormGroup>
              <Label for="tags">Title</Label>
              <Input type="title" name="tags" id="tags" placeholder="Separate by comma ex. [ tag1,tag2,tag3 ]" />
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
