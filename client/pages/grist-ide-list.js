import { html, css } from 'lit-element'
import { GristIdePage } from './grist-ide-abstract'

class GristIdeList extends GristIdePage {
  static get styles() {
    return [
      css`
        :host {
          display: flex;
          flex-direction: column;

          overflow: hidden;
        }

        data-grist {
          flex: 1;

          overflow-y: hidden;
        }
      `
    ]
  }

  static get properties() {
    return {
      config: Object,
      data: Object
    }
  }

  get grist() {
    return this.shadowRoot.querySelector('data-grist')
  }

  async pageInitialized() {
    super.pageInitialized()

    await this.updateComplete

    this.grist.fetch()
  }

  render() {
    return html`
      <data-grist mode="LIST" .config=${this.config} .fetchHandler=${this.fetchHandler}></data-grist>
    `
  }

  get context() {
    return {
      title: 'Grist IDE - list'
    }
  }
}

window.customElements.define('grist-ide-list', GristIdeList)
