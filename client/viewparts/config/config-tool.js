import { LitElement, html, css, unsafeCSS } from 'lit-element'
import { connect } from 'pwa-helpers/connect-mixin.js'
import { store } from '@things-factory/shell'

import TreeStyle from '!!text-loader!./tree-style.css'
import { ContextMenu } from '../../elements/context-menu'
import { NodeBase } from '../../elements/nodes'
import { UPDATE_GRIST_CONFIG_CURRENT_NODE } from '../../actions/grist-ide'

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
      nodeTree: Array,
      node: Object
    }
  }

  updated(changes) {
    if (changes.has('config')) {
      this.nodeTree = NodeBase.buildNode('grist', this.config)
    }
  }

  stateChanged(state) {
    this.config = state.grist.config
    this.node = state.grist.node
  }

  renderNode(node) {
    return html`
      <li ?collapsed=${!node.isLeaf} data-type=${node.type} data-name=${node.name} .node=${node}>
        <a ?focus=${this.node === node}>${node.name}</a>
        ${node.isLeaf
          ? html``
          : html`
              <ul>
                ${(node.children || []).map(node => this.renderNode(node))}
              </ul>
            `}
      </li>
    `
  }

  render() {
    var tree = this.nodeTree || { children: [] }

    return html`
      <ul tree @click=${e => this.onClick(e)} @contextmenu=${e => this.onContextMenu(e)}>
        ${tree.children.map(node => this.renderNode(node))}
      </ul>
    `
  }

  onClick(e) {
    var target = e.target

    if (target.tagName == 'A') {
      target = target.parentElement

      target.toggleAttribute('collapsed')
    }

    while (target && !target.hasAttribute('data-type')) {
      target = target.parentElement
    }

    if (!target) {
      return
    }

    store.dispatch({
      type: UPDATE_GRIST_CONFIG_CURRENT_NODE,
      node: target.node
    })
  }

  onContextMenu(e) {
    var target = e.target

    while (target && !target.hasAttribute('data-type')) {
      target = target.parentElement
    }

    if (!target) {
      return
    }

    e.preventDefault()

    store.dispatch({
      type: UPDATE_GRIST_CONFIG_CURRENT_NODE,
      node: target.node
    })

    ContextMenu.show(target.node.contextMenu, e.pageX, e.pageY)
  }
}

customElements.define('grist-config-tool', GristConfigTool)
