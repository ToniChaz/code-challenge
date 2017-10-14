import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import Articles from '../components/Articles'
import articleActions from '../actions/article'

export function mapStateToProps(state) {
  return { ...state.articles, ...state.router }
}

export function mapDispatchToProps(dispatch) {
  return bindActionCreators(articleActions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Articles)
