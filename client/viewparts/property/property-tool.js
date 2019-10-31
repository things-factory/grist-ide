import { LitElement, html, css } from 'lit-element'
import { connect } from 'pwa-helpers/connect-mixin.js'
import { store } from '@things-factory/shell'

import '@material/mwc-icon'
import '../style/style-tool'
import '../../elements/property-editor'
import { UPDATE_GRIST_CURRENT_PROPERTIES } from '../../actions/grist-ide'

import { buildColumn } from '@things-factory/grist-ui/client/configure/column-builder'

export class GristPropertyTool extends connect(store)(LitElement) {
  static get styles() {
    return [
      css`
        :host {
          height: 100%;

          display: flex;
          flex-direction: column;
          min-width: 15vw;

          overflow: auto;
        }

        mwc-icon[active] {
          color: white;
          background-color: red;
        }

        [content] {
          flex: 1;
          width: 100%;

          margin: 0;
          padding: 0;

          border: 1px solid black;
          box-sizing: border-box;
        }

        [content] > * {
          display: none;

          width: 100%;
          height: 100%;

          overflow: hidden;
        }

        [content] > *[active] {
          display: block;
        }
      `
    ]
  }

  static get properties() {
    return {
      page: String,
      node: Object,
      spec: Object,
      properties: Object
    }
  }

  render() {
    var page = this.page || 'property-editor'

    return html`
      <div @click=${e => this.changePage(e)}>
        <mwc-icon data-page="property-editor" ?active=${page == 'property-editor'}>local_mall</mwc-icon>
        <mwc-icon data-page="style" ?active=${page == 'style'}>style</mwc-icon>
        <mwc-icon data-page="description" ?active=${page == 'description'}>description</mwc-icon>
        <mwc-icon data-page="edit" ?active=${page == 'edit'}>edit</mwc-icon>
      </div>

      <div content>
        <property-editor
          ?active=${page == 'property-editor'}
          .columns=${this.columns}
          .record=${this.properties}
          @change=${e => this.onChangeProperties(e)}
        ></property-editor>
        <grist-style-tool ?active=${page == 'style'}></grist-style-tool>
        <div ?active=${page == 'description'}>Description</div>
        <div ?active=${page == 'edit'}>Data Fetch Handler</div>
      </div>
    `
  }

  stateChanged(state) {
    this.node = state.grist.node
    this.spec = this.node && this.node.spec
    this.columns = this.spec && this.spec.map(column => buildColumn(column))
    this.properties = state.grist.properties
  }

  changePage(e) {
    var target = e.target
    var page = target.getAttribute('data-page')

    if (page) {
      this.page = page
    }
  }

  onChangeProperties(e) {
    var value = e.detail

    store.dispatch({
      type: UPDATE_GRIST_CURRENT_PROPERTIES,
      properties: value
    })
  }
}

customElements.define('grist-property-tool', GristPropertyTool)
