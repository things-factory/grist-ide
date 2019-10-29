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

          overflow: auto;
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

  render() {
    return html`
      <ul tree>
        <li><a>Parent 1</a></li>
        <li><a>Parent 2</a></li>
        <li>
          <a>Parent 3</a>
          <ul>
            <li>
              <a>1st Child of 3</a>
              <ul>
                <li><a>1st grandchild</a></li>
                <li>
                  <a>2nd grandchild</a>
                  <ul>
                    <li><a>1st grand-grandchild</a></li>
                    <li><a>2nd grand-grandchild</a></li>
                  </ul>
                </li>
              </ul>
            </li>
            <li><a>2nd Child of 3</a></li>
            <li><a>3rd Child of 3</a></li>
          </ul>
        </li>
        <li>
          <a>Parent 4</a>
          <ul>
            <li><a>Parent 4's only child</a></li>
          </ul>
        </li>
      </ul>
    `
  }
}

customElements.define('grist-config-tool', GristConfigTool)
