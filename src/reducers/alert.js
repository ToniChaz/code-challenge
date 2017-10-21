import type from '../constants/actions/alert'

export function initialState() {
  return {
    visible: false,
    alertData: {
      color: 'primary',
      text: ''
    }
  }
}

function openAlert(state, { color, text }) {
  return {
    ...state,
    visible: true,
    alertData: {
      color,
      text
    }
  }
}

function closeAlert(state) {
  return {
    ...state,
    visible: false,
    alertData: initialState().alertData
  }
}

export default function(state = initialState(), action) {
  switch (action.type) {
    case type.OPEN_ALERT:
      return openAlert(state, action)
    case type.CLOSE_ALERT:
      return closeAlert(state, action)
    default:
      return state
  }
}
