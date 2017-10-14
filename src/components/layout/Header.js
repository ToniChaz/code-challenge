import React, { Component } from 'react'
import { Row, Col } from 'reactstrap'

class Header extends Component {
  render() {
    return (
      <Row className="header">
        <Col><img src={process.env.PUBLIC_URL + '/images/logo.png'} alt="Logo Billin" /></Col>
      </Row>
    )
  }
}

export default Header
