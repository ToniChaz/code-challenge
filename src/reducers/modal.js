import type from '../constants/actions/modal'

export function initialState() {
  return {
    visible: false,
    edit: false,
    modalData: {
      author: '',
      content: '',
      title: '',
      published: '',
      tags: ''
    }
  }
}

function openModal(state, { modalData }) {
  return {
    ...state,
    visible: true,
    edit: !!modalData,
    modalData: modalData || initialState().modalData
  }
}

function closeModal(state) {
  return {
    ...state,
    visible: false,
    modalData: initialState().modalData
  }
}

function onChangeHandler(state, { name, value }) {
  const modalDataValues = { ...state.modalData, ...{ [name]: value } }

  return {
    ...state,
    modalData: modalDataValues
  }
}

export default function(state = initialState(), action) {
  switch (action.type) {
    case type.OPEN_MODAL:
      return openModal(state, action)
    case type.CLOSE_MODAL:
      return closeModal(state, action)
    case type.ON_CHANGE_HANDLER:
      return onChangeHandler(state, action)
    default:
      return state
  }
}
