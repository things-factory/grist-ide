import { LitElement, html, css } from 'lit-element'

export class GristDataTool extends LitElement {
  static get styles() {
    return []
  }

  static get properties() {
    return {}
  }

  render() {
    return html`
      DATA TOOL
    `
  }
}

customElements.define('grist-data-tool', GristDataTool)
