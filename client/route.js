export default function route(page) {
  switch (page) {
    case '':
      return '/grist-ide-grid'

    case 'grist-ide-grid':
      import('./pages/grist-ide-grid')
      return page

    case 'grist-ide-list':
      import('./pages/grist-ide-list')
      return page

    case 'grist-ide-script':
      import('./pages/grist-ide-script')
      return page
  }
}
