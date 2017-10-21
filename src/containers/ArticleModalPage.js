import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import ArticleModal from '../components/ArticleModal'
import modalActions from '../actions/modal'
import alertActions from '../actions/alert'
import articleActions from '../actions/article'

export function mapStateToProps(state) {
  return { ...state.modal }
}

export function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    ...modalActions,
    ...alertActions,
    ...{
      createArticle: articleActions.createArticle,
      updateArticle: articleActions.updateArticle
    }
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ArticleModal)

