import { html } from 'lit-html'

import './viewparts/config/config-tool'
import './viewparts/property/property-tool'
import './viewparts/data/data-tool'

import { appendViewpart, VIEWPART_POSITION } from '@things-factory/layout-base'

export default function bootstrap() {
  appendViewpart({
    name: 'config-tool',
    viewpart: {
      show: true,
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
      template: html`
        <grist-data-tool></grist-data-tool>
      `
    },
    position: VIEWPART_POSITION.FOOTERBAR
  })
}
