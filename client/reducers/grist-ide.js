import {
  UPDATE_GRIST_CONFIG,
  UPDATE_GRIST_FETCH_HANDLER,
  UPDATE_GRIST_CONFIG_CURRENT_NODE
} from '../actions/grist-ide.js'

const noop = () => {}

const INITIAL_STATE = {
  config: {},
  fetchHandler: noop,
  node: {}
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

    case UPDATE_GRIST_CONFIG_CURRENT_NODE:
      return {
        ...state,
        node: action.node
      }

    default:
      return state
  }
}

export default grist
