import { LitElement, html, css } from 'lit-element'
import '@things-factory/grist-ui'

export class PropertyEditor extends LitElement {
  static get properties() {
    return {
      columns: Array,
      record: Object,
      rowIndex: Number
    }
  }

  static get styles() {
    return [
      css`
        :host {
          display: block;

          width: 100%;
          height: 100%;

          overflow: hidden;
        }

        record-view {
          width: 100%;
          height: 100%;
        }
      `
    ]
  }

  render() {
    return html`
      <record-view .columns=${this.columns} .record=${this.record} .rowIndex=${this.rowIndex}></record-view>
    `
  }
}

customElements.define('property-editor', PropertyEditor)
