import route from './client/route'
import bootstrap from './client/bootstrap'

export default {
  route,
  routes: [
    {
      tagname: 'grist-ide-grid',
      page: 'grist-ide-grid'
    },
    {
      tagname: 'grist-ide-list',
      page: 'grist-ide-list'
    },
    {
      tagname: 'grist-ide-script',
      page: 'grist-ide-script'
    }
  ],
  bootstrap
}
