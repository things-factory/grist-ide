import { LitElement, html, css } from 'lit-element'
import '@material/mwc-icon'
import '../style/style-tool'
import '../../elements/property-editor'

export class GristPropertyTool extends LitElement {
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
      page: String
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
        <property-editor ?active=${page == 'property-editor'}></property-editor>
        <grist-style-tool ?active=${page == 'style'}></grist-style-tool>
        <div ?active=${page == 'description'}>Description</div>
        <div ?active=${page == 'edit'}>Data Fetch Handler</div>
      </div>
    `
  }

  changePage(e) {
    var target = e.target
    var page = target.getAttribute('data-page')

    if (page) {
      this.page = page
    }
  }
}

customElements.define('grist-property-tool', GristPropertyTool)
