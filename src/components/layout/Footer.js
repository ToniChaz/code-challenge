import React, { Component } from 'react'
import { Row, Col } from 'reactstrap'

class Footer extends Component {
  render() {
    return (
      <Row className="footer">
        <Col><p>&copy; 2017 Billin code challenge</p></Col>
      </Row>
    )
  }
}

export default Footer
