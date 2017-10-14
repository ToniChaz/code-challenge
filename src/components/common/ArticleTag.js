import React, { Component } from 'react'
import { Button } from 'reactstrap'

class ArticleTag extends Component {
  render() {
    const { tag } = this.props

    return <Button>{tag}</Button>
  }
}

export default ArticleTag
