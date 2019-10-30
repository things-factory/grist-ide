import { NodeBase } from './node-base'

export class NodeGrid extends NodeBase {
  get type() {
    return 'grid'
  }

  get name() {
    return 'grid'
  }
}

NodeBase.register('grid', NodeGrid)
