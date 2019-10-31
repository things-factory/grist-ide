import {
  UPDATE_GRIST_CONFIG,
  UPDATE_GRIST_FETCH_HANDLER,
  UPDATE_GRIST_CURRENT_NODE,
  UPDATE_GRIST_CURRENT_PROPERTIES
} from '../actions/grist-ide.js'

const noop = () => {}

const INITIAL_STATE = {
  config: {},
  fetchHandler: noop,
  node: {},
  properties: {}
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

    case UPDATE_GRIST_CURRENT_NODE:
      return {
        ...state,
        node: action.node,
        properties: action.node.target
      }

    case UPDATE_GRIST_CURRENT_PROPERTIES:
      if (state.node) {
        /* 변경된 속성을 현재 노드에 적용한다. */
        state.node.target = action.properties
      }

      return {
        ...state,
        properties: action.properties
      }

    default:
      return state
  }
}

export default grist
