import type from '../constants/actions/modal'

export function initialState() {
  return {
    visible: false,
    modalData: null
  }
}

function openModal(state, { modalData }) {
  return {
    ...state,
    visible: true,
    modalData
  }
}

function closeModal(state) {
  return {
    ...state,
    modalData: null
  }
}

export default function(state = initialState(), action) {
  switch (action.type) {
    case type.OPEN_MODAL:
      return openModal(state, action)
    case type.CLOSE_MODAL:
      return closeModal(state, action)
    default:
      return state
  }
}
