import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import App from '../components/App'
import articleActions from '../actions/article'

export function mapStateToProps(state) {
  return { ...state.articles }
}

export function mapDispatchToProps(dispatch) {
  return bindActionCreators(articleActions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
