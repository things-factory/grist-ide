import { html, css } from 'lit-element'
import { GristIde } from './grist-ide'

class GristIdeScript extends GristIde {
  static get styles() {
    return [
      css`
        :host {
          width: 100%;
          overflow: auto;
        }
      `
    ]
  }

  render() {
    return html`
      <pre>${JSON.stringify(this.config, null, 2)}</pre>
    `
  }

  get context() {
    return {
      title: 'Grist IDE - script'
    }
  }
}

window.customElements.define('grist-ide-script', GristIdeScript)
