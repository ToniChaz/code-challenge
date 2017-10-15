import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import Header from '../../components/layout/Header'
import modalActions from '../../actions/modal'

export function mapDispatchToProps(dispatch) {
  return bindActionCreators({ ...modalActions }, dispatch)
}

export default connect(null, mapDispatchToProps)(Header)
