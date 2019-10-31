import { NodeBase } from './node-base'
import { getGutters } from '@things-factory/grist-ui'

export class NodeGutter extends NodeBase {
  get type() {
    return 'gutter'
  }

  get name() {
    return this.target.gutterName
  }

  get contextMenu() {
    return [
      {
        label: 'Add Below'
      },
      {
        label: 'Add Above'
      },
      {
        label: 'Delete'
      }
    ]
  }

  get spec() {
    return [
      {
        type: 'string',
        name: 'type',
        header: 'type',
        record: {
          align: 'center'
        }
      },
      {
        type: 'select',
        name: 'gutterName',
        header: 'gutter name',
        record: {
          editable: true,
          align: 'left',
          options: Object.keys(getGutters())
        }
      },
      {
        type: 'string',
        name: 'header',
        header: 'header',
        record: {
          editable: true,
          align: 'left'
        }
      }
    ]
  }
}

NodeBase.register('gutter', NodeGutter)
