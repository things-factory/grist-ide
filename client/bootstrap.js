import { html } from 'lit-html'

import './viewparts/config/config-tool'
import './viewparts/property/property-tool'
import './viewparts/data/data-tool'

import { store } from '@things-factory/shell'
import { TOOL_POSITION } from '@things-factory/layout-base'
import { appendViewpart, VIEWPART_POSITION } from '@things-factory/layout-base'
import { APPEND_APP_TOOL } from '@things-factory/apptool-base'

export default function bootstrap() {
  appendViewpart({
    name: 'config-tool',
    viewpart: {
      show: true,
      resizable: true,
      template: html`
        <grist-config-tool></grist-config-tool>
      `
    },
    position: VIEWPART_POSITION.NAVBAR
  })

  appendViewpart({
    name: 'property-tool',
    viewpart: {
      show: true,
      resizable: true,
      template: html`
        <grist-property-tool></grist-property-tool>
      `
    },
    position: VIEWPART_POSITION.ASIDEBAR
  })

  appendViewpart({
    name: 'data-tool',
    viewpart: {
      show: true,
      resizable: true,
      template: html`
        <grist-data-tool></grist-data-tool>
      `
    },
    position: VIEWPART_POSITION.FOOTERBAR
  })

  store.dispatch({
    type: APPEND_APP_TOOL,
    tool: {
      template: html`
        <a href="grist-ide-grid" style="color: inherit; text-decoration: none; display: flex;">
          <mwc-icon>view_column</mwc-icon>
        </a>
      `,
      position: TOOL_POSITION.REAR
    }
  })
  store.dispatch({
    type: APPEND_APP_TOOL,
    tool: {
      template: html`
        <a href="grist-ide-list" style="color: inherit; text-decoration: none; display: flex;">
          <mwc-icon>view_headline</mwc-icon>
        </a>
      `,
      position: TOOL_POSITION.REAR
    }
  })
  store.dispatch({
    type: APPEND_APP_TOOL,
    tool: {
      template: html`
        <a href="grist-ide-script" style="color: inherit; text-decoration: none; display: flex;">
          <mwc-icon>description</mwc-icon>
        </a>
      `,
      position: TOOL_POSITION.REAR
    }
  })
}
