import { UPDATE_GRIST_CONFIG, UPDATE_GRIST_FETCH_HANDLER } from '../actions/grist-ide.js'

const noop = () => {}

const INITIAL_STATE = {
  config: {},
  fetchHandler: noop
}

const grist = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UPDATE_GRIST_CONFIG:
      return {
        ...state,
        config: action.config
      }

    case UPDATE_GRIST_FETCH_HANDLER:
      return {
        ...state,
        fetchHandler: action.fetchHandler
      }

    default:
      return state
  }
}

export default grist
