import React, { Component } from 'react'
import { Row, Col, Button } from 'reactstrap'
import ArticleModalPage from '../../containers/ArticleModalPage'
import CustomAlertPage from '../../containers/CustomAlertPage'

class Header extends Component {
  render() {
    const { openModal, visible } = this.props

    return (
      <Row className="header">
        {visible && <CustomAlertPage />}
        <Col md="10"><img src={process.env.PUBLIC_URL + '/images/logo.png'} alt="Logo Billin" /></Col>
        <Col md="2"><Button color="success" onClick={() => openModal()} className="float-right">New article</Button></Col>
        <ArticleModalPage />
      </Row>
    )
  }
}

export default Header
