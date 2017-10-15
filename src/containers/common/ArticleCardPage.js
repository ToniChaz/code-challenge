import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { push, goBack } from 'react-router-redux'

import ArticleCard from '../../components/common/ArticleCard'
import articleActions from '../../actions/article'

export function mapDispatchToProps(dispatch) {
  return bindActionCreators({ ...articleActions, push, goBack }, dispatch)
}

export default connect(null, mapDispatchToProps)(ArticleCard)
