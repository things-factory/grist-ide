import { NodeBase } from './node-base'

export class NodeSorters extends NodeBase {
  get type() {
    return 'sorters'
  }

  get name() {
    return 'sorters'
  }

  build() {
    var sorters = this.target

    this._children = sorters.map(sorter => NodeBase.buildNode('sorter', sorter))
  }
}

NodeBase.register('sorters', NodeSorters)
