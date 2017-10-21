import React, { Component } from 'react'
import { Alert } from 'reactstrap'

class CustomAlert extends Component {
  render() {
    const { alertData, closeAlert } = this.props

    return (
      <div onClick={closeAlert} className="custom-alert">
        <Alert color={alertData.color}>
          {alertData.text}
        </Alert>
      </div>
    )
  }
}

export default CustomAlert
