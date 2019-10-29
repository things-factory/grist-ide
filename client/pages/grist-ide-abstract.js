import { connect } from 'pwa-helpers/connect-mixin.js'
import { store, PageView } from '@things-factory/shell'

export class GristIdePage extends connect(store)(PageView) {
  static get properties() {
    return {
      config: Object,
      fetchHandler: Object,
      data: Object
    }
  }

  pageInitialized() {
    this.page = 1
    this.limit = 20
  }

  stateChanged(state) {
    this.config = state.grist.config
    this.fetchHandler = state.grist.fetchHandler
  }
}
