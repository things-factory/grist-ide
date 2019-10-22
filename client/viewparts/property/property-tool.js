import { LitElement, html, css } from 'lit-element'
import '@material/mwc-icon'
import '../style/style-tool'

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

        [content] {
          flex: 1;
          width: 100%;

          margin: 0;
          padding: 0;

          border: 1px solid black;
          box-sizing: border-box;
        }
      `
    ]
  }

  static get properties() {
    return {}
  }

  render() {
    return html`
      <div>
        <mwc-icon>local_mall</mwc-icon>
        <mwc-icon>style</mwc-icon>
        <mwc-icon>description</mwc-icon>
        <mwc-icon>edit</mwc-icon>
      </div>

      <div content>
        <grist-style-tool></grist-style-tool>
      </div>
    `
  }
}

customElements.define('grist-property-tool', GristPropertyTool)
