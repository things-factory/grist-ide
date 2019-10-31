import { NodeBase } from './node-base'

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
}

NodeBase.register('column', NodeColumn)
