import { NodeBase } from './node-base'

export class NodePagination extends NodeBase {
  get type() {
    return 'pagination'
  }

  get name() {
    return 'pagination'
  }
}

NodeBase.register('pagination', NodePagination)
