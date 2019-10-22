import { html } from 'lit-element'
import { connect } from 'pwa-helpers/connect-mixin.js'
import { store, PageView } from '@things-factory/shell'

class GristIde extends connect(store)(PageView) {
  static get styles() {
    return []
  }

  static get properties() {
    return {}
  }

  get context() {
    return {
      title: 'Grist IDE'
    }
  }

  render() {
    return html`
      I'm grist IDE.
    `
  }

  stateChanged(state) {}
}

window.customElements.define('grist-ide', GristIde)
