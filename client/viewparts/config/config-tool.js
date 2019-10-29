import { LitElement, html, css, unsafeCSS } from 'lit-element'
import { connect } from 'pwa-helpers/connect-mixin.js'
import { store } from '@things-factory/shell'

import TreeStyle from '!!text-loader!./tree-style.css'

export class GristConfigTool extends connect(store)(LitElement) {
  static get styles() {
    return [
      css`
        ${unsafeCSS(TreeStyle)}
      `,
      css`
        :host {
          height: 100%;

          display: block;
          width: 20vw;
        }

        [tree] {
          margin: 15px;
          padding: 0;

          list-style: none;
        }
      `
    ]
  }

  static get properties() {
    return {
      config: Object /* grist configuration */
    }
  }

  stateChanged(state) {
    this.config = state.grist && state.grist.config
  }

  renderSorters() {
    var sorters = this.config.sorters || []

    return sorters.map(
      sorter => html`
        <li><a>${sorter.name}-${sorter.descending ? 'desc' : 'asc'}</a></li>
      `
    )
  }

  renderColumn(column) {
    return html`
      <li><a>${column.type == 'gutter' ? column.gutterName : column.name}</a></li>
    `
  }

  renderList() {
    var { fields = [] } = this.config.list || {}

    return fields.map(
      field => html`
        <li><a>${field}</a></li>
      `
    )
  }

  // appendable,
  // insertable,
  // selectable,
  // handlers: {
  //   click: getHandler(click),
  //   dblclick: getHandler(dblclick)
  // }

  render() {
    var { columns = [] } = this.config || {}

    return html`
      <ul tree>
        <li>
          <a>columns</a>
          <ul>
            ${columns.map(column => this.renderColumn(column))}
          </ul>
        </li>
        <li>
          <a>rows</a>
        </li>
        <li>
          <a>sorters</a>
          ${this.renderSorters()}
        </li>
        <li>
          <a>pagination</a>
        </li>
        <li>
          <a>list</a>
        </li>
        <li>
          <a>grid</a>
        </li>
        <li><a>imex</a></li>
      </ul>
    `
  }
}

customElements.define('grist-config-tool', GristConfigTool)
