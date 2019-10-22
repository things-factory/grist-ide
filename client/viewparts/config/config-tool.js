import { LitElement, html, css } from 'lit-element'

export class GristConfigTool extends LitElement {
  static get styles() {
    return [css``]
  }

  static get properties() {
    return {}
  }

  render() {
    return html`
      CONFIG TOOL
    `
  }
}

customElements.define('grist-config-tool', GristConfigTool)
