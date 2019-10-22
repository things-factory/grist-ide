import { LitElement, html, css } from 'lit-element'

export class GristStyleTool extends LitElement {
  static get styles() {
    return []
  }

  static get properties() {
    return {}
  }

  render() {
    return html`
      STYLES...
    `
  }
}

customElements.define('grist-style-tool', GristStyleTool)
