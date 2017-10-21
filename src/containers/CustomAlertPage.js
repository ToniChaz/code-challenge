import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import CustomAlert from '../components/CustomAlert'
import alertActions from '../actions/alert'

export function mapStateToProps(state) {
  return { ...state.customAlert }
}

export function mapDispatchToProps(dispatch) {
  return bindActionCreators({ ...alertActions }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(CustomAlert)
