import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import ArticleModal from '../components/ArticleModal'
import modalActions from '../actions/modal'

export function mapStateToProps(state) {
  return { ...state.modal }
}

export function mapDispatchToProps(dispatch) {
  return bindActionCreators({ ...modalActions }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ArticleModal)

