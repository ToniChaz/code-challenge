import type from '../constants/actions/alert'

export default {
  openAlert: (color, text) => ({ type: type.OPEN_ALERT, color, text }),
  closeAlert: () => ({ type: type.CLOSE_ALERT })
}
