import { NodeBase } from './node-base'

export class NodeColumns extends NodeBase {
  get type() {
    return 'columns'
  }

  get name() {
    return 'columns'
  }

  build() {
    var columns = this.target

    this._children = columns.map(column => NodeBase.buildNode('column', column))
  }
}

NodeBase.register('columns', NodeColumns)
