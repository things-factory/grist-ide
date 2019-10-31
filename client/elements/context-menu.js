import { LitElement, html, css } from 'lit-element'

import '@material/mwc-icon'

export class ContextMenu extends LitElement {
  static get styles() {
    return [
      css`
        :host {
          position: fixed;
        }

        ul {
          position: absolute;
          padding: 2px;
          margin: 0;
          border: 1px solid #bbb;
          background: #eee;
          background: -webkit-linear-gradient(to bottom, #fff 0%, #e5e5e5 100px, #e5e5e5 100%);
          background: linear-gradient(to bottom, #fff 0%, #e5e5e5 100px, #e5e5e5 100%);
          z-index: 100;
          border-radius: 3px;
          box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.2);
          opacity: 0;
          -webkit-transform: translate(0, 15px) scale(0.95);
          transform: translate(0, 15px) scale(0.95);
          transition: transform 0.1s ease-out, opacity 0.1s ease-out;
          pointer-events: auto;
        }

        [menu] {
          opacity: 1;
        }

        li {
          display: block;
          position: relative;
          margin: 0;
          padding: 0;
          white-space: nowrap;
        }

        button {
          background: none;
          line-height: normal;
          overflow: visible;
          -webkit-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
          display: block;
          width: 100%;
          color: #444;
          font-family: 'Roboto', sans-serif;
          font-size: 13px;
          text-align: left;
          cursor: pointer;
          border: 1px solid transparent;
          white-space: nowrap;
          padding: 6px 8px;
          border-radius: 3px;
        }
        button::-moz-focus-inner,
        button::-moz-focus-inner {
          border: 0;
          padding: 0;
        }

        span {
          margin-left: 25px;
        }

        mwc-icon {
          position: absolute;
          left: 8px;
          top: 50%;
          -webkit-transform: translateY(-50%);
          transform: translateY(-50%);
        }

        li:hover > button {
          color: #fff;
          outline: none;
          background-color: #2e3940;
          background: -webkit-linear-gradient(to bottom, #5d6d79, #2e3940);
          background: linear-gradient(to bottom, #5d6d79, #2e3940);
          border: 1px solid #2e3940;
        }

        li[disabled] {
          opacity: 0.5;
          pointer-events: none;
        }

        li[disabled] button {
          cursor: default;
        }

        [separator] {
          display: block;
          margin: 7px 5px;
          height: 1px;
          border-bottom: 1px solid #fff;
          background-color: #aaa;
        }

        li[submenu]::after {
          content: '';
          position: absolute;
          right: 6px;
          top: 50%;
          -webkit-transform: translateY(-50%);
          transform: translateY(-50%);
          border: 5px solid transparent;
          border-left-color: #808080;
        }

        li[submenu]:hover::after {
          border-left-color: #fff;
        }

        [menu] ul {
          top: 4px;
          left: 99%;
        }

        li:hover > ul {
          opacity: 1;
          -webkit-transform: translate(0, 0) scale(1);
          transform: translate(0, 0) scale(1);
          pointer-events: auto;
          -webkit-transition-delay: 100ms;
          transition-delay: 300ms;
        }
      `
    ]
  }

  static get properties() {
    return {
      menus: Object
    }
  }

  static show(menus, x, y) {
    var menu = document.createElement('context-menu')
    menu.menus = menus

    document.body.appendChild(menu)

    menu.style.left = x + 'px'
    menu.style.top = y + 'px'
  }

  static hide(menu) {
    requestAnimationFrame(() => {
      if (menu.parentElement) {
        document.body.removeChild(menu)
      }
    })
  }

  onClick(e) {
    ContextMenu.hide(this)
  }

  onFocusOut(e) {
    ContextMenu.hide(this)
  }

  renderMenu(menu) {
    if (menu == '--') {
      return html`
        <li separator></li>
      `
    }

    var submenu = menu.menus && menu.menus instanceof Array

    return html`
      <li ?submenu=${submenu} ?disabled=${menu.disabled}>
        <button type="button">
          ${!menu.icon
            ? html``
            : html`
          <mwc-icon>${menu.icon}</mex-icon>`}

          <span>${menu.label}</span>
        </button>

        ${!submenu
          ? html``
          : html`
              <ul>
                ${menu.menus.map(submenu => this.renderMenu(submenu))}
              </ul>
            `}
      </li>
    `
  }

  connectedCallback() {
    super.connectedCallback()

    this.setAttribute('tabindex', 0)

    this.focus()

    this.addEventListener('focusout', this.onFocusOut)
  }

  render() {
    var menus = this.menus || []

    return html`
      <ul menu @click=${e => this.onClick(e)}>
        ${menus.map(menu => this.renderMenu(menu))}
      </ul>
    `
  }
}

customElements.define('context-menu', ContextMenu)
