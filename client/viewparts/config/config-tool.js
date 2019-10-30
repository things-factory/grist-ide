import { LitElement, html, css, unsafeCSS } from 'lit-element'
import { connect } from 'pwa-helpers/connect-mixin.js'
import { store } from '@things-factory/shell'

import TreeStyle from '!!text-loader!./tree-style.css'
import { ContextMenu } from '../../elements/context-menu'

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
      config: Object /* grist configuration */,
      node: Object
    }
  }

  stateChanged(state) {
    this.config = state.grist.config
    this.node = state.grist.node
  }

  renderSorters() {
    var sorters = this.config.sorters || []

    return sorters.map(
      sorter => html`
        <li><a data-type="sorter" data-name=${sorter.name}>${sorter.name}-${sorter.descending ? 'desc' : 'asc'}</a></li>
      `
    )
  }

  renderColumn(column) {
    var { name, type } =
      column.type !== 'gutter'
        ? {
            name: column.name,
            type: 'column'
          }
        : {
            name: column.gutterName,
            type: 'gutter'
          }

    return html`
      <li><a data-type=${type} data-name=${name}>${name}</a></li>
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

  render() {
    var { columns = [] } = this.config || {}

    return html`
      <ul tree @click=${e => this.onClick(e)} @contextmenu=${e => this.onContextMenu(e)}>
        <li collapsed>
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
          <ul>
            ${this.renderSorters()}
          </ul>
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

  onClick(e) {
    var target = e.target

    if (target.tagName == 'A') {
      target = target.parentElement

      target.toggleAttribute('collapsed')
    }
  }

  onContextMenu(e) {
    e.preventDefault()

    ContextMenu.show(null, e.pageX, e.pageY)
  }
}

customElements.define('grist-config-tool', GristConfigTool)
