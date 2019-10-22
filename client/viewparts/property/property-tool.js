import { LitElement, html, css } from 'lit-element'

export class GristPropertyTool extends LitElement {
  static get styles() {
    return []
  }

  static get properties() {
    return {}
  }

  render() {
    return html`
      PROPERTY TOOL
    `
  }
}

customElements.define('grist-property-tool', GristPropertyTool)
