import { NodeBase } from './node-base'

export class NodeSorter extends NodeBase {
  get type() {
    return 'sorter'
  }

  get name() {
    return this.target.name
  }
}

NodeBase.register('sorter', NodeSorter)
