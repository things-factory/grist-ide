import { NodeBase } from './node-base'

export class NodeRows extends NodeBase {
  get type() {
    return 'rows'
  }

  get name() {
    return 'rows'
  }
}

NodeBase.register('rows', NodeRows)
