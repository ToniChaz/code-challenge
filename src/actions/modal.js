import type from '../constants/actions/modal'

export default {
  openModal: modalData => ({ type: type.OPEN_MODAL, modalData }),
  closeModal: () => ({ type: type.CLOSE_MODAL })
}
