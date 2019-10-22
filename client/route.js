export default function route(page) {
  switch (page) {
    case '':
      return '/grist-ide'

    case 'grist-ide':
      import('./pages/grist-ide')
      return page
  }
}
