import { html, css } from 'lit-element'

import { GristIdePage } from './grist-ide-abstract'

class GristIdeGrid extends GristIdePage {
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
      <data-grist mode="GRID" .config=${this.config} .fetchHandler=${this.fetchHandler}></data-grist>
    `
  }

  get context() {
    return {
      title: 'Grist IDE - grid'
    }
  }
}

window.customElements.define('grist-ide-grid', GristIdeGrid)
