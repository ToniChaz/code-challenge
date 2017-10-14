import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import Article from '../components/Article'
import articleActions from '../actions/article'

export function mapStateToProps(state) {
  return { ...state.articles }
}

export function mapDispatchToProps(dispatch) {
  return bindActionCreators(articleActions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Article)
