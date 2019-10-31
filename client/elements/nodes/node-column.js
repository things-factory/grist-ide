import { NodeBase } from './node-base'
import { getRenderers } from '@things-factory/grist-ui'

export class NodeColumn extends NodeBase {
  get type() {
    return this.target.type == 'gutter' ? 'gutter' : 'column'
  }

  get name() {
    return this.target.type == 'gutter' ? this.target.gutterName : this.target.name
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
        type: 'select',
        name: 'type',
        header: 'type',
        record: {
          editable: true,
          align: 'center',
          options: Object.keys(getRenderers())
        }
      },
      {
        type: 'string',
        name: this.type == 'gutter' ? 'gutterName' : 'name',
        header: this.type == 'gutter' ? 'gutter name' : 'name',
        record: {
          editable: true,
          align: 'left'
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
      },
      {
        type: 'boolean',
        name: 'hidden',
        header: 'hidden',
        record: {
          editable: true,
          align: 'center'
        }
      },
      {
        type: 'boolean',
        name: 'sortable',
        header: 'sortable',
        record: {
          editable: true,
          align: 'center'
        }
      },
      {
        type: 'integer',
        name: 'width',
        header: 'width',
        record: {
          editable: true,
          align: 'right'
        }
      },
      {
        type: 'function',
        name: 'validation',
        header: 'validation',
        record: {
          editable: true,
          align: 'right'
        }
      }
    ]
  }
}

NodeBase.register('column', NodeColumn)
