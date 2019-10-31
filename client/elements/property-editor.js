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
          display: flex;
        }

        record-view-body {
          flex: 1;
          width: 100%;

          margin: 0;
          padding: 0;
        }
      `
    ]
  }

  render() {
    return html`
      <record-view-body
        .columns=${this.columns}
        .record=${this.record}
        .rowIndex=${this.rowIndex}
        @field-change=${e => this.onFieldChange(e)}
      ></record-view-body>
    `
  }

  onFieldChange(e) {
    var { before, after, column } = e.detail
    var value = {
      ...this.record,
      [column.name]: after
    }

    this.dispatchEvent(
      new CustomEvent('change', {
        detail: value
      })
    )
  }

  // onOK(e) {
  //   var value = e.detail

  //   this.dispatchEvent(
  //     new CustomEvent('change', {
  //       detail: value
  //     })
  //   )
  // }

  // onReset(e) {}

  // onCancel(e) {}
}

customElements.define('property-editor', PropertyEditor)
