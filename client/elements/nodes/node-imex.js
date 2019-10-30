import { NodeBase } from './node-base'

export class NodeImex extends NodeBase {
  get type() {
    return 'imex'
  }

  get name() {
    return 'imex'
  }
}

NodeBase.register('imex', NodeImex)
